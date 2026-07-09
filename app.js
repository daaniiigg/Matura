/* ============================================================
   EL "PROFESOR" — La lógica de la plataforma.
   Decide qué pantalla mostrar, corrige los quizzes,
   habla con la secretaría (backend) y ahora habla 3 idiomas.
   ============================================================ */

const app = document.getElementById("app");

/* ---------- IDIOMAS (i18n) ----------
   Todos los textos de la interfaz viven en este "libro de
   frases". El código pide una frase por su clave, y el libro
   la devuelve en el idioma elegido. Añadir un idioma nuevo
   = añadir una página al libro, sin tocar la lógica. */

let IDIOMA = localStorage.getItem("lms-idioma") || "es";

const TEXTOS = {
  es: {
    navModulos: "Módulos",
    navGlosario: "Glosario",
    navProgreso: "Mi progreso",
    salir: "salir",
    footer: "Plataforma creada por Daniel · Tailor Hub · Basada en investigación con 29 fuentes académicas",
    heroTitulo: "Aprende sobre Gemelos Digitales",
    heroSub: "8 módulos basados en una investigación con 29 fuentes académicas e industriales. Lee cada lección, estudia su vocabulario y demuestra lo aprendido en el quiz.",
    progresoGlobal: "{n} de {t} módulos completados ({p}%)",
    modulo: "Módulo",
    minLectura: "min de lectura",
    preguntasQuiz: "preguntas de quiz",
    pendiente: "Pendiente",
    completado: "✔ Completado",
    objetivos: "🎯 Objetivos de aprendizaje",
    vocabTitulo: "📗 Ficha de vocabulario — los tecnicismos de este módulo, en fácil",
    hacerQuiz: "Hacer el quiz del módulo →",
    volverModulos: "← Volver a los módulos",
    quizDe: "Quiz",
    quizInstr: "{n} preguntas. Elige una respuesta en cada una y pulsa \"Corregir\". El orden cambia en cada intento.",
    corregir: "Corregir quiz",
    repasarLeccion: "← Repasar la lección",
    sinResponder: "Te quedan {n} pregunta(s) sin responder. Complétalas antes de corregir.",
    msgPerfecto: "🎉 ¡Perfecto! Dominas este módulo.",
    msgBien: "👍 Buen trabajo. Repasa abajo lo que fallaste.",
    msgMal: "💪 No pasa nada — repasa los fallos y vuelve a intentarlo.",
    repasoTitulo: "📖 Repaso de lo fallado",
    tuRespuesta: "✘ Tu respuesta:",
    respuestaCorrecta: "✔ Correcta:",
    volverInicio: "Volver a los módulos",
    reintentar: "Reintentar quiz",
    expedienteDe: "Expediente de {u}",
    mejorNota: "Mejor nota: {n}/{t} · Completado el {f}",
    sinCompletar: "Aún sin completar",
    borrarBtn: "🗑 Borrar todo mi progreso",
    confirmarBorrar: "¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.",
    glosarioTitulo: "Glosario de términos",
    glosarioSub: "Los 20 tecnicismos de la base de conocimiento, explicados de forma clara.",
    buscar: "🔍 Busca un término...",
    noCoincide: 'No hay términos que coincidan con "{q}".',
    loginTituloEntrar: "Bienvenido de nuevo",
    loginTituloNuevo: "Crea tu cuenta",
    loginSubEntrar: "Escribe tu nombre y contraseña para recuperar tu expediente.",
    loginSubNuevo: "Elige un nombre y una contraseña. Mínimo 8 caracteres y al menos un carácter especial (!@#$%...).",
    loginPlaceholder: "Tu nombre...",
    contraPlaceholder: "Tu contraseña...",
    confirmarPlaceholder: "Confirma tu contraseña...",
    entrar: "Entrar →",
    registrar: "Crear cuenta →",
    yaIengoCuenta: "¿Ya tienes cuenta? Entra aquí",
    soyCuentaNueva: "¿Eres nuevo? Crea una cuenta",
    errorNombreVacio: "Escribe tu nombre para entrar.",
    errorContrasenaVacia: "Escribe tu contraseña.",
    errorContrasenaCorta: "La contraseña debe tener al menos 8 caracteres.",
    errorContrasenaEspecial: "La contraseña debe incluir al menos un carácter especial (!@#$%...).",
    errorContrasenasNoCoinciden: "Las contraseñas no coinciden.",
    errorCredenciales: "Nombre o contraseña incorrectos.",
    errorUsuarioExiste: "Ese nombre ya está en uso. Elige otro o entra con el tuyo.",
    errorServidor: "Error al conectar con la secretaría. ¿Está el servidor activo?",
    emailPlaceholder: "Tu correo electrónico...",
    enviarCodigo: "Enviar código de verificación →",
    verificacionTitulo: "Revisa tu correo",
    verificacionSub: "Hemos enviado un código de 6 dígitos a {email}. Tienes 10 minutos para introducirlo.",
    codigoPlaceholder: "Código de 6 dígitos...",
    verificar: "Verificar →",
    reenviarCodigo: "Reenviar código",
    errorEmailInvalido: "Introduce un correo electrónico válido.",
    errorEmailEnUso: "Ese correo ya está registrado.",
    errorCodigoIncorrecto: "Código incorrecto o caducado. Pide uno nuevo.",
    continueGoogle: "Continuar con Google",
    oSeparador: "o",
  },
  en: {
    navModulos: "Modules",
    navGlosario: "Glossary",
    navProgreso: "My progress",
    salir: "log out",
    footer: "Platform created by Daniel · Tailor Hub · Based on research with 29 academic sources",
    heroTitulo: "Learn about Digital Twins",
    heroSub: "8 modules based on research with 29 academic and industry sources. Read each lesson, study its vocabulary and prove what you learned in the quiz.",
    progresoGlobal: "{n} of {t} modules completed ({p}%)",
    modulo: "Module",
    minLectura: "min read",
    preguntasQuiz: "quiz questions",
    pendiente: "Pending",
    completado: "✔ Completed",
    objetivos: "🎯 Learning objectives",
    vocabTitulo: "📗 Vocabulary card — this module's technical terms, made simple",
    hacerQuiz: "Take the module quiz →",
    volverModulos: "← Back to modules",
    quizDe: "Quiz",
    quizInstr: "{n} questions. Choose one answer for each and press \"Check\". The order changes on every attempt.",
    corregir: "Check quiz",
    repasarLeccion: "← Review the lesson",
    sinResponder: "You have {n} unanswered question(s). Complete them before checking.",
    msgPerfecto: "🎉 Perfect! You've mastered this module.",
    msgBien: "👍 Good job. Review your mistakes below.",
    msgMal: "💪 Don't worry — review your mistakes and try again.",
    repasoTitulo: "📖 Review of your mistakes",
    tuRespuesta: "✘ Your answer:",
    respuestaCorrecta: "✔ Correct:",
    volverInicio: "Back to modules",
    reintentar: "Retry quiz",
    expedienteDe: "{u}'s record",
    mejorNota: "Best score: {n}/{t} · Completed on {f}",
    sinCompletar: "Not completed yet",
    borrarBtn: "🗑 Delete all my progress",
    confirmarBorrar: "Are you sure you want to delete all your progress? This cannot be undone.",
    glosarioTitulo: "Glossary of terms",
    glosarioSub: "The 20 technical terms of the knowledge base, clearly explained.",
    buscar: "🔍 Search for a term...",
    noCoincide: 'No terms match "{q}".',
    loginTituloEntrar: "Welcome back",
    loginTituloNuevo: "Create your account",
    loginSubEntrar: "Enter your name and password to retrieve your record.",
    loginSubNuevo: "Choose a name and a password. At least 8 characters and one special character (!@#$%...).",
    loginPlaceholder: "Your name...",
    contraPlaceholder: "Your password...",
    confirmarPlaceholder: "Confirm your password...",
    entrar: "Enter →",
    registrar: "Create account →",
    yaIengoCuenta: "Already have an account? Sign in here",
    soyCuentaNueva: "New here? Create an account",
    errorNombreVacio: "Type your name to enter.",
    errorContrasenaVacia: "Type your password.",
    errorContrasenaCorta: "Password must be at least 8 characters.",
    errorContrasenaEspecial: "Password must include at least one special character (!@#$%...).",
    errorContrasenasNoCoinciden: "Passwords do not match.",
    errorCredenciales: "Wrong name or password.",
    errorUsuarioExiste: "That name is already taken. Choose another or sign in with yours.",
    errorServidor: "Error connecting to the server. Is the server running?",
    emailPlaceholder: "Your email address...",
    enviarCodigo: "Send verification code →",
    verificacionTitulo: "Check your email",
    verificacionSub: "We sent a 6-digit code to {email}. You have 10 minutes to enter it.",
    codigoPlaceholder: "6-digit code...",
    verificar: "Verify →",
    reenviarCodigo: "Resend code",
    errorEmailInvalido: "Enter a valid email address.",
    errorEmailEnUso: "That email is already registered.",
    errorCodigoIncorrecto: "Incorrect or expired code. Request a new one.",
    continueGoogle: "Continue with Google",
    oSeparador: "or",
  },
  de: {
    navModulos: "Module",
    navGlosario: "Glossar",
    navProgreso: "Mein Fortschritt",
    salir: "abmelden",
    footer: "Plattform erstellt von Daniel · Tailor Hub · Basierend auf Forschung mit 29 akademischen Quellen",
    heroTitulo: "Lerne alles über Digitale Zwillinge",
    heroSub: "8 Module auf Basis einer Untersuchung mit 29 akademischen und industriellen Quellen. Lies jede Lektion, lerne das Vokabular und zeige dein Wissen im Quiz.",
    progresoGlobal: "{n} von {t} Modulen abgeschlossen ({p} %)",
    modulo: "Modul",
    minLectura: "Min. Lesezeit",
    preguntasQuiz: "Quizfragen",
    pendiente: "Ausstehend",
    completado: "✔ Abgeschlossen",
    objetivos: "🎯 Lernziele",
    vocabTitulo: "📗 Vokabelkarte — die Fachbegriffe dieses Moduls, einfach erklärt",
    hacerQuiz: "Modul-Quiz starten →",
    volverModulos: "← Zurück zu den Modulen",
    quizDe: "Quiz",
    quizInstr: "{n} Fragen. Wähle je eine Antwort und drücke „Korrigieren“. Die Reihenfolge ändert sich bei jedem Versuch.",
    corregir: "Quiz korrigieren",
    repasarLeccion: "← Lektion wiederholen",
    sinResponder: "Es fehlen noch {n} unbeantwortete Frage(n). Beantworte sie vor der Korrektur.",
    msgPerfecto: "🎉 Perfekt! Du beherrschst dieses Modul.",
    msgBien: "👍 Gute Arbeit. Wiederhole unten deine Fehler.",
    msgMal: "💪 Kein Problem — wiederhole deine Fehler und versuche es erneut.",
    repasoTitulo: "📖 Wiederholung deiner Fehler",
    tuRespuesta: "✘ Deine Antwort:",
    respuestaCorrecta: "✔ Richtig:",
    volverInicio: "Zurück zu den Modulen",
    reintentar: "Quiz wiederholen",
    expedienteDe: "Akte von {u}",
    mejorNota: "Beste Note: {n}/{t} · Abgeschlossen am {f}",
    sinCompletar: "Noch nicht abgeschlossen",
    borrarBtn: "🗑 Meinen gesamten Fortschritt löschen",
    confirmarBorrar: "Möchtest du wirklich deinen gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden.",
    glosarioTitulo: "Glossar der Begriffe",
    glosarioSub: "Die 20 Fachbegriffe der Wissensdatenbank, klar erklärt.",
    buscar: "🔍 Begriff suchen...",
    noCoincide: 'Keine Begriffe stimmen mit "{q}" überein.',
    loginTituloEntrar: "Willkommen zurück",
    loginTituloNuevo: "Konto erstellen",
    loginSubEntrar: "Gib deinen Namen und dein Passwort ein, um deine Akte zu laden.",
    loginSubNuevo: "Wähle einen Namen und ein Passwort. Mindestens 8 Zeichen und ein Sonderzeichen (!@#$%...).",
    loginPlaceholder: "Dein Name...",
    contraPlaceholder: "Dein Passwort...",
    confirmarPlaceholder: "Passwort bestätigen...",
    entrar: "Eintreten →",
    registrar: "Konto erstellen →",
    yaIengoCuenta: "Hast du schon ein Konto? Hier einloggen",
    soyCuentaNueva: "Neu hier? Konto erstellen",
    errorNombreVacio: "Gib deinen Namen ein, um einzutreten.",
    errorContrasenaVacia: "Gib dein Passwort ein.",
    errorContrasenaCorta: "Das Passwort muss mindestens 8 Zeichen lang sein.",
    errorContrasenaEspecial: "Das Passwort muss mindestens ein Sonderzeichen enthalten (!@#$%...).",
    errorContrasenasNoCoinciden: "Die Passwörter stimmen nicht überein.",
    errorCredenciales: "Falscher Name oder falsches Passwort.",
    errorUsuarioExiste: "Dieser Name ist bereits vergeben. Wähle einen anderen oder melde dich an.",
    errorServidor: "Verbindungsfehler mit dem Server. Läuft der Server?",
    emailPlaceholder: "Deine E-Mail-Adresse...",
    enviarCodigo: "Bestätigungscode senden →",
    verificacionTitulo: "Überprüfe deine E-Mail",
    verificacionSub: "Wir haben einen 6-stelligen Code an {email} gesendet. Du hast 10 Minuten, ihn einzugeben.",
    codigoPlaceholder: "6-stelliger Code...",
    verificar: "Bestätigen →",
    reenviarCodigo: "Code erneut senden",
    errorEmailInvalido: "Gib eine gültige E-Mail-Adresse ein.",
    errorEmailEnUso: "Diese E-Mail ist bereits registriert.",
    errorCodigoIncorrecto: "Falscher oder abgelaufener Code. Fordere einen neuen an.",
    continueGoogle: "Mit Google fortfahren",
    oSeparador: "oder",
  },
};

