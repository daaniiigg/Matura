# DIARIO — Día 3: Construyendo un LMS de Gemelos Digitales

## Objetivo del día
Convertir la investigación sobre gemelos digitales en una plataforma LMS funcional:
módulos, quizzes y progreso guardado.

---

## Conceptos que han aparecido

### Las 4 partes de un LMS (analogía: una academia física)
1. **Frontend** — las aulas: lo que el estudiante ve en pantalla (la landing de ayer era esto)
2. **Contenido** — el temario: la investigación ya hecha, troceada en módulos
3. **Quizzes** — los exámenes: lógica de pregunta → respuesta → corrección
4. **Progreso** — el expediente del alumno: dónde se apunta lo que has completado

### Pregunta abierta (aún sin responder)
> Si guardamos el progreso "dentro de la pantalla", ¿qué pasa cuando cierras la pestaña?

---

### Nuevos conceptos (durante la construcción)
- **La nube** = el ordenador de otra persona, encendido 24/7 en un edificio lejano. Guardar "en la nube" es enviarle tu dato y pedírselo de vuelta.
- **localStorage** = una pequeña "libreta" que el navegador guarda en ESTE ordenador. Sobrevive a cerrar la pestaña, pero solo existe en este navegador y este ordenador.
- **Separación de responsabilidades**: 4 archivos, 4 papeles — el edificio (HTML), la decoración (CSS), el temario (data.js) y el profesor (app.js). Así puedes cambiar el contenido sin tocar la lógica.

### Primer bug del día 🐛 (¡resuelto!)
- Al abrir la página, los enlaces no funcionaban. Solución: abrirla desde `http://localhost:4173`.
- **Concepto — servidor:** un programa "camarero": tú le pides la página y él te la trae. Sin camarero, el navegador a veces se pone quisquilloso.
- **Concepto — localhost:** significa "mi propio ordenador". La página NO está en internet: solo la ve este PC.
- **Concepto — caché:** el navegador a veces te enseña una "foto vieja" de la página que guardó antes. Ctrl+F5 fuerza que pida la nueva.
- **Herramienta — la consola (F12):** donde el navegador se queja en rojo cuando algo falla. La herramienta nº 1 para diagnosticar.
- Pregunta abierta: si localhost es "mi ordenador"... ¿podría un compañero abrir esta dirección desde su casa?

---

## Decisiones tomadas

### De producto (las tomó Daniel)
1. Ficha de vocabulario por módulo, con tecnicismos explicados en fácil
2. Repaso de lo fallado tras cada quiz: tu respuesta, la correcta y el porqué
3. El progreso "debería guardarse en la nube" → intuición correcta, pero primero construimos la versión simple (navegador) para entender el porqué

### De ejecución (las tomó Claude, explicadas)
1. **4 archivos separados**: `index.html` (estructura), `styles.css` (aspecto), `data.js` (contenido), `app.js` (lógica)
2. El progreso se guarda de momento en **localStorage** (la libreta del navegador)
3. Se guarda siempre la **mejor nota** conseguida en cada quiz
4. Navegación por rutas con `#` para que el botón "atrás" del navegador funcione

---

## Qué funciona (verificado)
- ✅ Portada con los 8 módulos en 4 secciones y barra de progreso global
- ✅ Cada lección con objetivos, ficha de vocabulario y contenido completo
- ✅ Quiz de 4 preguntas por módulo con corrección automática
- ✅ Repaso de fallos: tu respuesta vs. la correcta + explicación
- ✅ Progreso guardado: sobrevive a cerrar la pestaña (en este ordenador)
- ✅ Página "Mi progreso" con notas y fechas
- ✅ Glosario con buscador (20 términos)

---

## Los dos muros del día (descubiertos por Daniel experimentando) 🧱

### Muro 1 — El progreso no me sigue
Experimento: quiz completado → en incógnito el progreso NO está.
- **Concepto — persistencia:** dónde y cómo sobreviven los datos.
- localStorage = libreta pegada a UN pupitre. Otro navegador/PC = otro pupitre con libreta vacía.
- **Solución: backend** (la "cocina" del restaurante; lo visible es el **frontend**, el comedor) + **base de datos** (el archivador central de la secretaría).
- Y si la secretaría guarda el expediente de todos → hace falta **carnet de alumno** = cuentas de usuario / login.

### Muro 2 — Nadie más puede entrar
Daniel lo dedujo: "si una persona lo abriera de su PC no podría ver el archivo, está cargado desde mi PC propio".
- localhost = academia sin puerta a la calle. El servidor corre en mi portátil.
- **Solución: publicar en la nube** = mover el servidor a un ordenador encendido 24/7 con dirección pública.
- La intuición de la mañana ("guardar en la nube") era correcta — ahora sabemos POR QUÉ.

---

## ¡La secretaría está construida! (backend v1)

### Qué se hizo
- Nuevo archivo **`server.js`**: un programa que corre FUERA del navegador, con dos trabajos:
  1. **Camarero**: sirve la página cuando un navegador la pide
  2. **Secretaría**: guarda el expediente de cada alumno en **`progreso.json`** (el archivador central)
- La ventanilla de la secretaría se llama **API**: el navegador le habla con dos frases:
  - "dame el expediente de daniel" (GET /api/progreso/daniel)
  - "apunta esto en el expediente de daniel" (POST /api/progreso/daniel)
