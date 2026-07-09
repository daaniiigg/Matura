/* ============================================================
   LA SECRETARÍA (backend) — Este programa NO corre en el
   navegador: corre aparte, en el ordenador. Hace dos trabajos:

   1. CAMARERO: cuando un navegador pide la página, se la sirve.
   2. SECRETARÍA: guarda el expediente de CADA alumno en un
      archivo central (progreso.json = el archivador).

   Así el progreso ya no vive en el pupitre (navegador),
   sino en un sitio central que todos los navegadores consultan.
   ============================================================ */

const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { Resend } = require("resend");

const PUERTO = process.env.PORT || 4173;
const ARCHIVADOR = path.join(__dirname, "progreso.json");
const FICHERO_USUARIOS = path.join(__dirname, "usuarios.json");

/* Códigos de verificación en memoria — desaparecen al reiniciar,
   que es lo correcto: un código caducado no debería sobrevivir */
const CODIGOS = {};

function limpiarCaducados() {
  const ahora = Date.now();
  for (const email of Object.keys(CODIGOS)) {
    if (CODIGOS[email].expira < ahora) delete CODIGOS[email];
  }
}

// El cliente de Resend se crea al enviar el primer email, no al arrancar
function getResend() {
  if (!process.env.RESEND_API_KEY) throw new Error("Falta la variable RESEND_API_KEY en el servidor.");
  return new Resend(process.env.RESEND_API_KEY);
}

/* ---------- El archivador de expedientes ---------- */

function leerExpedientes() {
  try {
    return JSON.parse(fs.readFileSync(ARCHIVADOR, "utf8"));
  } catch {
    return {};
  }
}

function guardarExpedientes(expedientes) {
  fs.writeFileSync(ARCHIVADOR, JSON.stringify(expedientes, null, 2));
}

/* ---------- El fichero de usuarios (nombre + contraseña cifrada) ----------
   Nunca guardamos la contraseña en texto plano.
   Guardamos una "huella digital" (hash) que no se puede revertir. */

function leerUsuarios() {
  try {
    return JSON.parse(fs.readFileSync(FICHERO_USUARIOS, "utf8"));
  } catch {
    return {};
  }
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync(FICHERO_USUARIOS, JSON.stringify(usuarios, null, 2));
}

function hashContrasena(contrasena, sal) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(contrasena, sal, 64, (err, hash) => {
      if (err) reject(err);
      else resolve(hash.toString("hex"));
    });
  });
}

/* ---------- Tipos de archivo que sabemos servir ---------- */

const TIPOS = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".md": "text/markdown",
};

/* ---------- El servidor: atiende cada petición que llega ---------- */

