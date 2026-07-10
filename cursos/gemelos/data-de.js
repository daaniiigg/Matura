/* ============================================================
   DEUTSCHER KURSINHALT — gleiche Struktur wie data.js.
   Noch nicht übersetzte Module fallen auf Spanisch zurück.
   ============================================================ */

DATOS.gemelos.de = {
  SECCIONES: [
    { id: "fundamentos", nombre: "📘 Grundlagen" },
    { id: "tecnologia", nombre: "⚙️ Technologie" },
    { id: "mercado", nombre: "🏭 Markt & Industrie" },
    { id: "analisis", nombre: "🔍 Kritische Analyse" },
  ],

  MODULOS: [
    /* ================= MODUL 1 ================= */
    {
      id: 1,
      seccion: "fundamentos",
      titulo: "Was ist ein digitaler Zwilling?",
      minutos: 8,
      objetivos: [
        "Präzise definieren, was ein digitaler Zwilling ist und was ihn von einer statischen Simulation unterscheidet.",
        "Das Konzept der bidirektionalen Verbindung zwischen physischer Welt und digitalem Raum verstehen.",
        "Die drei Hauptfunktionen erkennen: deskriptiv, prädiktiv und präskriptiv.",
      ],
      contenido: `
        <h2>Formale Definition</h2>
        <blockquote><strong>Ein digitaler Zwilling</strong> (<em>digital twin</em>) ist eine dynamische virtuelle Nachbildung eines realen physischen Objekts, Systems oder Prozesses, die in Echtzeit mit Daten von Sensoren und vernetzten Geräten gespeist wird und es ermöglicht, das Verhalten ihres physischen Gegenstücks zu simulieren, zu analysieren und zu optimieren.<br><small>Quelle: AWS (2025) · OpenText (2025) · UNIR (2025)</small></blockquote>
        <p>Der Schlüssel liegt in drei Worten: <strong>dynamische virtuelle Nachbildung</strong>. Es ist kein statisches Foto des Objekts, sondern eine Darstellung, die sich in Echtzeit verändert, während sich das physische Objekt verändert.</p>
        <blockquote>💡 <strong>Analogie:</strong> Denk an das GPS-Navigationssystem eines Autos. Es zeigt nicht nur eine statische Karte — es empfängt Verkehrsdaten in Echtzeit, berechnet Routen neu und antizipiert, was passieren wird. Ein digitaler Zwilling macht genau das, aber für jedes physische System: eine Turbine, ein Krankenhaus oder eine Brücke.</blockquote>

        <h2>Die bidirektionale Verbindung</h2>
        <p>Das wichtigste — und am häufigsten missverstandene — Element ist die <strong>Bidirektionalität</strong>. Der digitale Zwilling empfängt nicht nur Daten aus der physischen Welt: Er kann auch Anweisungen, Warnungen oder Empfehlungen an das physische System zurücksenden.</p>
        <pre>PHYSISCHE WELT  →  Echtzeitdaten  →  DIGITALER ZWILLING
DIGITALER ZWILLING  →  Anweisungen und Warnungen  →  PHYSISCHE WELT</pre>
        <p>Er ist ein intelligenter Spiegel, der nicht nur reflektiert: Er denkt und handelt auch.</p>
        <blockquote>ℹ️ <strong>Zentraler Unterschied:</strong> Ein CAD-Modell ist ein Foto des Objekts. Ein digitaler Zwilling ist ein Live-Video. Der Unterschied ist nicht kosmetisch — er ist strukturell.</blockquote>

        <h2>Die drei Hauptfunktionen</h2>
        <h3>Funktion 01 · Deskriptiv</h3>
        <p>Zeigt den aktuellen Zustand des physischen Objekts in Echtzeit. Beantwortet: <em>Was passiert gerade jetzt?</em> Das ist die grundlegendste Stufe — es genügt, die Sensoren anzuschließen und die Daten zu visualisieren.</p>
        <h3>Funktion 02 · Prädiktiv</h3>
        <p>Nutzt Machine-Learning-Modelle, um zukünftiges Verhalten vorherzusagen. Beantwortet: <em>Was wird passieren, wenn wir so weitermachen?</em> Einen Ausfall zu erkennen, bevor er eintritt, hat direkten wirtschaftlichen Wert.</p>
        <h3>Funktion 03 · Präskriptiv</h3>
        <p>Die fortschrittlichste Stufe: Sie sagt nicht nur voraus, sondern empfiehlt konkrete, optimierte Maßnahmen. Beantwortet: <em>Was sollten wir tun, und wann?</em> Hier hört der Zwilling auf, ein Analysewerkzeug zu sein, und wird zu einem autonomen Managementsystem.</p>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Worin unterscheidet sich ein digitaler Zwilling von einer herkömmlichen Ingenieurssimulation?</li>
          <li>Kann ein digitaler Zwilling ohne die präskriptive Funktion nützlich sein? Für welche Fälle würde die deskriptive genügen?</li>
          <li>Welche Daten bräuchtest du, um einen digitalen Zwilling einer Universitätsbibliothek zu bauen?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Dynamische virtuelle Nachbildung", explicacion: "Eine digitale Kopie, die sich verändert, während sich das reale Objekt verändert. Wie ein Spiegel, der sich mit dir bewegt." },
        { termino: "Bidirektional", explicacion: "Informationen fließen in beide Richtungen: vom realen Objekt zum digitalen und vom digitalen zurück zum realen." },
        { termino: "CAD", explicacion: "Software zum Zeichnen von 3D-Objekten am Computer. Ein Standbild: Es aktualisiert sich nicht von selbst." },
        { termino: "Deskriptiv / Prädiktiv / Präskriptiv", explicacion: "Drei Stufen: Es sagt dir, was jetzt passiert → was passieren wird → was du tun solltest." },
        { termino: "Sensor", explicacion: "Ein kleines Gerät, das etwas in der realen Welt misst (Temperatur, Vibration, Position) und in Daten umwandelt." },
      ],
      quiz: [
        {
          pregunta: "Was ist der grundlegende Unterschied zwischen einem digitalen Zwilling und einem CAD-Modell?",
          opciones: [
            "Der digitale Zwilling aktualisiert sich in Echtzeit mit Daten des physischen Objekts; CAD ist statisch",
            "CAD ist 3D und der digitale Zwilling 2D",
            "Der digitale Zwilling ist billiger zu erstellen",
            "Es gibt keinen Unterschied, sie sind Synonyme",
          ],
          correcta: 0,
          explicacion: "CAD ist wie ein Foto des Objekts; der digitale Zwilling ist ein Live-Video, das sich verändert, wenn sich das reale Objekt verändert.",
        },
        {
          pregunta: "Was bedeutet es, dass die Verbindung eines digitalen Zwillings 'bidirektional' ist?",
          opciones: [
            "Dass er auf zwei Computern gleichzeitig läuft",
            "Dass er Daten aus der physischen Welt empfängt UND Anweisungen oder Warnungen an das physische System zurücksendet",
            "Dass er zwei Sicherungskopien hat",
            "Dass zwei Benutzer ihn gleichzeitig sehen können",
          ],
          correcta: 1,
          explicacion: "Der Zwilling reflektiert nicht nur: Er denkt und handelt auch. Daten fließen von der physischen Welt zur digitalen, Anweisungen fließen zurück.",
        },
        {
          pregunta: "Ein Zwilling, der die Frage 'Was wird passieren, wenn wir so weitermachen?' beantwortet, übt die ... Funktion aus",
          opciones: ["Deskriptive", "Präskriptive", "Prädiktive", "Reaktive"],
          correcta: 2,
          explicacion: "Die prädiktive Funktion nutzt historische Daten und KI-Modelle, um die Zukunft zu antizipieren. Die deskriptive zeigt die Gegenwart; die präskriptive empfiehlt Maßnahmen.",
        },
        {
          pregunta: "Was braucht ein deskriptiver digitaler Zwilling mindestens?",
          opciones: [
            "Fortgeschrittene KI und automatische Entscheidungssysteme",
            "Angeschlossene Sensoren und Datenvisualisierung",
            "Ein fotorealistisches 3D-Modell",
            "Jahrelange historische Daten",
          ],
          correcta: 1,
          explicacion: "Die deskriptive Stufe ist die grundlegendste: Sensoren anschließen und ihre Daten visualisieren genügt. KI wird nur zum Vorhersagen oder Empfehlen gebraucht.",
        },
      ],
    },
    /* ================= MODUL 2 ================= */
    {
      id: 2,
      seccion: "fundamentos",
      titulo: "Geschichte und Ursprung",
      minutos: 7,
      objetivos: [
        "Die Vorläufer des Konzepts im Apollo-Programm der NASA erkennen.",
        "Die Beiträge von Michael Grieves (2002) und John Vickers (2010) kennen.",
        "Die Entwicklung des Konzepts bis zum industriellen Metaversum von 2025–2026 verstehen.",
      ],
      contenido: `
        <h2>Zeitleiste</h2>
        <h3>1960er · NASA — Der erste "Zwilling": physisch, nicht digital</h3>
        <p>Während des Apollo-Programms baute die NASA <strong>physisch identische Raumfahrzeuge</strong>, die auf der Erde blieben, um die Bedingungen des Raumschiffs im Einsatz nachzubilden. In der Krise von <strong>Apollo 13</strong> ermöglichte dieser irdische Zwilling die Simulation von Rettungsoptionen, während die Besatzung im Weltraum ausharrte. Das Konzept funktionierte — aber der Bau physischer Nachbildungen war unerschwinglich teuer.</p>

        <h3>2002 · University of Michigan — Michael Grieves formalisiert das Konzept</h3>
        <p>Dr. <strong>Michael Grieves</strong> stellt den ersten konzeptionellen Rahmen des digitalen Zwillings im Kontext des Produktlebenszyklus-Managements (PLM) vor. Er definiert dessen <strong>drei wesentliche Elemente</strong>, die bis heute gültig sind:</p>
        <ol>
          <li><strong>Realer Raum:</strong> das physische Objekt und seine Eigenschaften.</li>
          <li><strong>Virtueller Raum:</strong> die digitale Darstellung des Objekts.</li>
          <li><strong>Bidirektionaler Datenfluss:</strong> die kontinuierliche Verbindung zwischen beiden Räumen.</li>
        </ol>

        <h3>2010 · NASA — John Vickers prägt den Begriff "Digital Twin"</h3>
        <p>Der NASA-Forscher <strong>John Vickers</strong>, der mit Grieves zusammenarbeitet, schlägt den endgültigen Namen vor: <em>Digital Twin</em>. Der Begriff wird in einem technischen Bericht der NASA veröffentlicht und verbreitet sich weltweit.</p>

        <h3>2012–2020 · Industrielle Expansion — GE, Siemens, PTC</h3>
        <p>Sinkende Preise für IoT-Sensoren, Cloud-Computing und Big Data lassen die Technologie den Luft- und Raumfahrtbereich verlassen. <strong>General Electric, Siemens, PTC und ANSYS</strong> vermarkten die ersten Plattformen für Fertigung, Energie und Bauwesen.</p>

        <h3>2025–2026 · Industrielles Metaversum — Siemens + NVIDIA</h3>
        <p>Die Allianz Siemens + NVIDIA verwirklicht das <strong>industrielle Metaversum</strong>: fotorealistische, physikalisch präzise Zwillinge, integriert mit generativer KI.</p>
        <blockquote>"Die Vorstellung, Fertigungsanlagen zu bauen, ohne es zuvor in einem digitalen Zwilling zu tun, ist völlig undenkbar."<br>— Roland Busch, CEO von Siemens, CES 2026</blockquote>

        <h2>Zum Merken</h2>
        <p>Der Unterschied zwischen dem "physischen Zwilling" des Apollo-Programms und dem modernen digitalen Zwilling ist derselbe wie zwischen einer Fotokopie auf Papier und einer digitalen Datei — beide sind Nachbildungen, aber nur eine kann sich in Echtzeit aktualisieren, sofort übertragen werden und zu Grenzkosten von null existieren.</p>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Warum brauchte das Konzept fast 40 Jahre, um vom Apollo-Programm zur akademischen Formalisierung zu gelangen?</li>
          <li>Welche Technologie war am entscheidendsten dafür, dass digitale Zwillinge zwischen 2012 und 2020 praktikabel wurden?</li>
          <li>Worin unterscheidet sich das "industrielle Metaversum" von einem herkömmlichen digitalen Zwilling?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "PLM", explicacion: "Produktlebenszyklus-Management: ein Produkt vom Entwurf bis zur Ausmusterung begleiten. Hier entstand die Idee des digitalen Zwillings." },
        { termino: "Apollo-Programm", explicacion: "NASA-Missionen zur Mondlandung (60er-70er Jahre). Sie nutzten physische Zwillingsschiffe auf der Erde, um Probleme zu simulieren." },
        { termino: "Industrielles Metaversum", explicacion: "Ganze Fabriken, fotorealistisch in 3D nachgebaut, in denen alles digital getestet wird, bevor etwas Reales angefasst wird." },
        { termino: "Grenzkosten von null", explicacion: "Eine weitere Kopie kostet fast nichts. Eine Datei zu kopieren ist gratis; ein weiteres Raumschiff zu bauen nicht." },
      ],
      quiz: [
        {
          pregunta: "Wo liegt der älteste Vorläufer des Zwillingskonzepts?",
          opciones: [
            "In den Videospielen der 90er Jahre",
            "Im Apollo-Programm der NASA, mit physischen Zwillingsschiffen auf der Erde",
            "In den Autofabriken der 50er Jahre",
            "An der University of Michigan im Jahr 2002",
          ],
          correcta: 1,
          explicacion: "Die NASA baute identische Fahrzeuge, die auf der Erde blieben. Bei Apollo 13 dienten sie zur Simulation der Rettung. Es waren physische Zwillinge, keine digitalen.",
        },
        {
          pregunta: "Wer formalisierte das Konzept des digitalen Zwillings im Jahr 2002 und wo?",
          opciones: [
            "John Vickers, bei der NASA",
            "Jensen Huang, bei NVIDIA",
            "Michael Grieves, an der University of Michigan",
            "Roland Busch, bei Siemens",
          ],
          correcta: 2,
          explicacion: "Michael Grieves stellte den ersten konzeptionellen Rahmen an der University of Michigan vor. John Vickers (NASA) prägte den Namen 'Digital Twin' später, im Jahr 2010.",
        },
        {
          pregunta: "Welche drei wesentlichen Elemente definierte Grieves?",
          opciones: [
            "Sensoren, Cloud und Bildschirm",
            "Realer Raum, virtueller Raum und bidirektionaler Datenfluss",
            "Hardware, Software und Benutzer",
            "Design, Fertigung und Wartung",
          ],
          correcta: 1,
          explicacion: "Die drei Elemente von Grieves gelten bis heute: das physische Objekt, seine digitale Darstellung und die kontinuierliche Verbindung zwischen beiden.",
        },
        {
          pregunta: "Was ermöglichte die industrielle Expansion der digitalen Zwillinge zwischen 2012 und 2020?",
          opciones: [
            "Sinkende Preise für IoT-Sensoren, die Cloud und Big Data",
            "Die Ankunft der Smartphones",
            "Die sozialen Netzwerke",
            "Der 3D-Druck",
          ],
          correcta: 0,
          explicacion: "Günstige Sensoren + Cloud-Computing + Big Data machten praktikabel, was sich zuvor nur die NASA leisten konnte.",
        },
      ],
    },

    /* ================= MODUL 3 ================= */
    {
      id: 3,
      seccion: "tecnologia",
      titulo: "Technologische Architektur",
      minutos: 10,
      objetivos: [
        "Die fünf Schichten der Architektur eines digitalen Zwillings beschreiben.",
        "Die spezifische Rolle von IoT, Big Data, KI, Cloud und Edge Computing erkennen.",
        "Verstehen, warum jede Schicht notwendig ist und was passiert, wenn eine ausfällt.",
      ],
      contenido: `
        <h2>Die fünf technologischen Schichten</h2>
        <p>Ein digitaler Zwilling ist keine einzelne Technologie, sondern die <strong>Konvergenz mehrerer Schichten</strong>, die zusammenarbeiten. Jede Schicht hängt von der vorherigen ab: Wenn die Sensoren nicht funktionieren, hat der Zwilling keine Daten; ohne Daten gibt es keine KI, die etwas analysieren könnte.</p>
        <pre>┌────────────────────────────────────────────┐
│ SCHICHT 05 · Anwendungen                   │
│ Dashboards · Warnungen · Vorhersagen       │
├────────────────────────────────────────────┤
│ SCHICHT 04 · Digitaler Zwilling            │
│ 3D-Modell · KI · physikalische Simulation  │
├────────────────────────────────────────────┤
│ SCHICHT 03 · Daten und Analyse             │
│ Big Data · Cloud · Edge Computing          │
├────────────────────────────────────────────┤
│ SCHICHT 02 · Konnektivität                 │
│ WiFi · 5G · LoRaWAN · OPC-UA · MQTT        │
├────────────────────────────────────────────┤
│ SCHICHT 01 · Sensoren und physische Welt   │
│ Temperatur · Vibration · GPS · Kameras     │
└────────────────────────────────────────────┘
              ↑ Datenfluss</pre>

        <h2>Die sechs Schlüsseltechnologien</h2>
        <h3>1. Internet der Dinge (IoT)</h3>
        <p>Ein Netz von Sensoren, das Daten aus der physischen Welt erfasst. <strong>Ohne IoT hat der Zwilling keine "Augen".</strong> Sinkende Chippreise und 5G waren die Katalysatoren der massenhaften Verbreitung. <em>Wirkt in: Schichten 01 und 02.</em></p>
        <h3>2. Big Data</h3>
        <p>Die Sensoren erzeugen Datenmengen, die kein herkömmliches System bewältigen kann. Big Data liefert die Infrastruktur, um sie im industriellen Maßstab aufzunehmen, zu speichern und zu verarbeiten. <em>Wirkt in: Schicht 03.</em></p>
        <h3>3. Künstliche Intelligenz und Machine Learning</h3>
        <p>KI-Modelle verwandeln Daten in Vorhersagen: Sie erkennen Verschleißmuster, antizipieren Ausfälle und optimieren Parameter. <strong>Die KI ist es, die einen deskriptiven Zwilling in einen prädiktiven oder präskriptiven verwandelt.</strong> <em>Wirkt in: Schicht 04.</em></p>
        <h3>4. Cloud-Computing und Edge Computing</h3>
        <p>Die <strong>Cloud</strong> liefert die Skalierbarkeit, um große Datenmengen zu verarbeiten und zu speichern. <strong>Edge Computing</strong> — die Verarbeitung direkt am Sensor, ohne die Daten weit zu versenden — reduziert die Latenz, wenn die Echtzeitantwort kritisch ist.</p>
        <blockquote>💡 <strong>Beispiel:</strong> In einer Produktionslinie, die alle 50 Millisekunden entscheidet, kann man nicht auf die Hin- und Rückreise zu einem entfernten Server warten. Das Edge verarbeitet lokal und sendet nur Zusammenfassungen an die Cloud.</blockquote>
        <h3>5. Modellierung und Simulation</h3>
        <p>CAD- und BIM-Werkzeuge sowie physikalisch-mathematische Modelle bauen die digitale Darstellung auf. Sie sind der "Körper" des Zwillings: Geometrie, physikalische Eigenschaften und erwartetes Verhalten. <em>Wirkt in: Schicht 04.</em></p>
        <h3>6. Integrationsplattformen und APIs</h3>
        <p>APIs und Middleware, die heterogene Systeme verbinden: Sensoren verschiedener Hersteller, ERP, MES, SCADA und Clouds. Ohne diese Schicht können die Komponenten nicht miteinander sprechen. Das Fehlen universeller Standards ist eine der großen aktuellen Herausforderungen. <em>Wirkt in: Schichten 02 und 03.</em></p>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Welche Schicht ist bei einem digitalen Zwilling eines Krankenhauses am kritischsten? Warum?</li>
          <li>Wie wirkt sich der Datenschutz unterschiedlich auf Schicht 01 (Sensoren) und Schicht 05 (Anwendungen) aus?</li>
          <li>Wenn sich ein Unternehmen keine eigene Cloud-Infrastruktur leisten kann, welche Alternativen hat es?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "IoT", explicacion: "Physische Objekte, die mit dem Internet verbunden sind (Sensoren, Maschinen) und selbstständig Daten senden. Sie sind die 'Augen' des Zwillings." },
        { termino: "Big Data", explicacion: "Technologie zum Umgang mit riesigen Datenmengen, die ein normaler Computer nicht verarbeiten könnte." },
        { termino: "Machine Learning", explicacion: "Programme, die selbstständig aus Daten lernen, ohne dass ihnen jemand jede Regel einprogrammiert." },
        { termino: "Edge Computing", explicacion: "Daten direkt am Sensor verarbeiten, statt sie an einen entfernten Server zu senden. Spart Reisezeit." },
        { termino: "Latenz", explicacion: "Die Zeit, die ein Datum braucht, um von einem Ort zum anderen zu gelangen. Wie der 'Lag' in einem Online-Videospiel." },
        { termino: "API", explicacion: "Die 'gemeinsame Sprache', die es zwei verschiedenen Programmen ermöglicht, sich zu verstehen und Daten auszutauschen." },
      ],
      quiz: [
        {
          pregunta: "Was passiert, wenn Schicht 01 (Sensoren) eines digitalen Zwillings ausfällt?",
          opciones: [
            "Nichts, die anderen Schichten kompensieren es",
            "Der Zwilling bleibt ohne Daten aus der realen Welt: Er verliert seine 'Augen'",
            "Nur das 3D-Modell geht verloren",
            "Der Zwilling läuft langsamer, funktioniert aber weiter",
          ],
          correcta: 1,
          explicacion: "Jede Schicht hängt von der vorherigen ab. Ohne Sensoren gibt es keine Daten, und ohne Daten gibt es nichts zu analysieren oder vorherzusagen.",
        },
        {
          pregunta: "Welche Technologie verwandelt einen deskriptiven Zwilling in einen prädiktiven oder präskriptiven?",
          opciones: [
            "Die CAD-Modellierung",
            "Die MQTT-Protokolle",
            "Künstliche Intelligenz und Machine Learning",
            "Hochgeschwindigkeits-WiFi",
          ],
          correcta: 2,
          explicacion: "Ohne KI zeigt der Zwilling nur den aktuellen Zustand. Machine-Learning-Modelle sind es, die es ermöglichen, Ausfälle zu antizipieren und Maßnahmen zu empfehlen.",
        },
        {
          pregunta: "Wozu dient Edge Computing?",
          opciones: [
            "Um das 3D-Modell realistischer zu machen",
            "Um Daten direkt am Sensor zu verarbeiten und die Latenz zu reduzieren, wenn die Antwort sofort erfolgen muss",
            "Um Sensoren billiger zu machen",
            "Um Sicherungskopien zu speichern",
          ],
          correcta: 1,
          explicacion: "Wenn ein System alle 50 Millisekunden entscheidet, kann es nicht auf die Reise zu einem entfernten Server warten. Das Edge verarbeitet lokal und sendet nur Zusammenfassungen an die Cloud.",
        },
        {
          pregunta: "Warum sind Integrationsplattformen und APIs notwendig?",
          opciones: [
            "Damit Systeme verschiedener Hersteller miteinander kommunizieren können",
            "Um die Dashboards schöner zu machen",
            "Um den Preis der Cloud zu senken",
            "Um die Sensoren zu ersetzen",
          ],
          correcta: 0,
          explicacion: "Sensoren verschiedener Marken, ERP-, MES-, SCADA-Systeme... ohne eine 'gemeinsame Sprache' (APIs) können die Komponenten nicht miteinander sprechen.",
        },
      ],
    },

    /* ================= MODUL 4 ================= */
    {
      id: 4,
      seccion: "tecnologia",
      titulo: "Arten digitaler Zwillinge",
      minutos: 6,
      objetivos: [
        "Die vier Zwillingstypen nach Größenordnung unterscheiden: Komponente, Anlage, System und Prozess.",
        "Die deskriptive, prädiktive und präskriptive Funktion voneinander abgrenzen.",
        "Jeden Typ mit konkreten Anwendungsfällen in Verbindung bringen.",
      ],
      contenido: `
        <h2>Klassifikation nach Größenordnung des modellierten Objekts</h2>
        <h3>Typ 01 · Komponenten-Zwilling <em>(Mikro-Ebene)</em></h3>
        <p>Modelliert ein einzelnes Bauteil: ein Wälzlager, einen Motor, ein Ventil. Das ist der häufigste Ausgangspunkt. <strong>Beispiel:</strong> der Zwilling eines Wälzlagers in einer Turbine, der vorzeitigen Verschleiß erkennt, bevor er einen größeren Ausfall verursacht.</p>
        <h3>Typ 02 · Anlagen-Zwilling <em>(Meso-Ebene)</em></h3>
        <p>Integriert mehrere Komponenten zu einem vollständigen Gerät: eine Windturbine, eine Montagelinie, ein Fahrzeug. <strong>Beispiel:</strong> der Zwilling eines kompletten Flugzeugs zur Wartungsplanung all seiner Systeme.</p>
        <h3>Typ 03 · System-Zwilling <em>(Makro-Ebene)</em></h3>
        <p>Bildet ganze Systeme mit mehreren Anlagen nach: eine Produktionsstätte, ein Stromnetz, einen Flughafen. <strong>Beispiel:</strong> der Zwilling einer petrochemischen Anlage, um Änderungen zu simulieren, bevor sie physisch umgesetzt werden.</p>
        <h3>Typ 04 · Prozess-Zwilling <em>(globale Ebene)</em></h3>
        <p>Modelliert vollständige Arbeitsabläufe: Lieferketten, Krankenhausprozesse, ganze Städte. <strong>Beispiel: Virtual Singapore</strong> — die virtuelle Nachbildung des gesamten Stadtstaats, genutzt für Stadtplanung, Notfälle und Verkehr.</p>

        <h2>Klassifikation nach ausgeübter Funktion</h2>
        <p>Diese drei Funktionen sind <strong>kumulativ</strong>: Ein präskriptiver Zwilling ist auch prädiktiv und deskriptiv.</p>
        <table>
          <tr><th>Funktion</th><th>Frage, die sie beantwortet</th><th>Voraussetzungen</th></tr>
          <tr><td><strong>Deskriptiv</strong></td><td>Was passiert gerade jetzt?</td><td>Sensoren + Visualisierung</td></tr>
          <tr><td><strong>Prädiktiv</strong></td><td>Was wird passieren, wenn wir so weitermachen?</td><td>Historische Daten + KI</td></tr>
          <tr><td><strong>Präskriptiv</strong></td><td>Was sollten wir tun, und wann?</td><td>Fortgeschrittene KI + Entscheidungssysteme</td></tr>
        </table>

        <h2>Zusammenhang zwischen Größenordnung und Funktion</h2>
        <p>Die einfachsten Zwillinge (Komponente) beginnen meist deskriptiv und entwickeln sich in Richtung des Prädiktiven. Prozess-Zwillinge (Städte, Krankenhäuser) enthalten häufiger präskriptive Funktionen, weil ihre Komplexität ein Management ohne automatische Empfehlungen unmöglich macht.</p>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Wie würdest du Virtual Singapore nach der Größenordnung einordnen? Und nach der Funktion?</li>
          <li>Könnte ein Komponenten-Zwilling gleichzeitig präskriptiv sein? Was bräuchte er dafür?</li>
          <li>Warum beginnen die meisten Implementierungen bei Komponente oder Anlage und nicht bei System oder Prozess?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Komponente", explicacion: "Ein einzelnes Bauteil: ein Wälzlager, ein Ventil, ein Motor. Das Kleinste, was modelliert werden kann." },
        { termino: "Anlage", explicacion: "Ein vollständiges Gerät aus mehreren Bauteilen: ein Flugzeug, eine Turbine, ein Auto." },
        { termino: "System", explicacion: "Eine Gruppe von Geräten, die zusammenarbeiten: eine ganze Fabrik, ein Stromnetz." },
        { termino: "Prozess", explicacion: "Ein vollständiger Arbeitsablauf, das Größte: eine Lieferkette oder eine ganze Stadt." },
        { termino: "Kumulative Funktionen", explicacion: "Jede Stufe schließt die vorherigen ein: Wenn ein Zwilling empfiehlt (präskriptiv), sagt er auch voraus und beschreibt." },
      ],
      quiz: [
        {
          pregunta: "Virtual Singapore, die Nachbildung des gesamten Stadtstaats, ist ein Zwilling vom Typ...",
          opciones: ["Komponente", "Anlage", "System", "Prozess"],
          correcta: 3,
          explicacion: "Eine ganze Stadt ist die globalste Größenordnung, die es gibt: ein Prozess-Zwilling, die komplexeste Stufe, die die größte Investition erfordert.",
        },
        {
          pregunta: "Der Zwilling eines einzelnen Wälzlagers in einer Turbine ist ein Zwilling vom Typ...",
          opciones: ["Komponente", "Anlage", "System", "Prozess"],
          correcta: 0,
          explicacion: "Ein einzelnes Bauteil = Mikro-Ebene = Komponenten-Zwilling. Das ist der häufigste Ausgangspunkt.",
        },
        {
          pregunta: "Wenn ein digitaler Zwilling präskriptiv ist, welche anderen Funktionen sind garantiert?",
          opciones: [
            "Keine, sie schließen sich gegenseitig aus",
            "Nur die prädiktive",
            "Die deskriptive und die prädiktive, weil die Funktionen kumulativ sind",
            "Das hängt vom Hersteller ab",
          ],
          correcta: 2,
          explicacion: "Die Funktionen sind kumulativ: Um zu empfehlen, was zu tun ist (präskriptiv), muss er vorher wissen, was passiert (deskriptiv) und was passieren wird (prädiktiv).",
        },
        {
          pregunta: "Der Zwilling eines kompletten Flugzeugs, der alle seine Systeme integriert, ist ein Zwilling vom Typ...",
          opciones: ["Komponente", "Anlage", "System", "Prozess"],
          correcta: 1,
          explicacion: "Ein vollständiges Gerät aus mehreren integrierten Komponenten = Anlagen-Zwilling (Meso-Ebene).",
        },
      ],
    },

    /* ================= MODUL 5 ================= */
    {
      id: 5,
      seccion: "mercado",
      titulo: "Der globale Markt",
      minutos: 8,
      objetivos: [
        "Die aktuelle und prognostizierte wirtschaftliche Dimension des globalen Marktes kennen.",
        "Die führenden Regionen und ihre Wachstumsfaktoren identifizieren.",
        "Die wichtigsten Unternehmen des Ökosystems im Jahr 2025 erkennen.",
      ],
      contenido: `
        <h2>Marktprognose 2020–2030</h2>
        <p>Der Markt für digitale Zwillinge wächst mit einer Geschwindigkeit, die mit kaum einer anderen Industrietechnologie vergleichbar ist.</p>
        <table>
          <tr><th>Jahr</th><th>Geschätzter Wert (USD)</th><th>Status</th></tr>
          <tr><td>2020</td><td>$3.800M</td><td>Historisch</td></tr>
          <tr><td>2022</td><td>$7.400M</td><td>Historisch</td></tr>
          <tr><td>2024</td><td>$15.000M</td><td>Historisch</td></tr>
          <tr><td>2025</td><td>$28.900M</td><td>Geschätzt</td></tr>
          <tr><td>2026</td><td>$39.700M</td><td>Prognostiziert</td></tr>
          <tr><td>2028</td><td>$75.000M</td><td>Prognostiziert</td></tr>
          <tr><td>2030</td><td>$122.000M – $572.000M</td><td>Prognostiziert</td></tr>
        </table>
        <blockquote>⚠️ <strong>Methodischer Hinweis:</strong> Die so breite Spanne für 2030–2035 spiegelt methodische Unterschiede zwischen den Analystenfirmen wider. Der prognostizierte CAGR schwankt zwischen 31% und 47% pro Jahr — in jedem Fall eine der höchsten Raten der Industrietechnologie.</blockquote>

        <h2>Geografie des Marktes (2025)</h2>
        <h3>🇺🇸 Nordamerika — Globaler Marktführer (31–38% Anteil)</h3>
        <p>Angetrieben von Fertigung, Luft- und Raumfahrt und den großen Cloud-Plattformen (AWS, Microsoft, NVIDIA). Prognostizierter CAGR von 48% pro Jahr.</p>
        <h3>🇪🇺 Europa — Zweiter Platz (~$4.900M)</h3>
        <p>Stark in Automobilbau, Energie und Infrastruktur. Die Industrie-4.0-Politik der EU und die Digitale Agenda Spaniens — mit einer Ausschreibung über $87,1M für Smart Cities im Jahr 2025 — wirken als Beschleuniger.</p>
        <h3>🌏 Asien-Pazifik — Höchster prognostizierter CAGR</h3>
        <p>China, Indien, Japan und Südkorea führen, mit staatlichen Smart-City-Initiativen als Katalysatoren.</p>

        <h2>Wichtigste Unternehmen des Ökosystems (2025)</h2>
        <table>
          <tr><th>Unternehmen</th><th>Hauptstärke</th></tr>
          <tr><td><strong>Siemens AG</strong></td><td>Globaler Marktführer (>5% Anteil) · Xcelerator · Digital Twin Composer</td></tr>
          <tr><td><strong>NVIDIA</strong></td><td>Omniverse · physikalisch präzise Simulation · industrielles Metaversum</td></tr>
          <tr><td><strong>Microsoft</strong></td><td>Azure Digital Twins · Cloud-Ökosystem</td></tr>
          <tr><td><strong>Dassault Systèmes</strong></td><td>3DEXPERIENCE · Ingenieurwesen und Fertigung</td></tr>
          <tr><td><strong>GE Vernova</strong></td><td>Energie und Industriemaschinen · Pionierin</td></tr>
          <tr><td><strong>PTC · ANSYS · IBM · SAP · Oracle</strong></td><td>Spezialisierte Lösungen je nach Branche</td></tr>
        </table>

        <h2>Segment mit der größten Verbreitung</h2>
        <p>Das Segment <strong>Automobil und Transport</strong> hat 2025 den größten Anteil, gefolgt von fortgeschrittener Fertigung und Energie. Das Segment <strong>Gesundheit</strong> weist den höchsten prognostizierten CAGR auf: über 52% zwischen 2025 und 2030.</p>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Warum ist die Spanne der Schätzungen für 2030 so breit? Welche Faktoren erklären sie?</li>
          <li>Welche Auswirkungen hat die nordamerikanische Führungsposition für Spanien und Europa?</li>
          <li>In welchen Branchen könnte sich die Verbreitung in Spanien deiner Meinung nach am schnellsten beschleunigen?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "CAGR", explicacion: "Durchschnittliche jährliche Wachstumsgeschwindigkeit. Ein CAGR von 32% bedeutet, dass sich der Markt etwa alle 2,5 Jahre verdoppelt." },
        { termino: "Marktanteil", explicacion: "Das Stück vom Kuchen, das einem Unternehmen oder einer Region vom Gesamtumsatz zusteht." },
        { termino: "Schätzungsspanne", explicacion: "Der Bereich zwischen der niedrigsten und der höchsten Vorhersage. Je ferner die Zukunft, desto breiter." },
        { termino: "Industrie 4.0", explicacion: "Die 'vierte industrielle Revolution': vernetzte Fabriken mit Sensoren, Daten und künstlicher Intelligenz." },
      ],
      quiz: [
        {
          pregunta: "Wie hoch war der geschätzte Wert des globalen Marktes für digitale Zwillinge im Jahr 2025?",
          opciones: ["$3.800M", "$28.900M", "$122.000M", "$572.000M"],
          correcta: 1,
          explicacion: "Der Markt wuchs von $3.800M im Jahr 2020 auf geschätzte $28.900M im Jahr 2025 — er hat sich in fünf Jahren fast verachtfacht.",
        },
        {
          pregunta: "Welche Region führt den globalen Markt im Jahr 2025 an?",
          opciones: ["Europa", "Asien-Pazifik", "Nordamerika", "Lateinamerika"],
          correcta: 2,
          explicacion: "Nordamerika hält 31–38% Anteil, angetrieben von Fertigung, Luft- und Raumfahrt und den großen Cloud-Plattformen (AWS, Microsoft, NVIDIA).",
        },
        {
          pregunta: "Was bedeutet ein CAGR von 32%?",
          opciones: [
            "Dass der Markt jedes Jahr 32% verliert",
            "Dass der Markt im Durchschnitt jedes Jahr um 32% wächst und sich in etwa 2,5 Jahren verdoppelt",
            "Dass 32% der Unternehmen die Technologie nutzen",
            "Dass eine Wachstumswahrscheinlichkeit von 32% besteht",
          ],
          correcta: 1,
          explicacion: "CAGR = durchschnittliche jährliche Wachstumsrate. Sie misst, wie schnell etwas im Durchschnitt pro Jahr wächst.",
        },
        {
          pregunta: "Welche Branche hat den höchsten prognostizierten CAGR für 2025–2030?",
          opciones: ["Automobil", "Fertigung", "Energie", "Gesundheit (+52%)"],
          correcta: 3,
          explicacion: "Obwohl die Automobilbranche derzeit den größten Anteil hat, wird die Gesundheitsbranche am schnellsten wachsen: über 52% pro Jahr prognostiziert.",
        },
      ],
    },

    /* ================= MODUL 6 ================= */
    {
      id: 6,
      seccion: "mercado",
      titulo: "Branchenspezifische Anwendungen",
      minutos: 12,
      objetivos: [
        "Die Anwendungen in Fertigung, Gesundheit, Smart Cities, Energie sowie Luft- und Raumfahrt identifizieren.",
        "Reale Anwendungsfälle mit dokumentierten Wirkungsdaten analysieren.",
        "Verstehen, warum jede Branche digitale Zwillinge auf unterschiedliche Weise einführt.",
      ],
      contenido: `
        <h2>Branche 01 · Fertigung und Industrie 4.0</h2>
        <p><strong>Größte historische Verbreitung · Am besten dokumentierter Anwendungsfall</strong></p>
        <table>
          <tr><th>Indikator</th><th>Wert</th><th>Quelle</th></tr>
          <tr><td>Vor der physischen Änderung erkannte Probleme</td><td><strong>90%</strong></td><td>PepsiCo + Siemens, CES 2026</td></tr>
          <tr><td>Verbesserung der operativen Leistung</td><td><strong>+20%</strong></td><td>ITware Latam, 2026</td></tr>
          <tr><td>Reduzierung der physischen Investitionen (CapEx)</td><td><strong>−15%</strong></td><td>ITware Latam, 2026</td></tr>
        </table>
        <h3>Vorzeigefall: PepsiCo + Siemens + NVIDIA (CES 2026)</h3>
        <p>PepsiCo verwandelte seine Anlagen in den USA mit dem <strong>Siemens Digital Twin Composer</strong> und <strong>NVIDIA Omniverse</strong> in hochpräzise 3D-Zwillinge. KI-Agenten simulieren, testen und verfeinern Änderungen, bevor sie physisch stattfinden. Ergebnis: 90% der Probleme vorab identifiziert, +20% Leistung und −15% CapEx.</p>

        <h2>Branche 02 · Gesundheit und Medizin</h2>
        <p><strong>Höchster prognostizierter CAGR: +52% pro Jahr (2025–2030)</strong></p>
        <ul>
          <li><strong>Organ-Zwillinge:</strong> virtuelle Herzen, Lungen oder Gehirne, um Operationen zu simulieren, bevor sie durchgeführt werden.</li>
          <li><strong>Krankenhaus-Zwillinge:</strong> vollständige Nachbildungen zur Optimierung von Patientenströmen, Betten und Logistik.</li>
          <li><strong>Simulatoren für die klinische Ausbildung:</strong> Training ohne Risiko für reale Patienten.</li>
        </ul>
        <blockquote>💡 Ein Chirurg, der eine komplexe Herzfehlbildung operieren muss, kann den Eingriff am digitalen Zwilling genau dieses Herzens proben. Das geschieht bereits in führenden europäischen Kliniken.</blockquote>

        <h2>Branche 03 · Smart Cities und Stadtplanung</h2>
        <ul>
          <li>Stadtplanung: Infrastrukturen simulieren, bevor sie gebaut werden.</li>
          <li>Notfallmanagement: Überschwemmungen, Brände, Evakuierungen modellieren.</li>
          <li>Verkehr und Mobilität: Ampeln und öffentlichen Nahverkehr optimieren.</li>
        </ul>
        <p><strong>Fälle:</strong> Virtual Singapore (Nachbildung der ganzen Stadt), Jacksonville USA (Klimaszenarien), NextPort Spanien (Häfen wie der von Santander). Die spanische Regierung startete eine Ausschreibung über <strong>$87,1M</strong> für Smart Cities.</p>

        <h2>Branche 04 · Energie und Nachhaltigkeit</h2>
        <p>Durchschnittliche Verbesserung von <strong>+16%</strong> bei Nachhaltigkeitskennzahlen (Capgemini, 2024, n=1.000 Unternehmen).</p>
        <p><strong>Fälle:</strong> Siemens Gamesa (Zwilling seines Windparks in Dänemark mit prädiktiver Wartung) und Peaxy (erster Zwilling der kompletten Wertschöpfungskette des grünen Wasserstoffs).</p>
        <blockquote>💡 Eine defekte Windturbine auf hoher See zu reparieren ist extrem teuer. Wenn der Zwilling den Verschleiß Wochen im Voraus erkennt, wird die Wartung zum optimalen Zeitpunkt geplant — und Millionen gespart.</blockquote>

        <h2>Branche 05 · Luft- und Raumfahrt und Verteidigung</h2>
        <p><strong>Pionierbranche — hier entstand das Konzept.</strong> Simulation von Raumfahrzeugen unter Extrembedingungen, Wartungsplanung von Flugzeugflotten (unter anderem Airbus) und Optimierung der Verfügbarkeit.</p>

        <h2>Schneller Branchenvergleich</h2>
        <table>
          <tr><th>Branche</th><th>Reifegrad</th><th>Prognostizierter CAGR</th><th>Meistzitierter Fall</th></tr>
          <tr><td>Fertigung</td><td>★★★★★</td><td>~35%</td><td>PepsiCo + Siemens</td></tr>
          <tr><td>Luft- und Raumfahrt</td><td>★★★★☆</td><td>~30%</td><td>NASA, Airbus</td></tr>
          <tr><td>Energie</td><td>★★★★☆</td><td>~38%</td><td>Siemens Gamesa</td></tr>
          <tr><td>Städte</td><td>★★★☆☆</td><td>~40%</td><td>Virtual Singapore</td></tr>
          <tr><td>Gesundheit</td><td>★★☆☆☆</td><td><strong>+52%</strong></td><td>Herz-Zwillinge</td></tr>
        </table>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Warum hat die Gesundheitsbranche den höchsten CAGR, obwohl ihr aktueller Reifegrad geringer ist?</li>
          <li>Welche ethischen Unterschiede gibt es zwischen dem Zwilling einer Turbine und dem eines Patienten?</li>
          <li>Welche Branche hat das größte ungenutzte Potenzial? Welche Hindernisse bremsen sie?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "KPI", explicacion: "Kennzahl: eine Zahl, die zusammenfasst, ob etwas gut oder schlecht läuft. Wie eine Prüfungsnote, aber für Unternehmen." },
        { termino: "CapEx", explicacion: "Geld, das in langlebige physische Dinge investiert wird: Maschinen, Gebäude, Ausrüstung. Es zu senken = weniger fürs Bauen ausgeben." },
        { termino: "Prädiktive Wartung", explicacion: "Die Maschine kurz bevor sie kaputtgeht reparieren, weil die Daten frühzeitig vor dem Verschleiß warnen." },
        { termino: "Adoptionsreife", explicacion: "Wie lange eine Branche die Technologie schon nutzt und wie verbreitet sie dort ist." },
        { termino: "Organ-Zwilling", explicacion: "Digitale Kopie eines konkreten Herzens oder einer Lunge eines Patienten, um die Operation vorher zu proben." },
      ],
      quiz: [
        {
          pregunta: "Welcher Prozentsatz der Probleme wurde im Fall PepsiCo + Siemens (CES 2026) erkannt, bevor physische Änderungen vorgenommen wurden?",
          opciones: ["50%", "70%", "90%", "100%"],
          correcta: 2,
          explicacion: "90% der potenziellen Probleme wurden im Zwilling identifiziert, bevor die reale Fabrik angefasst wurde — mit +20% Leistung und −15% CapEx.",
        },
        {
          pregunta: "Wozu dient ein digitaler Zwilling eines menschlichen Organs?",
          opciones: [
            "Um das reale Organ zu ersetzen",
            "Damit der Chirurg die Operation digital proben kann, bevor er sie am Patienten durchführt",
            "Um Organe in 3D zu drucken",
            "Um per Videoanruf zu diagnostizieren",
          ],
          correcta: 1,
          explicacion: "Ein Chirurg kann einen komplexen Eingriff am Zwilling genau dieses Herzens simulieren, bevor er operiert. Das geschieht bereits in europäischen Kliniken.",
        },
        {
          pregunta: "Warum ist prädiktive Wartung in einem Offshore-Windpark so wertvoll?",
          opciones: [
            "Weil Offshore-Turbinen kleiner sind",
            "Weil Reparaturen auf hoher See extrem teuer sind und die frühzeitige Erkennung des Verschleißes es erlaubt, die Wartung zum optimalen Zeitpunkt zu planen",
            "Weil der Meereswind mehr kaputt macht",
            "Weil das europäische Recht es verlangt",
          ],
          correcta: 1,
          explicacion: "Den Verschleiß Wochen im Voraus zu erkennen vermeidet ungeplante Stillstände und spart Millionen bei Notfallreparaturen auf hoher See.",
        },
        {
          pregunta: "Welche dieser Anwendungen gehört zu einem Smart-City-Zwilling?",
          opciones: [
            "Evakuierungen und Überschwemmungen simulieren, bevor sie eintreten",
            "Autos schneller bauen",
            "Chirurgen trainieren",
            "Den Verschleiß eines Wälzlagers erkennen",
          ],
          correcta: 0,
          explicacion: "Urbane Zwillinge wie Virtual Singapore dienen der Stadtplanung, dem Notfallmanagement und der Verkehrsanalyse.",
        },
      ],
    },

    /* ================= MODUL 7 ================= */
    {
      id: 7,
      seccion: "analisis",
      titulo: "Herausforderungen und Risiken",
      minutos: 9,
      objetivos: [
        "Die sechs größten Herausforderungen digitaler Zwillinge identifizieren.",
        "Das Konzept der erweiterten Angriffsfläche in der Cybersicherheit verstehen.",
        "Die ungelösten ethischen und rechtlichen Fragen analysieren.",
      ],
      contenido: `
        <p>Es ist nicht alles vorteilhaft. <strong>Diese Herausforderungen zu ignorieren kann schwerwiegende physische Folgen haben</strong> — in kritischen Infrastrukturen, wo eine Entscheidung auf Basis manipulierter Daten Menschenleben oder Millionen von Euro kosten kann.</p>

        <h2>Herausforderung 01 · Cybersicherheit 🔴 KRITISCH</h2>
        <p>Die physisch-digitale Vernetzung macht den Zwilling zu einem kritischen Schwachpunkt. Ein Angreifer, der seine Daten manipuliert, kann Fehlentscheidungen mit realen physischen Folgen auslösen: ein Zug, dessen Zwilling bessere Bremsen anzeigt als in Wirklichkeit, eine Chemieanlage, deren Zwilling eine sichere Temperatur meldet, obwohl sie es nicht ist.</p>
        <p>Da ein digitales Double existiert, <strong>verdoppelt sich die Angriffsfläche</strong>: Angreifer haben zwei Eintrittspunkte — das Originalsystem und seine Nachbildung.</p>
        <p><strong>Maßnahmen:</strong> <em>Zero-Trust</em>-Architektur (niemandem automatisch vertrauen), Mikrosegmentierung von Netzwerken, Multi-Faktor-Authentifizierung und rigoroses Management von IoT-Geräten.</p>

        <h2>Herausforderung 02 · Datenschutz 🟠 HOCH</h2>
        <p>Zwillinge, die menschliches Verhalten modellieren — Patienten, Beschäftigte, Bürger — verwalten personenbezogene Daten in großem Maßstab. Die <strong>europäische DSGVO berücksichtigt digitale Zwillinge nicht ausdrücklich</strong>, was regulatorische Grauzonen schafft.</p>
        <p><strong>Empfehlungen:</strong> <em>Privacy by Design</em> (personenbezogene Daten von Anfang an minimieren), Transparenz darüber, was erfasst wird, und klare Eigentumsverhältnisse bei Modellen und Daten.</p>

        <h2>Herausforderung 03 · Interoperabilität ⚪ MODERAT</h2>
        <p>Systeme und Maschinen verschiedener Hersteller nutzen <strong>inkompatible proprietäre Protokolle</strong>. Sie zu verbinden erfordert teure maßgeschneiderte Entwicklungen. Das Fehlen universeller Standards — auch wenn OPC-UA Fortschritte macht — ist ein struktureller Engpass.</p>

        <h2>Herausforderung 04 · Kosten und Anfangsinvestition ⚪ MODERAT</h2>
        <p>Die Investition in Sensoren, Infrastruktur und Fachkräfte ist <strong>hoch</strong>. Cloud-Abomodelle beginnen, den Zugang für KMU zu demokratisieren, aber die Hürde bleibt beträchtlich.</p>

        <h2>Herausforderung 05 · Fachkräftemangel ⚪ MODERAT</h2>
        <p>Es werden Fachleute gebraucht, die zugleich IoT, Systemmodellierung, KI und das Ingenieurwissen der jeweiligen Branche beherrschen. Dieses hybride Profil <strong>ist weltweit knapp</strong>, und seine Ausbildung ist langwierig und teuer.</p>

        <h2>Herausforderung 06 · Geistiges Eigentum und Ethik ⚪ AUFKOMMEND</h2>
        <ul>
          <li>Wem gehören die vom Zwilling erzeugten Daten — dem Hersteller, dem Betreiber oder der Plattform?</li>
          <li>Wer haftet, wenn der Zwilling eine autonome Entscheidung trifft, die Schaden anrichtet?</li>
        </ul>
        <p>Diese Fragen haben keine klare rechtliche Antwort. <strong>Die Regulierung hinkt der Technologie hinterher.</strong></p>

        <h2>Zusammenfassung der Herausforderungen</h2>
        <table>
          <tr><th>Herausforderung</th><th>Stufe</th><th>Dringlichkeit</th></tr>
          <tr><td>Cybersicherheit</td><td>🔴 Kritisch</td><td>Sofort</td></tr>
          <tr><td>Datenschutz</td><td>🟠 Hoch</td><td>Dringend</td></tr>
          <tr><td>Interoperabilität</td><td>⚪ Moderat</td><td>Mittel</td></tr>
          <tr><td>Kosten und Investition</td><td>⚪ Moderat</td><td>Mittel</td></tr>
          <tr><td>Fachkräftemangel</td><td>⚪ Moderat</td><td>Mittel</td></tr>
          <tr><td>Eigentum und Ethik</td><td>⚪ Aufkommend</td><td>Zukünftig</td></tr>
        </table>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Ist das Cybersicherheitsrisiko beim Zwilling eines Kernkraftwerks oder dem eines Krankenhauses größer? Warum?</li>
          <li>Sollte die DSGVO aktualisiert werden, um digitale Zwillinge ausdrücklich zu berücksichtigen?</li>
          <li>Wie würdest du dem Fachkräftemangel begegnen, wenn du in deinem Unternehmen einen digitalen Zwilling einführen würdest?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Angriffsfläche", explicacion: "Alle Punkte, über die ein Hacker eindringen könnte. Mit einem Zwilling gibt es zwei Türen: das reale System und seine Kopie." },
        { termino: "Zero Trust", explicacion: "Sicherheitsregel: standardmäßig niemandem vertrauen, nicht einmal dem, der schon drinnen ist. Immer verifizieren." },
        { termino: "DSGVO", explicacion: "Das europäische Gesetz, das deine personenbezogenen Daten schützt. Es wurde nicht mit Blick auf digitale Zwillinge geschrieben, und das schafft Lücken." },
        { termino: "Interoperabilität", explicacion: "Dass Geräte verschiedener Marken einander verstehen können. Als wären alle Ladekabel USB-C." },
        { termino: "Privacy by Design", explicacion: "Das System von Anfang an so entwerfen, dass möglichst wenige personenbezogene Daten verwendet werden." },
      ],
      quiz: [
        {
          pregunta: "Warum sagt man, dass ein digitaler Zwilling 'die Angriffsfläche verdoppelt'?",
          opciones: [
            "Weil er doppelt so viele Passwörter braucht",
            "Weil Angreifer zwei Eintrittspunkte haben: das Originalsystem und seine digitale Nachbildung",
            "Weil er doppelt so viel Strom verbraucht",
            "Weil man zwei Antivirenprogramme bezahlen muss",
          ],
          correcta: 1,
          explicacion: "Da ein digitales Double des Systems existiert, kann ein Angreifer versuchen, über das physische System oder über seinen Zwilling einzudringen. Zwei Türen statt einer.",
        },
        {
          pregunta: "Was ist die 'Zero-Trust'-Architektur?",
          opciones: [
            "Ein System ohne Passwörter",
            "Keinem Benutzer oder Gerät automatisch vertrauen, selbst wenn es sich innerhalb des Netzwerks befindet",
            "Nur den Mitarbeitern des Unternehmens vertrauen",
            "Ein kostenloses Antivirenprogramm",
          ],
          correcta: 1,
          explicacion: "Zero Trust = immer verifizieren, niemals standardmäßig vertrauen. Nicht einmal dem, der schon im Unternehmensnetzwerk ist.",
        },
        {
          pregunta: "Was ist das Problem der DSGVO mit digitalen Zwillingen?",
          opciones: [
            "Dass sie sie in Europa vollständig verbietet",
            "Dass sie für jeden Zwilling eine Gebühr verlangt",
            "Dass sie sie nicht ausdrücklich berücksichtigt, was regulatorische Grauzonen schafft",
            "Dass sie nur für amerikanische Unternehmen gilt",
          ],
          correcta: 2,
          explicacion: "Das europäische Datenschutzgesetz wurde nicht mit Blick auf digitale Zwillinge geschrieben, die menschliches Verhalten modellieren. Die Regulierung hinkt der Technologie hinterher.",
        },
        {
          pregunta: "Warum sind Fachkräfte für die Implementierung digitaler Zwillinge knapp?",
          opciones: [
            "Weil die Universitäten keine Informatik lehren",
            "Weil ein hybrides Profil gebraucht wird, das zugleich IoT, Modellierung, KI und das Ingenieurwissen der Branche beherrscht",
            "Weil die Gehälter niedrig sind",
            "Weil es nur in den Vereinigten Staaten gelehrt wird",
          ],
          correcta: 1,
          explicacion: "Das benötigte Profil kombiniert vier verschiedene Disziplinen zugleich. Diese Kombination ist weltweit knapp, und sie auszubilden ist langwierig und teuer.",
        },
      ],
    },

    /* ================= MODUL 8 ================= */
    {
      id: 8,
      seccion: "analisis",
      titulo: "Trends und Zukunft",
      minutos: 7,
      objetivos: [
        "Die vier Haupttrends identifizieren, die die Branche bis 2030 prägen werden.",
        "Das Konzept des industriellen Metaversums und seine Beziehung zu digitalen Zwillingen verstehen.",
        "Den Einfluss der generativen KI auf die Entwicklung digitaler Zwillinge analysieren.",
      ],
      contenido: `
        <p>Im Januar 2026 war die CES in Las Vegas die Bühne, auf der die führenden Unternehmen ihre Vision für die nächsten fünf Jahre präsentierten. Diese vier Trends stützen sich auf aktuelle Belege und öffentliche Aussagen der Branchenführer.</p>

        <h2>Trend 01 · Generative KI — Von der passiven Simulation zur aktiven Intelligenz</h2>
        <p>Die Integration <strong>generativer KI</strong> verwandelt die Zwillinge von Überwachungswerkzeugen in Systeme, die schlussfolgern, vorschlagen und handeln. Mit generativer KI kann der Zwilling:</p>
        <ul>
          <li>Simulationsszenarien erzeugen, die noch nie zuvor eingetreten sind.</li>
          <li>Eigenständig Lösungen für komplexe Probleme vorschlagen.</li>
          <li>Mit dem Bedienpersonal in natürlicher Sprache kommunizieren.</li>
        </ul>
        <blockquote>"Die generative KI hat eine neue industrielle Revolution entfacht und digitale Zwillinge von passiven Simulationen in die aktive Intelligenz der physischen Welt verwandelt."<br>— Jensen Huang, CEO von NVIDIA, CES 2026</blockquote>

        <h2>Trend 02 · Industrielles Metaversum — Fabriken zu 100% digital entworfen</h2>
        <p>Die Allianz <strong>Siemens + NVIDIA</strong> will das erste industrielle KI-Betriebssystem bauen. Der <strong>Digital Twin Composer</strong> (CES 2026) kombiniert 3D-Zwillinge von Siemens Xcelerator mit den Bibliotheken von NVIDIA Omniverse und Echtzeitdaten.</p>
        <p>Das Ziel: die <strong>ersten vollständig KI-gesteuerten adaptiven Fertigungsanlagen</strong>, in denen keine physische Änderung ausgeführt wird, ohne zuvor im Zwilling validiert worden zu sein.</p>

        <h2>Trend 03 · Demokratisierung — Zugang für KMU über die Cloud</h2>
        <p>Plattformen wie <strong>AWS IoT TwinMaker, Azure Digital Twins oder Google Cloud IoT</strong> ermöglichen die Implementierung von Zwillingen ohne massive Investitionen. Das Abomodell beseitigt die große Anfangsinvestition in Hardware.</p>
        <p>In Spanien, wo <strong>99,8% der Unternehmenslandschaft KMU sind</strong>, wird die Cloud-Demokratisierung die reale Verbreitungsgeschwindigkeit im nächsten Jahrzehnt bestimmen.</p>

        <h2>Trend 04 · Gesundheit und Bildung — Größtes prognostiziertes Wachstum</h2>
        <p><strong>Gesundheit (CAGR +52%):</strong> Organ-Zwillinge, komplette Krankenhäuser und klinische Simulatoren werden die personalisierte Medizin verändern.</p>
        <p><strong>Bildung:</strong> Gefährliche Umgebungen nachzubilden — Chemieanlagen, Kraftwerke — erlaubt es den Lernenden, Fehler im Zwilling zu machen, ohne physische Konsequenzen.</p>
        <p><strong>Nachhaltigkeit:</strong> Klimaszenarien in Nachbildungen von Städten und Infrastrukturen zu simulieren ermöglicht die Planung der Energiewende.</p>

        <h2>Zusammenfassung der Trends</h2>
        <table>
          <tr><th>Trend</th><th>Horizont</th><th>Geschätzte Wirkung</th></tr>
          <tr><td>Integrierte generative KI</td><td>2025–2027</td><td>Verändert alle Branchen</td></tr>
          <tr><td>Industrielles Metaversum</td><td>2026–2028</td><td>Definiert das Fabrikdesign neu</td></tr>
          <tr><td>Cloud-Demokratisierung</td><td>2025–2030</td><td>Weitet die Verbreitung auf KMU aus</td></tr>
          <tr><td>Gesundheit und Bildung</td><td>2025–2030</td><td>Neue wachstumsstarke Märkte</td></tr>
        </table>

        <h2>Reflexionsfragen</h2>
        <ul>
          <li>Wenn Zwillinge über die Cloud zugänglich werden, welche Chancen eröffnet das für Landwirtschaft, Kultur oder Sport?</li>
          <li>Welche neuen ethischen Risiken bringt die generative KI im Vergleich zu denen aus Block 07 mit sich?</li>
          <li>Wie könnte ein digitaler Zwilling in deinem beruflichen Interessengebiet eingesetzt werden?</li>
        </ul>
      `,
      vocabulario: [
        { termino: "Generative KI", explicacion: "Künstliche Intelligenz, die neue Dinge erschafft (Text, Bilder, Simulationen), statt nur zu analysieren, was existiert." },
        { termino: "Demokratisierung", explicacion: "Dass etwas Teures und Exklusives für jeden erschwinglich wird. Die Cloud tut das mit den digitalen Zwillingen." },
        { termino: "KMU", explicacion: "Kleine und mittlere Unternehmen. In Spanien machen sie 99,8% aller Unternehmen aus." },
        { termino: "Abonnement", explicacion: "Eine monatliche Gebühr zahlen, um etwas zu nutzen, statt es ganz zu kaufen. Wie Netflix, aber für Industriesoftware." },
        { termino: "Adaptive Fabrik", explicacion: "Eine Fabrik, die sich KI-gesteuert selbst reorganisiert und jede Änderung in ihrem Zwilling validiert, bevor sie sie ausführt." },
      ],
      quiz: [
        {
          pregunta: "Laut Jensen Huang (NVIDIA) verwandelt die generative KI die digitalen Zwillinge in...",
          opciones: [
            "Billigere Simulationen",
            "Die aktive Intelligenz der physischen Welt",
            "Industrielle Videospiele",
            "Automatische Sicherungskopien",
          ],
          correcta: 1,
          explicacion: "Von 'passiven Simulationen' zu 'aktiver Intelligenz': Zwillinge, die schlussfolgern, Lösungen vorschlagen und in natürlicher Sprache kommunizieren.",
        },
        {
          pregunta: "Was kombiniert der auf der CES 2026 vorgestellte Digital Twin Composer?",
          opciones: [
            "Excel und PowerPoint",
            "3D-Zwillinge von Siemens Xcelerator + Bibliotheken von NVIDIA Omniverse + Echtzeitdaten",
            "Roboter und Drohnen",
            "3D-Drucker und Scanner",
          ],
          correcta: 1,
          explicacion: "Er ist das Herzstück der Allianz Siemens + NVIDIA für das industrielle Metaversum: fotorealistische Fabriken, die zu 100% digital validiert werden.",
        },
        {
          pregunta: "Was ermöglicht es KMU, Zugang zu digitalen Zwillingen zu bekommen?",
          opciones: [
            "Staatliche Subventionen",
            "Die Cloud-Bereitstellung mit Abopreisen, ohne große Anfangsinvestition",
            "Dass Sensoren jetzt kostenlos sind",
            "Online-Kurse",
          ],
          correcta: 1,
          explicacion: "Plattformen wie AWS IoT TwinMaker oder Azure Digital Twins machen eigene Infrastruktur überflüssig. Du zahlst nach Nutzung, wie bei einem Abonnement.",
        },
        {
          pregunta: "Warum sind digitale Zwillinge in der Bildung wertvoll?",
          opciones: [
            "Weil sie die Lehrkräfte ersetzen",
            "Weil die Lernenden in simulierten gefährlichen Umgebungen Fehler machen können, ohne physische Konsequenzen",
            "Weil sie Prüfungen automatisch abnehmen",
            "Weil sie die Studiengebühren senken",
          ],
          correcta: 1,
          explicacion: "Eine Chemieanlage oder ein Kraftwerk digital nachzubilden erlaubt Training, ohne jemanden realen Risiken auszusetzen.",
        },
      ],
    },
  ],

  GLOSARIO: [
    /* AGENTE: añadir aquí los 20 términos del glosario traducidos al alemán */
  ],
};

/* Fallback: si el glosario aún no está traducido, usar el español */
if (DATOS.gemelos.de.GLOSARIO.length === 0) DATOS.gemelos.de.GLOSARIO = null;
if (!DATOS.gemelos.de.GLOSARIO) delete DATOS.gemelos.de.GLOSARIO;