- Pantalla de entrada: escribes tu nombre → la plataforma recupera TU expediente
- localStorage ya solo recuerda quién se sentó en este pupitre (no las notas)

### Verificado con el experimento definitivo
1. Alumno de prueba hace un quiz → nota guardada
2. Se borra TODO el rastro local (= pupitre nuevo / incógnito)
3. Vuelve a entrar con su nombre → **la secretaría devuelve su nota** ✅
4. `progreso.json` muestra dos alumnos con dos expedientes separados: **una base de datos en miniatura**

### Conceptos nuevos
- **API**: la ventanilla por donde el frontend habla con el backend
- **Login**: el carnet de alumno — cómo la secretaría sabe qué expediente es el tuyo
- **Base de datos (v0)**: nuestro progreso.json es un archivador simple; las de verdad (PostgreSQL, MySQL...) son archivadores industriales con miles de cajones y varias personas buscando a la vez

---

## Mejoras de la tarde (pedidas por Daniel)

### 1. Quizzes con baraja aleatoria 🎲
- Cada intento baraja el orden de las preguntas y el de las respuestas.
- Memorizar "la tercera era la b" ya no sirve: hay que saberse el contenido.

### 2. Idiomas: ES / EN / DE 🌐
- **Concepto — internacionalización (i18n):** separar los textos del código en un "libro de frases" (diccionario por idioma). Añadir un idioma nuevo = añadir una página al libro, sin tocar la lógica.
- **Concepto — fallback:** red de seguridad; si algo no está traducido aún, se muestra en español en vez de romperse.
- La interfaz completa está en los 3 idiomas; el Módulo 1 traducido entero (lección + vocabulario + quiz). Los módulos 2-8 y el glosario en proceso (dos traductores IA en paralelo).
- Detalle de criterio: la preferencia de idioma SÍ se guarda en localStorage — porque es una preferencia de este navegador, no parte del expediente académico. Cada dato en su sitio.

### Daniel razonó bien sobre las contraseñas 🔑
"Al no haber ninguna, no hay bloqueo" → correcto. El nombre es una etiqueta, no una protección.
- **Identificación** = decir quién eres · **Autenticación** = demostrarlo.
- Hoy tenemos lo primero sin lo segundo. Muro pendiente.

---

## Día 4 — Contraseñas y autenticación

### Decisión de producto (tomó Daniel)
Añadir contraseñas ANTES de publicar en internet. Razonamiento: si hay usuarios reales, sus expedientes deben estar protegidos desde el primer día.

### Qué se construyó

#### Nuevo archivo: `usuarios.json`
Un segundo archivador en la secretaría, separado de los expedientes. Guarda por cada alumno:
- `sal`: un número aleatorio único (para que dos alumnos con la misma contraseña tengan hashes distintos)
- `hash`: la "huella digital" de la contraseña — no se puede revertir para obtener el original

**Concepto — hash criptográfico:** es como una picadora. Metes la contraseña → sale una ristra de letras y números. Puedes repetirlo mil veces con la misma entrada y siempre sale igual. Pero no puedes meter la ristra y que salga la contraseña original. Así, si alguien roba el archivador, no puede saber las contraseñas.

**Concepto — sal (salt):** si dos alumnos ponen "1234" como contraseña, sin sal tendrían el mismo hash → un ladrón lo detectaría. Con sal aleatoria, sus hashes son completamente distintos aunque la contraseña sea idéntica.

#### Dos ventanillas nuevas en la secretaría (API)
- `POST /api/registro` → crea cuenta nueva (nombre + contraseña cifrada)
- `POST /api/login` → verifica que el nombre y contraseña coinciden

#### Pantalla de entrada renovada
- Modo **"Entrar"** (por defecto): nombre + contraseña
- Modo **"Crear cuenta"**: nombre + contraseña + confirmar contraseña
- Toggle entre modos sin recargar la página
- Validación en tiempo real antes de enviar al servidor:
  - Mínimo 8 caracteres
  - Al menos un carácter especial (!@#$%...)
  - Las dos contraseñas deben coincidir

### Verificado
- ✅ Contraseña corta → error inmediato sin llamar al servidor
- ✅ Sin carácter especial → error inmediato
- ✅ Contraseñas distintas → error inmediato
- ✅ Nombre repetido → error del servidor ("ese nombre ya está en uso")
- ✅ Contraseña incorrecta → error del servidor ("nombre o contraseña incorrectos")
- ✅ Login correcto → acceso al expediente
- ✅ `usuarios.json` guarda hashes, nunca contraseñas en texto plano

### Limitación conocida (Muro pendiente) 🧱
**Auto-login desde el navegador:** si ya iniciaste sesión, el navegador te recuerda (localStorage) y no vuelve a pedir contraseña en la misma máquina. Es cómodo pero inseguro: alguien con acceso a tu ordenador podría entrar sin contraseña.
- **Solución real:** tokens de sesión con fecha de caducidad (siguiente paso cuando se publique en internet)

## Qué queda pendiente
- Terminar traducciones EN/DE de módulos 2-8 y glosario
- Publicar la plataforma en internet (resolver el problema del login que falló ayer)
- Tokens de sesión: que el auto-login también verifique con el servidor