/* Pide una frase al libro. Si el idioma no la tiene, usa la española. */
function T(clave, datos = {}) {
  let texto = (TEXTOS[IDIOMA] && TEXTOS[IDIOMA][clave]) || TEXTOS.es[clave] || clave;
  for (const [k, v] of Object.entries(datos)) {
    texto = texto.replaceAll(`{${k}}`, v);
  }
  return texto;
}

/* Contenido (módulos/secciones/glosario) en el idioma elegido.
   Si un módulo aún no está traducido, se muestra en español. */
function seccionesIdioma() {
  return (DATOS[IDIOMA] && DATOS[IDIOMA].SECCIONES) || DATOS.es.SECCIONES;
}
function modulosIdioma() {
  if (IDIOMA === "es") return DATOS.es.MODULOS;
  const traducidos = (DATOS[IDIOMA] && DATOS[IDIOMA].MODULOS) || [];
  return DATOS.es.MODULOS.map((m) => traducidos.find((t) => t.id === m.id) || m);
}
function glosarioIdioma() {
  return (DATOS[IDIOMA] && DATOS[IDIOMA].GLOSARIO) || DATOS.es.GLOSARIO;
}

function cambiarIdioma(idioma) {
  IDIOMA = idioma;
  localStorage.setItem("lms-idioma", idioma);
  pintarTextosFijos();
  navegar(); // repinta la pantalla actual en el nuevo idioma
}

