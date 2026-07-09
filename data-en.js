/* ============================================================
   ENGLISH COURSE CONTENT — same structure as data.js.
   Any module not yet translated here falls back to Spanish.
   ============================================================ */

DATOS.gemelos.en = {
  SECCIONES: [
    { id: "fundamentos", nombre: "📘 Fundamentals" },
    { id: "tecnologia", nombre: "⚙️ Technology" },
    { id: "mercado", nombre: "🏭 Market & industry" },
    { id: "analisis", nombre: "🔍 Critical analysis" },
  ],

  MODULOS: [
    /* ================= MODULE 1 ================= */
    {
      id: 1,
      seccion: "fundamentos",
      titulo: "What is a digital twin?",
      minutos: 8,
      objetivos: [
        "Precisely define what a digital twin is and what sets it apart from a static simulation.",
        "Understand the concept of a bidirectional connection between the physical world and the digital space.",
        "Identify the three main functions: descriptive, predictive and prescriptive.",
      ],
      contenido: `
        <h2>Formal definition</h2>
        <blockquote><strong>A digital twin</strong> is a dynamic virtual replica of a real physical object, system or process, fed in real time by data from connected sensors and devices, which makes it possible to simulate, analyse and optimise the behaviour of its physical counterpart.<br><small>Source: AWS (2025) · OpenText (2025) · UNIR (2025)</small></blockquote>
        <p>The key lies in three words: <strong>dynamic virtual replica</strong>. It is not a static photograph of the object, but a representation that changes in real time as the physical object changes.</p>
        <blockquote>💡 <strong>Analogy:</strong> think of a car's GPS navigation. It doesn't just show a static map — it receives live traffic data, recalculates routes and anticipates what will happen. A digital twin does exactly that, but for any physical system: a turbine, a hospital or a bridge.</blockquote>

        <h2>The bidirectional connection</h2>
        <p>The most important — and most frequently misunderstood — element is <strong>bidirectionality</strong>. The digital twin doesn't just receive data from the physical world: it can also send instructions, alerts or recommendations back to the physical system.</p>
        <pre>PHYSICAL WORLD  →  real-time data  →  DIGITAL TWIN
DIGITAL TWIN  →  instructions and alerts  →  PHYSICAL WORLD</pre>
        <p>It is an intelligent mirror that doesn't just reflect: it also thinks and acts.</p>
        <blockquote>ℹ️ <strong>Key difference:</strong> a CAD model is a photograph of the object. A digital twin is a live video. The difference is not cosmetic — it is structural.</blockquote>

        <h2>The three main functions</h2>
        <h3>Function 01 · Descriptive</h3>
        <p>Shows the current state of the physical object in real time. It answers: <em>what is happening right now?</em> It is the most basic level — connecting the sensors and visualising the data is enough.</p>
        <h3>Function 02 · Predictive</h3>
        <p>Incorporates machine learning models to anticipate future behaviour. It answers: <em>what will happen if we carry on like this?</em> Detecting a failure before it happens has direct economic value.</p>
        <h3>Function 03 · Prescriptive</h3>
        <p>The most advanced level: it doesn't just predict, it recommends concrete, optimised actions. It answers: <em>what should we do, and when?</em> Here the twin stops being an analysis tool and becomes an autonomous management system.</p>

        <h2>Reflection questions</h2>
        <ul>
          <li>How does a digital twin differ from a conventional engineering simulation?</li>
          <li>Can a digital twin be useful without the prescriptive function? For which cases would the descriptive one suffice?</li>
          <li>What data would you need to build a digital twin of a university library?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Dynamic virtual replica", explicacion: "A digital copy that changes as the real object changes. Like a mirror that moves with you." },
        { termino: "Bidirectional", explicacion: "Information travels both ways: from the real object to the digital one, and from the digital back to the real." },
        { termino: "CAD", explicacion: "Software for drawing 3D objects on a computer. It's a still photo: it doesn't update by itself." },
        { termino: "Descriptive / Predictive / Prescriptive", explicacion: "Three levels: it tells you what's happening now → what will happen → what you should do." },
        { termino: "Sensor", explicacion: "A small device that measures something in the real world (temperature, vibration, position) and turns it into data." },
      ],
      quiz: [
        {
          pregunta: "What is the fundamental difference between a digital twin and a CAD model?",
          opciones: [
            "The digital twin updates in real time with data from the physical object; CAD is static",
            "CAD is 3D and the digital twin is 2D",
            "The digital twin is cheaper to create",
            "There is no difference, they are synonyms",
          ],
          correcta: 0,
          explicacion: "CAD is like a photograph of the object; the digital twin is a live video that changes when the real object changes.",
        },
        {
          pregunta: "What does it mean that a digital twin's connection is 'bidirectional'?",
          opciones: [
            "That it runs on two computers at once",
            "That it receives data from the physical world AND sends instructions or alerts back to the physical system",
            "That it has two backup copies",
            "That two users can view it at the same time",
          ],
          correcta: 1,
          explicacion: "The twin doesn't just reflect: it also thinks and acts. Data travels from the physical world to the digital one, and instructions travel back.",
        },
        {
          pregunta: "A twin that answers 'what will happen if we carry on like this?' is performing the... function",
          opciones: ["Descriptive", "Prescriptive", "Predictive", "Reactive"],
          correcta: 2,
          explicacion: "The predictive function uses historical data and AI models to anticipate the future. The descriptive one shows the present; the prescriptive one recommends actions.",
        },
        {
          pregunta: "What does a descriptive digital twin need, as a minimum?",
          opciones: [
            "Advanced AI and automatic decision systems",
            "Connected sensors and data visualisation",
            "A photorealistic 3D model",
            "Years of historical data",
          ],
          correcta: 1,
          explicacion: "The descriptive level is the most basic: connecting sensors and visualising their data is enough. AI is only needed to predict or prescribe.",
        },
      ],
    },
    /* ================= MODULE 2 ================= */
    {
      id: 2,
      seccion: "fundamentos",
      titulo: "History and origins",
      minutos: 7,
      objetivos: [
        "Identify the concept's roots in NASA's Apollo Programme.",
        "Learn about the contributions of Michael Grieves (2002) and John Vickers (2010).",
        "Understand how the concept evolved into the industrial metaverse of 2025–2026.",
      ],
      contenido: `
        <h2>Timeline</h2>
        <h3>1960s · NASA — The first "twin": physical, not digital</h3>
        <p>During the Apollo Programme, NASA built <strong>physically identical spacecraft</strong> that stayed on Earth to replicate the conditions of the vehicle in mission. During the <strong>Apollo 13</strong> crisis, this earthbound twin made it possible to simulate rescue options while the crew waited in space. The concept worked — but building physical replicas was prohibitively expensive.</p>

        <h3>2002 · University of Michigan — Michael Grieves formalises the concept</h3>
        <p>Dr <strong>Michael Grieves</strong> presents the first conceptual framework for the digital twin in the context of product lifecycle management (PLM). He defines its <strong>three essential elements</strong>, which remain valid today:</p>
        <ol>
          <li><strong>Real space:</strong> the physical object and its properties.</li>
          <li><strong>Virtual space:</strong> the digital representation of the object.</li>
          <li><strong>Bidirectional data flow:</strong> the continuous connection between the two spaces.</li>
        </ol>

        <h3>2010 · NASA — John Vickers coins "Digital Twin"</h3>
        <p>NASA researcher <strong>John Vickers</strong>, working alongside Grieves, proposes the definitive name: <em>Digital Twin</em>. The term is published in a NASA technical report and spreads globally.</p>

        <h3>2012–2020 · Industrial expansion — GE, Siemens, PTC</h3>
        <p>Falling prices of IoT sensors, cloud computing and Big Data take the technology beyond the aerospace field. <strong>General Electric, Siemens, PTC and ANSYS</strong> commercialise the first platforms for manufacturing, energy and construction.</p>

        <h3>2025–2026 · Industrial metaverse — Siemens + NVIDIA</h3>
        <p>The Siemens + NVIDIA alliance brings the <strong>industrial metaverse</strong> to life: photorealistic, physically accurate twins integrated with generative AI.</p>
        <blockquote>"The idea of building manufacturing plants without doing it first in a digital twin is completely inconceivable."<br>— Roland Busch, CEO of Siemens, CES 2026</blockquote>

        <h2>Worth remembering</h2>
        <p>The difference between the Apollo "physical twin" and the modern digital twin is the same as between a paper photocopy and a digital file — both are replicas, but only one can update in real time, be transmitted instantly and exist at zero marginal cost.</p>

        <h2>Reflection questions</h2>
        <ul>
          <li>Why did the concept take almost 40 years to go from the Apollo Programme to its academic formalisation?</li>
          <li>Which technology was most decisive in making twins viable between 2012 and 2020?</li>
          <li>How does the "industrial metaverse" differ from a conventional digital twin?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "PLM", explicacion: "Product lifecycle management: tracking a product from design to retirement. This is where the digital twin idea was born." },
        { termino: "Apollo Programme", explicacion: "NASA's missions to reach the Moon (1960s-70s). They used physical twin spacecraft on Earth to simulate problems." },
        { termino: "Industrial metaverse", explicacion: "Entire factories recreated in photorealistic 3D where everything is tested digitally before touching anything real." },
        { termino: "Zero marginal cost", explicacion: "Making one more copy costs almost nothing. Copying a file is free; building another spacecraft is not." },
      ],
      quiz: [
        {
          pregunta: "Where is the oldest precursor of the twin concept found?",
          opciones: [
            "In 1990s video games",
            "In NASA's Apollo Programme, with physical twin spacecraft on Earth",
            "In 1950s car factories",
            "At the University of Michigan in 2002",
          ],
          correcta: 1,
          explicacion: "NASA built identical vehicles that stayed on Earth. During Apollo 13 they were used to simulate the rescue. They were physical twins, not digital ones.",
        },
        {
          pregunta: "Who formalised the digital twin concept in 2002, and where?",
          opciones: [
            "John Vickers, at NASA",
            "Jensen Huang, at NVIDIA",
            "Michael Grieves, at the University of Michigan",
            "Roland Busch, at Siemens",
          ],
          correcta: 2,
          explicacion: "Michael Grieves presented the first conceptual framework at the University of Michigan. John Vickers (NASA) coined the name 'Digital Twin' later, in 2010.",
        },
        {
          pregunta: "What are the three essential elements Grieves defined?",
          opciones: [
            "Sensors, cloud and screen",
            "Real space, virtual space and bidirectional data flow",
            "Hardware, software and users",
            "Design, manufacturing and maintenance",
          ],
          correcta: 1,
          explicacion: "Grieves's three elements remain valid today: the physical object, its digital representation and the continuous connection between the two.",
        },
        {
          pregunta: "What made the industrial expansion of digital twins possible between 2012 and 2020?",
          opciones: [
            "Cheaper IoT sensors, the cloud and Big Data",
            "The arrival of smartphones",
            "Social media",
            "3D printing",
          ],
          correcta: 0,
          explicacion: "Cheap sensors + cloud computing + Big Data made viable what only NASA could previously afford.",
        },
      ],
    },

    /* ================= MODULE 3 ================= */
    {
      id: 3,
      seccion: "tecnologia",
      titulo: "Technology architecture",
      minutos: 10,
      objetivos: [
        "Describe the five layers of a digital twin's architecture.",
        "Identify the specific role of IoT, Big Data, AI, cloud and edge computing.",
        "Understand why each layer is necessary and what happens if one of them fails.",
      ],
      contenido: `
        <h2>The five technology layers</h2>
        <p>A digital twin is not a single technology, but the <strong>convergence of several layers</strong> working together. Each layer depends on the one below: if the sensors don't work, the twin has no data; if there is no data, there is nothing for the AI to analyse.</p>
        <pre>┌────────────────────────────────────────────┐
│ LAYER 05 · Applications                    │
│ dashboards · alerts · predictions          │
├────────────────────────────────────────────┤
│ LAYER 04 · Digital twin                    │
│ 3D model · AI · physics simulation         │
├────────────────────────────────────────────┤
│ LAYER 03 · Data and analytics              │
│ Big Data · cloud · edge computing          │
├────────────────────────────────────────────┤
│ LAYER 02 · Connectivity                    │
│ WiFi · 5G · LoRaWAN · OPC-UA · MQTT        │
├────────────────────────────────────────────┤
│ LAYER 01 · Sensors and the physical world  │
│ temperature · vibration · GPS · cameras    │
└────────────────────────────────────────────┘
              ↑ data flow</pre>

        <h2>The six enabling technologies</h2>
        <h3>1. Internet of Things (IoT)</h3>
        <p>A network of sensors that capture data from the physical world. <strong>Without IoT, the twin has no "eyes".</strong> Falling chip costs and 5G have been the catalysts for mass adoption. <em>Operates in: Layers 01 and 02.</em></p>
        <h3>2. Big Data</h3>
        <p>Sensors generate volumes of data that no conventional system can handle. Big Data provides the infrastructure to ingest, store and process them at industrial scale. <em>Operates in: Layer 03.</em></p>
        <h3>3. Artificial Intelligence and Machine Learning</h3>
        <p>AI models turn data into predictions: they detect wear patterns, anticipate failures and optimise parameters. <strong>AI is what turns a descriptive twin into a predictive or prescriptive one.</strong> <em>Operates in: Layer 04.</em></p>
        <h3>4. Cloud and edge computing</h3>
        <p>The <strong>cloud</strong> provides the scalability to process and store large volumes. <strong>Edge computing</strong> — processing next to the sensor, without sending the data far away — reduces latency when a real-time response is critical.</p>
        <blockquote>💡 <strong>Example:</strong> on a production line that makes a decision every 50 milliseconds, you can't wait for the round trip to a distant server. The edge processes locally and only sends summaries to the cloud.</blockquote>
        <h3>5. Modelling and simulation</h3>
        <p>CAD tools, BIM and physical-mathematical models build the digital representation. It is the twin's "body": geometry, physical properties and expected behaviour. <em>Operates in: Layer 04.</em></p>
        <h3>6. Integration platforms and APIs</h3>
        <p>APIs and middleware that connect heterogeneous systems: sensors from different manufacturers, ERP, MES, SCADA and clouds. Without this layer, the components cannot talk to each other. The lack of universal standards is one of today's biggest challenges. <em>Operates in: Layers 02 and 03.</em></p>

        <h2>Reflection questions</h2>
        <ul>
          <li>Which layer is most critical in a digital twin of a hospital? Why?</li>
          <li>How does privacy affect Layer 01 (sensors) and Layer 05 (applications) differently?</li>
          <li>If a company cannot afford its own cloud infrastructure, what alternatives does it have?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "IoT", explicacion: "Physical objects connected to the internet (sensors, machines) that send data on their own. They are the twin's 'eyes'." },
        { termino: "Big Data", explicacion: "Technology for handling gigantic amounts of data that an ordinary computer couldn't process." },
        { termino: "Machine Learning", explicacion: "Programs that learn on their own by looking at data, without anyone programming every rule for them." },
        { termino: "Edge computing", explicacion: "Processing data right next to the sensor instead of sending it to a distant server. Saves travel time." },
        { termino: "Latency", explicacion: "The time it takes for a piece of data to travel from one place to another. Like 'lag' in an online video game." },
        { termino: "API", explicacion: "The 'common language' that lets two different programs understand each other and exchange data." },
      ],
      quiz: [
        {
          pregunta: "What happens if Layer 01 (sensors) of a digital twin fails?",
          opciones: [
            "Nothing, the other layers compensate for it",
            "The twin is left without data from the real world: it loses its 'eyes'",
            "Only the 3D model is lost",
            "The twin runs slower but keeps working",
          ],
          correcta: 1,
          explicacion: "Each layer depends on the one below. Without sensors there is no data, and without data there is nothing to analyse or predict.",
        },
        {
          pregunta: "Which technology turns a descriptive twin into a predictive or prescriptive one?",
          opciones: [
            "CAD modelling",
            "MQTT protocols",
            "Artificial intelligence and machine learning",
            "High-speed WiFi",
          ],
          correcta: 2,
          explicacion: "Without AI, the twin only shows the current state. Machine learning models are what make it possible to anticipate failures and recommend actions.",
        },
        {
          pregunta: "What is edge computing for?",
          opciones: [
            "Making the 3D model more realistic",
            "Processing data next to the sensor to reduce latency when the response must be immediate",
            "Making sensors cheaper",
            "Storing backup copies",
          ],
          correcta: 1,
          explicacion: "When a system makes a decision every 50 milliseconds, it can't wait for the trip to a distant server. The edge processes locally and only sends summaries to the cloud.",
        },
        {
          pregunta: "Why are integration platforms and APIs necessary?",
          opciones: [
            "So that systems from different manufacturers can communicate with each other",
            "To make the dashboards prettier",
            "To lower the price of the cloud",
            "To replace the sensors",
          ],
          correcta: 0,
          explicacion: "Sensors from different brands, ERP, MES, SCADA systems... without a 'common language' (APIs), the components cannot talk to each other.",
        },
      ],
    },

    /* ================= MODULE 4 ================= */
    {
      id: 4,
      seccion: "tecnologia",
      titulo: "Types of digital twins",
      minutos: 6,
      objetivos: [
        "Distinguish the four types of twins by scale: component, asset, system and process.",
        "Differentiate the descriptive, predictive and prescriptive functions.",
        "Relate each type to concrete use cases.",
      ],
      contenido: `
        <h2>Classification by scale of the modelled object</h2>
        <h3>Type 01 · Component twin <em>(micro scale)</em></h3>
        <p>Models an individual part: a bearing, a motor, a valve. It is the most common starting point. <strong>Example:</strong> the twin of a bearing in a turbine that detects premature wear before it causes a major failure.</p>
        <h3>Type 02 · Asset twin <em>(meso scale)</em></h3>
        <p>Integrates several components into a complete piece of equipment: a wind turbine, an assembly line, a vehicle. <strong>Example:</strong> the twin of a complete aircraft used to plan the maintenance of all its systems.</p>
        <h3>Type 03 · System twin <em>(macro scale)</em></h3>
        <p>Replicates entire systems with multiple assets: a production plant, a power grid, an airport. <strong>Example:</strong> the twin of a petrochemical plant used to simulate changes before implementing them physically.</p>
        <h3>Type 04 · Process twin <em>(global scale)</em></h3>
        <p>Models complete workflows: supply chains, hospital processes, entire cities. <strong>Example: Virtual Singapore</strong> — the virtual replica of the entire city-state, used for urban planning, emergencies and traffic.</p>

        <h2>Classification by function performed</h2>
        <p>These three functions are <strong>cumulative</strong>: a prescriptive twin is also predictive and descriptive.</p>
        <table>
          <tr><th>Function</th><th>Question it answers</th><th>Requirements</th></tr>
          <tr><td><strong>Descriptive</strong></td><td>What is happening right now?</td><td>Sensors + visualisation</td></tr>
          <tr><td><strong>Predictive</strong></td><td>What will happen if we carry on like this?</td><td>Historical data + AI</td></tr>
          <tr><td><strong>Prescriptive</strong></td><td>What should we do, and when?</td><td>Advanced AI + decision systems</td></tr>
        </table>

        <h2>The relationship between scale and function</h2>
        <p>The simplest twins (component) usually start out descriptive and evolve towards the predictive. Process twins (cities, hospitals) more often incorporate prescriptive functions, because their complexity makes them unmanageable without automated recommendations.</p>

        <h2>Reflection questions</h2>
        <ul>
          <li>How would you classify Virtual Singapore by scale? And by function?</li>
          <li>Could a component twin also be prescriptive? What would it need?</li>
          <li>Why do most implementations start with a component or asset, and not a system or process?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Component", explicacion: "A single part: a bearing, a valve, a motor. The smallest thing that can be modelled." },
        { termino: "Asset", explicacion: "A complete piece of equipment made up of several parts: an aircraft, a turbine, a car." },
        { termino: "System", explicacion: "A set of equipment working together: an entire factory, a power grid." },
        { termino: "Process", explicacion: "A complete workflow, the largest scale: a supply chain or an entire city." },
        { termino: "Cumulative functions", explicacion: "Each level includes the previous ones: if a twin recommends (prescriptive), it also predicts and describes." },
      ],
      quiz: [
        {
          pregunta: "Virtual Singapore, the replica of the entire city-state, is a twin of which type?",
          opciones: ["Component", "Asset", "System", "Process"],
          correcta: 3,
          explicacion: "An entire city is the most global scale there is: a process twin, the most complex level and the one requiring the greatest investment.",
        },
        {
          pregunta: "The twin of an individual bearing inside a turbine is a twin of...",
          opciones: ["Component", "Asset", "System", "Process"],
          correcta: 0,
          explicacion: "An individual part = micro scale = component twin. It is the most common starting point.",
        },
        {
          pregunta: "If a digital twin is prescriptive, which other functions is it guaranteed to have?",
          opciones: [
            "None, they are mutually exclusive",
            "Only the predictive one",
            "The descriptive and predictive ones, because the functions are cumulative",
            "It depends on the manufacturer",
          ],
          correcta: 2,
          explicacion: "The functions are cumulative: to recommend what to do (prescriptive), it first needs to know what is happening (descriptive) and what will happen (predictive).",
        },
        {
          pregunta: "The twin of a complete aircraft integrating all its systems is a twin of...",
          opciones: ["Component", "Asset", "System", "Process"],
          correcta: 1,
          explicacion: "A complete piece of equipment made up of several integrated components = asset twin (meso scale).",
        },
      ],
    },

    /* ================= MODULE 5 ================= */
    {
      id: 5,
      seccion: "mercado",
      titulo: "The global market",
      minutos: 8,
      objetivos: [
        "Understand the current and projected economic size of the global market.",
        "Identify the leading regions and their growth drivers.",
        "Recognise the most relevant companies in the ecosystem in 2025.",
      ],
      contenido: `
        <h2>Market projection 2020–2030</h2>
        <p>The digital twin market is growing at a speed hardly comparable to any other industrial technology.</p>
        <table>
          <tr><th>Year</th><th>Estimated value (USD)</th><th>Status</th></tr>
          <tr><td>2020</td><td>$3.8B</td><td>Historical</td></tr>
          <tr><td>2022</td><td>$7.4B</td><td>Historical</td></tr>
          <tr><td>2024</td><td>$15.0B</td><td>Historical</td></tr>
          <tr><td>2025</td><td>$28.9B</td><td>Estimated</td></tr>
          <tr><td>2026</td><td>$39.7B</td><td>Projected</td></tr>
          <tr><td>2028</td><td>$75.0B</td><td>Projected</td></tr>
          <tr><td>2030</td><td>$122B – $572B</td><td>Projected</td></tr>
        </table>
        <blockquote>⚠️ <strong>Methodological note:</strong> the very wide range for 2030–2035 reflects methodological differences between analyst firms. The projected CAGR ranges between 31% and 47% per year — in any case, one of the highest rates in industrial technology.</blockquote>

        <h2>Market geography (2025)</h2>
        <h3>🇺🇸 North America — Global leader (31–38% share)</h3>
        <p>Driven by manufacturing, aerospace and the major cloud platforms (AWS, Microsoft, NVIDIA). Projected CAGR of 48% per year.</p>
        <h3>🇪🇺 Europe — Second position (~$4.9B)</h3>
        <p>Strong in automotive, energy and infrastructure. The EU's Industry 4.0 policies and Spain's Digital Agenda — with an $87.1M call for smart cities in 2025 — act as accelerators.</p>
        <h3>🌏 Asia-Pacific — Highest projected CAGR</h3>
        <p>China, India, Japan and South Korea lead the way, with government smart-city initiatives as catalysts.</p>

        <h2>Leading companies in the ecosystem (2025)</h2>
        <table>
          <tr><th>Company</th><th>Main strength</th></tr>
          <tr><td><strong>Siemens AG</strong></td><td>Global leader (>5% share) · Xcelerator · Digital Twin Composer</td></tr>
          <tr><td><strong>NVIDIA</strong></td><td>Omniverse · physically accurate simulation · industrial metaverse</td></tr>
          <tr><td><strong>Microsoft</strong></td><td>Azure Digital Twins · cloud ecosystem</td></tr>
          <tr><td><strong>Dassault Systèmes</strong></td><td>3DEXPERIENCE · engineering and manufacturing</td></tr>
          <tr><td><strong>GE Vernova</strong></td><td>Energy and industrial machinery · pioneer</td></tr>
          <tr><td><strong>PTC · ANSYS · IBM · SAP · Oracle</strong></td><td>Specialised solutions by sector</td></tr>
        </table>

        <h2>Segment with the highest adoption</h2>
        <p>The <strong>automotive and transport</strong> segment holds the largest share in 2025, followed by advanced manufacturing and energy. The <strong>healthcare</strong> segment shows the highest projected CAGR: over 52% between 2025 and 2030.</p>

        <h2>Reflection questions</h2>
        <ul>
          <li>Why is the range of estimates for 2030 so wide? Which factors explain it?</li>
          <li>What are the implications of North American leadership for Spain and Europe?</li>
          <li>In which sectors do you think adoption in Spain could accelerate the fastest?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "CAGR", explicacion: "Average annual growth rate. A CAGR of 32% means the market doubles roughly every 2.5 years." },
        { termino: "Market share", explicacion: "The slice of the pie that belongs to a company or region out of total sales." },
        { termino: "Range of estimates", explicacion: "The span between the lowest and highest prediction. The further into the future, the wider it gets." },
        { termino: "Industry 4.0", explicacion: "The 'fourth industrial revolution': connected factories with sensors, data and artificial intelligence." },
      ],
      quiz: [
        {
          pregunta: "What was the estimated value of the global digital twin market in 2025?",
          opciones: ["$3.8B", "$28.9B", "$122B", "$572B"],
          correcta: 1,
          explicacion: "The market went from $3.8B in 2020 to an estimated $28.9B in 2025 — it grew almost eightfold in five years.",
        },
        {
          pregunta: "Which region leads the global market in 2025?",
          opciones: ["Europe", "Asia-Pacific", "North America", "Latin America"],
          correcta: 2,
          explicacion: "North America holds a 31–38% share, driven by manufacturing, aerospace and the major cloud platforms (AWS, Microsoft, NVIDIA).",
        },
        {
          pregunta: "What does a CAGR of 32% mean?",
          opciones: [
            "That the market loses 32% each year",
            "That the market grows on average 32% each year, doubling in about 2.5 years",
            "That 32% of companies use the technology",
            "That there is a 32% probability of growth",
          ],
          correcta: 1,
          explicacion: "CAGR = compound annual growth rate. It measures how fast something grows on average each year.",
        },
        {
          pregunta: "Which sector has the highest projected CAGR for 2025–2030?",
          opciones: ["Automotive", "Manufacturing", "Energy", "Healthcare (+52%)"],
          correcta: 3,
          explicacion: "Although automotive holds the largest current share, healthcare is the one that will grow the fastest: over 52% per year projected.",
        },
      ],
    },

    /* ================= MODULE 6 ================= */
    {
      id: 6,
      seccion: "mercado",
      titulo: "Sector applications",
      minutos: 12,
      objetivos: [
        "Identify the applications in manufacturing, healthcare, smart cities, energy and aerospace.",
        "Analyse real use cases with documented impact data.",
        "Understand why each sector adopts digital twins differently.",
      ],
      contenido: `
        <h2>Sector 01 · Manufacturing and Industry 4.0</h2>
        <p><strong>Highest historical adoption · Best-documented use case</strong></p>
        <table>
          <tr><th>Indicator</th><th>Value</th><th>Source</th></tr>
          <tr><td>Problems detected before physical changes</td><td><strong>90%</strong></td><td>PepsiCo + Siemens, CES 2026</td></tr>
          <tr><td>Improvement in operational performance</td><td><strong>+20%</strong></td><td>ITware Latam, 2026</td></tr>
          <tr><td>Reduction in physical investment (CapEx)</td><td><strong>−15%</strong></td><td>ITware Latam, 2026</td></tr>
        </table>
        <h3>Flagship case: PepsiCo + Siemens + NVIDIA (CES 2026)</h3>
        <p>PepsiCo transformed its US facilities into high-fidelity 3D twins using <strong>Siemens Digital Twin Composer</strong> and <strong>NVIDIA Omniverse</strong>. AI agents simulate, test and refine changes before they happen physically. The result: 90% of problems identified in advance, +20% performance and −15% CapEx.</p>

        <h2>Sector 02 · Healthcare and medicine</h2>
        <p><strong>Highest projected CAGR: +52% per year (2025–2030)</strong></p>
        <ul>
          <li><strong>Organ twins:</strong> virtual hearts, lungs or brains to simulate surgery before performing it.</li>
          <li><strong>Hospital twins:</strong> complete replicas to optimise patient flows, beds and logistics.</li>
          <li><strong>Clinical training simulators:</strong> training without risk to real patients.</li>
        </ul>
        <blockquote>💡 A surgeon who must operate on a complex cardiac malformation can rehearse the procedure on the digital twin of that specific heart. This is already happening in leading European hospitals.</blockquote>

        <h2>Sector 03 · Smart cities and urban planning</h2>
        <ul>
          <li>Urban planning: simulating infrastructure before building it.</li>
          <li>Emergency management: modelling floods, fires and evacuations.</li>
          <li>Traffic and mobility: optimising traffic lights and public transport.</li>
        </ul>
        <p><strong>Cases:</strong> Virtual Singapore (a replica of the entire city), Jacksonville, USA (climate scenarios), NextPort Spain (ports such as Santander's). The Spanish Government launched an <strong>$87.1M</strong> call for smart cities.</p>

        <h2>Sector 04 · Energy and sustainability</h2>
        <p>An average improvement of <strong>+16%</strong> in sustainability metrics (Capgemini, 2024, n=1,000 companies).</p>
        <p><strong>Cases:</strong> Siemens Gamesa (a twin of its wind farm in Denmark with predictive maintenance) and Peaxy (the first twin of the complete green hydrogen chain).</p>
        <blockquote>💡 A broken-down offshore wind turbine is extremely expensive to repair. If the twin detects the wear weeks in advance, maintenance is scheduled at the optimal moment, saving millions.</blockquote>

        <h2>Sector 05 · Aerospace and defence</h2>
        <p><strong>The pioneering sector — where the concept was born.</strong> Simulation of spacecraft under extreme conditions, maintenance planning for aircraft fleets (Airbus, among others) and availability optimisation.</p>

        <h2>Quick sector comparison</h2>
        <table>
          <tr><th>Sector</th><th>Maturity</th><th>Projected CAGR</th><th>Most-cited case</th></tr>
          <tr><td>Manufacturing</td><td>★★★★★</td><td>~35%</td><td>PepsiCo + Siemens</td></tr>
          <tr><td>Aerospace</td><td>★★★★☆</td><td>~30%</td><td>NASA, Airbus</td></tr>
          <tr><td>Energy</td><td>★★★★☆</td><td>~38%</td><td>Siemens Gamesa</td></tr>
          <tr><td>Cities</td><td>★★★☆☆</td><td>~40%</td><td>Virtual Singapore</td></tr>
          <tr><td>Healthcare</td><td>★★☆☆☆</td><td><strong>+52%</strong></td><td>Cardiac twins</td></tr>
        </table>

        <h2>Reflection questions</h2>
        <ul>
          <li>Why does healthcare have the highest CAGR if its current maturity is lower?</li>
          <li>What ethical differences are there between the twin of a turbine and that of a patient?</li>
          <li>Which sector has the most untapped potential? What obstacles are holding it back?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "KPI", explicacion: "Key performance indicator: a number that sums up whether something is going well or badly. Like an exam grade, but for companies." },
        { termino: "CapEx", explicacion: "Money invested in durable physical things: machines, buildings, equipment. Reducing it = spending less on building." },
        { termino: "Predictive maintenance", explicacion: "Repairing the machine just before it breaks, because the data warns of the wear in advance." },
        { termino: "Adoption maturity", explicacion: "How long a sector has been using the technology and how widespread it is within it." },
        { termino: "Organ twin", explicacion: "A digital copy of a specific patient's heart or lung, used to rehearse the operation before performing it." },
      ],
      quiz: [
        {
          pregunta: "In the PepsiCo + Siemens case (CES 2026), what percentage of problems were detected before making physical changes?",
          opciones: ["50%", "70%", "90%", "100%"],
          correcta: 2,
          explicacion: "90% of potential problems were identified in the twin before touching the real factory, with +20% performance and −15% CapEx.",
        },
        {
          pregunta: "What is a digital twin of a human organ for?",
          opciones: [
            "To replace the real organ",
            "So that the surgeon can rehearse the operation digitally before performing it on the patient",
            "To 3D-print organs",
            "To diagnose via video call",
          ],
          correcta: 1,
          explicacion: "A surgeon can simulate a complex procedure on the twin of that specific heart before operating. This is already happening in European hospitals.",
        },
        {
          pregunta: "Why is predictive maintenance so valuable in an offshore wind farm?",
          opciones: [
            "Because offshore turbines are smaller",
            "Because repairs at sea are extremely expensive, and anticipating wear allows maintenance to be scheduled at the optimal moment",
            "Because the sea wind causes more damage",
            "Because European law requires it",
          ],
          correcta: 1,
          explicacion: "Detecting wear weeks in advance avoids unplanned shutdowns and saves millions in emergency repairs at sea.",
        },
        {
          pregunta: "Which of these uses corresponds to a smart-city twin?",
          opciones: [
            "Simulating evacuations and floods before they happen",
            "Making cars faster",
            "Training surgeons",
            "Detecting wear in a bearing",
          ],
          correcta: 0,
          explicacion: "Urban twins like Virtual Singapore are used for urban planning, emergency management and traffic analysis.",
        },
      ],
    },

    /* ================= MODULE 7 ================= */
    {
      id: 7,
      seccion: "analisis",
      titulo: "Challenges and risks",
      minutos: 9,
      objetivos: [
        "Identify the six main challenges of digital twins.",
        "Understand the concept of an expanded attack surface in cybersecurity.",
        "Analyse the unresolved ethical and legal implications.",
      ],
      contenido: `
        <p>It is not all advantages. <strong>Ignoring these challenges can have serious physical consequences</strong> in critical infrastructure, where a decision based on manipulated data can cost lives or millions of euros.</p>

        <h2>Challenge 01 · Cybersecurity 🔴 CRITICAL</h2>
        <p>The physical-digital interconnection turns the twin into a critical point of vulnerability. An attacker who manipulates its data can trigger wrong decisions with real physical consequences: a train whose twin shows better brakes than the real ones, a chemical plant whose twin indicates a safe temperature when it isn't.</p>
        <p>Because a digital double exists, the <strong>attack surface doubles</strong>: attackers have two points of entry — the original system and its replica.</p>
        <p><strong>Measures:</strong> a <em>Zero Trust</em> architecture (never trust anyone automatically), network microsegmentation, multi-factor authentication and rigorous management of IoT devices.</p>

        <h2>Challenge 02 · Data privacy 🟠 HIGH</h2>
        <p>Twins that model human behaviour — patients, workers, citizens — handle personal data at scale. The <strong>European GDPR does not specifically address digital twins</strong>, creating regulatory grey areas.</p>
        <p><strong>Recommendations:</strong> <em>privacy by design</em> (minimising personal data from the design stage), transparency about what is collected, and clear ownership of models and data.</p>

        <h2>Challenge 03 · Interoperability ⚪ MODERATE</h2>
        <p>Systems and machinery from different manufacturers use <strong>incompatible proprietary protocols</strong>. Connecting them requires costly bespoke development. The absence of universal standards — although OPC-UA is making progress — is a structural bottleneck.</p>

        <h2>Challenge 04 · Cost and initial investment ⚪ MODERATE</h2>
        <p>The investment in sensors, infrastructure and talent is <strong>high</strong>. Subscription-based cloud models are starting to democratise access for SMEs, but the barrier remains significant.</p>

        <h2>Challenge 05 · Talent shortage ⚪ MODERATE</h2>
        <p>Professionals are needed who master IoT, systems modelling, AI and the engineering of the specific sector all at once. This hybrid profile is <strong>globally scarce</strong>, and training it is slow and expensive.</p>

        <h2>Challenge 06 · Intellectual property and ethics ⚪ EMERGING</h2>
        <ul>
          <li>Who owns the data generated by the twin — the manufacturer, the operator or the platform?</li>
          <li>Who is responsible if the twin makes an autonomous decision that turns out to be harmful?</li>
        </ul>
        <p>These questions lack a clear legal answer. <strong>Regulation lags behind the technology.</strong></p>

        <h2>Summary of challenges</h2>
        <table>
          <tr><th>Challenge</th><th>Level</th><th>Urgency</th></tr>
          <tr><td>Cybersecurity</td><td>🔴 Critical</td><td>Immediate</td></tr>
          <tr><td>Data privacy</td><td>🟠 High</td><td>Urgent</td></tr>
          <tr><td>Interoperability</td><td>⚪ Moderate</td><td>Medium</td></tr>
          <tr><td>Cost and investment</td><td>⚪ Moderate</td><td>Medium</td></tr>
          <tr><td>Talent shortage</td><td>⚪ Moderate</td><td>Medium</td></tr>
          <tr><td>Ownership and ethics</td><td>⚪ Emerging</td><td>Future</td></tr>
        </table>

        <h2>Reflection questions</h2>
        <ul>
          <li>Is the cybersecurity risk greater in the twin of a nuclear power plant or in that of a hospital? Why?</li>
          <li>Should the GDPR be updated to specifically address digital twins?</li>
          <li>How would you tackle the talent shortage if you were implementing a digital twin at your company?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Attack surface", explicacion: "All the points through which a hacker could get in. With a twin, there are two doors: the real system and its copy." },
        { termino: "Zero Trust", explicacion: "Security rule: trust no one by default, not even those already inside. Always verify." },
        { termino: "GDPR", explicacion: "The European law that protects your personal data. It wasn't written with digital twins in mind, and that creates gaps." },
        { termino: "Interoperability", explicacion: "Devices from different brands being able to understand each other. As if all chargers were USB-C." },
        { termino: "Privacy by design", explicacion: "Designing the system from the outset to use as little personal data as possible." },
      ],
      quiz: [
        {
          pregunta: "Why is it said that a digital twin 'doubles the attack surface'?",
          opciones: [
            "Because it needs twice as many passwords",
            "Because attackers have two points of entry: the original system and its digital replica",
            "Because it consumes twice as much electricity",
            "Because you have to pay for two antivirus programs",
          ],
          correcta: 1,
          explicacion: "Because a digital double of the system exists, an attacker can try to get in through the physical system or through its twin. Two doors instead of one.",
        },
        {
          pregunta: "What is the 'Zero Trust' architecture?",
          opciones: [
            "A system without passwords",
            "Never automatically trusting any user or device, even if it is inside the network",
            "Trusting only the company's employees",
            "A free antivirus",
          ],
          correcta: 1,
          explicacion: "Zero Trust = always verify, never trust by default. Not even those already inside the corporate network.",
        },
        {
          pregunta: "What is the problem with the GDPR and digital twins?",
          opciones: [
            "It bans them completely in Europe",
            "It requires paying a fee for each twin",
            "It does not specifically address them, creating regulatory grey areas",
            "It only applies to American companies",
          ],
          correcta: 2,
          explicacion: "The European data protection law wasn't written with digital twins that model human behaviour in mind. Regulation lags behind the technology.",
        },
        {
          pregunta: "Why is there a shortage of talent to implement digital twins?",
          opciones: [
            "Because universities don't teach computer science",
            "Because a hybrid profile is needed that masters IoT, modelling, AI and sector engineering all at once",
            "Because salaries are low",
            "Because it is only taught in the United States",
          ],
          correcta: 1,
          explicacion: "The required profile combines four different disciplines at once. That combination is globally scarce, and training it is slow and expensive.",
        },
      ],
    },

    /* ================= MODULE 8 ================= */
    {
      id: 8,
      seccion: "analisis",
      titulo: "Trends and the future",
      minutos: 7,
      objetivos: [
        "Identify the four main trends that will shape the sector up to 2030.",
        "Understand the concept of the industrial metaverse and its relationship with digital twins.",
        "Analyse the impact of generative AI on the evolution of digital twins.",
      ],
      contenido: `
        <p>In January 2026, CES in Las Vegas was the stage where the leading companies presented their vision for the next five years. These four trends are based on recent evidence and public statements from the sector's leaders.</p>

        <h2>Trend 01 · Generative AI — From passive simulation to active intelligence</h2>
        <p>The integration of <strong>generative AI</strong> is transforming twins from monitoring tools into systems that reason, suggest and act. With generative AI, the twin can:</p>
        <ul>
          <li>Generate simulation scenarios that have never happened before.</li>
          <li>Propose solutions to complex problems autonomously.</li>
          <li>Communicate with operators in natural language.</li>
        </ul>
        <blockquote>"Generative AI has ignited a new industrial revolution, transforming digital twins from passive simulations into the active intelligence of the physical world."<br>— Jensen Huang, CEO of NVIDIA, CES 2026</blockquote>

        <h2>Trend 02 · Industrial metaverse — Factories designed 100% digitally</h2>
        <p>The <strong>Siemens + NVIDIA</strong> alliance aims to build the first industrial AI operating system. The <strong>Digital Twin Composer</strong> (CES 2026) combines 3D twins from Siemens Xcelerator with NVIDIA Omniverse libraries and real-time data.</p>
        <p>The ambition: the <strong>first fully AI-driven adaptive manufacturing plants</strong>, where no physical change is executed without first being validated in the twin.</p>

        <h2>Trend 03 · Democratisation — Access for SMEs via the cloud</h2>
        <p>Platforms such as <strong>AWS IoT TwinMaker, Azure Digital Twins and Google Cloud IoT</strong> make it possible to implement twins without massive investment. The subscription model removes the large upfront investment in hardware.</p>
        <p>In Spain, where <strong>99.8% of the business fabric is made up of SMEs</strong>, cloud democratisation will determine the real speed of adoption over the next decade.</p>

        <h2>Trend 04 · Healthcare and education — Highest projected growth</h2>
        <p><strong>Healthcare (CAGR +52%):</strong> organ twins, complete hospitals and clinical simulators will transform personalised medicine.</p>
        <p><strong>Education:</strong> replicating hazardous environments — chemical plants, power stations — allows students to make mistakes in the twin without physical consequences.</p>
        <p><strong>Sustainability:</strong> simulating climate scenarios on replicas of cities and infrastructure makes it possible to plan the energy transition.</p>

        <h2>Summary of trends</h2>
        <table>
          <tr><th>Trend</th><th>Horizon</th><th>Estimated impact</th></tr>
          <tr><td>Integrated generative AI</td><td>2025–2027</td><td>Transforms every sector</td></tr>
          <tr><td>Industrial metaverse</td><td>2026–2028</td><td>Redefines factory design</td></tr>
          <tr><td>Cloud democratisation</td><td>2025–2030</td><td>Expands adoption to SMEs</td></tr>
          <tr><td>Healthcare and education</td><td>2025–2030</td><td>New high-growth markets</td></tr>
        </table>

        <h2>Reflection questions</h2>
        <ul>
          <li>If twins become accessible via the cloud, what opportunities does that open up for agriculture, culture or sport?</li>
          <li>What new ethical risks does generative AI introduce compared with those in Block 07?</li>
          <li>How could a digital twin be applied in your sector of professional interest?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Generative AI", explicacion: "Artificial intelligence that creates new things (text, images, simulations) instead of just analysing what already exists." },
        { termino: "Democratisation", explicacion: "Something expensive and exclusive becoming affordable for anyone. The cloud is doing this for digital twins." },
        { termino: "SME", explicacion: "Small and medium-sized enterprise. In Spain they make up 99.8% of all companies." },
        { termino: "Subscription", explicacion: "Paying a monthly fee to use something instead of buying it outright. Like Netflix, but for industrial software." },
        { termino: "Adaptive plant", explicacion: "A factory that reorganises itself guided by AI, validating every change in its twin before executing it." },
      ],
      quiz: [
        {
          pregunta: "According to Jensen Huang (NVIDIA), generative AI transforms digital twins into...",
          opciones: [
            "Cheaper simulations",
            "The active intelligence of the physical world",
            "Industrial video games",
            "Automatic backup copies",
          ],
          correcta: 1,
          explicacion: "From 'passive simulations' to 'active intelligence': twins that reason, suggest solutions and communicate in natural language.",
        },
        {
          pregunta: "What does the Digital Twin Composer presented at CES 2026 combine?",
          opciones: [
            "Excel and PowerPoint",
            "3D twins from Siemens Xcelerator + NVIDIA Omniverse libraries + real-time data",
            "Robots and drones",
            "3D printers and scanners",
          ],
          correcta: 1,
          explicacion: "It is the centrepiece of the Siemens + NVIDIA alliance for the industrial metaverse: photorealistic factories validated 100% digitally.",
        },
        {
          pregunta: "What is allowing SMEs to access digital twins?",
          opciones: [
            "Government subsidies",
            "Cloud deployment with subscription pricing, without a large upfront investment",
            "Sensors now being free",
            "Online courses",
          ],
          correcta: 1,
          explicacion: "Platforms such as AWS IoT TwinMaker and Azure Digital Twins remove the need for in-house infrastructure. You pay per use, like a subscription.",
        },
        {
          pregunta: "Why are digital twins valuable in education?",
          opciones: [
            "Because they replace teachers",
            "Because students can make mistakes in simulated hazardous environments without physical consequences",
            "Because they mark exams automatically",
            "Because they lower tuition fees",
          ],
          correcta: 1,
          explicacion: "Replicating a chemical plant or a power station digitally allows training without exposing anyone to real risks.",
        },
      ],
    },
  ],

  GLOSARIO: [
    /* AGENTE: añadir aquí los 20 términos del glosario traducidos al inglés */
  ],
};

/* Fallback: si el glosario aún no está traducido, usar el español */
if (DATOS.gemelos.en.GLOSARIO.length === 0) DATOS.gemelos.en.GLOSARIO = null;
if (!DATOS.gemelos.en.GLOSARIO) delete DATOS.gemelos.en.GLOSARIO;
