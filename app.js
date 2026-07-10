/* ============================================================
   EL "PROFESOR" — La lógica de la plataforma.
   Decide qué pantalla mostrar, corrige los quizzes,
   habla con la secretaría (backend) y ahora habla 3 idiomas.
   ============================================================ */

const app = document.getElementById("app");

/* ---------- DARK MODE ---------- */
(function () {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (dark) document.body.classList.add('dark');
  document.documentElement.classList.remove('dark-pending');
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    document.body.classList.toggle('dark', e.matches);
  });
})();

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
    footer: "Academia CSM · Tailor Hub",
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
    navRanking: "Ranking",
    rankingTitulo: "Ranking de alumnos",
    rankingSub: "Clasificación por módulos completados y nota media.",
    rankingAlumno: "Alumno",
    rankingModulos: "Módulos",
    rankingMedia: "Media",
    rankingVacio: "Aún no hay datos de progreso.",
    rankingTu: "(tú)",
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
    navRanking: "Ranking",
    rankingTitulo: "Student Ranking",
    rankingSub: "Sorted by modules completed and average score.",
    rankingAlumno: "Student",
    rankingModulos: "Modules",
    rankingMedia: "Average",
    rankingVacio: "No progress data yet.",
    rankingTu: "(you)",
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
    navRanking: "Ranking",
    rankingTitulo: "Schüler-Ranking",
    rankingSub: "Sortiert nach abgeschlossenen Modulen und Durchschnittsnote.",
    rankingAlumno: "Schüler",
    rankingModulos: "Module",
    rankingMedia: "Durchschnitt",
    rankingVacio: "Noch keine Fortschrittsdaten.",
    rankingTu: "(du)",
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

/* Contenido (módulos/secciones/glosario) en el idioma elegido,
   para el curso activo. Si un módulo no está traducido, usa el español. */
function datosCurso() {
  return DATOS[CURSO_ACTIVO] || {};
}
function seccionesIdioma() {
  const d = datosCurso();
  return (d[IDIOMA] && d[IDIOMA].SECCIONES) || (d.es && d.es.SECCIONES) || [];
}
function modulosIdioma() {
  const d = datosCurso();
  const es = (d.es && d.es.MODULOS) || [];
  if (IDIOMA === "es") return es;
  const traducidos = (d[IDIOMA] && d[IDIOMA].MODULOS) || [];
  return es.map((m) => traducidos.find((t) => t.id === m.id) || m);
}
function glosarioIdioma() {
  const d = datosCurso();
  return (d[IDIOMA] && d[IDIOMA].GLOSARIO) || (d.es && d.es.GLOSARIO) || [];
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
  document.getElementById("nav-ranking").textContent = T("navRanking");
  document.getElementById("texto-footer").textContent = T("footer");
  const selector = document.getElementById("selector-idioma");
  if (selector) selector.value = IDIOMA;
  pintarBarraUsuario();
}

function actualizarNavActivo(ruta) {
  const mapa = {
    "#/":           "nav-modulos",
    "#/glosario":   "nav-glosario",
    "#/progreso":   "nav-progreso",
    "#/ranking":    "nav-ranking",
    "#/calendario": "nav-calendario",
    "#/sugerir":    "nav-sugerir",
    "#/admin":      "nav-admin",
  };
  document.querySelectorAll(".topbar nav a").forEach((a) => a.classList.remove("activo"));
  const id = mapa[ruta];
  if (id) document.getElementById(id)?.classList.add("activo");

  document.body.classList.toggle("es-admin", ROL === "admin");
  document.body.classList.toggle("hay-usuario", !!USUARIO);
}

/* ---------- EL EXPEDIENTE DEL ALUMNO ----------
   El expediente vive en la SECRETARÍA (el backend).
   localStorage solo recuerda quién se sentó en este pupitre
   y en qué idioma prefiere estudiar. */

let USUARIO         = null;    // quién ha entrado
let ROL             = "alumno"; // "alumno" | "admin"
let CLASES_ALUMNO   = null;    // null = todos los cursos, array = solo esos
let CURSO_ACTIVO    = null;    // qué curso está viendo ahora
let PROGRESO_GLOBAL = {};      // todos los cursos: { gemelos: {...}, celulas: {...} }
let PROGRESO        = {};      // progreso del curso activo

function migrarProgresoAntiguo(datos) {
  // Si las claves son números, es el formato antiguo (solo gemelos) → migrar
  const claves = Object.keys(datos);
  if (claves.length > 0 && claves.every((k) => !isNaN(k))) {
    return { gemelos: datos };
  }
  return datos;
}

async function entrarComoAlumno(nombre, optsRol = {}) {
  USUARIO = nombre.trim().toLowerCase();
  ROL = optsRol.rol || "alumno";
  CLASES_ALUMNO = optsRol.clases ?? null;
  localStorage.setItem("lms-usuario", USUARIO);

  const resp = await fetch(`/api/progreso/${encodeURIComponent(USUARIO)}`);
  PROGRESO_GLOBAL = migrarProgresoAntiguo(await resp.json());

  pintarBarraUsuario();

  if (ROL === "admin") {
    pintarAdmin();
    return;
  }

  const ultimoCurso = localStorage.getItem("lms-curso");
  if (ultimoCurso && DATOS[ultimoCurso] && cursosDisponibles().find(c => c.id === ultimoCurso)) {
    seleccionarCurso(ultimoCurso);
  } else {
    pintarCursos();
  }
}

