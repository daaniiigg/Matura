/* ============================================================
   TEMARIO — Todo el contenido de la plataforma vive aquí.
   Cada módulo tiene: contenido, ficha de vocabulario y quiz.
   Fuente: investigación "Gemelos Digitales" (julio 2026, 29 fuentes)
   ============================================================ */

const SECCIONES = [
  { id: "fundamentos", nombre: "📘 Fundamentos" },
  { id: "tecnologia", nombre: "⚙️ Tecnología" },
  { id: "mercado", nombre: "🏭 Mercado e industria" },
  { id: "analisis", nombre: "🔍 Análisis crítico" },
];

const MODULOS = [
  /* ================= MÓDULO 1 ================= */
  {
    id: 1,
    seccion: "fundamentos",
    titulo: "¿Qué es un gemelo digital?",
    minutos: 8,
    objetivos: [
      "Definir con precisión qué es un gemelo digital y qué lo diferencia de una simulación estática.",
      "Comprender el concepto de conexión bidireccional entre el mundo físico y el espacio digital.",
      "Identificar las tres funciones principales: descriptiva, predictiva y prescriptiva.",
    ],
    contenido: `
      <h2>Definición formal</h2>
      <blockquote><strong>Un gemelo digital</strong> (<em>digital twin</em>) es una réplica virtual dinámica de un objeto, sistema o proceso físico real, alimentada en tiempo real por datos de sensores y dispositivos conectados, que permite simular, analizar y optimizar el comportamiento de su contraparte física.<br><small>Fuente: AWS (2025) · OpenText (2025) · UNIR (2025)</small></blockquote>
      <p>La clave está en tres palabras: <strong>réplica virtual dinámica</strong>. No es una fotografía estática del objeto, sino una representación que cambia en tiempo real a medida que el objeto físico cambia.</p>
      <blockquote>💡 <strong>Analogía:</strong> piensa en el GPS de navegación de un coche. No solo muestra el mapa estático — recibe datos del tráfico en tiempo real, recalcula rutas y anticipa lo que pasará. Un gemelo digital hace exactamente eso, pero para cualquier sistema físico: una turbina, un hospital o un puente.</blockquote>

      <h2>La conexión bidireccional</h2>
      <p>El elemento más importante — y más frecuentemente malentendido — es la <strong>bidireccionalidad</strong>. El gemelo digital no solo recibe datos del mundo físico: también puede devolver instrucciones, alertas o recomendaciones al sistema físico.</p>
      <pre>MUNDO FÍSICO  →  datos en tiempo real  →  GEMELO DIGITAL
GEMELO DIGITAL  →  instrucciones y alertas  →  MUNDO FÍSICO</pre>
      <p>Es un espejo inteligente que no solo refleja: también piensa y actúa.</p>
      <blockquote>ℹ️ <strong>Diferencia clave:</strong> un modelo CAD es una fotografía del objeto. Un gemelo digital es un vídeo en directo. La diferencia no es cosmética — es estructural.</blockquote>

      <h2>Las tres funciones principales</h2>
      <h3>Función 01 · Descriptivo</h3>
      <p>Muestra el estado actual del objeto físico en tiempo real. Responde a: <em>¿qué está pasando ahora mismo?</em> Es el nivel más básico — basta con conectar los sensores y visualizar los datos.</p>
      <h3>Función 02 · Predictivo</h3>
      <p>Incorpora modelos de machine learning para anticipar comportamientos futuros. Responde a: <em>¿qué va a pasar si seguimos así?</em> Detectar un fallo antes de que ocurra tiene un valor económico directo.</p>
      <h3>Función 03 · Prescriptivo</h3>
      <p>El nivel más avanzado: no solo predice, sino que recomienda acciones concretas y optimizadas. Responde a: <em>¿qué deberíamos hacer y cuándo?</em> Aquí el gemelo deja de ser una herramienta de análisis para convertirse en un sistema de gestión autónomo.</p>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿En qué se diferencia un gemelo digital de una simulación convencional de ingeniería?</li>
        <li>¿Puede un gemelo digital ser útil sin la función prescriptiva? ¿Para qué casos bastaría con la descriptiva?</li>
        <li>¿Qué datos necesitarías para construir un gemelo digital de una biblioteca universitaria?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Réplica virtual dinámica", explicacion: "Una copia digital que cambia a la vez que cambia el objeto real. Como un espejo que se mueve contigo." },
      { termino: "Bidireccional", explicacion: "La información viaja en los dos sentidos: del objeto real al digital, y del digital de vuelta al real." },
      { termino: "CAD", explicacion: "Programa para dibujar objetos en 3D en el ordenador. Es una foto fija: no se actualiza solo." },
      { termino: "Descriptivo / Predictivo / Prescriptivo", explicacion: "Tres niveles: te dice qué pasa ahora → qué va a pasar → qué deberías hacer." },
      { termino: "Sensor", explicacion: "Pequeño aparato que mide algo del mundo real (temperatura, vibración, posición) y lo convierte en datos." },
    ],
    quiz: [
      {
        pregunta: "¿Cuál es la diferencia fundamental entre un gemelo digital y un modelo CAD?",
        opciones: [
          "El gemelo digital se actualiza en tiempo real con datos del objeto físico; el CAD es estático",
          "El CAD es en 3D y el gemelo digital en 2D",
          "El gemelo digital es más barato de crear",
          "No hay diferencia, son sinónimos",
        ],
        correcta: 0,
        explicacion: "El CAD es como una fotografía del objeto; el gemelo digital es un vídeo en directo que cambia cuando el objeto real cambia.",
      },
      {
        pregunta: "¿Qué significa que la conexión de un gemelo digital sea 'bidireccional'?",
        opciones: [
          "Que funciona en dos ordenadores a la vez",
          "Que recibe datos del mundo físico Y devuelve instrucciones o alertas al sistema físico",
          "Que tiene dos copias de seguridad",
          "Que dos usuarios pueden verlo al mismo tiempo",
        ],
        correcta: 1,
        explicacion: "El gemelo no solo refleja: también piensa y actúa. Los datos viajan del mundo físico al digital, y las instrucciones de vuelta.",
      },
      {
        pregunta: "Un gemelo que responde a '¿qué va a pasar si seguimos así?' está ejerciendo la función...",
        opciones: ["Descriptiva", "Prescriptiva", "Predictiva", "Reactiva"],
        correcta: 2,
        explicacion: "La función predictiva usa datos históricos y modelos de IA para anticipar el futuro. La descriptiva muestra el presente; la prescriptiva recomienda acciones.",
      },
      {
        pregunta: "¿Qué necesita como mínimo un gemelo digital descriptivo?",
        opciones: [
          "IA avanzada y sistemas de decisión automática",
          "Sensores conectados y visualización de datos",
          "Un modelo 3D fotorrealista",
          "Años de datos históricos",
        ],
        correcta: 1,
        explicacion: "El nivel descriptivo es el más básico: basta con conectar sensores y visualizar sus datos. La IA solo hace falta para predecir o prescribir.",
      },
    ],
  },

  /* ================= MÓDULO 2 ================= */
  {
    id: 2,
    seccion: "fundamentos",
    titulo: "Historia y origen",
    minutos: 7,
    objetivos: [
      "Identificar los antecedentes del concepto en el Programa Apollo de la NASA.",
      "Conocer la contribución de Michael Grieves (2002) y John Vickers (2010).",
      "Comprender la evolución del concepto hasta el metaverso industrial de 2025–2026.",
    ],
    contenido: `
      <h2>Línea de tiempo</h2>
      <h3>1960s · NASA — El primer "gemelo", físico, no digital</h3>
      <p>Durante el Programa Apollo, la NASA construía <strong>vehículos espaciales físicamente idénticos</strong> que permanecían en la Tierra para replicar las condiciones de la nave en misión. En la crisis del <strong>Apollo 13</strong>, este gemelo terrestre permitió simular opciones de rescate mientras la tripulación aguardaba en el espacio. El concepto funcionaba — pero construir réplicas físicas era prohibitivamente caro.</p>

      <h3>2002 · Universidad de Michigan — Michael Grieves formaliza el concepto</h3>
      <p>El Dr. <strong>Michael Grieves</strong> presenta el primer marco conceptual del gemelo digital en el contexto de la gestión del ciclo de vida de productos (PLM). Define sus <strong>tres elementos esenciales</strong>, que permanecen vigentes hoy:</p>
      <ol>
        <li><strong>Espacio real:</strong> el objeto físico y sus propiedades.</li>
        <li><strong>Espacio virtual:</strong> la representación digital del objeto.</li>
        <li><strong>Flujo de datos bidireccional:</strong> la conexión continua entre ambos espacios.</li>
      </ol>

      <h3>2010 · NASA — John Vickers acuña "Digital Twin"</h3>
      <p>El investigador de la NASA <strong>John Vickers</strong>, trabajando junto a Grieves, propone el nombre definitivo: <em>Digital Twin</em>. El término se publica en un informe técnico de la NASA y se extiende globalmente.</p>

      <h3>2012–2020 · Expansión industrial — GE, Siemens, PTC</h3>
      <p>El abaratamiento de los sensores IoT, la computación en nube y el Big Data hacen que la tecnología abandone el ámbito aeroespacial. <strong>General Electric, Siemens, PTC y ANSYS</strong> comercializan las primeras plataformas para manufactura, energía y construcción.</p>

      <h3>2025–2026 · Metaverso industrial — Siemens + NVIDIA</h3>
      <p>La alianza Siemens + NVIDIA materializa el <strong>metaverso industrial</strong>: gemelos fotorrealistas, físicamente precisos, integrados con IA generativa.</p>
      <blockquote>"La idea de construir plantas de fabricación sin hacerlo antes en un gemelo digital es completamente inconcebible."<br>— Roland Busch, CEO de Siemens, CES 2026</blockquote>

      <h2>Para recordar</h2>
      <p>La diferencia entre el "gemelo físico" del Apollo y el gemelo digital moderno es la misma que entre una fotocopia en papel y un archivo digital — ambos son réplicas, pero solo uno puede actualizarse en tiempo real, transmitirse instantáneamente y existir a coste marginal cero.</p>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué el concepto tardó casi 40 años en pasar del Programa Apollo a su formalización académica?</li>
        <li>¿Qué tecnología fue más determinante para que los gemelos se volvieran viables entre 2012 y 2020?</li>
        <li>¿En qué se diferencia el "metaverso industrial" de un gemelo digital convencional?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "PLM", explicacion: "Gestión del ciclo de vida del producto: seguir un producto desde que se diseña hasta que se retira. Aquí nació la idea del gemelo digital." },
      { termino: "Programa Apollo", explicacion: "Misiones de la NASA para llegar a la Luna (años 60-70). Usaban naves gemelas físicas en la Tierra para simular problemas." },
      { termino: "Metaverso industrial", explicacion: "Fábricas enteras recreadas en 3D fotorrealista donde se prueba todo en digital antes de tocar nada real." },
      { termino: "Coste marginal cero", explicacion: "Hacer una copia más no cuesta casi nada. Copiar un archivo es gratis; construir otra nave espacial, no." },
    ],
    quiz: [
      {
        pregunta: "¿Dónde está el antecedente más antiguo del concepto de gemelo?",
        opciones: [
          "En los videojuegos de los años 90",
          "En el Programa Apollo de la NASA, con naves gemelas físicas en la Tierra",
          "En las fábricas de coches de los años 50",
          "En la Universidad de Michigan en 2002",
        ],
        correcta: 1,
        explicacion: "La NASA construía vehículos idénticos que quedaban en la Tierra. En el Apollo 13 sirvieron para simular el rescate. Eran gemelos físicos, no digitales.",
      },
      {
        pregunta: "¿Quién formalizó el concepto de gemelo digital en 2002 y dónde?",
        opciones: [
          "John Vickers, en la NASA",
          "Jensen Huang, en NVIDIA",
          "Michael Grieves, en la Universidad de Michigan",
          "Roland Busch, en Siemens",
        ],
        correcta: 2,
        explicacion: "Michael Grieves presentó el primer marco conceptual en la Universidad de Michigan. John Vickers (NASA) acuñó el nombre 'Digital Twin' después, en 2010.",
      },
      {
        pregunta: "¿Cuáles son los tres elementos esenciales que definió Grieves?",
        opciones: [
          "Sensores, nube y pantalla",
          "Espacio real, espacio virtual y flujo de datos bidireccional",
          "Hardware, software y usuarios",
          "Diseño, fabricación y mantenimiento",
        ],
        correcta: 1,
        explicacion: "Los tres elementos de Grieves siguen vigentes hoy: el objeto físico, su representación digital y la conexión continua entre ambos.",
      },
      {
        pregunta: "¿Qué hizo posible la expansión industrial de los gemelos digitales entre 2012 y 2020?",
        opciones: [
          "El abaratamiento de sensores IoT, la nube y el Big Data",
          "La llegada de los smartphones",
          "Las redes sociales",
          "La impresión 3D",
        ],
        correcta: 0,
        explicacion: "Sensores baratos + computación en nube + Big Data hicieron viable lo que antes solo podía permitirse la NASA.",
      },
    ],
  },

  /* ================= MÓDULO 3 ================= */
  {
    id: 3,
    seccion: "tecnologia",
    titulo: "Arquitectura tecnológica",
    minutos: 10,
    objetivos: [
      "Describir las cinco capas de la arquitectura de un gemelo digital.",
      "Identificar el rol específico de IoT, Big Data, IA, cloud y edge computing.",
      "Comprender por qué cada capa es necesaria y qué ocurre si alguna falla.",
    ],
    contenido: `
      <h2>Las cinco capas tecnológicas</h2>
      <p>Un gemelo digital no es una tecnología única, sino la <strong>convergencia de varias capas</strong> que trabajan en conjunto. Cada capa depende de la anterior: si los sensores no funcionan, el gemelo no tiene datos; si no hay datos, no hay IA que analizar.</p>
      <pre>┌────────────────────────────────────────────┐
│ CAPA 05 · Aplicaciones                     │
│ dashboards · alertas · predicciones        │
├────────────────────────────────────────────┤
│ CAPA 04 · Gemelo digital                   │
│ modelo 3D · IA · simulación física         │
├────────────────────────────────────────────┤
│ CAPA 03 · Datos y análisis                 │
│ Big Data · cloud · edge computing          │
├────────────────────────────────────────────┤
│ CAPA 02 · Conectividad                     │
│ WiFi · 5G · LoRaWAN · OPC-UA · MQTT        │
├────────────────────────────────────────────┤
│ CAPA 01 · Sensores y mundo físico          │
│ temperatura · vibración · GPS · cámaras    │
└────────────────────────────────────────────┘
              ↑ flujo de datos</pre>

      <h2>Las seis tecnologías habilitadoras</h2>
      <h3>1. Internet de las Cosas (IoT)</h3>
      <p>Red de sensores que capturan datos del mundo físico. <strong>Sin IoT, el gemelo no tiene "ojos".</strong> El descenso del coste de los chips y el 5G han sido los catalizadores de la adopción masiva. <em>Actúa en: Capas 01 y 02.</em></p>
      <h3>2. Big Data</h3>
      <p>Los sensores generan volúmenes de datos que ningún sistema convencional puede gestionar. El Big Data aporta la infraestructura para ingerirlos, almacenarlos y procesarlos a escala industrial. <em>Actúa en: Capa 03.</em></p>
      <h3>3. Inteligencia Artificial y Machine Learning</h3>
      <p>Los modelos de IA transforman datos en predicciones: detectan patrones de desgaste, anticipan fallos y optimizan parámetros. <strong>La IA es lo que convierte un gemelo descriptivo en predictivo o prescriptivo.</strong> <em>Actúa en: Capa 04.</em></p>
      <h3>4. Computación en la nube y edge computing</h3>
      <p>La <strong>nube</strong> da la escalabilidad para procesar y almacenar grandes volúmenes. El <strong>edge computing</strong> — procesar junto al sensor, sin enviar los datos lejos — reduce la latencia cuando la respuesta en tiempo real es crítica.</p>
      <blockquote>💡 <strong>Ejemplo:</strong> en una línea de producción que decide cada 50 milisegundos, no se puede esperar el viaje de ida y vuelta a un servidor lejano. El edge procesa localmente y solo envía resúmenes a la nube.</blockquote>
      <h3>5. Modelado y simulación</h3>
      <p>Herramientas CAD, BIM y modelos físico-matemáticos construyen la representación digital. Es el "cuerpo" del gemelo: geometría, propiedades físicas y comportamiento esperado. <em>Actúa en: Capa 04.</em></p>
      <h3>6. Plataformas de integración y APIs</h3>
      <p>APIs y middleware que conectan sistemas heterogéneos: sensores de distintos fabricantes, ERP, MES, SCADA y nubes. Sin esta capa, los componentes no pueden hablar entre sí. La falta de estándares universales es uno de los grandes desafíos actuales. <em>Actúa en: Capas 02 y 03.</em></p>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Qué capa es más crítica en un gemelo digital de un hospital? ¿Por qué?</li>
        <li>¿Cómo afecta la privacidad de forma diferente a la Capa 01 (sensores) y a la Capa 05 (aplicaciones)?</li>
        <li>Si una empresa no puede permitirse infraestructura cloud propia, ¿qué alternativas tiene?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "IoT", explicacion: "Objetos físicos conectados a internet (sensores, máquinas) que envían datos solos. Son los 'ojos' del gemelo." },
      { termino: "Big Data", explicacion: "Tecnología para manejar cantidades gigantes de datos que un ordenador normal no podría procesar." },
      { termino: "Machine Learning", explicacion: "Programas que aprenden solos mirando datos, sin que nadie les programe cada regla." },
      { termino: "Edge computing", explicacion: "Procesar los datos al lado del sensor en vez de enviarlos a un servidor lejano. Ahorra tiempo de viaje." },
      { termino: "Latencia", explicacion: "El tiempo que tarda un dato en viajar de un sitio a otro. Como el 'lag' en un videojuego online." },
      { termino: "API", explicacion: "El 'idioma común' que permite que dos programas distintos se entiendan y se pasen datos." },
    ],
    quiz: [
      {
        pregunta: "¿Qué pasa si falla la Capa 01 (sensores) de un gemelo digital?",
        opciones: [
          "Nada, las demás capas lo compensan",
          "El gemelo se queda sin datos del mundo real: pierde sus 'ojos'",
          "Solo se pierde el modelo 3D",
          "El gemelo funciona más lento pero funciona",
        ],
        correcta: 1,
        explicacion: "Cada capa depende de la anterior. Sin sensores no hay datos, y sin datos no hay nada que analizar ni predecir.",
      },
      {
        pregunta: "¿Qué tecnología convierte un gemelo descriptivo en predictivo o prescriptivo?",
        opciones: [
          "El modelado CAD",
          "Los protocolos MQTT",
          "La inteligencia artificial y el machine learning",
          "El WiFi de alta velocidad",
        ],
        correcta: 2,
        explicacion: "Sin IA, el gemelo solo muestra el estado actual. Los modelos de machine learning son los que permiten anticipar fallos y recomendar acciones.",
      },
      {
        pregunta: "¿Para qué sirve el edge computing?",
        opciones: [
          "Para hacer el modelo 3D más realista",
          "Para procesar datos junto al sensor y reducir la latencia cuando la respuesta debe ser inmediata",
          "Para abaratar los sensores",
          "Para guardar copias de seguridad",
        ],
        correcta: 1,
        explicacion: "Cuando un sistema decide cada 50 milisegundos, no puede esperar el viaje a un servidor lejano. El edge procesa localmente y solo envía resúmenes a la nube.",
      },
      {
        pregunta: "¿Por qué son necesarias las plataformas de integración y APIs?",
        opciones: [
          "Para que sistemas de distintos fabricantes puedan comunicarse entre sí",
          "Para hacer los dashboards más bonitos",
          "Para reducir el precio de la nube",
          "Para sustituir a los sensores",
        ],
        correcta: 0,
        explicacion: "Sensores de distintas marcas, sistemas ERP, MES, SCADA... sin un 'idioma común' (APIs), los componentes no pueden hablar entre sí.",
      },
    ],
  },

  /* ================= MÓDULO 4 ================= */
  {
    id: 4,
    seccion: "tecnologia",
    titulo: "Tipos de gemelos digitales",
    minutos: 6,
    objetivos: [
      "Distinguir los cuatro tipos de gemelos según escala: componente, activo, sistema y proceso.",
      "Diferenciar las funciones descriptiva, predictiva y prescriptiva.",
      "Relacionar cada tipo con casos de uso concretos.",
    ],
    contenido: `
      <h2>Clasificación por escala del objeto modelado</h2>
      <h3>Tipo 01 · Gemelo de componente <em>(escala micro)</em></h3>
      <p>Modela una pieza individual: un rodamiento, un motor, una válvula. Es el punto de partida más habitual. <strong>Ejemplo:</strong> el gemelo de un rodamiento en una turbina que detecta desgaste prematuro antes de que provoque un fallo mayor.</p>
      <h3>Tipo 02 · Gemelo de activo <em>(escala meso)</em></h3>
      <p>Integra varios componentes en un equipo completo: una turbina de viento, una línea de montaje, un vehículo. <strong>Ejemplo:</strong> gemelo de un avión completo para planificar el mantenimiento de todos sus sistemas.</p>
      <h3>Tipo 03 · Gemelo de sistema <em>(escala macro)</em></h3>
      <p>Replica sistemas enteros con múltiples activos: una planta de producción, una red eléctrica, un aeropuerto. <strong>Ejemplo:</strong> gemelo de una planta petroquímica para simular cambios antes de implementarlos físicamente.</p>
      <h3>Tipo 04 · Gemelo de proceso <em>(escala global)</em></h3>
      <p>Modela flujos de trabajo completos: cadenas de suministro, procesos hospitalarios, ciudades enteras. <strong>Ejemplo: Virtual Singapore</strong> — la réplica virtual de toda la ciudad-Estado, usada para planificación urbana, emergencias y tráfico.</p>

      <h2>Clasificación por función desempeñada</h2>
      <p>Estas tres funciones son <strong>acumulativas</strong>: un gemelo prescriptivo también es predictivo y descriptivo.</p>
      <table>
        <tr><th>Función</th><th>Pregunta que responde</th><th>Requisitos</th></tr>
        <tr><td><strong>Descriptivo</strong></td><td>¿Qué está pasando ahora mismo?</td><td>Sensores + visualización</td></tr>
        <tr><td><strong>Predictivo</strong></td><td>¿Qué va a pasar si seguimos así?</td><td>Datos históricos + IA</td></tr>
        <tr><td><strong>Prescriptivo</strong></td><td>¿Qué deberíamos hacer y cuándo?</td><td>IA avanzada + sistemas de decisión</td></tr>
      </table>

      <h2>Relación entre escala y función</h2>
      <p>Los gemelos más simples (componente) suelen empezar siendo descriptivos y evolucionar hacia lo predictivo. Los gemelos de proceso (ciudades, hospitales) incorporan con más frecuencia funciones prescriptivas, porque su complejidad hace inviable gestionarlos sin recomendaciones automáticas.</p>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿En qué tipo clasificarías Virtual Singapore según la escala? ¿Y según la función?</li>
        <li>¿Podría un gemelo de componente ser al mismo tiempo prescriptivo? ¿Qué necesitaría?</li>
        <li>¿Por qué la mayoría de implementaciones empiezan por componente o activo, y no por sistema o proceso?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Componente", explicacion: "Una pieza suelta: un rodamiento, una válvula, un motor. Lo más pequeño que se puede modelar." },
      { termino: "Activo", explicacion: "Un equipo completo formado por varias piezas: un avión, una turbina, un coche." },
      { termino: "Sistema", explicacion: "Un conjunto de equipos que trabajan juntos: una fábrica entera, una red eléctrica." },
      { termino: "Proceso", explicacion: "Un flujo de trabajo completo, lo más grande: una cadena de suministro o una ciudad entera." },
      { termino: "Funciones acumulativas", explicacion: "Cada nivel incluye los anteriores: si un gemelo recomienda (prescriptivo), también predice y describe." },
    ],
    quiz: [
      {
        pregunta: "Virtual Singapore, la réplica de toda la ciudad-Estado, es un gemelo de tipo...",
        opciones: ["Componente", "Activo", "Sistema", "Proceso"],
        correcta: 3,
        explicacion: "Una ciudad entera es la escala más global que existe: un gemelo de proceso, el nivel más complejo y el que más inversión requiere.",
      },
      {
        pregunta: "El gemelo de un rodamiento individual dentro de una turbina es un gemelo de...",
        opciones: ["Componente", "Activo", "Sistema", "Proceso"],
        correcta: 0,
        explicacion: "Una pieza individual = escala micro = gemelo de componente. Es el punto de partida más habitual.",
      },
      {
        pregunta: "Si un gemelo digital es prescriptivo, ¿qué otras funciones tiene garantizadas?",
        opciones: [
          "Ninguna, son excluyentes",
          "Solo la predictiva",
          "La descriptiva y la predictiva, porque las funciones son acumulativas",
          "Depende del fabricante",
        ],
        correcta: 2,
        explicacion: "Las funciones son acumulativas: para recomendar qué hacer (prescriptivo), antes necesita saber qué pasa (descriptivo) y qué pasará (predictivo).",
      },
      {
        pregunta: "El gemelo de un avión completo que integra todos sus sistemas es un gemelo de...",
        opciones: ["Componente", "Activo", "Sistema", "Proceso"],
        correcta: 1,
        explicacion: "Un equipo completo formado por varios componentes integrados = gemelo de activo (escala meso).",
      },
    ],
  },

  /* ================= MÓDULO 5 ================= */
  {
    id: 5,
    seccion: "mercado",
    titulo: "El mercado global",
    minutos: 8,
    objetivos: [
      "Conocer la dimensión económica actual y proyectada del mercado global.",
      "Identificar las regiones líderes y sus factores de crecimiento.",
      "Reconocer las empresas más relevantes del ecosistema en 2025.",
    ],
    contenido: `
      <h2>Proyección del mercado 2020–2030</h2>
      <p>El mercado de gemelos digitales crece a una velocidad difícilmente comparable con cualquier otra tecnología industrial.</p>
      <table>
        <tr><th>Año</th><th>Valor estimado (USD)</th><th>Estado</th></tr>
        <tr><td>2020</td><td>$3.800M</td><td>Histórico</td></tr>
        <tr><td>2022</td><td>$7.400M</td><td>Histórico</td></tr>
        <tr><td>2024</td><td>$15.000M</td><td>Histórico</td></tr>
        <tr><td>2025</td><td>$28.900M</td><td>Estimado</td></tr>
        <tr><td>2026</td><td>$39.700M</td><td>Proyectado</td></tr>
        <tr><td>2028</td><td>$75.000M</td><td>Proyectado</td></tr>
        <tr><td>2030</td><td>$122.000M – $572.000M</td><td>Proyectado</td></tr>
      </table>
      <blockquote>⚠️ <strong>Nota metodológica:</strong> la horquilla tan amplia para 2030–2035 refleja diferencias de metodología entre firmas analistas. El CAGR proyectado oscila entre el 31% y el 47% anual — en cualquier caso, una de las tasas más altas de la tecnología industrial.</blockquote>

      <h2>Geografía del mercado (2025)</h2>
      <h3>🇺🇸 Norteamérica — Líder global (31–38% de cuota)</h3>
      <p>Impulsada por manufactura, aeroespacial y las grandes plataformas cloud (AWS, Microsoft, NVIDIA). CAGR proyectado del 48% anual.</p>
      <h3>🇪🇺 Europa — Segunda posición (~$4.900M)</h3>
      <p>Fuerte en automoción, energía e infraestructuras. Las políticas de Industria 4.0 de la UE y la Agenda Digital de España — con una convocatoria de $87,1M para ciudades inteligentes en 2025 — actúan como aceleradores.</p>
      <h3>🌏 Asia-Pacífico — Mayor CAGR proyectado</h3>
      <p>China, India, Japón y Corea del Sur lideran, con iniciativas gubernamentales de ciudades inteligentes como catalizadores.</p>

      <h2>Principales empresas del ecosistema (2025)</h2>
      <table>
        <tr><th>Empresa</th><th>Fortaleza principal</th></tr>
        <tr><td><strong>Siemens AG</strong></td><td>Líder global (>5% de cuota) · Xcelerator · Digital Twin Composer</td></tr>
        <tr><td><strong>NVIDIA</strong></td><td>Omniverse · simulación físicamente precisa · metaverso industrial</td></tr>
        <tr><td><strong>Microsoft</strong></td><td>Azure Digital Twins · ecosistema cloud</td></tr>
        <tr><td><strong>Dassault Systèmes</strong></td><td>3DEXPERIENCE · ingeniería y manufactura</td></tr>
        <tr><td><strong>GE Vernova</strong></td><td>Energía y maquinaria industrial · pionera</td></tr>
        <tr><td><strong>PTC · ANSYS · IBM · SAP · Oracle</strong></td><td>Soluciones especializadas por sector</td></tr>
      </table>

      <h2>Segmento de mayor adopción</h2>
      <p>El segmento de <strong>automoción y transporte</strong> tiene la mayor cuota en 2025, seguido de manufactura avanzada y energía. El segmento de <strong>salud</strong> presenta el CAGR más alto proyectado: más del 52% entre 2025 y 2030.</p>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué la horquilla de estimaciones para 2030 es tan amplia? ¿Qué factores la explican?</li>
        <li>¿Qué implicaciones tiene para España y Europa el liderazgo norteamericano?</li>
        <li>¿En qué sectores crees que la adopción en España podría acelerarse más rápido?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "CAGR", explicacion: "Velocidad media de crecimiento anual. Un CAGR del 32% significa que el mercado se dobla cada 2,5 años aproximadamente." },
      { termino: "Cuota de mercado", explicacion: "El trozo de la tarta que le corresponde a una empresa o región del total de ventas." },
      { termino: "Horquilla de estimaciones", explicacion: "El rango entre la predicción más baja y la más alta. Cuanto más lejano el futuro, más amplia." },
      { termino: "Industria 4.0", explicacion: "La 'cuarta revolución industrial': fábricas conectadas, con sensores, datos e inteligencia artificial." },
    ],
    quiz: [
      {
        pregunta: "¿Cuál era el valor estimado del mercado global de gemelos digitales en 2025?",
        opciones: ["$3.800M", "$28.900M", "$122.000M", "$572.000M"],
        correcta: 1,
        explicacion: "El mercado pasó de $3.800M en 2020 a $28.900M estimados en 2025 — casi se multiplicó por 8 en cinco años.",
      },
      {
        pregunta: "¿Qué región lidera el mercado global en 2025?",
        opciones: ["Europa", "Asia-Pacífico", "Norteamérica", "Latinoamérica"],
        correcta: 2,
        explicacion: "Norteamérica tiene el 31–38% de cuota, impulsada por manufactura, aeroespacial y las grandes plataformas cloud (AWS, Microsoft, NVIDIA).",
      },
      {
        pregunta: "¿Qué significa un CAGR del 32%?",
        opciones: [
          "Que el mercado pierde un 32% cada año",
          "Que el mercado crece de media un 32% cada año, doblándose en unos 2,5 años",
          "Que el 32% de las empresas usan la tecnología",
          "Que hay un 32% de probabilidad de crecimiento",
        ],
        correcta: 1,
        explicacion: "CAGR = tasa de crecimiento anual compuesta. Mide a qué velocidad crece algo de media cada año.",
      },
      {
        pregunta: "¿Qué sector tiene el CAGR más alto proyectado para 2025–2030?",
        opciones: ["Automoción", "Manufactura", "Energía", "Salud (+52%)"],
        correcta: 3,
        explicacion: "Aunque automoción tiene la mayor cuota actual, salud es el que más rápido crecerá: más del 52% anual proyectado.",
      },
    ],
  },

  /* ================= MÓDULO 6 ================= */
  {
    id: 6,
    seccion: "mercado",
    titulo: "Aplicaciones sectoriales",
    minutos: 12,
    objetivos: [
      "Identificar las aplicaciones en manufactura, salud, ciudades inteligentes, energía y aeroespacial.",
      "Analizar casos de uso reales con datos de impacto documentados.",
      "Comprender por qué cada sector adopta gemelos digitales de forma diferente.",
    ],
    contenido: `
      <h2>Sector 01 · Manufactura e Industria 4.0</h2>
      <p><strong>Mayor adopción histórica · Caso de uso más documentado</strong></p>
      <table>
        <tr><th>Indicador</th><th>Valor</th><th>Fuente</th></tr>
        <tr><td>Problemas detectados antes del cambio físico</td><td><strong>90%</strong></td><td>PepsiCo + Siemens, CES 2026</td></tr>
        <tr><td>Mejora de rendimiento operativo</td><td><strong>+20%</strong></td><td>ITware Latam, 2026</td></tr>
        <tr><td>Reducción de inversión física (CapEx)</td><td><strong>−15%</strong></td><td>ITware Latam, 2026</td></tr>
      </table>
      <h3>Caso emblemático: PepsiCo + Siemens + NVIDIA (CES 2026)</h3>
      <p>PepsiCo transformó sus instalaciones en EE.UU. en gemelos 3D de alta fidelidad usando <strong>Siemens Digital Twin Composer</strong> y <strong>NVIDIA Omniverse</strong>. Agentes de IA simulan, prueban y refinan cambios antes de que ocurran físicamente. Resultado: 90% de los problemas identificados antes, +20% de rendimiento y −15% de CapEx.</p>

      <h2>Sector 02 · Salud y medicina</h2>
      <p><strong>Mayor CAGR proyectado: +52% anual (2025–2030)</strong></p>
      <ul>
        <li><strong>Gemelos de órganos:</strong> corazones, pulmones o cerebros virtuales para simular cirugías antes de ejecutarlas.</li>
        <li><strong>Gemelos de hospitales:</strong> réplicas completas para optimizar flujos de pacientes, camas y logística.</li>
        <li><strong>Simuladores de formación clínica:</strong> entrenamiento sin riesgo para pacientes reales.</li>
      </ul>
      <blockquote>💡 Un cirujano que debe operar una malformación cardíaca compleja puede ensayar la intervención en el gemelo digital de ese corazón concreto. Ya ocurre en hospitales de referencia europeos.</blockquote>

      <h2>Sector 03 · Ciudades inteligentes y urbanismo</h2>
      <ul>
        <li>Planificación urbana: simular infraestructuras antes de construirlas.</li>
        <li>Gestión de emergencias: modelar inundaciones, incendios, evacuaciones.</li>
        <li>Tráfico y movilidad: optimizar semáforos y transporte público.</li>
      </ul>
      <p><strong>Casos:</strong> Virtual Singapore (réplica de toda la ciudad), Jacksonville EE.UU. (escenarios climáticos), NextPort España (puertos como el de Santander). El Gobierno de España lanzó una convocatoria de <strong>$87,1M</strong> para ciudades inteligentes.</p>

      <h2>Sector 04 · Energía y sostenibilidad</h2>
      <p>Mejora media del <strong>+16%</strong> en métricas de sostenibilidad (Capgemini, 2024, n=1.000 empresas).</p>
      <p><strong>Casos:</strong> Siemens Gamesa (gemelo de su parque eólico en Dinamarca con mantenimiento predictivo) y Peaxy (primer gemelo de la cadena completa del hidrógeno verde).</p>
      <blockquote>💡 Una turbina eólica averiada en alta mar es carísima de reparar. Si el gemelo detecta el desgaste con semanas de antelación, el mantenimiento se programa en el momento óptimo, ahorrando millones.</blockquote>

      <h2>Sector 05 · Aeroespacial y defensa</h2>
      <p><strong>Sector pionero — donde surgió el concepto.</strong> Simulación de vehículos espaciales en condiciones extremas, planificación de mantenimiento de flotas aéreas (Airbus, entre otras) y optimización de disponibilidad.</p>

      <h2>Comparativa rápida entre sectores</h2>
      <table>
        <tr><th>Sector</th><th>Madurez</th><th>CAGR proyectado</th><th>Caso más citado</th></tr>
        <tr><td>Manufactura</td><td>★★★★★</td><td>~35%</td><td>PepsiCo + Siemens</td></tr>
        <tr><td>Aeroespacial</td><td>★★★★☆</td><td>~30%</td><td>NASA, Airbus</td></tr>
        <tr><td>Energía</td><td>★★★★☆</td><td>~38%</td><td>Siemens Gamesa</td></tr>
        <tr><td>Ciudades</td><td>★★★☆☆</td><td>~40%</td><td>Virtual Singapore</td></tr>
        <tr><td>Salud</td><td>★★☆☆☆</td><td><strong>+52%</strong></td><td>Gemelos cardíacos</td></tr>
      </table>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué salud tiene el CAGR más alto si su madurez actual es menor?</li>
        <li>¿Qué diferencias éticas hay entre el gemelo de una turbina y el de un paciente?</li>
        <li>¿Qué sector tiene más potencial sin explotar? ¿Qué obstáculos lo frenan?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "KPI", explicacion: "Indicador clave: un número que resume si algo va bien o mal. Como la nota de un examen, pero para empresas." },
      { termino: "CapEx", explicacion: "Dinero invertido en cosas físicas duraderas: máquinas, edificios, equipos. Reducirlo = gastar menos en construir." },
      { termino: "Mantenimiento predictivo", explicacion: "Reparar la máquina justo antes de que se rompa, porque los datos avisan del desgaste con antelación." },
      { termino: "Madurez de adopción", explicacion: "Cuánto tiempo lleva un sector usando la tecnología y cuán extendida está en él." },
      { termino: "Gemelo de órgano", explicacion: "Copia digital de un corazón o pulmón concreto de un paciente, para ensayar la operación antes de hacerla." },
    ],
    quiz: [
      {
        pregunta: "En el caso PepsiCo + Siemens (CES 2026), ¿qué porcentaje de problemas se detectaron antes de hacer cambios físicos?",
        opciones: ["50%", "70%", "90%", "100%"],
        correcta: 2,
        explicacion: "El 90% de los problemas potenciales se identificaron en el gemelo antes de tocar la fábrica real, con +20% de rendimiento y −15% de CapEx.",
      },
      {
        pregunta: "¿Para qué sirve un gemelo digital de un órgano humano?",
        opciones: [
          "Para sustituir al órgano real",
          "Para que el cirujano ensaye la operación en digital antes de ejecutarla en el paciente",
          "Para imprimir órganos en 3D",
          "Para diagnosticar por videollamada",
        ],
        correcta: 1,
        explicacion: "Un cirujano puede simular una intervención compleja en el gemelo de ese corazón concreto antes de operar. Ya ocurre en hospitales europeos.",
      },
      {
        pregunta: "¿Por qué es tan valioso el mantenimiento predictivo en un parque eólico marino?",
        opciones: [
          "Porque las turbinas marinas son más pequeñas",
          "Porque reparar en alta mar es carísimo, y anticipar el desgaste permite programar el mantenimiento en el momento óptimo",
          "Porque el viento del mar estropea más",
          "Porque lo exige la ley europea",
        ],
        correcta: 1,
        explicacion: "Detectar el desgaste con semanas de antelación evita paradas no planificadas y ahorra millones en reparaciones de emergencia en alta mar.",
      },
      {
        pregunta: "¿Cuál de estos usos corresponde a un gemelo de ciudad inteligente?",
        opciones: [
          "Simular evacuaciones e inundaciones antes de que ocurran",
          "Fabricar coches más rápido",
          "Entrenar cirujanos",
          "Detectar el desgaste de un rodamiento",
        ],
        correcta: 0,
        explicacion: "Los gemelos urbanos como Virtual Singapore sirven para planificación urbana, gestión de emergencias y análisis de tráfico.",
      },
    ],
  },

  /* ================= MÓDULO 7 ================= */
  {
    id: 7,
    seccion: "analisis",
    titulo: "Desafíos y riesgos",
    minutos: 9,
    objetivos: [
      "Identificar los seis desafíos principales de los gemelos digitales.",
      "Comprender el concepto de superficie de ataque ampliada en ciberseguridad.",
      "Analizar las implicaciones éticas y legales no resueltas.",
    ],
    contenido: `
      <p>No todo son ventajas. <strong>Ignorar estos retos puede tener consecuencias físicas graves</strong> en infraestructuras críticas, donde una decisión basada en datos manipulados puede costar vidas o millones de euros.</p>

      <h2>Desafío 01 · Ciberseguridad 🔴 CRÍTICO</h2>
      <p>La interconexión física-digital convierte al gemelo en un punto crítico de vulnerabilidad. Un atacante que manipule sus datos puede provocar decisiones erróneas con consecuencias físicas reales: un tren cuyo gemelo muestra frenos mejores de lo real, una planta química cuyo gemelo indica una temperatura segura cuando no lo es.</p>
      <p>Al existir un doble digital, la <strong>superficie de ataque se duplica</strong>: los atacantes tienen dos puntas de entrada — el sistema original y su réplica.</p>
      <p><strong>Medidas:</strong> arquitectura <em>Zero Trust</em> (no confiar automáticamente en nadie), microsegmentación de redes, autenticación multifactor y gestión rigurosa de dispositivos IoT.</p>

      <h2>Desafío 02 · Privacidad de datos 🟠 ALTO</h2>
      <p>Los gemelos que modelan comportamientos humanos — pacientes, trabajadores, ciudadanos — gestionan datos personales a gran escala. El <strong>RGPD europeo no contempla específicamente los gemelos digitales</strong>, generando zonas grises regulatorias.</p>
      <p><strong>Recomendaciones:</strong> <em>privacy by design</em> (minimizar datos personales desde el diseño), transparencia sobre qué se recoge, y propiedad clara de modelos y datos.</p>

      <h2>Desafío 03 · Interoperabilidad ⚪ MODERADO</h2>
      <p>Sistemas y maquinaria de distintos fabricantes usan <strong>protocolos propietarios incompatibles</strong>. Conectarlos requiere costosos desarrollos a medida. La ausencia de estándares universales — aunque OPC-UA avanza — es un cuello de botella estructural.</p>

      <h2>Desafío 04 · Coste e inversión inicial ⚪ MODERADO</h2>
      <p>La inversión en sensores, infraestructura y talento es <strong>elevada</strong>. Los modelos cloud por suscripción empiezan a democratizar el acceso para pymes, pero la barrera sigue siendo significativa.</p>

      <h2>Desafío 05 · Escasez de talento ⚪ MODERADO</h2>
      <p>Se necesitan profesionales que dominen a la vez IoT, modelado de sistemas, IA e ingeniería del sector concreto. Este perfil híbrido <strong>escasea globalmente</strong> y su formación es lenta y costosa.</p>

      <h2>Desafío 06 · Propiedad intelectual y ética ⚪ EMERGENTE</h2>
      <ul>
        <li>¿A quién pertenecen los datos generados por el gemelo — al fabricante, al operador o a la plataforma?</li>
        <li>¿Quién es responsable si el gemelo toma una decisión autónoma que resulta dañina?</li>
      </ul>
      <p>Estas preguntas carecen de respuesta legal clara. <strong>La regulación va por detrás de la tecnología.</strong></p>

      <h2>Resumen de desafíos</h2>
      <table>
        <tr><th>Desafío</th><th>Nivel</th><th>Urgencia</th></tr>
        <tr><td>Ciberseguridad</td><td>🔴 Crítico</td><td>Inmediata</td></tr>
        <tr><td>Privacidad de datos</td><td>🟠 Alto</td><td>Urgente</td></tr>
        <tr><td>Interoperabilidad</td><td>⚪ Moderado</td><td>Media</td></tr>
        <tr><td>Coste e inversión</td><td>⚪ Moderado</td><td>Media</td></tr>
        <tr><td>Escasez de talento</td><td>⚪ Moderado</td><td>Media</td></tr>
        <tr><td>Propiedad y ética</td><td>⚪ Emergente</td><td>Futura</td></tr>
      </table>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿El riesgo de ciberseguridad es mayor en el gemelo de una central nuclear o en el de un hospital? ¿Por qué?</li>
        <li>¿Debería el RGPD actualizarse para contemplar específicamente los gemelos digitales?</li>
        <li>¿Cómo afrontarías la escasez de talento si implantaras un gemelo digital en tu empresa?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Superficie de ataque", explicacion: "Todos los puntos por donde un hacker podría entrar. Con un gemelo, hay dos puertas: el sistema real y su copia." },
      { termino: "Zero Trust", explicacion: "Regla de seguridad: no fiarse de nadie por defecto, ni siquiera de quien ya está dentro. Verificar siempre." },
      { termino: "RGPD", explicacion: "La ley europea que protege tus datos personales. No fue escrita pensando en gemelos digitales, y eso crea vacíos." },
      { termino: "Interoperabilidad", explicacion: "Que aparatos de marcas distintas puedan entenderse entre sí. Como si todos los cargadores fueran USB-C." },
      { termino: "Privacy by design", explicacion: "Diseñar el sistema desde el principio para usar los mínimos datos personales posibles." },
    ],
    quiz: [
      {
        pregunta: "¿Por qué se dice que un gemelo digital 'duplica la superficie de ataque'?",
        opciones: [
          "Porque necesita el doble de contraseñas",
          "Porque los atacantes tienen dos puntos de entrada: el sistema original y su réplica digital",
          "Porque consume el doble de electricidad",
          "Porque hay que pagar dos antivirus",
        ],
        correcta: 1,
        explicacion: "Al existir un doble digital del sistema, un atacante puede intentar entrar por el sistema físico o por su gemelo. Dos puertas en vez de una.",
      },
      {
        pregunta: "¿Qué es la arquitectura 'Zero Trust'?",
        opciones: [
          "Un sistema sin contraseñas",
          "No confiar automáticamente en ningún usuario o dispositivo, aunque esté dentro de la red",
          "Confiar solo en los empleados de la empresa",
          "Un antivirus gratuito",
        ],
        correcta: 1,
        explicacion: "Zero Trust = verificar siempre, no confiar nunca por defecto. Ni siquiera en quien ya está dentro de la red corporativa.",
      },
      {
        pregunta: "¿Cuál es el problema del RGPD con los gemelos digitales?",
        opciones: [
          "Que los prohíbe totalmente en Europa",
          "Que obliga a pagar una tasa por cada gemelo",
          "Que no los contempla específicamente, generando zonas grises regulatorias",
          "Que solo aplica a empresas americanas",
        ],
        correcta: 2,
        explicacion: "La ley europea de protección de datos no fue escrita pensando en gemelos digitales que modelan comportamientos humanos. La regulación va por detrás de la tecnología.",
      },
      {
        pregunta: "¿Por qué escasea el talento para implementar gemelos digitales?",
        opciones: [
          "Porque las universidades no enseñan informática",
          "Porque se necesita un perfil híbrido que domine a la vez IoT, modelado, IA e ingeniería del sector",
          "Porque los sueldos son bajos",
          "Porque solo se enseña en Estados Unidos",
        ],
        correcta: 1,
        explicacion: "El perfil necesario combina cuatro disciplinas distintas a la vez. Esa combinación escasea globalmente y formarla es lenta y costosa.",
      },
    ],
  },

  /* ================= MÓDULO 8 ================= */
  {
    id: 8,
    seccion: "analisis",
    titulo: "Tendencias y futuro",
    minutos: 7,
    objetivos: [
      "Identificar las cuatro tendencias principales que definirán el sector hasta 2030.",
      "Comprender el concepto de metaverso industrial y su relación con los gemelos digitales.",
      "Analizar el impacto de la IA generativa en la evolución de los gemelos digitales.",
    ],
    contenido: `
      <p>En enero de 2026, el CES de Las Vegas fue el escenario donde las principales compañías presentaron su visión de los próximos cinco años. Estas cuatro tendencias se basan en evidencia reciente y declaraciones públicas de los líderes del sector.</p>

      <h2>Tendencia 01 · IA generativa — De simulación pasiva a inteligencia activa</h2>
      <p>La integración de <strong>IA generativa</strong> está transformando los gemelos de herramientas de monitoreo en sistemas que razonan, sugieren y actúan. Con IA generativa, el gemelo puede:</p>
      <ul>
        <li>Generar escenarios de simulación que nunca han ocurrido antes.</li>
        <li>Proponer soluciones a problemas complejos de forma autónoma.</li>
        <li>Comunicarse con operadores en lenguaje natural.</li>
      </ul>
      <blockquote>"La IA generativa ha encendido una nueva revolución industrial, transformando los gemelos digitales de simulaciones pasivas en la inteligencia activa del mundo físico."<br>— Jensen Huang, CEO de NVIDIA, CES 2026</blockquote>

      <h2>Tendencia 02 · Metaverso industrial — Fábricas diseñadas 100% en digital</h2>
      <p>La alianza <strong>Siemens + NVIDIA</strong> busca construir el primer sistema operativo de IA industrial. El <strong>Digital Twin Composer</strong> (CES 2026) combina gemelos 3D de Siemens Xcelerator con las bibliotecas de NVIDIA Omniverse y datos en tiempo real.</p>
      <p>La ambición: las <strong>primeras plantas de fabricación adaptativas totalmente impulsadas por IA</strong>, donde ningún cambio físico se ejecuta sin validarse antes en el gemelo.</p>

      <h2>Tendencia 03 · Democratización — Acceso para pymes vía nube</h2>
      <p>Plataformas como <strong>AWS IoT TwinMaker, Azure Digital Twins o Google Cloud IoT</strong> permiten implementar gemelos sin inversiones masivas. El modelo de suscripción elimina la gran inversión inicial en hardware.</p>
      <p>En España, donde el <strong>99,8% del tejido empresarial son pymes</strong>, la democratización cloud determinará la velocidad de adopción real en la próxima década.</p>

      <h2>Tendencia 04 · Salud y educación — Mayor crecimiento proyectado</h2>
      <p><strong>Salud (CAGR +52%):</strong> gemelos de órganos, hospitales completos y simuladores clínicos transformarán la medicina personalizada.</p>
      <p><strong>Educación:</strong> replicar entornos peligrosos — plantas químicas, centrales eléctricas — permite que el estudiante cometa errores en el gemelo sin consecuencias físicas.</p>
      <p><strong>Sostenibilidad:</strong> simular escenarios climáticos en réplicas de ciudades e infraestructuras permite planificar la transición energética.</p>

      <h2>Resumen de tendencias</h2>
      <table>
        <tr><th>Tendencia</th><th>Horizonte</th><th>Impacto estimado</th></tr>
        <tr><td>IA generativa integrada</td><td>2025–2027</td><td>Transforma todos los sectores</td></tr>
        <tr><td>Metaverso industrial</td><td>2026–2028</td><td>Redefine el diseño de fábricas</td></tr>
        <tr><td>Democratización cloud</td><td>2025–2030</td><td>Expande adopción a pymes</td></tr>
        <tr><td>Salud y educación</td><td>2025–2030</td><td>Nuevos mercados de alto crecimiento</td></tr>
      </table>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>Si los gemelos se vuelven accesibles vía cloud, ¿qué oportunidades abre para agricultura, cultura o deporte?</li>
        <li>¿Qué riesgos éticos nuevos introduce la IA generativa respecto a los del Bloque 07?</li>
        <li>¿Cómo podría aplicarse un gemelo digital en tu sector de interés profesional?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "IA generativa", explicacion: "Inteligencia artificial que crea cosas nuevas (texto, imágenes, simulaciones) en vez de solo analizar lo que existe." },
      { termino: "Democratización", explicacion: "Que algo caro y exclusivo pase a estar al alcance de cualquiera. La nube lo hace con los gemelos digitales." },
      { termino: "Pyme", explicacion: "Pequeña y mediana empresa. En España son el 99,8% de todas las empresas." },
      { termino: "Suscripción", explicacion: "Pagar una cuota mensual por usar algo en vez de comprarlo entero. Como Netflix, pero para software industrial." },
      { termino: "Planta adaptativa", explicacion: "Fábrica que se reorganiza sola guiada por IA, validando cada cambio en su gemelo antes de ejecutarlo." },
    ],
    quiz: [
      {
        pregunta: "Según Jensen Huang (NVIDIA), la IA generativa transforma los gemelos digitales en...",
        opciones: [
          "Simulaciones más baratas",
          "La inteligencia activa del mundo físico",
          "Videojuegos industriales",
          "Copias de seguridad automáticas",
        ],
        correcta: 1,
        explicacion: "De 'simulaciones pasivas' a 'inteligencia activa': gemelos que razonan, sugieren soluciones y se comunican en lenguaje natural.",
      },
      {
        pregunta: "¿Qué combina el Digital Twin Composer presentado en el CES 2026?",
        opciones: [
          "Excel y PowerPoint",
          "Gemelos 3D de Siemens Xcelerator + bibliotecas de NVIDIA Omniverse + datos en tiempo real",
          "Robots y drones",
          "Impresoras 3D y escáneres",
        ],
        correcta: 1,
        explicacion: "Es la pieza central de la alianza Siemens + NVIDIA para el metaverso industrial: fábricas fotorrealistas validadas 100% en digital.",
      },
      {
        pregunta: "¿Qué está permitiendo que las pymes accedan a los gemelos digitales?",
        opciones: [
          "Las subvenciones del gobierno",
          "El despliegue cloud con precios por suscripción, sin gran inversión inicial",
          "Que los sensores ahora son gratis",
          "Los cursos online",
        ],
        correcta: 1,
        explicacion: "Plataformas como AWS IoT TwinMaker o Azure Digital Twins eliminan la necesidad de infraestructura propia. Pagas por uso, como una suscripción.",
      },
      {
        pregunta: "¿Por qué son valiosos los gemelos digitales en educación?",
        opciones: [
          "Porque sustituyen a los profesores",
          "Porque el estudiante puede cometer errores en entornos peligrosos simulados sin consecuencias físicas",
          "Porque hacen los exámenes automáticamente",
          "Porque abaratan las matrículas",
        ],
        correcta: 1,
        explicacion: "Replicar una planta química o una central eléctrica en digital permite entrenar sin exponer a nadie a riesgos reales.",
      },
    ],
  },
];

