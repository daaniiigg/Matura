# B_03 · Arquitectura tecnológica

**Sección:** Tecnología · **Lectura estimada:** 10 min  
← [B_02 Historia y origen](./02_historia_origen.md) · [B_04 Tipos de gemelos digitales →](./04_tipos_gemelos_digitales.md)

---

## Objetivos de aprendizaje

Al completar este bloque podrás:

1. Describir las cinco capas de la arquitectura de un gemelo digital.
2. Identificar el rol específico de IoT, Big Data, IA, cloud y edge computing.
3. Comprender por qué cada capa es necesaria y qué ocurre si alguna falla.

---

## Las cinco capas tecnológicas

Un gemelo digital no es una tecnología única, sino la **convergencia de varias capas** que trabajan en conjunto. Cada capa depende de la anterior: si los sensores no funcionan, el gemelo no tiene datos; si no hay datos, no hay IA que analizar.

```
┌─────────────────────────────────────────────────────────┐
│  CAPA 05 · Aplicaciones                                 │
│  dashboards · alertas · predicciones · simulaciones     │
├─────────────────────────────────────────────────────────┤
│  CAPA 04 · Gemelo digital                               │
│  modelo 3D · inteligencia artificial · simulación física│
├─────────────────────────────────────────────────────────┤
│  CAPA 03 · Datos y análisis                             │
│  Big Data · almacenamiento cloud · edge computing       │
├─────────────────────────────────────────────────────────┤
│  CAPA 02 · Conectividad                                 │
│  WiFi · 5G · LoRaWAN · OPC-UA · MQTT                   │
├─────────────────────────────────────────────────────────┤
│  CAPA 01 · Sensores y mundo físico                      │
│  temperatura · vibración · presión · GPS · cámaras      │
└─────────────────────────────────────────────────────────┘
                        ↑ flujo de datos
```

---

## Las seis tecnologías habilitadoras

### 1. Internet de las Cosas (IoT)
Red de sensores y dispositivos conectados que capturan datos del mundo físico y los envían al gemelo. **Sin IoT, el gemelo no tiene "ojos".** El descenso en el coste de los chips y la expansión del 5G han sido los catalizadores principales de la adopción masiva (AWS, 2025; IMMERSIA, 2025).

**Actúa en:** Capa 01 y Capa 02.

---

### 2. Big Data
Los sensores generan volúmenes de datos que ningún sistema convencional puede gestionar. El Big Data aporta la infraestructura para ingerir, almacenar y procesar estos datos a escala industrial. Sin esta capa, los datos de los sensores serían inutilizables.

**Actúa en:** Capa 03.

---

### 3. Inteligencia Artificial y Machine Learning
Los modelos de IA transforman los datos en predicciones accionables: detectan patrones de desgaste, anticipan fallos antes de que ocurran y optimizan parámetros de forma autónoma (MRFR, 2025).

**La IA es lo que convierte un gemelo descriptivo en predictivo o prescriptivo.** Sin IA, el gemelo solo puede mostrar el estado actual — no anticipar ni recomendar.

**Actúa en:** Capa 04.

---

### 4. Computación en la nube y edge computing
La **nube** proporciona la escalabilidad computacional necesaria para procesar y almacenar grandes volúmenes de datos. El **edge computing** — procesamiento junto al sensor, sin enviar los datos a un servidor lejano — reduce la latencia cuando la respuesta en tiempo real es crítica.

> 💡 **Ejemplo:** en una línea de producción automatizada que toma decisiones cada 50 milisegundos, no se puede esperar el tiempo de ida y vuelta a un servidor en la nube. El edge computing procesa los datos localmente y solo envía resúmenes a la nube.

**Actúa en:** Capa 03 y Capa 04.

---

### 5. Modelado y simulación
Herramientas CAD, BIM y modelos físico-matemáticos (elementos finitos, dinámica de fluidos) construyen la representación digital del objeto con el nivel de fidelidad requerido. Es el "cuerpo" del gemelo: define su geometría, propiedades físicas y comportamiento esperado.

**Actúa en:** Capa 04.

---

### 6. Plataformas de integración y APIs
APIs y middleware que conectan sistemas heterogéneos: sensores de distintos fabricantes, sistemas ERP, MES, SCADA y plataformas de nube. Sin esta capa, los distintos componentes no pueden comunicarse entre sí.

La ausencia de estándares universales de interoperabilidad es uno de los principales desafíos de implementación actuales (OpenText, 2025).

**Actúa en:** Capa 02 y Capa 03.

---

## Glosario rápido de este bloque

| Término | Qué significa |
|---------|--------------|
| **IoT** | Objetos físicos conectados a internet (sensores, máquinas) |
| **Big Data** | Tecnología para gestionar datos masivos |
| **Machine Learning** | Programas que aprenden solos de los datos |
| **Edge computing** | Procesamiento junto al sensor, sin envío a servidor remoto |
| **OPC-UA** | Protocolo estándar de comunicación industrial |
| **MQTT** | Protocolo ligero de transmisión de datos IoT |

→ [Glosario completo](./09_glosario.md)

---

## Preguntas de reflexión

- ¿Qué capa crees que es más crítica en un gemelo digital de un hospital? ¿Por qué?
- ¿Cómo afecta la privacidad de datos de forma diferente a la Capa 01 (sensores físicos) y a la Capa 05 (aplicaciones)?
- Si una empresa no puede permitirse infraestructura cloud propia, ¿qué alternativas tiene hoy en día?

---

## Fuentes de este bloque

- AWS. (2025). *¿Qué es la tecnología de gemelos digitales?*
- Market Research Future (MRFR). (2025). *Digital Twin Market Size, Global Report 2025–2035.*
- OpenText. (2025). *¿Qué es un gemelo digital? Transforme ya la gestión de activos.*
- UNIR. (2025). *La revolución de los gemelos digitales: Transforma la industria con IoT e IA.*

→ [Bibliografía completa](./10_bibliografia.md) · → [Glosario de términos](./09_glosario.md)

---

← [B_02 Historia y origen](./02_historia_origen.md) · [B_04 Tipos de gemelos digitales →](./04_tipos_gemelos_digitales.md)