function cursosDisponibles() {
  if (CLASES_ALUMNO === null) return CURSOS;
  return CURSOS.filter((c) => CLASES_ALUMNO.includes(c.id));
}

function seleccionarCurso(id) {
  CURSO_ACTIVO = id;
  localStorage.setItem("lms-curso", id);
  PROGRESO = PROGRESO_GLOBAL[id] || {};
  location.hash = "#/";
  navegar();
}

function guardarProgreso() {
  PROGRESO_GLOBAL[CURSO_ACTIVO] = PROGRESO;
  fetch(`/api/progreso/${encodeURIComponent(USUARIO)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(PROGRESO_GLOBAL),
  });
}

function salir() {
  localStorage.removeItem("lms-usuario");
  localStorage.removeItem("lms-curso");
  USUARIO = null;
  ROL = "alumno";
  CLASES_ALUMNO = null;
  CURSO_ACTIVO = null;
  PROGRESO = {};
  PROGRESO_GLOBAL = {};
  pintarBarraUsuario();
  pintarLogin();
}

function volverACursos() {
  CURSO_ACTIVO = null;
  localStorage.removeItem("lms-curso");
  PROGRESO = {};
  pintarCursos();
}

/* Muestra en la barra superior quién ha entrado */
function pintarBarraUsuario() {
  const zona = document.getElementById("zona-usuario");
  if (!zona) return;
  if (!USUARIO) {
    zona.innerHTML = "";
    document.body.classList.toggle("es-admin", false);
    document.body.classList.toggle("hay-usuario", false);
    return;
  }
  document.body.classList.toggle("es-admin", ROL === "admin");
  document.body.classList.toggle("hay-usuario", !!USUARIO);
  const cursoLink = CURSO_ACTIVO
    ? ` · <a href="javascript:void(0)" onclick="volverACursos()" style="color:var(--texto-muted)">${CURSOS.find(c=>c.id===CURSO_ACTIVO)?.icono || ""} ${CURSOS.find(c=>c.id===CURSO_ACTIVO)?.titulo || CURSO_ACTIVO}</a>`
    : "";
  zona.innerHTML = `👤 ${USUARIO}${cursoLink} · <a href="javascript:void(0)" onclick="salir()">${T("salir")}</a>`;
}

/* ---------- PANTALLA: SELECCIÓN DE CURSO ---------- */

function pintarCursos() {
  actualizarNavActivo("");
  const tarjetas = cursosDisponibles().map((curso) => {
    const progresoDelCurso = PROGRESO_GLOBAL[curso.id] || {};
    const datosCursoObj = DATOS[curso.id];
    const totalMods = datosCursoObj ? (datosCursoObj.es.MODULOS.length) : 0;
    const completados = Object.values(progresoDelCurso).filter(p => p.nota !== undefined).length;
    const pct = totalMods > 0 ? Math.round((completados / totalMods) * 100) : 0;
    const tieneContenido = totalMods > 0;

    return `
      <div class="tarjeta-curso ${tieneContenido ? "" : "proximamente"}" onclick="${tieneContenido ? `seleccionarCurso('${curso.id}')` : ""}">
        <div class="curso-icono">${curso.icono}</div>
        <div class="curso-info">
          <h2>${curso.titulo}</h2>
          <p>${curso.descripcion}</p>
          ${tieneContenido ? `
            <div style="margin-top:10px">
              <div class="barra-progreso-global" style="max-width:100%;margin:6px 0 4px">
                <div class="relleno" style="width:${pct}%"></div>
              </div>
              <span class="texto-progreso">${completados} / ${totalMods} módulos completados</span>
            </div>
          ` : `<span style="color:var(--texto-muted);font-size:.82rem">Añade módulos en data-celulas.js para activar este curso</span>`}
        </div>
        <div class="curso-flecha">${tieneContenido ? "→" : ""}</div>
      </div>
    `;
  }).join("");

  app.innerHTML = `
    <div class="hero">
      <p class="hero-meta">Academia · Selección de curso</p>
      <h1>¿Qué quieres estudiar hoy?</h1>
      <p>Elige un curso para continuar. Tu progreso se guarda de forma independiente en cada uno.</p>
    </div>
    <div class="lista-cursos">${tarjetas}</div>
  `;
}

/* ---------- PANTALLA: ENTRADA (login / registro) ---------- */

let modoRegistro = true;
let EMAIL_PENDIENTE = null;
let NOMBRE_PENDIENTE = null;

function toggleModo() {
  modoRegistro = !modoRegistro;
  pintarLogin();
}

function toggleCampoProfe() {
  const wrap = document.getElementById("campo-profe-wrap");
  if (wrap) wrap.style.display = wrap.style.display === "none" ? "" : "none";
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
      ${!modoRegistro ? `
      <p style="margin-top:.5rem">
        <a href="javascript:void(0)" onclick="toggleCampoProfe()" style="font-size:.8rem;color:var(--texto-muted)">
          🔑 ¿Eres profesor?
        </a>
      </p>
      <div id="campo-profe-wrap" style="display:none;margin-top:6px">
        <input class="buscador" id="campo-codigo-profe" type="password"
          placeholder="Código de acceso de profesor..."
          onkeydown="if(event.key==='Enter') enviarFormulario()">
      </div>` : ""}
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
  const codigoProfe = (document.getElementById("campo-codigo-profe")?.value || "").trim();
  try {
    const resp = await fetch("/api/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: response.credential, codigoProfe }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      entrarComoAlumno(datos.nombre, { rol: datos.rol, clases: datos.clases });
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
  const codigoProfe = (document.getElementById("campo-codigo-profe")?.value || "").trim();
  if (!nombre) { mostrarError(T("errorNombreVacio")); return; }
  if (!contrasena) { mostrarError(T("errorContrasenaVacia")); return; }

  try {
    const resp = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, contrasena, codigoProfe }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      entrarComoAlumno(nombre, { rol: datos.rol, clases: datos.clases });
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
  if (!USUARIO) return pintarLogin();

  const ruta = location.hash || "#/";
  window.scrollTo(0, 0);

  // Estas rutas funcionan sin curso seleccionado
  if (ruta === "#/ranking")                          { actualizarNavActivo(ruta); return pintarRanking(); }
  if (ruta === "#/calendario")                       { actualizarNavActivo(ruta); return pintarCalendario(); }
  if (ruta === "#/sugerir" && ROL !== "admin")       { actualizarNavActivo(ruta); return pintarSugerir(); }
  if (ruta === "#/admin"   && ROL === "admin")       { return pintarAdmin(); }

  if (!CURSO_ACTIVO) return pintarCursos();

  actualizarNavActivo(ruta);

  if (ruta === "#/" || ruta === "") return pintarInicio();
  if (ruta === "#/glosario")        return pintarGlosario();
  if (ruta === "#/progreso")        return pintarProgreso();

  const matchModulo = ruta.match(/^#\/modulo\/(\d+)$/);
  if (matchModulo) return pintarModulo(Number(matchModulo[1]));

  const matchQuiz = ruta.match(/^#\/quiz\/(\d+)$/);
  if (matchQuiz) return pintarQuiz(Number(matchQuiz[1]));

  pintarInicio();
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

const ICONOS_MODULO = { 1:"◈", 2:"◎", 3:"⟡", 4:"⊞", 5:"◉", 6:"⬡", 7:"△", 8:"◇" };

function pintarInicio() {
  const modulos = modulosIdioma();
  const completados = modulos.filter((m) => PROGRESO[m.id]).length;
  const porcentaje = Math.round((completados / modulos.length) * 100);
  const cursoActualObj = CURSOS.find((c) => c.id === CURSO_ACTIVO);

  const notasArr = modulos.filter(m => PROGRESO[m.id])
    .map(m => Math.round((PROGRESO[m.id].nota / PROGRESO[m.id].total) * 100));
  const mediaLocal = notasArr.length > 0
    ? Math.round(notasArr.reduce((a, b) => a + b, 0) / notasArr.length) + "%"
    : "—";

  let modulosHtml = "";
  for (const seccion of seccionesIdioma()) {
    modulosHtml += `<h2 class="seccion-titulo">${seccion.nombre}</h2>`;
    for (const mod of modulos.filter((m) => m.seccion === seccion.id)) {
      const hecho = PROGRESO[mod.id];
      const pct = hecho ? Math.round((hecho.nota / hecho.total) * 100) : 0;
      modulosHtml += `
        <a class="tarjeta-modulo" href="#/modulo/${mod.id}">
          <span class="mod-num">${String(mod.id).padStart(2, '0')}</span>
          <div class="info">
            <h3>${mod.titulo}</h3>
            <p>${mod.minutos} ${T("minLectura")} · ${mod.quiz.length} ${T("preguntasQuiz")}</p>
          </div>
          <span class="mod-estado estado ${hecho ? "completado" : "pendiente"}">
            ${hecho ? `${hecho.nota}/${hecho.total}` : "·"}
          </span>
        </a>`;
    }
  }

  app.innerHTML = `
    <div class="modules-wrapper">
      <div class="dashboard-hero">
        <div>
          <p class="hero-meta" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <button onclick="volverACursos()" class="btn-volver">← Mis cursos</button>
            <span>${cursoActualObj?.icono || ""} ${cursoActualObj?.titulo || CURSO_ACTIVO}</span>
          </p>
          <h1 class="dashboard-h1">${T("heroTitulo")}</h1>
        </div>
        <div class="stats-row" style="margin-bottom:0">
          <div class="stat-pill"><strong>${modulos.length}</strong><span>${T("navModulos")}</span></div>
          <div class="stat-pill"><strong>${completados}</strong><span>completados</span></div>
          <div class="stat-pill"><strong>${porcentaje}%</strong><span>progreso</span></div>
        </div>
      </div>
      <div class="barra-progreso-global" style="max-width:100%;margin-bottom:56px">
        <div class="relleno" style="width:${porcentaje}%"></div>
      </div>
      <div class="modules-grid">
        <div class="course-column">${modulosHtml}</div>
        <div class="side-column">
          <div class="panel-widget">
            <h2 class="seccion-titulo" style="margin-top:0">Estadísticas</h2>
            <div class="mini-stat-grid">
              <div class="mini-stat">
                <span class="mini-stat-val">${completados}/${modulos.length}</span>
                <span class="mini-stat-label">Módulos</span>
              </div>
              <div class="mini-stat">
                <span class="mini-stat-val">${mediaLocal}</span>
                <span class="mini-stat-label">Nota media</span>
              </div>
            </div>
          </div>
          <div class="panel-widget">
            <h2 class="seccion-titulo" style="margin-top:0">Actividad reciente</h2>
            <div id="mini-ranking-contenido" style="color:var(--texto-muted);font-size:.82rem;padding:4px 0">···</div>
          </div>
          <div class="panel-widget">
            <h2 class="seccion-titulo" style="margin-top:0">Próxima tarea</h2>
            <p style="color:var(--texto-muted);font-size:.85rem;line-height:1.6">Sin módulos pendientes programados.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  cargarMiniRanking();
}

async function cargarMiniRanking() {
  const el = document.getElementById("mini-ranking-contenido");
  if (!el) return;
  try {
    const resp = await fetch(`/api/ranking?curso=${encodeURIComponent(CURSO_ACTIVO)}`);
    const { ranking } = await resp.json();
    if (!ranking || ranking.length === 0) { el.textContent = "Aún no hay datos."; return; }
    const medalon = (i) => i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉";
    el.innerHTML = ranking.slice(0, 3).map((r, i) => `
      <div class="mini-ranking-fila">
        <span class="mini-ranking-pos">${medalon(i)}</span>
        <span class="mini-ranking-nombre ${r.nombre === USUARIO ? "yo" : ""}">${r.nombre}</span>
        <span class="mini-ranking-stat">${r.media}%</span>
      </div>`).join("");
  } catch { el.textContent = ""; }
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

      <div id="comentarios-seccion" class="comentarios-seccion">
        <h2 class="seccion-titulo" style="margin-top:40px">Comentarios</h2>
        <div id="comentarios-lista" style="color:var(--texto-muted);font-size:.82rem;padding:8px 0">Cargando…</div>
        ${USUARIO ? `
        <div class="comentario-form">
          <div class="comentario-avatar" style="flex-shrink:0;margin-top:4px">${USUARIO.slice(0,2).toUpperCase()}</div>
          <div style="flex:1">
            <textarea id="comentario-input" class="buscador" placeholder="Escribe un comentario…" rows="3" style="resize:vertical;margin:0;font-family:inherit"></textarea>
            <button id="comentario-btn" class="btn" onclick="enviarComentario('${CURSO_ACTIVO}', ${mod.id})" style="margin-top:8px">Publicar →</button>
          </div>
        </div>` : ""}
      </div>
    </article>
  `;
  cargarComentarios(CURSO_ACTIVO, mod.id);
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
    PROGRESO_GLOBAL[CURSO_ACTIVO] = {};
    guardarProgreso();
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
      ? `<p style="text-align:center;color:var(--texto-muted)">${T("noCoincide", { q: texto })}</p>`
      : visibles.map((g) => `<div class="termino"><h3>${g.termino}</h3><p>${g.definicion}</p></div>`).join("");
}

/* ---------- PANTALLA: RANKING ---------- */

let RANKING_TAB = "global";

async function pintarRanking() {
  const tabs = [
    { id: "global", label: "🌍 Global" },
    ...CURSOS.map((c) => ({ id: c.id, label: `${c.icono} ${c.titulo}` })),
  ];

  const tabsHtml = tabs.map((t) => `
    <button class="rank-tab ${RANKING_TAB === t.id ? "activo" : ""}"
      onclick="cambiarTabRanking('${t.id}')">${t.label}</button>
  `).join("");

  app.innerHTML = `
    <div class="hero">
      <p class="hero-meta">Academia · Ranking</p>
      <h1>${T("rankingTitulo")}</h1>
      <p>${T("rankingSub")}</p>
    </div>
    <div class="rank-tabs">${tabsHtml}</div>
    <div id="ranking-lista" style="color:var(--texto-muted);text-align:center;padding:40px 0">···</div>
  `;
  cargarRanking();
}

async function cambiarTabRanking(tab) {
  RANKING_TAB = tab;
  document.querySelectorAll(".rank-tab").forEach((b) => b.classList.toggle("activo", b.textContent.trim().startsWith(tab === "global" ? "🌍" : (CURSOS.find(c=>c.id===tab)?.icono||""))));
  // Re-render tabs properly
  pintarRanking();
}

async function cargarRanking() {
  const lista = document.getElementById("ranking-lista");
  if (!lista) return;
  try {
    const resp = await fetch(`/api/ranking?curso=${encodeURIComponent(RANKING_TAB)}`);
    const { ranking, total } = await resp.json();

    if (!ranking || ranking.length === 0) {
      lista.textContent = T("rankingVacio");
      return;
    }

    const totalModulos = RANKING_TAB === "global"
      ? CURSOS.reduce((s, c) => s + ((DATOS[c.id]?.es?.MODULOS?.length) || 0), 0)
      : (DATOS[RANKING_TAB]?.es?.MODULOS?.length || 1);

    const posClase = (i) => i === 0 ? "top1" : i === 1 ? "top2" : i === 2 ? "top3" : "";
    const medalon  = (i) => i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`;

    const filas = ranking.map((r, i) => {
      const esYo = r.nombre === USUARIO;
      const pct = Math.min(100, Math.round((r.completados / totalModulos) * 100));
      return `
        <div class="fila-ranking ${esYo ? "yo" : ""}">
          <div class="rank-pos ${posClase(i)}">${medalon(i)}</div>
          <div class="rank-avatar">${r.nombre.slice(0,2).toUpperCase()}</div>
          <div class="rank-info">
            <div class="rank-nombre">${r.nombre}${esYo ? ` <span style="color:var(--texto-muted);font-weight:400">${T("rankingTu")}</span>` : ""}</div>
            <div class="rank-detalle">${r.completados} ${T("rankingModulos").toLowerCase()} · ${r.media}% ${T("rankingMedia").toLowerCase()}</div>
          </div>
          <div class="rank-barra-wrap">
            <div class="rank-barra-track"><div class="rank-barra-fill" style="width:${pct}%"></div></div>
            <span class="rank-pct">${pct}%</span>
          </div>
        </div>`;
    }).join("");

    lista.innerHTML = `
      <div class="stats-row" style="margin-bottom:20px">
        <div class="stat-pill"><strong>${total}</strong><span>alumnos</span></div>
        <div class="stat-pill"><strong>${ranking.length}</strong><span>con progreso</span></div>
      </div>${filas}`;
  } catch {
    if (lista) lista.textContent = T("errorServidor");
  }
}