/* ================= GLOSARIO GENERAL (20 términos) ================= */
const GLOSARIO = [
  { termino: "5G", definicion: "Quinta generación de redes móviles. Altísima velocidad y bajísima latencia, lo que permite transmitir datos de sensores en tiempo real sin retrasos perceptibles." },
  { termino: "API", definicion: "Interfaz de Programación de Aplicaciones. Mecanismo que permite que dos programas distintos se comuniquen intercambiando datos de forma estándar." },
  { termino: "BIM", definicion: "Modelado de Información de la Construcción. Modelado digital de edificios con geometría, propiedades físicas y datos de gestión de todo el ciclo de vida." },
  { termino: "Big Data", definicion: "Tecnología para capturar, almacenar y procesar volúmenes de datos tan masivos que los sistemas convencionales no pueden gestionarlos." },
  { termino: "CAGR", definicion: "Tasa de Crecimiento Anual Compuesta. Un CAGR del 32% significa que el mercado crece un tercio cada año — se dobla en unos 2,5 años." },
  { termino: "CapEx", definicion: "Gasto de Capital. Inversión en activos físicos duraderos: maquinaria, instalaciones, equipos. Los gemelos lo reducen al validar cambios primero en digital." },
  { termino: "CAD", definicion: "Diseño Asistido por Ordenador. Modelos 3D estáticos — no se actualizan con datos en tiempo real ni incorporan inteligencia." },
  { termino: "Edge computing", definicion: "Procesamiento de datos cerca del sensor, en lugar de enviarlos a un servidor remoto. Reduce la latencia cuando la velocidad de respuesta es crítica." },
  { termino: "ERP", definicion: "Sistema de Planificación de Recursos Empresariales. Software que integra contabilidad, logística, RRHH y producción de una organización." },
  { termino: "IA generativa", definicion: "IA capaz de generar contenido nuevo — texto, imágenes, simulaciones. Permite crear escenarios que nunca han ocurrido y proponer soluciones autónomas." },
  { termino: "IoT", definicion: "Internet de las Cosas. Red de objetos físicos conectados que capturan y transmiten datos automáticamente. La 'vista' del gemelo digital." },
  { termino: "Latencia", definicion: "Tiempo que tarda un dato en viajar de origen a destino. Latencias altas hacen que el gemelo refleje un estado ya obsoleto." },
  { termino: "Machine Learning", definicion: "Rama de la IA donde los algoritmos aprenden solos de los datos. Detecta patrones que un programador nunca habría anticipado manualmente." },
  { termino: "MES", definicion: "Sistema de Ejecución de Manufactura. Controla y monitoriza la producción en tiempo real en una planta industrial." },
  { termino: "MQTT", definicion: "Protocolo de comunicación ligero diseñado para dispositivos IoT con recursos limitados. Estándar para transmitir datos de sensores." },
  { termino: "OPC-UA", definicion: "Estándar de comunicación industrial que permite que máquinas de distintos fabricantes se comuniquen de forma interoperable." },
  { termino: "PLM", definicion: "Gestión del Ciclo de Vida del Producto. El contexto académico donde Michael Grieves formuló el concepto de gemelo digital en 2002." },
  { termino: "RGPD", definicion: "Reglamento europeo de protección de datos personales. No contempla específicamente los gemelos digitales, lo que genera zonas grises regulatorias." },
  { termino: "SCADA", definicion: "Control de Supervisión y Adquisición de Datos. Sistema de control industrial para monitorizar procesos físicos a distancia: plantas eléctricas, redes de agua." },
  { termino: "Zero Trust", definicion: "Arquitectura de ciberseguridad: nunca confiar automáticamente en ningún usuario o dispositivo, aunque esté dentro de la red corporativa." },
];

/* ---- Empaquetamos el temario por idioma ----
   data-en.js y data-de.js añaden DATOS.en y DATOS.de */
const DATOS = { es: { SECCIONES, MODULOS, GLOSARIO } };
