/* ============================================================
   TEMARIO — Biología Celular: La célula como unidad de vida. v2
   Cada módulo tiene: contenido, ficha de vocabulario y quiz.
   Fuente: Biología Celular y Molecular — contenido de nivel bachillerato/universitario.
   ============================================================ */

const SECCIONES_CELULAS = [
  { id: "intro",      nombre: "🔬 Fundamentos celulares" },
  { id: "estructura", nombre: "🧬 Estructura y organización" },
  { id: "funciones",  nombre: "⚡ Metabolismo y reproducción" },
];

const MODULOS_CELULAS = [

  /* ================= MÓDULO 1 ================= */
  {
    id: 1,
    seccion: "intro",
    titulo: "Historia y teoría celular",
    minutos: 8,
    objetivos: [
      "Definir con precisión qué es la teoría celular y cuáles son sus postulados modernos.",
      "Nombrar a los científicos clave y su contribución específica al desarrollo de la biología celular.",
      "Listar los cuatro postulados de la teoría celular moderna.",
      "Explicar la importancia histórica de la teoría celular como unificadora de la biología.",
    ],
    contenido: `
      <h2>El nacimiento de la biología celular</h2>
      <p>La historia de la célula es la historia del microscopio. Sin la capacidad de ver más allá de lo que el ojo humano alcanza, el mundo microscópico permaneció completamente oculto durante toda la antigüedad. Fue en el siglo XVII cuando la tecnología cambió nuestra comprensión de la vida para siempre.</p>

      <h2>Línea de tiempo: de Hooke a Virchow</h2>

      <h3>1665 · Robert Hooke — El término "célula"</h3>
      <p>El científico inglés <strong>Robert Hooke</strong> (1635–1703) examinó láminas de corcho (corteza de alcornoque) con un microscopio compuesto de fabricación propia. Observó una estructura repetitiva de pequeñas cavidades poliédricas vacías que le recordaron a las celdas de un monasterio. Las llamó <strong><em>cellulae</em></strong> (del latín: celdas pequeñas). Publicó sus observaciones en la obra <em>Micrographia</em> (1665), que incluía ilustraciones de extraordinaria precisión. Hooke vio las paredes celulares de las células muertas del corcho, no las células vivas en su interior.</p>
      <blockquote>📖 <strong>Dato clave:</strong> Hooke no vio células vivas sino los compartimentos vacíos dejados por células muertas. Sin embargo, fue el primero en usar el término "célula" y en describir la estructura microscópica de un ser vivo.</blockquote>

      <h3>1674 · Anton van Leeuwenhoek — Los primeros seres vivos microscópicos</h3>
      <p>El comerciante y científico autodidacta neerlandés <strong>Anton van Leeuwenhoek</strong> (1632–1723) perfeccionó las lentes hasta alcanzar aumentos de 270x, muy superiores a los de cualquier microscopio de su época. Fue el primero en observar <strong>microorganismos vivos</strong>: bacterias, protozoos y espermatozoides. Los llamó "animálculos". Sus observaciones demostraron que existía vida organizada más allá de la escala visible al ojo humano.</p>

      <h3>1831 · Robert Brown — El descubrimiento del núcleo</h3>
      <p>El botánico escocés <strong>Robert Brown</strong> (1773–1858), estudiando células de orquídeas, identificó una estructura densa y diferenciada en el interior celular que denominó <strong>núcleo</strong> (<em>nucleus</em>). Este descubrimiento fue fundamental para entender que las células no son compartimentos vacíos sino estructuras organizadas con un centro de control.</p>

      <h3>1838–1839 · Schleiden y Schwann — Los dos primeros postulados</h3>
      <p>El botánico alemán <strong>Matthias Schleiden</strong> (1804–1881) propuso en 1838 que todos los tejidos vegetales están formados por células. Al año siguiente, el zoólogo <strong>Theodor Schwann</strong> (1810–1882) extendió esta idea a los tejidos animales. Juntos formularon los dos primeros postulados de la teoría celular:</p>
      <ul>
        <li><strong>Postulado 1:</strong> Todos los seres vivos están formados por una o más células.</li>
        <li><strong>Postulado 2:</strong> La célula es la unidad básica de estructura y función de todos los seres vivos.</li>
      </ul>

      <h3>1855 · Rudolf Virchow — "Omnis cellula e cellula"</h3>
      <p>El médico alemán <strong>Rudolf Virchow</strong> (1821–1902) refutó definitivamente la teoría de la generación espontánea —la idea de que los seres vivos podían surgir de materia inerte— al añadir el tercer postulado clásico de la teoría celular:</p>
      <blockquote><strong>"Omnis cellula e cellula"</strong> — Toda célula proviene de una célula preexistente.<br><small>— Rudolf Virchow, 1855</small></blockquote>
      <p>Este principio fue revolucionario porque implicaba una continuidad ininterrumpida de la vida: cada célula tiene siempre una célula madre. La vida no surge de la nada.</p>

      <h3>1925 · Édouard Chatton — Procariota y eucariota</h3>
      <p>El biólogo francés <strong>Édouard Chatton</strong> (1883–1947) propuso en 1925 la distinción fundamental que hoy organiza toda la clasificación celular: los términos <strong>procariota</strong> (del griego: antes del núcleo) y <strong>eucariota</strong> (del griego: núcleo verdadero). Esta clasificación se basa en la presencia o ausencia de un núcleo verdadero delimitado por membrana.</p>

      <h2>Los cuatro postulados de la teoría celular moderna</h2>
      <p>La teoría celular en su versión actual incorpora los descubrimientos del siglo XX e incluye cuatro postulados:</p>
      <ul>
        <li><strong>1. Composición celular:</strong> Todos los seres vivos están formados por una o más células.</li>
        <li><strong>2. Unidad funcional:</strong> La célula es la unidad básica de estructura, función y organización de los seres vivos.</li>
        <li><strong>3. Continuidad celular:</strong> Toda célula proviene de la división de una célula preexistente (<em>omnis cellula e cellula</em>).</li>
        <li><strong>4. Dependencia metabólica:</strong> La actividad de un organismo depende de la actividad individual y colectiva de sus células.</li>
      </ul>
      <blockquote>💡 <strong>Importancia histórica:</strong> La teoría celular unificó la biología de la misma forma que la teoría atómica unificó la química. Antes de ella, la biología era una colección de observaciones dispersas. Después, todos los fenómenos vitales —enfermedad, reproducción, herencia, evolución— podían entenderse en términos celulares.</blockquote>

      <h2>El fin de la generación espontánea</h2>
      <p>Antes de Virchow, muchos científicos creían en la <strong>generación espontánea</strong>: la idea de que la vida podía surgir espontáneamente de materia no viva (gusanos de la tierra, ratones del trigo, bacterias del caldo). El experimento definitivo lo realizó <strong>Louis Pasteur</strong> (1822–1895) con sus famosos matraces de cuello de cisne (1859–1861): demostró que si se impedía el contacto con el aire, ningún caldo nutritivo se contaminaba. La vida solo surge de la vida.</p>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué el descubrimiento del microscopio fue tan crucial para el avance de la biología?</li>
        <li>Si Virchow tenía razón —toda célula proviene de una célula—, ¿cómo surgió la primera célula?</li>
        <li>¿En qué se diferencia la teoría celular de 1839 de la teoría celular moderna?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Célula", explicacion: "Unidad estructural y funcional básica de todos los seres vivos. El término lo acuñó Robert Hooke en 1665 al observar el corcho al microscopio." },
      { termino: "Teoría celular", explicacion: "Conjunto de principios que afirman que todos los seres vivos están formados por células, que la célula es la unidad básica de la vida, y que toda célula proviene de otra célula." },
      { termino: "Postulado", explicacion: "Principio o afirmación que se acepta como verdadera dentro de un sistema teórico. La teoría celular moderna tiene cuatro postulados." },
      { termino: "Procariota/Eucariota", explicacion: "Clasificación propuesta por Chatton (1925). Procariota: célula sin núcleo verdadero (bacterias, arqueas). Eucariota: célula con núcleo delimitado por membrana (plantas, animales, hongos, protistas)." },
      { termino: "Generación espontánea", explicacion: "Teoría ya refutada que afirmaba que los seres vivos podían surgir espontáneamente de materia inerte. Pasteur la refutó definitivamente en 1861." },
    ],
    quiz: [
      {
        pregunta: "¿Quién acuñó el término 'célula'?",
        opciones: [
          "Robert Hooke (1665)",
          "Anton van Leeuwenhoek",
          "Rudolf Virchow",
          "Matthias Schleiden",
        ],
        correcta: 0,
        explicacion: "Robert Hooke observó láminas de corcho con su microscopio en 1665 y denominó 'cellulae' a las pequeñas cavidades que vio, publicándolo en su obra Micrographia.",
      },
      {
        pregunta: "¿Qué postulado añadió Rudolf Virchow a la teoría celular?",
        opciones: [
          "Omnis cellula e cellula: toda célula proviene de una célula preexistente",
          "La célula es la unidad básica de la vida",
          "Todo ser vivo está formado por células",
          "La actividad del organismo depende de sus células",
        ],
        correcta: 0,
        explicacion: "Virchow formuló en 1855 el principio 'Omnis cellula e cellula', refutando la generación espontánea y estableciendo la continuidad celular como ley fundamental.",
      },
      {
        pregunta: "¿Cuántos postulados tiene la teoría celular en su versión moderna?",
        opciones: [
          "Cuatro",
          "Dos",
          "Tres",
          "Cinco",
        ],
        correcta: 0,
        explicacion: "La teoría celular moderna incluye cuatro postulados: composición celular, unidad funcional, continuidad celular (omnis cellula e cellula) y dependencia metabólica.",
      },
      {
        pregunta: "¿Quién introdujo los términos 'procariota' y 'eucariota'?",
        opciones: [
          "Édouard Chatton (1925)",
          "Robert Brown",
          "Theodor Schwann",
          "Rudolf Virchow",
        ],
        correcta: 0,
        explicacion: "El biólogo francés Édouard Chatton propuso en 1925 esta distinción fundamental basada en la presencia o ausencia de núcleo verdadero delimitado por membrana.",
      },
      {
        pregunta: "¿Qué observó Hooke en las láminas de corcho?",
        opciones: [
          "Pequeñas cavidades poliédricas a las que llamó células",
          "Microorganismos vivos por primera vez",
          "El núcleo celular",
          "Bacterias y protozoos",
        ],
        correcta: 0,
        explicacion: "Hooke vio las paredes de células muertas del corcho, que formaban pequeñas cavidades poliédricas. Las llamó 'cellulae' por su semejanza con las celdas de un monasterio.",
      },
    ],
  },

  /* ================= MÓDULO 2 ================= */
  {
    id: 2,
    seccion: "intro",
    titulo: "Tipos de células: procariotas y eucariotas",
    minutos: 10,
    objetivos: [
      "Distinguir las características fundamentales de células procariotas y eucariotas.",
      "Identificar los tipos celulares del cuerpo humano y sus funciones principales.",
      "Comparar las diferencias entre células animales, vegetales y fúngicas.",
      "Interpretar una tabla comparativa de células procariotas y eucariotas.",
    ],
    contenido: `
      <h2>La gran división: procariotas vs eucariotas</h2>
      <p>Toda la diversidad de la vida en la Tierra puede clasificarse en dos grandes tipos celulares según la organización de su material genético. Esta distinción, propuesta por Chatton en 1925, es la más fundamental de toda la biología.</p>

      <h2>Células procariotas</h2>
      <p>Las células <strong>procariotas</strong> son las más antiguas de la Tierra —aparecieron hace unos 3.800 millones de años— y las más abundantes: hay más bacterias en un gramo de suelo que seres humanos en todo el planeta.</p>
      <h3>Características principales</h3>
      <ul>
        <li><strong>Sin núcleo verdadero:</strong> el ADN circular se encuentra en una región densa del citoplasma llamada <strong>nucleoide</strong>, sin membrana que lo delimite.</li>
        <li><strong>Tamaño:</strong> 1–5 µm (micrómetros). Mucho más pequeñas que las eucariotas.</li>
        <li><strong>Ribosomas 70S:</strong> más pequeños que los eucariotas (80S). Esta diferencia es clave en medicina: muchos antibióticos actúan bloqueando los ribosomas 70S sin afectar a las células humanas.</li>
        <li><strong>Pared celular de peptidoglicano</strong> (en bacterias). Confiere rigidez y forma a la célula.</li>
        <li><strong>Sin orgánulos membranosos:</strong> no tienen mitocondrias, retículo endoplásmico ni aparato de Golgi.</li>
        <li><strong>Reproducción:</strong> fisión binaria (división directa en dos células hijas).</li>
      </ul>
      <h3>Tipos de procariotas</h3>
      <ul>
        <li><strong>Bacterias:</strong> el grupo más diverso y estudiado. Incluye especies beneficiosas (flora intestinal, cianobacterias) y patógenas (Salmonella, Mycobacterium tuberculosis).</li>
        <li><strong>Arqueas:</strong> morfológicamente similares a las bacterias pero con diferencias bioquímicas profundas. Muchas viven en ambientes extremos (arqueas termófilas, halófilas, metanógenas).</li>
      </ul>
      <blockquote>💡 <strong>Analogía:</strong> Una célula procariota es como un almacén en un único espacio abierto: toda la maquinaria (ADN, ribosomas, enzimas) está en la misma sala sin separaciones. Una célula eucariota es como un edificio de oficinas con departamentos especializados comunicados entre sí.</blockquote>

      <h2>Células eucariotas</h2>
      <p>Las células <strong>eucariotas</strong> aparecieron hace unos 1.500–2.000 millones de años, probablemente por endosimbiosis (incorporación de procariotas). Son estructuralmente mucho más complejas.</p>
      <h3>Características principales</h3>
      <ul>
        <li><strong>Núcleo verdadero:</strong> el ADN lineal está encerrado en el núcleo, rodeado por una doble membrana nuclear.</li>
        <li><strong>Tamaño:</strong> 10–100 µm. Hasta 100 veces más grandes que las procariotas.</li>
        <li><strong>Ribosomas 80S:</strong> más grandes, asociados al retículo endoplásmico rugoso.</li>
        <li><strong>Orgánulos membranosos:</strong> mitocondrias, aparato de Golgi, retículo endoplásmico, lisosomas, etc.</li>
        <li><strong>Citoesqueleto:</strong> red de proteínas filamentosas que da forma y permite el movimiento celular.</li>
        <li><strong>Reproducción:</strong> mitosis (células somáticas) y meiosis (células reproductoras).</li>
      </ul>

      <h3>Células eucariotas animales</h3>
      <ul>
        <li><strong>Sin pared celular</strong> (solo membrana plasmática).</li>
        <li>Poseen <strong>centrosomas</strong> con cilios y flagelos (organización del huso mitótico).</li>
        <li>Poseen <strong>lisosomas</strong> para digestión intracelular.</li>
        <li>Sin cloroplastos ni vacuola central de gran tamaño.</li>
      </ul>

      <h3>Células eucariotas vegetales</h3>
      <ul>
        <li><strong>Pared celular de celulosa</strong> (rígida, da soporte estructural).</li>
        <li><strong>Cloroplastos:</strong> orgánulos para realizar la fotosíntesis.</li>
        <li><strong>Vacuola central</strong> de gran tamaño (ocupa hasta el 90% del volumen celular en células maduras). Almacena agua, nutrientes y desechos; mantiene la turgencia.</li>
        <li><strong>Plasmodesmos:</strong> canales de comunicación entre células vegetales vecinas.</li>
      </ul>

      <h3>Células eucariotas fúngicas</h3>
      <ul>
        <li><strong>Pared celular de quitina</strong> (el mismo polisacárido del exoesqueleto de los insectos).</li>
        <li>Sin cloroplastos (son heterótrofos).</li>
        <li>En levaduras: unicelulares. En hongos filamentosos: se organizan en hifas.</li>
      </ul>

      <h2>Tabla comparativa: procariota vs eucariota</h2>
      <table>
        <tr>
          <th>Característica</th>
          <th>Procariota</th>
          <th>Eucariota</th>
        </tr>
        <tr>
          <td>Núcleo verdadero</td>
          <td>No (nucleoide)</td>
          <td>Sí (doble membrana)</td>
        </tr>
        <tr>
          <td>Tamaño</td>
          <td>1–5 µm</td>
          <td>10–100 µm</td>
        </tr>
        <tr>
          <td>ADN</td>
          <td>Circular, en nucleoide</td>
          <td>Lineal, en núcleo</td>
        </tr>
        <tr>
          <td>Ribosomas</td>
          <td>70S</td>
          <td>80S</td>
        </tr>
        <tr>
          <td>Orgánulos membranosos</td>
          <td>No</td>
          <td>Sí (mitocondrias, RE, Golgi…)</td>
        </tr>
        <tr>
          <td>Pared celular</td>
          <td>Peptidoglicano (bacterias)</td>
          <td>Celulosa (plantas), quitina (hongos) o ninguna (animales)</td>
        </tr>
        <tr>
          <td>Reproducción</td>
          <td>Fisión binaria</td>
          <td>Mitosis / meiosis</td>
        </tr>
        <tr>
          <td>Ejemplos</td>
          <td>Bacterias, arqueas</td>
          <td>Plantas, animales, hongos, protistas</td>
        </tr>
      </table>

      <h2>Las células del cuerpo humano</h2>
      <p>El cuerpo humano está formado por aproximadamente <strong>37,2 billones de células</strong> (37,2 × 10¹²), de más de <strong>200 tipos diferentes</strong>, cada uno especializado en una función concreta. Esta especialización se llama <strong>diferenciación celular</strong>.</p>

      <table>
        <tr>
          <th>Tipo celular</th>
          <th>Localización</th>
          <th>Función principal</th>
        </tr>
        <tr>
          <td><strong>Neurona</strong></td>
          <td>Sistema nervioso</td>
          <td>Transmisión de señales eléctricas y químicas</td>
        </tr>
        <tr>
          <td><strong>Eritrocito</strong> (glóbulo rojo)</td>
          <td>Sangre</td>
          <td>Transporte de oxígeno mediante hemoglobina</td>
        </tr>
        <tr>
          <td><strong>Leucocito</strong> (glóbulo blanco)</td>
          <td>Sangre y tejidos</td>
          <td>Defensa inmunitaria</td>
        </tr>
        <tr>
          <td><strong>Plaqueta</strong></td>
          <td>Sangre</td>
          <td>Coagulación sanguínea</td>
        </tr>
        <tr>
          <td><strong>Célula muscular</strong> (miosito)</td>
          <td>Músculos</td>
          <td>Contracción y movimiento</td>
        </tr>
        <tr>
          <td><strong>Hepatocito</strong></td>
          <td>Hígado</td>
          <td>Metabolismo, detoxificación, síntesis de proteínas plasmáticas</td>
        </tr>
        <tr>
          <td><strong>Osteoblasto</strong></td>
          <td>Hueso</td>
          <td>Formación y mineralización del tejido óseo</td>
        </tr>
        <tr>
          <td><strong>Fibroblasto</strong></td>
          <td>Tejido conectivo</td>
          <td>Síntesis de colágeno y matriz extracelular</td>
        </tr>
      </table>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué los antibióticos que actúan sobre los ribosomas 70S no dañan nuestras propias células?</li>
        <li>¿Qué ventajas ofrece tener orgánulos membranosos respecto a una célula procariota?</li>
        <li>El eritrocito maduro carece de núcleo. ¿Cómo encaja esto con los postulados de la teoría celular?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Procariota", explicacion: "Célula sin núcleo verdadero. El ADN circular se encuentra libre en el citoplasma en una región llamada nucleoide. Incluye bacterias y arqueas." },
      { termino: "Eucariota", explicacion: "Célula con núcleo verdadero delimitado por una doble membrana. Incluye células animales, vegetales, fúngicas y de protistas." },
      { termino: "Nucleoide", explicacion: "Región del citoplasma de las células procariotas donde se concentra el ADN circular. No está delimitado por membrana." },
      { termino: "Diferenciación celular", explicacion: "Proceso por el que una célula adquiere una estructura y función especializadas a partir de una célula no especializada. El cuerpo humano tiene más de 200 tipos de células diferenciadas." },
      { termino: "Pared celular", explicacion: "Capa rígida que rodea la membrana plasmática en bacterias (peptidoglicano), plantas (celulosa) y hongos (quitina). Confiere soporte y protección." },
      { termino: "Orgánulo", explicacion: "Estructura especializada dentro de la célula eucariota con una función específica. Ejemplos: mitocondria (energía), núcleo (información genética), aparato de Golgi (embalaje de proteínas)." },
    ],
    quiz: [
      {
        pregunta: "¿Cuál es la diferencia fundamental entre células procariotas y eucariotas?",
        opciones: [
          "La presencia o ausencia de núcleo verdadero delimitado por membrana",
          "El tamaño de sus ribosomas",
          "La presencia o ausencia de ADN",
          "El tipo de metabolismo que realizan",
        ],
        correcta: 0,
        explicacion: "La diferencia fundamental es la presencia (eucariota) o ausencia (procariota) de un núcleo verdadero rodeado por membrana. Las procariotas tienen el ADN libre en el nucleoide.",
      },
      {
        pregunta: "¿De qué está formada la pared celular de las bacterias?",
        opciones: [
          "Peptidoglicano",
          "Celulosa",
          "Quitina",
          "Colesterol",
        ],
        correcta: 0,
        explicacion: "La pared celular bacteriana está formada por peptidoglicano, un polímero único de las bacterias. Esta especificidad es la base de la acción de muchos antibióticos como la penicilina.",
      },
      {
        pregunta: "¿Cuántos tipos de células distintos tiene aproximadamente el cuerpo humano?",
        opciones: [
          "Más de 200",
          "Exactamente 100",
          "Entre 10 y 20",
          "Más de 1.000",
        ],
        correcta: 0,
        explicacion: "El cuerpo humano tiene más de 200 tipos de células diferenciadas, desde neuronas hasta eritrocitos, cada uno especializado para una función concreta.",
      },
      {
        pregunta: "¿Qué orgánulo poseen las células vegetales para realizar la fotosíntesis?",
        opciones: [
          "Cloroplastos",
          "Centrosomas",
          "Lisosomas",
          "Peroxisomas",
        ],
        correcta: 0,
        explicacion: "Los cloroplastos son los orgánulos exclusivos de las células vegetales (y algas) donde se realiza la fotosíntesis. Contienen clorofila, el pigmento que capta la energía lumínica.",
      },
      {
        pregunta: "¿Qué tipo de pared celular tienen los hongos?",
        opciones: [
          "Quitina",
          "Celulosa",
          "Peptidoglicano",
          "No tienen pared celular",
        ],
        correcta: 0,
        explicacion: "Los hongos tienen pared celular de quitina, el mismo polisacárido que forma el exoesqueleto de los insectos y crustáceos. Esta diferencia con las plantas (celulosa) tiene implicaciones para el diseño de antifúngicos.",
      },
    ],
  },

  /* ================= MÓDULO 3 ================= */
  {
    id: 3,
    seccion: "estructura",
    titulo: "Estructura de la célula eucariota",
    minutos: 12,
    objetivos: [
      "Describir el modelo del mosaico fluido y la estructura de la membrana plasmática.",
      "Identificar los orgánulos celulares y su función específica.",
      "Explicar la teoría de la endosimbiosis y su relación con mitocondrias y cloroplastos.",
      "Distinguir los componentes del citoesqueleto y sus funciones.",
    ],
    contenido: `
      <h2>La membrana plasmática</h2>
      <p>La <strong>membrana plasmática</strong> es el límite que separa el interior celular del exterior y regula el tráfico de sustancias. Lejos de ser una barrera rígida, es una estructura dinámica y selectivamente permeable.</p>

      <h3>El modelo del mosaico fluido (Singer y Nicholson, 1972)</h3>
      <p>El modelo propuesto por <strong>S. J. Singer y Garth Nicholson</strong> en 1972 describe la membrana como una <strong>bicapa fosfolipídica</strong> donde las proteínas flotan como icebergs en un mar de lípidos. Los componentes son:</p>
      <ul>
        <li><strong>Bicapa fosfolipídica:</strong> cada fosfolípido tiene una cabeza polar hidrófila (amiga del agua) orientada hacia los medios acuosos interior y exterior, y dos colas apolares hidrófobas (enemigas del agua) que forman el interior hidrófobo de la membrana.</li>
        <li><strong>Proteínas integrales:</strong> atraviesan toda la bicapa. Funcionan como canales, transportadores, receptores o enzimas.</li>
        <li><strong>Proteínas periféricas:</strong> se asocian a la superficie interna o externa de la membrana. Participan en señalización y soporte del citoesqueleto.</li>
        <li><strong>Glucoproteínas y glucolípidos:</strong> en la cara externa de la membrana forman el <em>glicocálix</em>, importante en reconocimiento celular, adhesión y defensa inmunitaria.</li>
        <li><strong>Colesterol:</strong> intercalado entre los fosfolípidos. Regula la fluidez de la membrana: aumenta su estabilidad a altas temperaturas y evita que se solidifique a bajas temperaturas.</li>
      </ul>
      <blockquote>💡 <strong>Analogía:</strong> La membrana plasmática es como un océano (bicapa lipídica) en el que flotan islas proteicas (mosaico). El océano es fluido y las islas se mueven lateralmente. Por eso "mosaico fluido".</blockquote>

      <h2>El núcleo: centro de control</h2>
      <p>El <strong>núcleo</strong> es el orgánulo más grande y visible de la célula eucariota. Contiene la información genética y dirige la actividad celular.</p>
      <ul>
        <li><strong>Doble membrana nuclear (envoltura nuclear):</strong> dos membranas concéntricas perforadas por <strong>poros nucleares</strong>, complejos proteicos que regulan el tráfico de moléculas entre el núcleo y el citoplasma (ARN sale, proteínas entran).</li>
        <li><strong>Cromatina:</strong> ADN asociado a proteínas histonas. Cuando la célula se divide, la cromatina se condensa en <strong>cromosomas</strong> visibles.</li>
        <li><strong>Nucleolo:</strong> región densa dentro del núcleo donde se sintetizan los ARN ribosomales (ARNr) y se ensamblan las subunidades de los ribosomas.</li>
      </ul>

      <h2>Orgánulos celulares</h2>

      <h3>Mitocondria — La central energética</h3>
      <p>La <strong>mitocondria</strong> (plural: mitocondrias) produce la mayor parte del ATP celular mediante la respiración aeróbica. Sus características únicas la distinguen de todos los demás orgánulos:</p>
      <ul>
        <li><strong>Doble membrana:</strong> la membrana interna forma pliegues llamados <strong>crestas mitocondriales</strong>, que aumentan enormemente la superficie disponible para las reacciones de síntesis de ATP.</li>
        <li><strong>ADN circular propio</strong> y <strong>ribosomas 70S</strong> (iguales a los bacterianos), lo que apoya la <strong>teoría de la endosimbiosis</strong>.</li>
        <li><strong>Teoría de la endosimbiosis</strong> (Lynn Margulis, 1967): las mitocondrias descienden de bacterias aerobias que fueron engullidas por una célula hospedadora hace ~2.000 millones de años en lugar de ser digeridas, estableciendo una relación simbiótica mutuamente beneficiosa.</li>
      </ul>
      <blockquote>📖 <strong>Dato clave:</strong> El ADN mitocondrial se hereda exclusivamente por línea materna, ya que el óvulo aporta todas las mitocondrias al embrión. Esto permite trazar genealogías maternas y fue clave para identificar a la "Eva mitocondrial".</blockquote>

      <h3>Cloroplasto — La fábrica solar (células vegetales)</h3>
      <p>El <strong>cloroplasto</strong> realiza la fotosíntesis, transformando energía lumínica en energía química (glucosa). Al igual que la mitocondria, tiene doble membrana, ADN circular propio y ribosomas 70S (endosimbiosis de cianobacterias).</p>
      <ul>
        <li><strong>Tilacoides:</strong> membranas internas apiladas en pilas llamadas <strong>grana</strong>. Contienen clorofila y los complejos de la fase luminosa de la fotosíntesis.</li>
        <li><strong>Estroma:</strong> fluido que rodea los tilacoides. Aquí ocurre el ciclo de Calvin (fase oscura).</li>
      </ul>

      <h3>Retículo endoplásmico rugoso (RER)</h3>
      <p>Sistema de membranas con <strong>ribosomas adheridos</strong> a su superficie externa. Su función principal es la <strong>síntesis y procesamiento de proteínas</strong> destinadas a ser secretadas, incorporadas a la membrana plasmática o enviadas a lisosomas. Las proteínas recién sintetizadas entran en la luz del RER donde se pliegan y modifican.</p>

      <h3>Retículo endoplásmico liso (REL)</h3>
      <p>Sistema de membranas <strong>sin ribosomas</strong>. Funciones principales:</p>
      <ul>
        <li>Síntesis de lípidos (fosfolípidos, esteroides, incluyendo hormonas esteroideas en glándulas suprarrenales y gónadas).</li>
        <li>Almacenamiento y regulación de iones calcio (Ca²⁺) en células musculares.</li>
        <li>Detoxificación de fármacos y tóxicos en hepatocitos (células del hígado).</li>
      </ul>

      <h3>Aparato de Golgi — La oficina de correos celular</h3>
      <p>El <strong>aparato de Golgi</strong> recibe proteínas y lípidos del RER, los <strong>modifica, clasifica y empaqueta</strong> en vesículas para enviarlos a su destino final (membrana plasmática, exterior celular o lisosomas). Está formado por pilas de membranas apiladas llamadas <strong>cisternas</strong>.</p>
      <blockquote>💡 <strong>Analogía:</strong> El RER es la fábrica que produce los paquetes. El aparato de Golgi es la oficina de correos: los recibe, los rotula, les añade la dirección correcta (glucosilación, fosforilación) y los envía al destino adecuado.</blockquote>

      <h3>Ribosomas — La maquinaria traductora</h3>
      <p>Los <strong>ribosomas</strong> son los únicos orgánulos <strong>sin membrana</strong>. Están formados por ARN ribosómico (ARNr) y proteínas. Su función es traducir el ARN mensajero (ARNm) en cadenas de aminoácidos (proteínas). Pueden estar libres en el citoplasma (sintetizan proteínas para uso interno) o adheridos al RER (sintetizan proteínas para secretar o insertar en membrana).</p>

      <h3>Lisosomas — El sistema digestivo celular</h3>
      <p>Los <strong>lisosomas</strong> son vesículas llenas de <strong>enzimas hidrolíticas</strong> (más de 50 tipos) activas a pH ácido (~5). Funciones:</p>
      <ul>
        <li><strong>Autofagia:</strong> digestión de orgánulos dañados o envejecidos de la propia célula. Proceso esencial para el mantenimiento celular.</li>
        <li><strong>Fagocitosis:</strong> digestión de partículas extrañas o bacterias ingeridas por la célula (importante en macrófagos y neutrófilos).</li>
        <li><strong>Apoptosis:</strong> participación en la muerte celular programada.</li>
      </ul>

      <h3>Peroxisomas</h3>
      <p>Vesículas que contienen la enzima <strong>catalasa</strong>, que descompone el peróxido de hidrógeno (H₂O₂) —un subproducto tóxico del metabolismo oxidativo— en agua y oxígeno. También participan en la oxidación de ácidos grasos.</p>

      <h3>Vacuolas</h3>
      <p>Las células <strong>vegetales maduras</strong> tienen una gran <strong>vacuola central</strong> que puede ocupar hasta el 90% del volumen celular. Almacena agua, iones, azúcares, pigmentos y desechos metabólicos. La presión del agua en la vacuola (presión de turgencia) da rigidez a la célula vegetal.</p>

      <h2>El citoesqueleto: el andamiaje celular</h2>
      <p>El <strong>citoesqueleto</strong> es una red dinámica de filamentos proteicos que da forma a la célula, permite el movimiento celular e intracelular y organiza los orgánulos en el espacio. Está formado por tres tipos de filamentos:</p>
      <table>
        <tr>
          <th>Componente</th>
          <th>Diámetro</th>
          <th>Proteína principal</th>
          <th>Funciones</th>
        </tr>
        <tr>
          <td><strong>Microfilamentos</strong></td>
          <td>~7 nm</td>
          <td>Actina</td>
          <td>Movimiento celular, contracción muscular, división celular (anillo contráctil)</td>
        </tr>
        <tr>
          <td><strong>Filamentos intermedios</strong></td>
          <td>~10 nm</td>
          <td>Queratina, vimentina, láminas</td>
          <td>Soporte estructural, resistencia mecánica</td>
        </tr>
        <tr>
          <td><strong>Microtúbulos</strong></td>
          <td>20–25 nm</td>
          <td>Tubulina (α y β)</td>
          <td>Transporte intracelular, huso mitótico, cilios y flagelos</td>
        </tr>
      </table>

      <h3>Centrosoma</h3>
      <p>El <strong>centrosoma</strong> es el principal centro organizador de microtúbulos en las células animales. Contiene dos <strong>centriolos</strong> orientados perpendicularmente entre sí. Durante la división celular, organiza el huso acromático que separa los cromosomas.</p>

      <h2>Diferencias exclusivas: célula vegetal vs animal</h2>
      <table>
        <tr>
          <th>Componente</th>
          <th>Célula animal</th>
          <th>Célula vegetal</th>
        </tr>
        <tr>
          <td>Pared celular</td>
          <td>No</td>
          <td>Sí (celulosa)</td>
        </tr>
        <tr>
          <td>Cloroplastos</td>
          <td>No</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Vacuola central grande</td>
          <td>No (vacuolas pequeñas)</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Centrosomas</td>
          <td>Sí</td>
          <td>No (en la mayoría)</td>
        </tr>
        <tr>
          <td>Lisosomas</td>
          <td>Sí</td>
          <td>Raros (vacuola hace su función)</td>
        </tr>
        <tr>
          <td>Plasmodesmos</td>
          <td>No</td>
          <td>Sí</td>
        </tr>
      </table>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué las mitocondrias tienen su propio ADN y ribosomas de tipo 70S? ¿Qué teoría lo explica?</li>
        <li>¿Qué ocurriría con una célula si sus lisosomas liberaran sus enzimas en el citoplasma?</li>
        <li>¿Por qué el aparato de Golgi necesita recibir vesículas del RER antes de poder funcionar?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Membrana plasmática", explicacion: "Bicapa fosfolipídica con proteínas intercaladas que delimita la célula. Es selectivamente permeable: deja pasar algunas sustancias y bloquea otras." },
      { termino: "Mosaico fluido", explicacion: "Modelo de membrana propuesto por Singer y Nicholson (1972): proteínas que flotan en una bicapa lipídica fluida, como islas en un océano." },
      { termino: "Mitocondria", explicacion: "Orgánulo de doble membrana que produce ATP mediante respiración aeróbica. Tiene ADN propio y ribosomas 70S, vestigios de su origen bacteriano (endosimbiosis)." },
      { termino: "Crestas mitocondriales", explicacion: "Pliegues de la membrana interna de la mitocondria que aumentan enormemente la superficie disponible para la síntesis de ATP." },
      { termino: "Aparato de Golgi", explicacion: "Sistema de cisternas membranosas que modifica, clasifica y empaqueta proteínas y lípidos para enviarlos a su destino. Actúa como la 'oficina de correos' de la célula." },
      { termino: "Citoesqueleto", explicacion: "Red dinámica de filamentos proteicos (microfilamentos, filamentos intermedios y microtúbulos) que da forma a la célula, organiza sus orgánulos y permite el movimiento." },
      { termino: "Endosimbiosis", explicacion: "Teoría (Lynn Margulis, 1967) que propone que las mitocondrias y cloroplastos son descendientes de bacterias que fueron engullidas por células hospedadoras hace miles de millones de años, estableciendo una simbiosis permanente." },
    ],
    quiz: [
      {
        pregunta: "¿Qué modelo describe la estructura de la membrana plasmática?",
        opciones: [
          "Modelo del mosaico fluido (Singer y Nicholson, 1972)",
          "Modelo de la doble hélice",
          "Modelo del sandwich",
          "Modelo de Watson y Crick",
        ],
        correcta: 0,
        explicacion: "Singer y Nicholson propusieron en 1972 el modelo del mosaico fluido: proteínas flotando en una bicapa fosfolipídica fluida, como islas en un océano.",
      },
      {
        pregunta: "¿Cuál es la 'central energética' de la célula eucariota?",
        opciones: [
          "La mitocondria",
          "El núcleo",
          "El aparato de Golgi",
          "El retículo endoplásmico",
        ],
        correcta: 0,
        explicacion: "La mitocondria produce la mayor parte del ATP celular mediante la respiración aeróbica. Sus crestas mitocondriales aumentan la superficie para la síntesis de ATP.",
      },
      {
        pregunta: "¿Cuál es la función principal del aparato de Golgi?",
        opciones: [
          "Modificar, clasificar y empaquetar proteínas y lípidos para su distribución",
          "Sintetizar proteínas a partir del ARNm",
          "Producir ATP mediante respiración celular",
          "Digerir materiales externos capturados",
        ],
        correcta: 0,
        explicacion: "El aparato de Golgi actúa como la 'oficina de correos' celular: recibe proteínas del RER, las modifica (glucosilación, etc.), las clasifica y las envía a su destino correcto.",
      },
      {
        pregunta: "¿Cuál de estos componentes del citoesqueleto tiene mayor diámetro?",
        opciones: [
          "Microtúbulos (20–25 nm)",
          "Microfilamentos de actina (~7 nm)",
          "Filamentos intermedios (~10 nm)",
          "Todos tienen el mismo diámetro",
        ],
        correcta: 0,
        explicacion: "Los microtúbulos, formados por tubulina, tienen el mayor diámetro (20–25 nm). Los microfilamentos de actina son los más finos (~7 nm) y los filamentos intermedios tienen un tamaño intermedio (~10 nm).",
      },
      {
        pregunta: "¿Qué orgánulo posee su propio ADN circular y ribosomas de tipo 70S?",
        opciones: [
          "La mitocondria",
          "El núcleo",
          "El aparato de Golgi",
          "Los lisosomas",
        ],
        correcta: 0,
        explicacion: "La mitocondria (y el cloroplasto en plantas) tiene ADN circular propio y ribosomas 70S, similares a los bacterianos. Esto apoya la teoría de la endosimbiosis: estos orgánulos descienden de bacterias que fueron incorporadas a células hospedadoras.",
      },
    ],
  },

  /* ================= MÓDULO 4 ================= */
  {
    id: 4,
    seccion: "funciones",
    titulo: "Metabolismo celular: respiración y fotosíntesis",
    minutos: 11,
    objetivos: [
      "Describir las fases de la respiración celular aeróbica y la cantidad de ATP producida en cada etapa.",
      "Distinguir entre fermentación láctica y alcohólica, con sus productos y aplicaciones.",
      "Explicar las dos fases de la fotosíntesis y su localización en el cloroplasto.",
      "Comparar fotosíntesis y respiración aeróbica como procesos complementarios.",
    ],
    contenido: `
      <h2>El ATP: la moneda energética de la célula</h2>
      <p>El <strong>adenosín trifosfato (ATP)</strong> es la molécula que almacena y transporta energía química en todas las células vivas. Cuando la célula necesita energía para realizar trabajo (mover, sintetizar, transportar), hidroliza el ATP liberando energía:</p>
      <pre>ATP  →  ADP + Pᵢ + energía libre (~30,5 kJ/mol)</pre>
      <p>El ADP (adenosín difosfato) se recarga constantemente en la mitocondria y el cloroplasto. Una célula humana en reposo regenera su peso en ATP cada día.</p>

      <h2>Respiración celular aeróbica</h2>
      <p>La respiración celular aeróbica es el proceso por el que las células <strong>queman glucosa en presencia de oxígeno</strong> para obtener energía en forma de ATP. Es el proceso energético más eficiente conocido.</p>
      <pre>C₆H₁₂O₆ + 6 O₂  →  6 CO₂ + 6 H₂O + ~30 ATP</pre>
      <p>El proceso ocurre en tres etapas secuenciales:</p>

      <h3>Fase 1 · Glucólisis (en el citoplasma)</h3>
      <p>La glucólisis ocurre en el <strong>citosol</strong> y no requiere oxígeno. Es el proceso más antiguo de la evolución energética.</p>
      <ul>
        <li><strong>Sustrato:</strong> 1 molécula de glucosa (6C).</li>
        <li><strong>Productos:</strong> 2 moléculas de piruvato (3C), <strong>2 ATP netos</strong>, 2 NADH.</li>
        <li>La glucosa se rompe en dos moléculas de piruvato en una serie de 10 reacciones enzimáticas.</li>
      </ul>

      <h3>Fase 2 · Ciclo de Krebs (en la matriz mitocondrial)</h3>
      <p>Los piruvatos son transportados a la matriz mitocondrial y convertidos en <strong>acetil-CoA</strong> (2C), que entra en el ciclo de Krebs.</p>
      <ul>
        <li><strong>Productos por vuelta:</strong> 1 ATP, 3 NADH, 1 FADH₂, 2 CO₂.</li>
        <li><strong>Productos por molécula de glucosa (2 vueltas):</strong> 2 ATP, 6 NADH, 2 FADH₂.</li>
        <li>El CO₂ producido aquí es el que exhalamos al respirar.</li>
      </ul>

      <h3>Fase 3 · Fosforilación oxidativa (membrana interna mitocondrial)</h3>
      <p>Es la fase que produce la gran mayoría de ATP. Ocurre en dos pasos coordinados:</p>
      <ul>
        <li><strong>Cadena de transporte de electrones:</strong> el NADH y FADH₂ de las fases anteriores donan electrones a complejos proteicos de la membrana interna. Los electrones fluyen hacia el O₂ (aceptor final), formando H₂O. Este flujo bombea protones (H⁺) del interior de la mitocondria hacia el espacio intermembrana.</li>
        <li><strong>Quimioósmosis:</strong> el gradiente de H⁺ generado impulsa a los protones de vuelta al interior a través de la <strong>ATP sintasa</strong>, que usa esta energía para sintetizar ATP a partir de ADP + Pᵢ.</li>
        <li><strong>Producción:</strong> 26–28 ATP por molécula de glucosa.</li>
      </ul>
      <blockquote>💡 <strong>Analogía:</strong> La ATP sintasa funciona como una turbina. El flujo de protones es el "agua" que hace girar la rueda, y ese giro produce ATP.</blockquote>

      <h2>Respiración anaeróbica: fermentación</h2>
      <p>Cuando no hay oxígeno disponible, las células pueden obtener algo de energía mediante <strong>fermentación</strong>. El proceso es menos eficiente (solo 2 ATP por glucosa) pero crucial en algunos contextos.</p>

      <h3>Fermentación láctica</h3>
      <ul>
        <li><strong>Organismos:</strong> células musculares en ejercicio intenso, algunas bacterias (Lactobacillus).</li>
        <li><strong>Productos:</strong> ácido láctico + 2 ATP.</li>
        <li><strong>Aplicaciones:</strong> yogur, queso, chucrut, encurtidos.</li>
        <li>El ácido láctico acumulado en los músculos causa la sensación de quemazón durante el ejercicio intenso.</li>
      </ul>
      <pre>Glucosa → 2 piruvato → 2 ácido láctico + 2 ATP</pre>

      <h3>Fermentación alcohólica</h3>
      <ul>
        <li><strong>Organismos:</strong> levaduras (Saccharomyces cerevisiae), algunas bacterias.</li>
        <li><strong>Productos:</strong> etanol + CO₂ + 2 ATP.</li>
        <li><strong>Aplicaciones:</strong> elaboración de pan (el CO₂ hace subir la masa), vino, cerveza, biocombustibles.</li>
      </ul>
      <pre>Glucosa → 2 piruvato → 2 etanol + 2 CO₂ + 2 ATP</pre>

      <h2>Fotosíntesis</h2>
      <p>La fotosíntesis es el proceso por el que los organismos fotosintéticos (plantas, algas, cianobacterias) <strong>capturan energía lumínica y la convierten en energía química</strong> (glucosa), utilizando CO₂ y H₂O.</p>
      <pre>6 CO₂ + 6 H₂O + luz  →  C₆H₁₂O₆ + 6 O₂</pre>
      <p>Ocurre en dos fases coordinadas en el cloroplasto:</p>

      <h3>Fase luminosa (en las membranas tilacoidales)</h3>
      <p>Depende directamente de la luz solar y ocurre en los <strong>tilacoides</strong>.</p>
      <ul>
        <li><strong>Fotosistema II (PSII):</strong> la clorofila absorbe luz y usa esa energía para <strong>fotólisis del agua</strong>: H₂O → 2H⁺ + ½ O₂ + 2e⁻. El O₂ liberado aquí es el que respira la atmósfera.</li>
        <li><strong>Cadena de transporte de electrones:</strong> los electrones fluyen de PSII a PSI, bombeando H⁺ y generando un gradiente para la ATP sintasa → <strong>ATP</strong>.</li>
        <li><strong>Fotosistema I (PSI):</strong> absorbe luz adicional y usa los electrones para reducir NADP⁺ a <strong>NADPH</strong>.</li>
        <li><strong>Productos:</strong> ATP, NADPH y O₂.</li>
      </ul>

      <h3>Ciclo de Calvin (en el estroma del cloroplasto)</h3>
      <p>No depende directamente de la luz (aunque sí de los productos de la fase luminosa). Ocurre en el <strong>estroma</strong> del cloroplasto.</p>
      <ul>
        <li><strong>Fijación del CO₂:</strong> la enzima <strong>RuBisCO</strong> (la proteína más abundante de la Tierra) fija CO₂ atmosférico a una molécula de 5 carbonos (RuBP), formando un intermediario inestable de 6C que se divide en dos moléculas de 3C (3-PGA).</li>
        <li><strong>Reducción:</strong> el ATP y NADPH de la fase luminosa reducen el 3-PGA a <strong>G3P</strong> (gliceraldehído-3-fosfato), el azúcar de 3C del que se sintetiza glucosa.</li>
        <li><strong>Regeneración del RuBP:</strong> parte del G3P se usa para regenerar el RuBP, permitiendo que el ciclo continúe.</li>
      </ul>

      <h2>Tabla comparativa: fotosíntesis vs respiración aeróbica</h2>
      <table>
        <tr>
          <th>Característica</th>
          <th>Fotosíntesis</th>
          <th>Respiración aeróbica</th>
        </tr>
        <tr>
          <td>Función</td>
          <td>Almacenar energía</td>
          <td>Liberar energía</td>
        </tr>
        <tr>
          <td>Reactivos</td>
          <td>CO₂, H₂O, luz</td>
          <td>Glucosa, O₂</td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Glucosa, O₂</td>
          <td>CO₂, H₂O, ATP</td>
        </tr>
        <tr>
          <td>Orgánulo</td>
          <td>Cloroplasto</td>
          <td>Mitocondria (y citosol)</td>
        </tr>
        <tr>
          <td>Tipo de organismos</td>
          <td>Autótrofos (plantas, algas)</td>
          <td>Casi todos los seres vivos</td>
        </tr>
        <tr>
          <td>ATP</td>
          <td>Se consume (ciclo de Calvin)</td>
          <td>Se produce (~30 ATP/glucosa)</td>
        </tr>
      </table>

      <h2>Regulación enzimática del metabolismo</h2>
      <p>Las rutas metabólicas están finamente reguladas para evitar el despilfarro energético y responder a las necesidades celulares:</p>
      <ul>
        <li><strong>Retroalimentación negativa:</strong> el producto final de una ruta inhibe una enzima al inicio de la ruta. Ej.: el ATP inhibe la fosfofructocinasa de la glucólisis cuando hay energía suficiente.</li>
        <li><strong>Activación alostérica:</strong> ciertos metabolitos activan enzimas clave cuando aumenta la demanda energética.</li>
        <li><strong>Regulación hormonal:</strong> hormonas como el glucagón e insulina coordinan el metabolismo de glucosa a nivel de todo el organismo.</li>
      </ul>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué la respiración aeróbica produce muchos más ATP que la fermentación?</li>
        <li>Explica por qué la fotosíntesis y la respiración aeróbica son procesos complementarios a nivel planetario.</li>
        <li>¿Qué ocurriría si bloqueáramos la ATP sintasa mitocondrial?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "ATP", explicacion: "Adenosín trifosfato: molécula que almacena y transporta energía química en la célula. Su hidrólisis libera energía utilizable para todos los procesos celulares." },
      { termino: "Glucólisis", explicacion: "Primera etapa de la respiración celular. Ocurre en el citosol y transforma una molécula de glucosa en dos de piruvato, produciendo 2 ATP netos y 2 NADH. No requiere oxígeno." },
      { termino: "Ciclo de Krebs", explicacion: "Segunda etapa de la respiración aeróbica, en la matriz mitocondrial. Completa la oxidación de los derivados de la glucosa y produce NADH y FADH₂ que alimentan la cadena de transporte de electrones." },
      { termino: "Fosforilación oxidativa", explicacion: "Tercera etapa de la respiración aeróbica. Ocurre en la membrana interna mitocondrial. La cadena de transporte de electrones genera un gradiente de H⁺ que la ATP sintasa usa para producir ~26–28 ATP." },
      { termino: "Fotosíntesis", explicacion: "Proceso por el que plantas, algas y cianobacterias convierten energía lumínica, CO₂ y H₂O en glucosa y O₂. Ocurre en el cloroplasto." },
      { termino: "Fermentación", explicacion: "Proceso anaeróbico que produce solo 2 ATP por glucosa. Tipos: láctica (ácido láctico) y alcohólica (etanol + CO₂). Esencial para la industria alimentaria y en músculos durante ejercicio intenso." },
    ],
    quiz: [
      {
        pregunta: "¿Cuántos ATP produce aproximadamente la respiración celular aeróbica por molécula de glucosa?",
        opciones: [
          "~30 ATP",
          "2 ATP",
          "100 ATP",
          "~15 ATP",
        ],
        correcta: 0,
        explicacion: "La respiración aeróbica produce aproximadamente 30 ATP por molécula de glucosa: 2 ATP en la glucólisis, 2 ATP en el ciclo de Krebs y 26–28 ATP en la fosforilación oxidativa.",
      },
      {
        pregunta: "¿Dónde se lleva a cabo la glucólisis?",
        opciones: [
          "En el citoplasma (citosol)",
          "En la matriz mitocondrial",
          "En la membrana mitocondrial interna",
          "En el cloroplasto",
        ],
        correcta: 0,
        explicacion: "La glucólisis ocurre en el citosol (citoplasma) de la célula. Es la única fase de la respiración que no requiere mitocondrias, lo que explica por qué es universal en todos los seres vivos.",
      },
      {
        pregunta: "¿Cuál es el producto de la fermentación alcohólica?",
        opciones: [
          "Etanol y CO₂",
          "Ácido láctico",
          "ATP y agua",
          "Glucosa y oxígeno",
        ],
        correcta: 0,
        explicacion: "La fermentación alcohólica, realizada por levaduras, produce etanol y CO₂ a partir de piruvato. El CO₂ hace subir el pan y el etanol es el alcohol de las bebidas fermentadas.",
      },
      {
        pregunta: "¿Qué enzima fija el CO₂ atmosférico en el ciclo de Calvin?",
        opciones: [
          "RuBisCO",
          "ATP sintasa",
          "Catalasa",
          "Hexoquinasa",
        ],
        correcta: 0,
        explicacion: "RuBisCO (ribulosa-1,5-bisfosfato carboxilasa/oxigenasa) es la enzima que fija el CO₂ en el ciclo de Calvin. Es la proteína más abundante de la Tierra, esencial para toda la fotosíntesis vegetal.",
      },
      {
        pregunta: "¿Qué proceso es energéticamente más eficiente?",
        opciones: [
          "La respiración aeróbica (~30 ATP por glucosa)",
          "La fermentación láctica (2 ATP por glucosa)",
          "La fermentación alcohólica (2 ATP por glucosa)",
          "Todos producen la misma cantidad de ATP",
        ],
        correcta: 0,
        explicacion: "La respiración aeróbica es mucho más eficiente (~30 ATP) gracias a la fosforilación oxidativa. La fermentación solo produce 2 ATP porque no usa la cadena de transporte de electrones ni el O₂ como aceptor final.",
      },
    ],
  },

  /* ================= MÓDULO 5 ================= */
  {
    id: 5,
    seccion: "funciones",
    titulo: "Reproducción celular: mitosis, meiosis y ciclo celular",
    minutos: 10,
    objetivos: [
      "Describir las fases del ciclo celular y la función de los puntos de control.",
      "Distinguir las etapas y resultados de la mitosis y la meiosis.",
      "Explicar el papel del crossing-over en la variabilidad genética.",
      "Relacionar el control del ciclo celular con el desarrollo del cáncer.",
    ],
    contenido: `
      <h2>El ciclo celular</h2>
      <p>El <strong>ciclo celular</strong> es la secuencia ordenada de eventos que culminan en la división de una célula en dos células hijas. Comprende dos periodos principales:</p>

      <h3>Interfase (aproximadamente 90% del ciclo)</h3>
      <p>La célula crece y duplica su ADN. Se divide en tres subfases:</p>
      <ul>
        <li><strong>Fase G1 (Gap 1 o crecimiento 1):</strong> la célula crece en tamaño, sintetiza proteínas y orgánulos. Es la fase más variable en duración según el tipo celular. Al final, la célula debe pasar el punto de control G1/S para continuar.</li>
        <li><strong>Fase S (Síntesis):</strong> replicación del ADN. Cada cromosoma es copiado, formando cromátidas hermanas unidas por el centrómero. El contenido de ADN pasa de 2n a 4n.</li>
        <li><strong>Fase G2 (Gap 2 o crecimiento 2):</strong> la célula continúa creciendo y sintetiza proteínas necesarias para la división. Punto de control G2/M: la célula verifica que el ADN está correctamente replicado.</li>
      </ul>

      <h3>Fase M (Mitosis + Citocinesis)</h3>
      <p>La célula se divide activamente. Es la fase más corta pero la más espectacular.</p>

      <h2>Puntos de control del ciclo celular</h2>
      <p>El ciclo celular está regulado por <strong>proteínas ciclinas y cinasas dependientes de ciclina (CDK)</strong> que actúan en tres puntos de control clave:</p>
      <ul>
        <li><strong>Punto de control G1/S:</strong> ¿Hay daño en el ADN? ¿Es el ambiente favorable para crecer?</li>
        <li><strong>Punto de control G2/M:</strong> ¿Se ha replicado correctamente todo el ADN?</li>
        <li><strong>Punto de control del huso (durante la metafase):</strong> ¿Están todos los cromosomas correctamente unidos al huso mitótico?</li>
      </ul>
      <blockquote>⚠️ <strong>Cáncer y ciclo celular:</strong> el cáncer surge cuando los genes que regulan los puntos de control (oncogenes y genes supresores de tumores como TP53) mutan, permitiendo que células con ADN dañado continúen dividiéndose sin control. El cáncer es, en esencia, una enfermedad del ciclo celular.</blockquote>

      <h2>Mitosis: división para crecer y reparar</h2>
      <p>La <strong>mitosis</strong> es el tipo de división celular que produce dos células hijas <strong>diploides (2n) genéticamente idénticas</strong> a la célula madre. Ocurre en todas las células somáticas (del cuerpo) para el crecimiento, la reparación y el mantenimiento de tejidos.</p>
      <h3>Fases de la mitosis</h3>
      <ul>
        <li><strong>Profase:</strong> la cromatina se condensa en cromosomas visibles (cada uno formado por 2 cromátidas hermanas). El nucleolo desaparece. Comienza a formarse el huso mitótico.</li>
        <li><strong>Prometafase:</strong> la envoltura nuclear se desintegra. Los microtúbulos del huso se unen a los cinetocoros de los cromosomas.</li>
        <li><strong>Metafase:</strong> los cromosomas se alinean en el ecuador celular (placa metafásica). Es el momento de máxima condensación: los cromosomas son más visibles y contables.</li>
        <li><strong>Anafase:</strong> las cromátidas hermanas se separan y son arrastradas hacia polos opuestos de la célula por los microtúbulos del huso. Cada polo recibe un conjunto completo de cromosomas.</li>
        <li><strong>Telofase:</strong> se reconstituye la envoltura nuclear en cada polo. Los cromosomas se descondensan. El huso desaparece.</li>
        <li><strong>Citocinesis:</strong> división del citoplasma. En células animales, un anillo contráctil de actina y miosina estrangula la célula. En células vegetales, se forma una placa celular que se convierte en nueva pared.</li>
      </ul>
      <p><strong>Resultado:</strong> 1 célula diploide (2n) → 2 células diploides idénticas (2n).</p>

      <h2>Meiosis: división para reproducirse</h2>
      <p>La <strong>meiosis</strong> es el tipo de división que produce <strong>cuatro células haploides (n) genéticamente distintas</strong>, los gametos (espermatozoides y óvulos en animales). Consta de una replicación del ADN seguida de dos divisiones.</p>

      <h3>Meiosis I — División reduccional</h3>
      <ul>
        <li><strong>Profase I (la más larga y compleja):</strong> los cromosomas homólogos se emparejan en un proceso llamado <strong>sinapsis</strong>, formando bivalentes (tétradas). Ocurre el <strong>crossing-over</strong> (entrecruzamiento): intercambio de segmentos de ADN entre cromátidas no hermanas de cromosomas homólogos. Es la principal fuente de variabilidad genética.</li>
        <li><strong>Metafase I:</strong> los bivalentes se alinean en el ecuador. La orientación aleatoria de cada par de homólogos (segregación independiente) genera variabilidad adicional.</li>
        <li><strong>Anafase I:</strong> los cromosomas homólogos (no las cromátidas) se separan hacia polos opuestos.</li>
        <li><strong>Telofase I:</strong> se forman dos células haploides con cromosomas de doble cromátida.</li>
      </ul>

      <h3>Meiosis II — División ecuacional</h3>
      <p>Similar a una mitosis: las cromátidas hermanas de cada célula haploide se separan, produciendo un total de <strong>4 células haploides (n)</strong> genéticamente únicas.</p>

      <h3>Fuentes de variabilidad genética</h3>
      <ul>
        <li><strong>Crossing-over (profase I):</strong> recombinación de material genético entre cromosomas homólogos.</li>
        <li><strong>Segregación independiente (metafase I):</strong> la orientación aleatoria de los bivalentes genera 2²³ ≈ 8,4 millones de combinaciones posibles solo por este mecanismo.</li>
        <li><strong>Fecundación aleatoria:</strong> la unión de cualquier espermatozoide con cualquier óvulo multiplica exponencialmente las posibilidades.</li>
      </ul>
      <blockquote>💡 <strong>¿Por qué importa la meiosis?</strong> Sin meiosis, la fecundación duplicaría el número de cromosomas en cada generación. La meiosis produce células haploides (n) que al fecundarse restauran la dotación diploide (2n), manteniendo constante el número de cromosomas de la especie.</blockquote>

      <h2>Fisión binaria: reproducción en procariotas</h2>
      <p>Las células procariotas se reproducen mediante <strong>fisión binaria</strong>, un proceso más simple que la mitosis:</p>
      <ol>
        <li><strong>Replicación del ADN:</strong> el ADN circular se replica mientras está unido a la membrana plasmática.</li>
        <li><strong>Segregación:</strong> las dos copias del cromosoma se separan hacia polos opuestos a medida que la célula crece.</li>
        <li><strong>Formación del septo:</strong> una constricción en el centro de la célula forma el tabique de división, separando las dos células hijas.</li>
      </ol>
      <p><em>Escherichia coli</em> puede completar una fisión binaria en solo <strong>20 minutos</strong> en condiciones óptimas, lo que permite un crecimiento exponencial impresionante.</p>

      <h2>Tabla comparativa: mitosis vs meiosis</h2>
      <table>
        <tr>
          <th>Característica</th>
          <th>Mitosis</th>
          <th>Meiosis</th>
        </tr>
        <tr>
          <td>Número de divisiones</td>
          <td>1</td>
          <td>2 (I y II)</td>
        </tr>
        <tr>
          <td>Células hijas</td>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ploidía de las hijas</td>
          <td>Diploide (2n)</td>
          <td>Haploide (n)</td>
        </tr>
        <tr>
          <td>Identidad genética</td>
          <td>Idénticas a la madre</td>
          <td>Distintas entre sí y de la madre</td>
        </tr>
        <tr>
          <td>Crossing-over</td>
          <td>No (o muy raramente)</td>
          <td>Sí (profase I)</td>
        </tr>
        <tr>
          <td>Función</td>
          <td>Crecimiento, reparación</td>
          <td>Reproducción sexual</td>
        </tr>
        <tr>
          <td>Dónde ocurre</td>
          <td>Células somáticas</td>
          <td>Gónadas (testículos, ovarios)</td>
        </tr>
      </table>

      <h2>Preguntas de reflexión</h2>
      <ul>
        <li>¿Por qué la profase I de la meiosis es la fase más larga y crucial del proceso?</li>
        <li>Si una célula con 46 cromosomas realiza mitosis, ¿cuántos cromosomas tendrán las células hijas? ¿Y si realiza meiosis?</li>
        <li>¿Qué consecuencias tendría para el organismo que un punto de control del ciclo celular fallara?</li>
      </ul>
    `,
    vocabulario: [
      { termino: "Ciclo celular", explicacion: "Secuencia ordenada de eventos (G1, S, G2, M) que culminan en la división de una célula en dos células hijas. Regulado por ciclinas y CDK en puntos de control clave." },
      { termino: "Mitosis", explicacion: "División celular que produce dos células diploides (2n) genéticamente idénticas. Fases: profase, prometafase, metafase, anafase, telofase y citocinesis. Función: crecimiento y reparación." },
      { termino: "Meiosis", explicacion: "División celular especializada que produce cuatro células haploides (n) genéticamente distintas. Consta de dos divisiones (I y II). Función: producción de gametos para reproducción sexual." },
      { termino: "Crossing-over", explicacion: "Intercambio de segmentos de ADN entre cromátidas no hermanas de cromosomas homólogos durante la profase I de la meiosis. Principal fuente de variabilidad genética en la reproducción sexual." },
      { termino: "Fisión binaria", explicacion: "Mecanismo de reproducción asexual de las células procariotas: el ADN se replica y la célula se divide en dos células hijas idénticas. E. coli lo hace en ~20 minutos." },
      { termino: "Citocinesis", explicacion: "División del citoplasma que sigue a la mitosis o meiosis. En células animales: anillo contráctil de actina. En células vegetales: formación de placa celular. Produce dos células hijas físicamente separadas." },
    ],
    quiz: [
      {
        pregunta: "¿Cuántas células hijas y de qué tipo produce la mitosis?",
        opciones: [
          "2 células diploides (2n) genéticamente idénticas",
          "4 células haploides (n) distintas",
          "2 células haploides (n)",
          "4 células diploides (2n)",
        ],
        correcta: 0,
        explicacion: "La mitosis produce 2 células hijas diploides (2n) con el mismo material genético que la célula madre. Este tipo de división sirve para el crecimiento y la reparación de tejidos.",
      },
      {
        pregunta: "¿Qué ocurre durante el crossing-over en la profase I de la meiosis?",
        opciones: [
          "Se intercambian segmentos de ADN entre cromátidas no hermanas de cromosomas homólogos",
          "Los cromosomas se alinean en el ecuador celular",
          "Las cromátidas hermanas se separan",
          "Se forma la placa metafásica",
        ],
        correcta: 0,
        explicacion: "El crossing-over ocurre durante la profase I cuando los cromosomas homólogos están emparejados (sinapsis). Las cromátidas no hermanas intercambian segmentos de ADN, creando nuevas combinaciones genéticas.",
      },
      {
        pregunta: "¿Por qué es importante la meiosis para mantener el número de cromosomas de la especie?",
        opciones: [
          "Porque genera células haploides (n) que al fecundarse restauran la dotación diploide (2n)",
          "Porque produce células idénticas a la célula madre",
          "Porque permite la reparación de tejidos dañados",
          "Porque ocurre en todas las células somáticas",
        ],
        correcta: 0,
        explicacion: "La meiosis reduce a la mitad el número de cromosomas (de 2n a n). Cuando dos gametos haploides se fusionan en la fecundación, se restaura la dotación diploide (2n) sin que se duplique el número de cromosomas en cada generación.",
      },
      {
        pregunta: "¿Cómo se reproducen las bacterias?",
        opciones: [
          "Fisión binaria",
          "Mitosis",
          "Meiosis",
          "Gemación",
        ],
        correcta: 0,
        explicacion: "Las bacterias se reproducen por fisión binaria: el ADN circular se replica, la célula crece y un septo central la divide en dos células hijas genéticamente idénticas.",
      },
      {
        pregunta: "¿Cuál es la relación entre el ciclo celular descontrolado y el cáncer?",
        opciones: [
          "El cáncer surge cuando los puntos de control del ciclo celular fallan y la célula se divide sin regulación",
          "El cáncer es causado exclusivamente por mutaciones en el ADN mitocondrial",
          "El cáncer solo afecta a células que no se dividen",
          "Los puntos de control del ciclo celular provocan directamente el cáncer",
        ],
        correcta: 0,
        explicacion: "El cáncer surge cuando mutaciones en genes reguladores (oncogenes, genes supresores de tumores como TP53) impiden que los puntos de control detecten el daño en el ADN, permitiendo una división celular descontrolada.",
      },
    ],
  },

];