/* Textos que no dependen de la pantalla: menú y pie de página */
function pintarTextosFijos() {
  document.getElementById("nav-modulos").textContent = T("navModulos");
  document.getElementById("nav-glosario").textContent = T("navGlosario");
  document.getElementById("nav-progreso").textContent = T("navProgreso");
  document.getElementById("texto-footer").textContent = T("footer");
  const selector = document.getElementById("selector-idioma");
  if (selector) selector.value = IDIOMA;
  pintarBarraUsuario();
}

/* ---------- EL EXPEDIENTE DEL ALUMNO ----------
   El expediente vive en la SECRETARÍA (el backend).
   localStorage solo recuerda quién se sentó en este pupitre
   y en qué idioma prefiere estudiar. */

let USUARIO = null; // quién ha entrado
let PROGRESO = {};  // copia local de su expediente (la de verdad está en la secretaría)

async function entrarComoAlumno(nombre) {
  USUARIO = nombre.trim().toLowerCase();
  localStorage.setItem("lms-usuario", USUARIO); // este pupitre recuerda quién eres

  // Pedimos a la secretaría el expediente de este alumno
  const respuesta = await fetch(`/api/progreso/${encodeURIComponent(USUARIO)}`);
  PROGRESO = await respuesta.json();

  pintarBarraUsuario();
  navegar();
}