/* ---------- PANTALLA: SUGERENCIAS (alumnos) ---------- */

function pintarSugerir() {
  actualizarNavActivo("#/sugerir");
  app.innerHTML = `
    <div class="hero">
      <p class="hero-meta">Academia · Sugerencias</p>
      <h1>💡 Sugiere un tema</h1>
      <p>¿Hay algo que te gustaría aprender y aún no está en la plataforma? Los profesores verán tu propuesta.</p>
    </div>
    <div style="max-width:560px;margin:0 auto">
      <textarea id="texto-sugerencia"
        style="width:100%;box-sizing:border-box;height:140px;resize:vertical;padding:14px;font-family:inherit;
               font-size:.95rem;background:var(--superficie);border:1px solid var(--borde);border-radius:10px;
               color:var(--texto);outline:none;transition:border .2s"
        placeholder="Escribe aquí tu propuesta de tema nuevo (mínimo 10 caracteres)..."
        oninput="this.style.borderColor='var(--borde-hover)'"></textarea>
      <p id="error-sugerencia" style="color:#f87171;min-height:1.4em;margin:8px 0"></p>
      <button class="btn" onclick="enviarSugerencia()">Enviar sugerencia →</button>
      <div id="exito-sugerencia"></div>
    </div>
  `;
}