const GLOSARIO_CELULAS = [
  {
    termino: "Célula",
    definicion: "Unidad estructural, funcional y reproductiva básica de todos los seres vivos. Término acuñado por Robert Hooke en 1665.",
  },
  {
    termino: "Procariota",
    definicion: "Célula sin núcleo verdadero: el ADN circular se encuentra libre en el citoplasma en una región llamada nucleoide. Incluye bacterias y arqueas. Tamaño: 1–5 µm.",
  },
  {
    termino: "Eucariota",
    definicion: "Célula con núcleo verdadero delimitado por doble membrana. Incluye células animales, vegetales, fúngicas y protistas. Tamaño: 10–100 µm.",
  },
  {
    termino: "Membrana plasmática",
    definicion: "Bicapa fosfolipídica con proteínas intercaladas que delimita la célula y regula el paso de sustancias. Descrita por el modelo del mosaico fluido (Singer y Nicholson, 1972).",
  },
  {
    termino: "Mitocondria",
    definicion: "Orgánulo de doble membrana responsable de la producción de ATP mediante respiración aeróbica. Tiene ADN circular propio y ribosomas 70S. Origen: endosimbiosis bacteriana.",
  },
  {
    termino: "ATP",
    definicion: "Adenosín trifosfato. Molécula que almacena y transfiere energía química en la célula. Su hidrólisis (ATP → ADP + Pᵢ) libera energía para todos los procesos celulares.",
  },
  {
    termino: "Ribosoma",
    definicion: "Orgánulo sin membrana formado por ARN ribosómico y proteínas. Sintetiza proteínas a partir del ARN mensajero. En procariotas: 70S; en eucariotas: 80S.",
  },
  {
    termino: "Aparato de Golgi",
    definicion: "Sistema de cisternas membranosas que modifica, clasifica y empaqueta proteínas y lípidos en vesículas para distribuirlos a su destino celular. 'Oficina de correos' de la célula.",
  },
  {
    termino: "Cromosoma",
    definicion: "Estructura formada por ADN altamente compactado asociado a proteínas histonas. Visible al microscopio durante la mitosis. Los humanos tienen 46 cromosomas (23 pares) en células somáticas.",
  },
  {
    termino: "Mitosis",
    definicion: "División celular que produce dos células hijas diploides (2n) genéticamente idénticas. Fases: profase, prometafase, metafase, anafase, telofase y citocinesis.",
  },
  {
    termino: "Meiosis",
    definicion: "División celular que produce cuatro células haploides (n) genéticamente distintas. Consta de dos divisiones consecutivas (meiosis I y II). Produce gametos para la reproducción sexual.",
  },
  {
    termino: "Fotosíntesis",
    definicion: "Proceso por el que organismos con clorofila transforman energía lumínica, CO₂ y H₂O en glucosa y O₂. Ecuación: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂.",
  },
  {
    termino: "Respiración celular",
    definicion: "Proceso de oxidación de glucosa para producir ATP. En condiciones aeróbicas produce ~30 ATP por molécula de glucosa mediante glucólisis, ciclo de Krebs y fosforilación oxidativa.",
  },
  {
    termino: "ADN",
    definicion: "Ácido desoxirribonucleico. Molécula de doble hélice que contiene la información genética de todos los seres vivos. En eucariotas está en el núcleo; en procariotas, en el nucleoide.",
  },
  {
    termino: "Crossing-over",
    definicion: "Intercambio recíproco de segmentos de ADN entre cromátidas no hermanas de cromosomas homólogos durante la profase I de la meiosis. Principal fuente de variabilidad genética en la reproducción sexual.",
  },
];

DATOS.celulas = {
  es: {
    SECCIONES: SECCIONES_CELULAS,
    MODULOS: MODULOS_CELULAS,
    GLOSARIO: GLOSARIO_CELULAS,
  },
};