function guardarProgreso() {
  // Enviamos el expediente actualizado a la ventanilla de la secretaría
  fetch(`/api/progreso/${encodeURIComponent(USUARIO)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(PROGRESO),
  });
}

function salir() {
  localStorage.removeItem("lms-usuario");
  USUARIO = null;
  PROGRESO = {};
  pintarBarraUsuario();
  pintarLogin();
}

/* Muestra en la barra superior quién ha entrado */
function pintarBarraUsuario() {
  const zona = document.getElementById("zona-usuario");
  if (!zona) return;
  zona.innerHTML = USUARIO
    ? `👤 ${USUARIO} · <a href="#" onclick="salir(); return false;">${T("salir")}</a>`
    : "";
}

/* ---------- PANTALLA: ENTRADA (login / registro) ---------- */

let modoRegistro = false;
let EMAIL_PENDIENTE = null;
let NOMBRE_PENDIENTE = null;

function toggleModo() {
  modoRegistro = !modoRegistro;
  pintarLogin();
}

function mostrarError(msg) {
  const el = document.getElementById("error-login");
  if (el) el.textContent = msg;
}

function validarContrasena(c) {
  if (c.length < 8) return T("errorContrasenaCorta");
  if (!/[^a-zA-Z0-9]/.test(c)) return T("errorContrasenaEspecial");
  return null;
}

function validarEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

const GOOGLE_CLIENT_ID = "681227298388-s9b2l8khn07bivbfvvqukasfu91cc6rl.apps.googleusercontent.com";

function pintarLogin() {
  const camposRegistro = modoRegistro ? `
    <input class="buscador" id="campo-email" type="email" placeholder="${T("emailPlaceholder")}">
    <input class="buscador" id="campo-contrasena" type="password" placeholder="${T("contraPlaceholder")}">
    <input class="buscador" id="campo-confirmar" type="password" placeholder="${T("confirmarPlaceholder")}"
      onkeydown="if(event.key==='Enter') enviarFormulario()">` : `
    <input class="buscador" id="campo-contrasena" type="password" placeholder="${T("contraPlaceholder")}"
      onkeydown="if(event.key==='Enter') enviarFormulario()">`;

  app.innerHTML = `
    <div class="hero">
      <h1>${modoRegistro ? T("loginTituloNuevo") : T("loginTituloEntrar")}</h1>
      <p>${modoRegistro ? T("loginSubNuevo") : T("loginSubEntrar")}</p>
    </div>
    <div style="max-width:420px;margin:0 auto;text-align:center">
      <div id="google-signin-btn" style="display:flex;justify-content:center;margin-bottom:16px"></div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;color:var(--texto-muted)">
        <div style="flex:1;height:1px;background:var(--borde)"></div>
        <span style="font-size:.8rem">${T("oSeparador")}</span>
        <div style="flex:1;height:1px;background:var(--borde)"></div>
      </div>
      <input class="buscador" id="campo-nombre" type="text" placeholder="${T("loginPlaceholder")}" autofocus>
      ${camposRegistro}
      <p id="error-login" style="color:#e74c3c;min-height:1.4em;margin:8px 0"></p>
      <button class="btn" onclick="enviarFormulario()">
        ${modoRegistro ? T("enviarCodigo") : T("entrar")}
      </button>
      <p style="margin-top:1rem">
        <a href="javascript:void(0)" onclick="toggleModo()" style="font-size:.9rem">
          ${modoRegistro ? T("yaIengoCuenta") : T("soyCuentaNueva")}
        </a>
      </p>
    </div>
  `;

  renderizarBotonGoogle();
}

function renderizarBotonGoogle() {
  if (!window.google || !google.accounts) {
    setTimeout(renderizarBotonGoogle, 300);
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleLogin,
  });
  const contenedor = document.getElementById("google-signin-btn");
  if (contenedor) {
    google.accounts.id.renderButton(contenedor, {
      theme: "filled_black",
      size: "large",
      text: "continue_with",
      shape: "rectangular",
      width: 300,
    });
  }
}

async function handleGoogleLogin(response) {
  mostrarError("");
  try {
    const resp = await fetch("/api/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: response.credential }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      entrarComoAlumno(datos.nombre);
    } else {
      mostrarError(datos.error || T("errorServidor"));
    }
  } catch {
    mostrarError(T("errorServidor"));
  }
}

function pintarVerificacion() {
  app.innerHTML = `
    <div class="hero">
      <h1>${T("verificacionTitulo")}</h1>
      <p>${T("verificacionSub", { email: EMAIL_PENDIENTE })}</p>
    </div>
    <div style="max-width:420px;margin:0 auto;text-align:center">
      <input class="buscador" id="campo-codigo" type="text" maxlength="6"
        placeholder="${T("codigoPlaceholder")}" autofocus
        onkeydown="if(event.key==='Enter') verificarCodigo()">
      <p id="error-login" style="color:#e74c3c;min-height:1.4em;margin:8px 0"></p>
      <button class="btn" onclick="verificarCodigo()">${T("verificar")}</button>
      <p style="margin-top:1rem">
        <a href="javascript:void(0)" onclick="pintarLogin()" style="font-size:.9rem">← Volver</a>
        &nbsp;·&nbsp;
        <a href="javascript:void(0)" onclick="reenviarCodigo()" style="font-size:.9rem">${T("reenviarCodigo")}</a>
      </p>
    </div>
  `;
}

async function enviarFormulario() {
  modoRegistro ? await confirmarRegistro() : await confirmarLogin();
}

async function confirmarLogin() {
  const nombre = document.getElementById("campo-nombre").value.trim().toLowerCase();
  const contrasena = document.getElementById("campo-contrasena").value;
  if (!nombre) { mostrarError(T("errorNombreVacio")); return; }
  if (!contrasena) { mostrarError(T("errorContrasenaVacia")); return; }

  try {
    const resp = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, contrasena }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      entrarComoAlumno(nombre);
    } else {
      mostrarError(datos.error || T("errorCredenciales"));
    }
  } catch {
    mostrarError(T("errorServidor"));
  }
}

async function confirmarRegistro() {
  const nombre = document.getElementById("campo-nombre").value.trim().toLowerCase();
  const email = document.getElementById("campo-email").value.trim();
  const contrasena = document.getElementById("campo-contrasena").value;
  const confirmar = document.getElementById("campo-confirmar").value;

  if (!nombre) { mostrarError(T("errorNombreVacio")); return; }
  if (!validarEmail(email)) { mostrarError(T("errorEmailInvalido")); return; }
  const errorPass = validarContrasena(contrasena);
  if (errorPass) { mostrarError(errorPass); return; }
  if (contrasena !== confirmar) { mostrarError(T("errorContrasenasNoCoinciden")); return; }

  try {
    const resp = await fetch("/api/enviar-codigo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, contrasena }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      EMAIL_PENDIENTE = email.trim().toLowerCase();
      NOMBRE_PENDIENTE = nombre;
      pintarVerificacion();
    } else {
      mostrarError(datos.error || T("errorServidor"));
    }
  } catch {
    mostrarError(T("errorServidor"));
  }
}

async function verificarCodigo() {
  const codigo = document.getElementById("campo-codigo").value.trim();
  if (!codigo) { mostrarError(T("codigoPlaceholder")); return; }

  try {
    const resp = await fetch("/api/verificar-codigo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: EMAIL_PENDIENTE, codigo }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      entrarComoAlumno(NOMBRE_PENDIENTE);
    } else {
      mostrarError(datos.error || T("errorCodigoIncorrecto"));
    }
  } catch {
    mostrarError(T("errorServidor"));
  }
}

async function reenviarCodigo() {
  pintarLogin();
  modoRegistro = true;
  pintarLogin();
}

/* ---------- NAVEGACIÓN ---------- */

function navegar() {
  // Si nadie ha entrado todavía, lo primero es identificarse
  if (!USUARIO) return pintarLogin();

  const ruta = location.hash || "#/";
  window.scrollTo(0, 0);

  if (ruta === "#/" || ruta === "") return pintarInicio();
  if (ruta === "#/glosario") return pintarGlosario();
  if (ruta === "#/progreso") return pintarProgreso();

  const matchModulo = ruta.match(/^#\/modulo\/(\d+)$/);
  if (matchModulo) return pintarModulo(Number(matchModulo[1]));

  const matchQuiz = ruta.match(/^#\/quiz\/(\d+)$/);
  if (matchQuiz) return pintarQuiz(Number(matchQuiz[1]));

  pintarInicio(); // ruta desconocida → al inicio
}

window.addEventListener("hashchange", navegar);
window.addEventListener("DOMContentLoaded", () => {
  pintarTextosFijos();
  // ¿Este pupitre recuerda quién se sentó la última vez?
  const recordado = localStorage.getItem("lms-usuario");
  if (recordado) {
    entrarComoAlumno(recordado); // recupera su expediente de la secretaría
  } else {
    pintarLogin();
  }
});

/* ---------- PANTALLA: INICIO (lista de módulos) ---------- */

function pintarInicio() {
  const modulos = modulosIdioma();
  const completados = modulos.filter((m) => PROGRESO[m.id]).length;
  const porcentaje = Math.round((completados / modulos.length) * 100);

  let html = `
    <div class="hero">
      <h1>${T("heroTitulo")}</h1>
      <p>${T("heroSub")}</p>
      <div class="barra-progreso-global"><div class="relleno" style="width:${porcentaje}%"></div></div>
      <span class="texto-progreso">${T("progresoGlobal", { n: completados, t: modulos.length, p: porcentaje })}</span>
    </div>
  `;

  for (const seccion of seccionesIdioma()) {
    html += `<h2 class="seccion-titulo">${seccion.nombre}</h2>`;
    for (const mod of modulos.filter((m) => m.seccion === seccion.id)) {
      const hecho = PROGRESO[mod.id];
      html += `
        <a class="tarjeta-modulo" href="#/modulo/${mod.id}">
          <div class="info">
            <h3>${T("modulo")} ${mod.id} · ${mod.titulo}</h3>
            <p>⏱ ${mod.minutos} ${T("minLectura")} · ${mod.quiz.length} ${T("preguntasQuiz")}</p>
          </div>
          <span class="estado ${hecho ? "completado" : "pendiente"}">
            ${hecho ? `${T("completado")} · ${hecho.nota}/${hecho.total}` : T("pendiente")}
          </span>
        </a>
      `;
    }
  }
  app.innerHTML = html;
}

/* ---------- PANTALLA: LECCIÓN ---------- */

function pintarModulo(id) {
  const mod = modulosIdioma().find((m) => m.id === id);
  if (!mod) return pintarInicio();
  const seccion = seccionesIdioma().find((s) => s.id === mod.seccion);

  // Ficha de vocabulario del módulo (idea de Daniel)
  const vocabHtml = mod.vocabulario
    .map((v) => `<dt>${v.termino}</dt><dd>${v.explicacion}</dd>`)
    .join("");

  app.innerHTML = `
    <article class="leccion">
      <p class="miga">${seccion.nombre} · ${T("modulo")} ${mod.id} · ⏱ ${mod.minutos} ${T("minLectura")}</p>
      <h1>${mod.titulo}</h1>

      <div class="objetivos">
        <h2>${T("objetivos")}</h2>
        <ul>${mod.objetivos.map((o) => `<li>${o}</li>`).join("")}</ul>
      </div>

      <div class="vocabulario">
        <h2>${T("vocabTitulo")}</h2>
        <dl>${vocabHtml}</dl>
      </div>

      ${mod.contenido}

      <div class="acciones">
        <a class="btn" href="#/quiz/${mod.id}">${T("hacerQuiz")}</a>
        <a class="btn secundario" href="#/">${T("volverModulos")}</a>
      </div>
    </article>
  `;
}

/* ---------- PANTALLA: QUIZ (con baraja aleatoria) ----------
   En cada intento barajamos el orden de las preguntas Y el
   orden de las respuestas de cada una. Así memorizar
   "la tercera era la b" no sirve: hay que saberse el contenido. */

let QUIZ_ACTUAL = []; // las preguntas barajadas del intento en curso

/* Baraja una lista al azar (algoritmo Fisher-Yates) */
function barajar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function pintarQuiz(id) {
  const mod = modulosIdioma().find((m) => m.id === id);
  if (!mod) return pintarInicio();

  // Barajamos preguntas y, dentro de cada una, sus opciones
  QUIZ_ACTUAL = barajar(mod.quiz).map((q) => {
    const orden = barajar(q.opciones.map((_, i) => i)); // nuevo orden de las opciones
    return {
      pregunta: q.pregunta,
      opciones: orden.map((i) => q.opciones[i]),
      correcta: orden.indexOf(q.correcta), // dónde quedó la correcta tras barajar
      explicacion: q.explicacion,
    };
  });

  let html = `
    <div class="hero">
      <h1>${T("quizDe")} · ${mod.titulo}</h1>
      <p>${T("quizInstr", { n: QUIZ_ACTUAL.length })}</p>
    </div>
  `;

  QUIZ_ACTUAL.forEach((q, i) => {
    html += `
      <div class="pregunta" id="pregunta-${i}">
        <h3>${i + 1}. ${q.pregunta}</h3>
        ${q.opciones
          .map(
            (op, j) => `
          <label class="opcion">
            <input type="radio" name="q${i}" value="${j}"> ${op}
          </label>`
          )
          .join("")}
      </div>
    `;
  });

  html += `
    <div class="acciones">
      <button class="btn" onclick="corregirQuiz(${id})">${T("corregir")}</button>
      <a class="btn secundario" href="#/modulo/${id}">${T("repasarLeccion")}</a>
    </div>
    <div id="zona-resultado"></div>
  `;
  app.innerHTML = html;
}

/* ---------- CORRECCIÓN + REPASO DE FALLOS (idea de Daniel) ---------- */

function corregirQuiz(id) {
  const fallos = [];
  let aciertos = 0;
  let sinResponder = 0;

  QUIZ_ACTUAL.forEach((q, i) => {
    const elegida = document.querySelector(`input[name="q${i}"]:checked`);
    if (!elegida) {
      sinResponder++;
      return;
    }
    const respuesta = Number(elegida.value);
    if (respuesta === q.correcta) {
      aciertos++;
    } else {
      fallos.push({ ...q, tuRespuesta: q.opciones[respuesta], numero: i + 1 });
    }
  });

  if (sinResponder > 0) {
    alert(T("sinResponder", { n: sinResponder }));
    return;
  }

  // Apuntamos el resultado en el expediente y se lo mandamos a la secretaría
  const anterior = PROGRESO[id];
  const locale = IDIOMA === "de" ? "de-DE" : IDIOMA === "en" ? "en-GB" : "es-ES";
  // Guardamos la mejor nota conseguida hasta ahora
  if (!anterior || aciertos > anterior.nota) {
    PROGRESO[id] = { nota: aciertos, total: QUIZ_ACTUAL.length, fecha: new Date().toLocaleDateString(locale) };
    guardarProgreso();
  }

  const aprobado = aciertos >= Math.ceil(QUIZ_ACTUAL.length * 0.5);
  let html = `
    <div class="resultado">
      <div class="nota ${aprobado ? "bien" : "mal"}">${aciertos} / ${QUIZ_ACTUAL.length}</div>
      <p>${
        aciertos === QUIZ_ACTUAL.length ? T("msgPerfecto") : aprobado ? T("msgBien") : T("msgMal")
      }</p>
    </div>
  `;

  // Zona de repaso: cada fallo con tu respuesta, la correcta y el porqué
  if (fallos.length > 0) {
    html += `
      <div class="repaso">
        <h2>${T("repasoTitulo")}</h2>
        ${fallos
          .map(
            (f) => `
          <div class="repaso-item">
            <p><strong>${f.numero}. ${f.pregunta}</strong></p>
            <p><span class="etiqueta tu-respuesta">${T("tuRespuesta")}</span> ${f.tuRespuesta}</p>
            <p><span class="etiqueta correcta-txt">${T("respuestaCorrecta")}</span> ${f.opciones[f.correcta]}</p>
            <p class="explicacion">💡 ${f.explicacion}</p>
          </div>`
          )
          .join("")}
      </div>
    `;
  }

  html += `
    <div class="acciones">
      <a class="btn" href="#/">${T("volverInicio")}</a>
      <a class="btn secundario" href="#/quiz/${id}" onclick="setTimeout(navegar, 0)">${T("reintentar")}</a>
    </div>
  `;

  document.getElementById("zona-resultado").innerHTML = html;
  document.getElementById("zona-resultado").scrollIntoView({ behavior: "smooth" });
}

/* ---------- PANTALLA: MI PROGRESO ---------- */

function pintarProgreso() {
  const modulos = modulosIdioma();
  const completados = modulos.filter((m) => PROGRESO[m.id]).length;
  const porcentaje = Math.round((completados / modulos.length) * 100);

  let html = `
    <div class="hero">
      <h1>${T("expedienteDe", { u: USUARIO })}</h1>
      <div class="barra-progreso-global"><div class="relleno" style="width:${porcentaje}%"></div></div>
      <span class="texto-progreso">${T("progresoGlobal", { n: completados, t: modulos.length, p: porcentaje })}</span>
    </div>
  `;

  for (const mod of modulos) {
    const p = PROGRESO[mod.id];
    html += `
      <div class="fila-progreso">
        <div>
          <div class="nombre">${T("modulo")} ${mod.id} · ${mod.titulo}</div>
          <div class="detalle">${p ? T("mejorNota", { n: p.nota, t: p.total, f: p.fecha }) : T("sinCompletar")}</div>
        </div>
        <span class="estado ${p ? "completado" : "pendiente"}">${p ? "✔" : "—"}</span>
      </div>
    `;
  }

  html += `
    <div class="acciones">
      <button class="btn secundario" onclick="borrarProgreso()">${T("borrarBtn")}</button>
    </div>
  `;
  app.innerHTML = html;
}

function borrarProgreso() {
  if (confirm(T("confirmarBorrar"))) {
    PROGRESO = {};
    guardarProgreso(); // avisamos a la secretaría de que el expediente queda vacío
    navegar();
  }
}

/* ---------- PANTALLA: GLOSARIO ---------- */

function pintarGlosario() {
  let html = `
    <div class="hero">
      <h1>${T("glosarioTitulo")}</h1>
      <p>${T("glosarioSub")}</p>
    </div>
    <input class="buscador" type="text" placeholder="${T("buscar")}" oninput="filtrarGlosario(this.value)">
    <div id="lista-glosario"></div>
  `;
  app.innerHTML = html;
  filtrarGlosario("");
}

function filtrarGlosario(texto) {
  const filtro = texto.toLowerCase();
  const visibles = glosarioIdioma().filter(
    (g) => g.termino.toLowerCase().includes(filtro) || g.definicion.toLowerCase().includes(filtro)
  );
  document.getElementById("lista-glosario").innerHTML =
    visibles.length === 0
      ? `<p style="text-align:center;color:#6b7280">${T("noCoincide", { q: texto })}</p>`
      : visibles.map((g) => `<div class="termino"><h3>${g.termino}</h3><p>${g.definicion}</p></div>`).join("");
}