async function enviarSugerencia() {
  const texto = (document.getElementById("texto-sugerencia")?.value || "").trim();
  const errorEl = document.getElementById("error-sugerencia");
  if (texto.length < 10) {
    if (errorEl) errorEl.textContent = "La sugerencia debe tener al menos 10 caracteres.";
    return;
  }
  if (errorEl) errorEl.textContent = "";

  try {
    const resp = await fetch("/api/sugerencias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alumno: USUARIO, texto }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      document.getElementById("texto-sugerencia").value = "";
      const exitoEl = document.getElementById("exito-sugerencia");
      if (exitoEl) exitoEl.innerHTML = `
        <div style="margin-top:20px;padding:16px;background:rgba(74,222,128,.1);
                    border:1px solid rgba(74,222,128,.25);border-radius:8px;color:var(--verde)">
          ✓ Sugerencia enviada. ¡Gracias por contribuir a la plataforma!
        </div>`;
    } else {
      if (errorEl) errorEl.textContent = datos.error || "Error al enviar.";
    }
  } catch {
    if (errorEl) errorEl.textContent = "Error de conexión.";
  }
}

/* ---------- PANTALLA: PANEL DE ADMIN ---------- */

async function pintarAdmin() {
  actualizarNavActivo("#/admin");
  app.innerHTML = `
    <div class="dashboard-hero">
      <div>
        <p class="hero-meta">Panel de administración</p>
        <h1 style="font-size:1.7rem;font-weight:700;letter-spacing:-.03em;color:var(--acento);margin-top:4px">
          Gestión de alumnos
        </h1>
      </div>
      <div class="stats-row" style="margin-bottom:0">
        <div class="stat-pill" id="pill-alumnos"><strong>···</strong><span>alumnos</span></div>
        <div class="stat-pill" id="pill-cursos"><strong>${CURSOS.length}</strong><span>cursos</span></div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div>
        <h2 class="seccion-titulo">Inscripciones</h2>
        <div id="admin-tabla" style="color:var(--texto-muted);text-align:center;padding:40px 0">Cargando···</div>
      </div>
      <div class="dashboard-sidebar">
        <div class="panel-widget">
          <h2 class="seccion-titulo" style="margin-top:0">Alumnos registrados</h2>
          <div id="admin-lista-sidebar" style="color:var(--texto-muted);font-size:.82rem;padding:4px 0">···</div>
        </div>
        <div class="panel-widget">
          <h2 class="seccion-titulo" style="margin-top:0">💡 Sugerencias</h2>
          <div id="admin-sugerencias-sidebar" style="color:var(--texto-muted);font-size:.82rem;padding:4px 0">···</div>
        </div>
      </div>
    </div>
  `;

  // Load students
  try {
    const resp = await fetch("/api/admin/alumnos", { headers: { "x-admin": USUARIO } });
    const { alumnos } = await resp.json();

    // Update pill
    const pill = document.getElementById("pill-alumnos");
    if (pill) pill.innerHTML = `<strong>${alumnos?.length || 0}</strong><span>alumnos</span>`;

    // Sidebar: simple student list
    const sidebarEl = document.getElementById("admin-lista-sidebar");
    if (sidebarEl && alumnos && alumnos.length > 0) {
      sidebarEl.innerHTML = alumnos.slice(0, 8).map(a => `
        <div class="mini-ranking-fila">
          <div class="rank-avatar" style="width:28px;height:28px;font-size:.7rem;flex-shrink:0">${a.nombre.slice(0,2).toUpperCase()}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:.83rem;color:var(--texto);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.nombre}</div>
            <div style="font-size:.72rem;color:var(--texto-muted)">${a.clases === null ? "todos los cursos" : (a.clases.join(", ") || "sin cursos")}</div>
          </div>
        </div>`).join("") + (alumnos.length > 8 ? `<p style="color:var(--texto-muted);font-size:.75rem;margin-top:8px">+${alumnos.length - 8} más</p>` : "");
    } else if (sidebarEl) {
      sidebarEl.textContent = "No hay alumnos todavía.";
    }

    if (!alumnos || alumnos.length === 0) {
      document.getElementById("admin-tabla").textContent = "No hay alumnos registrados todavía.";
    } else {
      const cabeceraCursos = CURSOS.map((c) => `<th>${c.icono} ${c.titulo}</th>`).join("");
      const filas = alumnos.map((a) => {
        const celdas = CURSOS.map((c) => {
          const inscrito = a.clases === null || a.clases.includes(c.id);
          return `<td style="text-align:center">
            <button class="toggle-inscripcion ${inscrito ? "inscrito" : ""}"
              onclick="toggleInscripcion('${a.nombre}', '${c.id}', ${inscrito}, this)">
              ${inscrito ? "✓" : "○"}
            </button>
          </td>`;
        }).join("");
        return `
          <tr class="fila-admin">
            <td>
              <div class="rank-avatar" style="display:inline-flex;margin-right:8px">${a.nombre.slice(0,2).toUpperCase()}</div>
              <strong>${a.nombre}</strong>
            </td>
            <td style="color:var(--texto-suave);font-size:.82rem">${a.email || "—"}</td>
            ${celdas}
          </tr>`;
      }).join("");

      document.getElementById("admin-tabla").innerHTML = `
        <div style="overflow-x:auto">
          <table class="tabla-admin">
            <thead><tr><th>Alumno</th><th>Email</th>${cabeceraCursos}</tr></thead>
            <tbody>${filas}</tbody>
          </table>
        </div>
        <p style="margin-top:12px;font-size:.75rem;color:var(--texto-muted)">
          ✓ inscrito · ○ sin acceso
        </p>`;
    }
  } catch (e) {
    document.getElementById("admin-tabla").textContent = "Error al cargar los alumnos.";
    console.error(e);
  }

  // Load suggestions in sidebar
  try {
    const respSug = await fetch("/api/sugerencias", { headers: { "x-admin": USUARIO } });
    const { sugerencias } = await respSug.json();
    const sugEl = document.getElementById("admin-sugerencias-sidebar");
    if (!sugEl) return;
    if (!sugerencias || sugerencias.length === 0) {
      sugEl.textContent = "Aún no hay sugerencias.";
      return;
    }
    sugEl.innerHTML = sugerencias.slice(0, 5).map(s => {
      const fecha = new Date(s.fecha).toLocaleDateString("es-ES");
      return `
        <div style="padding:10px 0;border-bottom:1px solid var(--borde)">
          <p style="margin:0 0 3px;font-size:.75rem;color:var(--texto-muted)">${s.alumno} · ${fecha}</p>
          <p style="margin:0;font-size:.83rem;color:var(--texto);line-height:1.4">${s.texto.slice(0, 120)}${s.texto.length > 120 ? "…" : ""}</p>
        </div>`;
    }).join("") + (sugerencias.length > 5 ? `<p style="color:var(--texto-muted);font-size:.75rem;margin-top:8px">+${sugerencias.length - 5} más en el panel completo</p>` : "");

    // Also update the main admin-sugerencias div if it exists (from old layout)
    const oldSugDiv = document.getElementById("admin-sugerencias");
    if (oldSugDiv) oldSugDiv.innerHTML = "";
  } catch (e) {
    const sugEl = document.getElementById("admin-sugerencias-sidebar");
    if (sugEl) sugEl.textContent = "";
    console.error(e);
  }
}