const servidor = http.createServer((peticion, respuesta) => {
  const url = peticion.url.split("?")[0];

  /* --- VENTANILLA DE LA SECRETARÍA (la API) ---
     El navegador habla con esta ventanilla en dos casos:
     GET  /api/progreso/daniel  → "dame el expediente de daniel"
     POST /api/progreso/daniel  → "apunta esto en el expediente de daniel" */

  /* --- ENVIAR CÓDIGO: paso 1 del registro ---
     POST /api/enviar-codigo  body: { nombre, email, contrasena } */
  if (url === "/api/enviar-codigo" && peticion.method === "POST") {
    let cuerpo = "";
    peticion.on("data", (t) => (cuerpo += t));
    peticion.on("end", async () => {
      try {
        const { nombre, email, contrasena } = JSON.parse(cuerpo);
        if (!nombre || !email || !contrasena) {
          respuesta.writeHead(400, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Faltan datos" }));
        }
        const clave = nombre.trim().toLowerCase();
        const emailNorm = email.trim().toLowerCase();
        const usuarios = leerUsuarios();

        if (usuarios[clave]) {
          respuesta.writeHead(409, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Ese nombre ya está en uso. Elige otro o entra con el tuyo." }));
        }
        if (Object.values(usuarios).some((u) => u.email === emailNorm)) {
          respuesta.writeHead(409, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Ese correo ya está registrado." }));
        }

        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        const sal = crypto.randomBytes(16).toString("hex");
        const hash = await hashContrasena(contrasena, sal);

        limpiarCaducados();
        CODIGOS[emailNorm] = {
          codigo, nombre: clave, sal, hash,
          expira: Date.now() + 10 * 60 * 1000,
        };

        const { data, error: resendError } = await getResend().emails.send({
          from: "Academia de Gemelos Digitales <onboarding@resend.dev>",
          to: email,
          subject: "Tu código de verificación",
          html: `
            <div style="font-family:sans-serif;max-width:500px;margin:0 auto;background:#0d0d0d;color:#f0f0f0;padding:32px;border-radius:12px">
              <h2 style="margin-bottom:8px">Hola, ${nombre} 👋</h2>
              <p style="color:#888">Tu código de verificación para la Academia de Gemelos Digitales es:</p>
              <div style="font-size:2.5rem;font-weight:bold;letter-spacing:12px;text-align:center;
                          padding:24px;background:#1a1a1a;border-radius:8px;margin:24px 0;border:1px solid #272727">${codigo}</div>
              <p style="color:#888">Este código caduca en <strong style="color:#f0f0f0">10 minutos</strong>.</p>
              <p style="color:#555;font-size:.82rem">Si no has solicitado este código, ignora este mensaje.</p>
            </div>`,
        });

        if (resendError) {
          console.error("Error de Resend:", JSON.stringify(resendError));
          respuesta.writeHead(500, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "No se pudo enviar el email: " + (resendError.message || JSON.stringify(resendError)) }));
        }

        console.log("Email enviado correctamente:", data?.id);
        respuesta.writeHead(200, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ ok: true }));
      } catch (e) {
        console.error(e);
        respuesta.writeHead(500, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ error: "No se pudo enviar el email. Comprueba la dirección e inténtalo de nuevo." }));
      }
    });
    return;
  }

  /* --- LOGIN CON GOOGLE ---
     POST /api/google-login  body: { credential } */
  if (url === "/api/google-login" && peticion.method === "POST") {
    let cuerpo = "";
    peticion.on("data", (t) => (cuerpo += t));
    peticion.on("end", async () => {
      try {
        const { credential } = JSON.parse(cuerpo);
        const GOOGLE_CLIENT_ID = "681227298388-s9b2l8khn07bivbfvvqukasfu91cc6rl.apps.googleusercontent.com";

        const verRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
        const token = await verRes.json();

        if (token.error || token.aud !== GOOGLE_CLIENT_ID) {
          respuesta.writeHead(401, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Token de Google no válido." }));
        }

        const email = token.email.toLowerCase();
        const usuarios = leerUsuarios();

        // Buscar si este email de Google ya tiene cuenta
        let nombreClave = Object.keys(usuarios).find(
          (k) => usuarios[k].email === email && usuarios[k].google
        );

        if (!nombreClave) {
          // Crear cuenta nueva con el nombre de Google
          let base = (token.given_name || email.split("@")[0])
            .toLowerCase().replace(/[^a-z0-9]/g, "");
          nombreClave = base;
          let i = 2;
          while (usuarios[nombreClave]) nombreClave = base + i++;
          usuarios[nombreClave] = { google: true, email };
          guardarUsuarios(usuarios);
        }

        respuesta.writeHead(200, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ ok: true, nombre: nombreClave }));
      } catch (e) {
        console.error("Error en google-login:", e);
        respuesta.writeHead(500, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ error: "Error al verificar con Google." }));
      }
    });
    return;
  }

  /* --- VERIFICAR CÓDIGO: paso 2 del registro ---
     POST /api/verificar-codigo  body: { email, codigo } */
  if (url === "/api/verificar-codigo" && peticion.method === "POST") {
    let cuerpo = "";
    peticion.on("data", (t) => (cuerpo += t));
    peticion.on("end", async () => {
      try {
        const { email, codigo } = JSON.parse(cuerpo);
        const emailNorm = email.trim().toLowerCase();
        limpiarCaducados();
        const pendiente = CODIGOS[emailNorm];

        if (!pendiente || pendiente.codigo !== codigo.trim()) {
          respuesta.writeHead(401, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Código incorrecto o caducado. Pide uno nuevo." }));
        }

        const usuarios = leerUsuarios();
        usuarios[pendiente.nombre] = {
          sal: pendiente.sal,
          hash: pendiente.hash,
          email: emailNorm,
        };
        guardarUsuarios(usuarios);
        delete CODIGOS[emailNorm];

        respuesta.writeHead(200, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ ok: true }));
      } catch {
        respuesta.writeHead(500, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ error: "Error interno del servidor" }));
      }
    });
    return;
  }

  /* --- LOGIN: verificar credenciales ---
     POST /api/login  body: { nombre, contrasena } */
  if (url === "/api/login" && peticion.method === "POST") {
    let cuerpo = "";
    peticion.on("data", (t) => (cuerpo += t));
    peticion.on("end", async () => {
      try {
        const { nombre, contrasena } = JSON.parse(cuerpo);
        const usuarios = leerUsuarios();
        const clave = nombre.trim().toLowerCase();
        const usuario = usuarios[clave];
        if (!usuario) {
          respuesta.writeHead(401, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Nombre o contraseña incorrectos." }));
        }
        const hash = await hashContrasena(contrasena, usuario.sal);
        if (hash !== usuario.hash) {
          respuesta.writeHead(401, { "Content-Type": "application/json" });
          return respuesta.end(JSON.stringify({ error: "Nombre o contraseña incorrectos." }));
        }
        respuesta.writeHead(200, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ ok: true }));
      } catch {
        respuesta.writeHead(500, { "Content-Type": "application/json" });
        respuesta.end(JSON.stringify({ error: "Error interno del servidor" }));
      }
    });
    return;
  }

  /* --- RANKING ---
     GET /api/ranking → lista ordenada de alumnos con su progreso */
  if (url.startsWith("/api/ranking") && peticion.method === "GET") {
    try {
      const curso = new URL("http://x" + peticion.url).searchParams.get("curso") || "gemelos";
      const expedientes = leerExpedientes();
      const usuarios = leerUsuarios();

      const ranking = Object.entries(expedientes).map(([nombre, todosLosCursos]) => {
        // Soporte formato nuevo { cursoId: { modId: {...} } } y antiguo { modId: {...} }
        const progreso = todosLosCursos[curso] || (typeof todosLosCursos === "object" && !todosLosCursos[curso] ? {} : todosLosCursos);
        const notas = Object.values(progreso).filter((p) => p && p.nota !== undefined);
        const completados = notas.length;
        const media = completados > 0
          ? Math.round(notas.reduce((s, p) => s + (p.nota / p.total), 0) / completados * 100)
          : 0;
        return { nombre, completados, media };
      }).filter((r) => r.completados > 0);

      ranking.sort((a, b) => b.completados - a.completados || b.media - a.media);

      respuesta.writeHead(200, { "Content-Type": "application/json" });
      respuesta.end(JSON.stringify({ ranking, total: Object.keys(usuarios).length }));
    } catch (e) {
      console.error(e);
      respuesta.writeHead(500, { "Content-Type": "application/json" });
      respuesta.end(JSON.stringify({ error: "Error al cargar el ranking" }));
    }
    return;
  }

  if (url.startsWith("/api/progreso/")) {
    const alumno = decodeURIComponent(url.split("/")[3] || "").trim().toLowerCase();

    if (!alumno) {
      respuesta.writeHead(400, { "Content-Type": "application/json" });
      return respuesta.end('{"error":"Falta el nombre del alumno"}');
    }

    if (peticion.method === "GET") {
      const expedientes = leerExpedientes();
      respuesta.writeHead(200, { "Content-Type": "application/json" });
      return respuesta.end(JSON.stringify(expedientes[alumno] || {}));
    }

    if (peticion.method === "POST") {
      let cuerpo = "";
      peticion.on("data", (trozo) => (cuerpo += trozo));
      peticion.on("end", () => {
        try {
          const expedientes = leerExpedientes();
          expedientes[alumno] = JSON.parse(cuerpo);
          guardarExpedientes(expedientes);
          respuesta.writeHead(200, { "Content-Type": "application/json" });
          respuesta.end('{"ok":true}');
        } catch {
          respuesta.writeHead(400, { "Content-Type": "application/json" });
          respuesta.end('{"error":"Datos no válidos"}');
        }
      });
      return;
    }
  }

  /* --- EL CAMARERO (archivos estáticos) ---
     Cualquier otra petición es "tráeme la página" o
     "tráeme los estilos": le servimos el archivo pedido. */

  let ruta = url === "/" ? "/index.html" : url;
  const archivo = path.join(__dirname, path.normalize(ruta));

  // Seguridad: nunca servir archivos fuera de la carpeta del proyecto
  if (!archivo.startsWith(__dirname)) {
    respuesta.writeHead(403);
    return respuesta.end("Prohibido");
  }

  fs.readFile(archivo, (error, datos) => {
    if (error) {
      respuesta.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return respuesta.end("Archivo no encontrado");
    }
    const tipo = TIPOS[path.extname(archivo)] || "application/octet-stream";
    respuesta.writeHead(200, { "Content-Type": tipo + "; charset=utf-8" });
    respuesta.end(datos);
  });
});

servidor.listen(PUERTO, () => {
  console.log(`🏫 Secretaría abierta en http://localhost:${PUERTO}`);
  console.log(`📋 Los expedientes se guardan en: ${ARCHIVADOR}`);
  console.log(`📧 RESEND_API_KEY cargada: ${process.env.RESEND_API_KEY ? "SÍ ✅" : "NO ❌"}`);
});