async function toggleInscripcion(alumno, curso, estaInscrito, btn) {
  const accion = estaInscrito ? "remove" : "add";
  btn.disabled = true;
  try {
    const resp = await fetch("/api/admin/enrollar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ admin: USUARIO, alumno, curso, accion }),
    });
    const datos = await resp.json();
    if (datos.ok) {
      const ahora = datos.clases.includes(curso);
      btn.textContent = ahora ? "✓" : "○";
      btn.className = `toggle-inscripcion ${ahora ? "inscrito" : ""}`;
      btn.onclick = () => toggleInscripcion(alumno, curso, ahora, btn);
    }
  } catch (e) {
    console.error(e);
  }
  btn.disabled = false;
}

/* ==================== CALENDARIO ==================== */

let _calMes = new Date().getMonth();
let _calAnio = new Date().getFullYear();
let _calEventos = [];

function pintarCalendario() {
  actualizarNavActivo("#/calendario");
  const esAdmin = ROL === "admin";
  app.innerHTML = `
    <div class="hero">
      <p class="hero-meta">Academia CSM · Calendario</p>
      <h1 style="font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;letter-spacing:-.04em;color:var(--texto);margin-top:6px">Calendario</h1>
    </div>
    <div class="calendario-layout">
      <div class="calendario-main">
        <div class="cal-nav">
          <button onclick="calNavMes(-1)" class="btn secundario" style="padding:6px 14px;font-size:.85rem">←</button>
          <span id="cal-titulo" style="font-weight:700;font-size:.95rem;letter-spacing:-.01em"></span>
          <button onclick="calNavMes(1)" class="btn secundario" style="padding:6px 14px;font-size:.85rem">→</button>
        </div>
        <div class="cal-dias-semana">
          ${["Lu","Ma","Mi","Ju","Vi","Sa","Do"].map(d => `<span>${d}</span>`).join("")}
        </div>
        <div id="cal-grid" class="cal-grid">···</div>
      </div>
      <div class="calendario-aside">
        <div class="panel-widget">
          <h2 class="seccion-titulo" style="margin-top:0">Próximos eventos</h2>
          <div id="cal-proximos" style="color:var(--texto-muted);font-size:.85rem">···</div>
        </div>
        ${esAdmin ? `
        <div class="panel-widget">
          <h2 class="seccion-titulo" style="margin-top:0">Añadir evento</h2>
          <form onsubmit="crearEvento(event)" style="display:flex;flex-direction:column;gap:8px">
            <input class="buscador" id="ev-titulo" placeholder="Título del evento…" required style="margin:0">
            <input class="buscador" id="ev-fecha" type="date" required style="margin:0">
            <input class="buscador" id="ev-desc" placeholder="Descripción (opcional)…" style="margin:0">
            <select class="buscador" id="ev-tipo" style="margin:0">
              <option value="evento">📅 Evento general</option>
              <option value="entrega">📝 Entrega</option>
              <option value="examen">🔬 Examen / evaluación</option>
            </select>
            <button class="btn" type="submit" style="width:100%;margin-top:4px">Añadir evento →</button>
          </form>
        </div>` : ""}
      </div>
    </div>`;
  cargarCalendario();
}

async function cargarCalendario() {
  try {
    const resp = await fetch("/api/eventos");
    const { eventos } = await resp.json();
    _calEventos = eventos || [];
  } catch { _calEventos = []; }
  dibujarCalendario();
  dibujarProximos();
}

function calNavMes(delta) {
  _calMes += delta;
  if (_calMes > 11) { _calMes = 0; _calAnio++; }
  if (_calMes < 0)  { _calMes = 11; _calAnio--; }
  dibujarCalendario();
  dibujarProximos();
}

function dibujarCalendario() {
  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const titulo = document.getElementById("cal-titulo");
  if (titulo) titulo.textContent = `${meses[_calMes]} ${_calAnio}`;

  const grid = document.getElementById("cal-grid");
  if (!grid) return;

  const primerDia = new Date(_calAnio, _calMes, 1);
  const diasEnMes = new Date(_calAnio, _calMes + 1, 0).getDate();
  // Monday-based: 0=Mon … 6=Sun
  let inicioCelda = (primerDia.getDay() + 6) % 7;
  const hoy = new Date();

  const eventosDelMes = _calEventos.filter(e => {
    const f = new Date(e.fecha + "T00:00:00");
    return f.getMonth() === _calMes && f.getFullYear() === _calAnio;
  });

  let html = "";
  for (let i = 0; i < inicioCelda; i++) html += `<div class="cal-dia vacio"></div>`;
  for (let d = 1; d <= diasEnMes; d++) {
    const esHoy = hoy.getDate() === d && hoy.getMonth() === _calMes && hoy.getFullYear() === _calAnio;
    const fechaStr = `${_calAnio}-${String(_calMes+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const evsHoy = eventosDelMes.filter(e => e.fecha === fechaStr);
    const tipoColor = { evento:"var(--acento)", entrega:"var(--ambar)", examen:"var(--rojo)" };
    const dots = evsHoy.map(e => `<span class="cal-dot" style="background:${tipoColor[e.tipo]||'var(--acento)'}"></span>`).join("");
    html += `<div class="cal-dia${esHoy ? " hoy" : ""}${evsHoy.length ? " con-evento" : ""}">
      <span class="cal-num">${d}</span>
      ${dots ? `<div class="cal-dots">${dots}</div>` : ""}
      ${ROL === "admin" && evsHoy.length ? evsHoy.map(e => `<button class="cal-ev-tag" onclick="eliminarEvento(${e.id})" title="${e.titulo} — click para eliminar">${e.titulo.slice(0,12)}${e.titulo.length>12?"…":""}</button>`).join("") : evsHoy.map(e => `<span class="cal-ev-tag">${e.titulo.slice(0,12)}${e.titulo.length>12?"…":""}</span>`).join("")}
    </div>`;
  }
  grid.innerHTML = html;
}

function dibujarProximos() {
  const el = document.getElementById("cal-proximos");
  if (!el) return;
  const hoy = new Date();
  hoy.setHours(0,0,0,0);
  const proximos = _calEventos.filter(e => new Date(e.fecha + "T00:00:00") >= hoy).slice(0, 6);
  if (!proximos.length) { el.textContent = "No hay eventos próximos."; return; }
  const tipoIco = { evento:"📅", entrega:"📝", examen:"🔬" };
  el.innerHTML = proximos.map(e => {
    const fecha = new Date(e.fecha + "T00:00:00");
    const label = fecha.toLocaleDateString("es-ES", { day:"numeric", month:"short" });
    return `<div class="evento-proximo">
      <span class="evento-ico">${tipoIco[e.tipo]||"📅"}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.83rem;color:var(--texto);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.titulo}</div>
        ${e.descripcion ? `<div style="font-size:.75rem;color:var(--texto-muted);margin-top:1px">${e.descripcion}</div>` : ""}
      </div>
      <span style="font-size:.72rem;color:var(--texto-muted);flex-shrink:0">${label}</span>
    </div>`;
  }).join("");
}

async function crearEvento(e) {
  e.preventDefault();
  const titulo = document.getElementById("ev-titulo").value.trim();
  const fecha  = document.getElementById("ev-fecha").value;
  const desc   = document.getElementById("ev-desc").value.trim();
  const tipo   = document.getElementById("ev-tipo").value;
  if (!titulo || !fecha) return;
  try {
    await fetch("/api/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin": USUARIO },
      body: JSON.stringify({ titulo, fecha, descripcion: desc, tipo }),
    });
    e.target.reset();
    await cargarCalendario();
  } catch(err) { console.error(err); }
}

async function eliminarEvento(id) {
  if (!confirm("¿Eliminar este evento?")) return;
  await fetch(`/api/eventos/${id}`, { method: "DELETE", headers: { "x-admin": USUARIO } });
  await cargarCalendario();
}

/* ==================== COMENTARIOS ==================== */

async function cargarComentarios(curso, modulo) {
  const seccion = document.getElementById("comentarios-seccion");
  if (!seccion) return;
  try {
    const resp = await fetch(`/api/comentarios?curso=${curso}&modulo=${modulo}`);
    const { comentarios } = await resp.json();
    const lista = document.getElementById("comentarios-lista");
    if (!lista) return;
    if (!comentarios || comentarios.length === 0) {
      lista.innerHTML = `<p style="color:var(--texto-muted);font-size:.82rem;padding:12px 0">Sé el primero en comentar este módulo.</p>`;
      return;
    }
    lista.innerHTML = comentarios.map(c => {
      const fecha = new Date(c.fecha).toLocaleDateString("es-ES", { day:"numeric", month:"short", year:"numeric" });
      const esAdmin = ROL === "admin";
      return `<div class="comentario">
        <div class="comentario-avatar">${c.autor.slice(0,2).toUpperCase()}</div>
        <div class="comentario-cuerpo">
          <div class="comentario-meta">
            <strong>${c.autor}</strong>
            <span>${fecha}</span>
            ${esAdmin ? `<button onclick="eliminarComentario(${c.id},'${curso}',${modulo})" style="background:none;border:none;color:var(--rojo);cursor:pointer;font-size:.75rem;margin-left:auto">✕</button>` : ""}
          </div>
          <p class="comentario-texto">${c.texto}</p>
        </div>
      </div>`;
    }).join("");
  } catch(err) { console.error(err); }
}

async function enviarComentario(curso, modulo) {
  const textarea = document.getElementById("comentario-input");
  if (!textarea) return;
  const texto = textarea.value.trim();
  if (!texto || texto.length < 3) return;
  const btn = document.getElementById("comentario-btn");
  if (btn) btn.disabled = true;
  try {
    await fetch("/api/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-usuario": USUARIO },
      body: JSON.stringify({ curso, modulo, texto }),
    });
    textarea.value = "";
    await cargarComentarios(curso, modulo);
  } catch(err) { console.error(err); }
  finally { if (btn) btn.disabled = false; }
}

async function eliminarComentario(id, curso, modulo) {
  if (!confirm("¿Eliminar este comentario?")) return;
  await fetch(`/api/comentarios/${id}`, { method: "DELETE", headers: { "x-admin": USUARIO } });
  await cargarComentarios(curso, modulo);
}
