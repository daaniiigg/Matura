# B_07 · Desafíos y riesgos

**Sección:** Análisis crítico · **Lectura estimada:** 9 min  
← [B_06 Aplicaciones sectoriales](./06_aplicaciones_sectoriales.md) · [B_08 Tendencias y futuro →](./08_tendencias_futuro.md)

---

## Objetivos de aprendizaje

Al completar este bloque podrás:

1. Identificar los seis desafíos principales de los gemelos digitales.
2. Comprender el concepto de superficie de ataque ampliada en ciberseguridad.
3. Analizar las implicaciones éticas y legales no resueltas.

---

## Introducción

No todo son ventajas. Los gemelos digitales conllevan retos significativos que las organizaciones deben afrontar con rigor. **Ignorarlos puede tener consecuencias físicas graves** en infraestructuras críticas, donde una decisión errónea basada en datos manipulados puede costar vidas o millones de euros.

---

## Desafío 01 · Ciberseguridad 🔴 CRÍTICO

### El problema
La interconexión física-digital convierte al gemelo en un punto crítico de vulnerabilidad. Un atacante que manipule sus datos puede provocar decisiones erróneas con consecuencias físicas reales:

- Un sistema ferroviario cuyo gemelo muestra un estado de frenos mejor del real.
- Una planta química cuyo gemelo indica una temperatura segura cuando no lo es.
- Un hospital cuyo gemelo de inventario de medicamentos muestra existencias incorrectas.

Al existir un doble digital del sistema, la **superficie de ataque se duplica**: los atacantes disponen de dos puntos de entrada potenciales — el sistema original y su réplica (Netebu, 2023; Diario La Ley, 2024).

### Medidas recomendadas
- **Arquitectura de confianza cero** (*Zero Trust*): no confiar automáticamente en ningún usuario, dispositivo o sistema, aunque esté dentro de la red.
- **Microsegmentación de redes:** aislar los distintos componentes del gemelo para limitar el alcance de una eventual brecha.
- **Autenticación multifactor** en todos los accesos.
- **Gestión rigurosa de dispositivos IoT**, que frecuentemente tienen deficiencias de seguridad de fábrica (Computerworld.es, 2022).

---

## Desafío 02 · Privacidad de datos 🟠 ALTO

### El problema
Los gemelos que modelan comportamientos humanos — flujos de pacientes, movimientos de trabajadores, hábitos en ciudades inteligentes — gestionan datos personales a gran escala.

La legislación vigente, en concreto el **RGPD en Europa**, no contempla específicamente los gemelos digitales, generando zonas grises regulatorias que requieren marcos normativos propios (Metaversos Agency, 2024).

### Recomendaciones de los expertos
- Adoptar un enfoque de **privacy by design**: minimizar el uso de datos personales desde el diseño.
- Ser transparente sobre qué datos se recogen y cómo se protegen.
- Garantizar la propiedad clara de los modelos generados y los datos usados (Computerworld.es, 2022).

---

## Desafío 03 · Interoperabilidad ⚪ MODERADO

### El problema
Muchas organizaciones operan con sistemas y maquinaria de distintos fabricantes con **protocolos propietarios incompatibles**. Conectarlos todos en un gemelo coherente requiere costosos desarrollos de integración a medida.

La ausencia de estándares universales — aunque protocolos como OPC-UA están avanzando — es un cuello de botella estructural que encarece y ralentiza las implementaciones (OpenText, 2025).

### Implicación práctica
A medida que los gemelos crecen en complejidad y escala, las organizaciones enfrentan retos crecientes en el diseño de arquitecturas escalables capaces de manejar volúmenes de datos y demandas computacionales cada vez mayores.

---

## Desafío 04 · Coste e inversión inicial ⚪ MODERADO

### El problema
La inversión inicial en sensores, infraestructura de datos, plataformas de modelado y talento especializado es **elevada**. Históricamente ha limitado la adopción a grandes empresas con recursos suficientes.

En 2025, los modelos de despliegue en la nube y las estructuras de precios por suscripción están comenzando a democratizar el acceso para las pymes, pero la barrera de entrada sigue siendo significativa (MarketsandMarkets, 2025; Precedence Research, 2025).

---

## Desafío 05 · Escasez de talento ⚪ MODERADO

### El problema
Implementar gemelos digitales exige profesionales que dominen simultáneamente:

- **IoT** (sistemas embebidos, sensores, comunicaciones industriales)
- **Modelado de sistemas** (CAD, BIM, simulación física)
- **Inteligencia artificial** (machine learning, análisis de datos)
- **Ingeniería de dominio** (manufactura, salud, energía, según el sector)

Este perfil híbrido **escasea globalmente** y su formación es costosa y lenta. La brecha de talento es uno de los frenos más citados por las organizaciones que consideran adoptar la tecnología.

---

## Desafío 06 · Propiedad intelectual y ética ⚪ EMERGENTE

### Las preguntas sin respuesta legal clara
- ¿A quién pertenecen los datos generados por el gemelo — al fabricante del activo, al operador o a la plataforma?
- ¿Qué ocurre cuando un gemelo digital de una persona comete un error en una comunicación externa?
- ¿Quién es responsable si el gemelo toma una decisión autónoma que resulta dañina?

Estas preguntas carecen de respuesta legal clara en la mayoría de ordenamientos jurídicos (Diario La Ley, 2024; El Ecosistema Startup, 2026). La regulación va significativamente por detrás de la tecnología.

---

## Resumen de desafíos

| Desafío | Nivel | Urgencia de actuación |
|---------|-------|-----------------------|
| Ciberseguridad | 🔴 Crítico | Inmediata · afecta a infraestructuras en producción |
| Privacidad de datos | 🟠 Alto | Urgente · afecta al RGPD y normativa existente |
| Interoperabilidad | ⚪ Moderado | Media · requiere estándares de sector |
| Coste e inversión | ⚪ Moderado | Media · se reduce con cloud |
| Escasez de talento | ⚪ Moderado | Media · requiere formación a largo plazo |
| Propiedad y ética | ⚪ Emergente | Futura · requiere marcos regulatorios nuevos |

---

## Preguntas de reflexión

- ¿Crees que el riesgo de ciberseguridad es mayor en un gemelo de una central nuclear o en el de un hospital con gemelos de sus pacientes? ¿Por qué?
- ¿Debería el RGPD europeo actualizarse para contemplar específicamente los gemelos digitales, o bastan las normas generales de protección de datos?
- Como futuro profesional, ¿cómo afrontarías el desafío de la escasez de talento si fueras a implementar un gemelo digital en tu empresa?

---

## Fuentes de este bloque

- Computerworld.es. (2022, diciembre 7). *Desafíos y oportunidades de ciberseguridad de los gemelos digitales.*
- Diario La Ley. (2024, octubre 25). *Retos legales en los gemelos digitales: patentes, ciberseguridad y confidencialidad.*
- El Ecosistema Startup. (2026, mayo 25). *Gemelos digitales IA: CEOs aumentan productividad 30% en 2026.*
- MarketsandMarkets. (2025). *Digital Twin Market Size, Share, Latest Trends and Growth Analysis, 2025–2030.*
- Metaversos Agency. (2024, enero 19). *Ética y privacidad en el uso de datos en gemelos digitales.*
- Netebu. (2023). *Desafíos de ciberseguridad en gemelos digitales: amenazas y salvaguardas.*
- OpenText. (2025). *¿Qué es un gemelo digital? Transforme ya la gestión de activos.*
- Precedence Research. (2025). *Digital Twin Market Size to Hit USD 572.03 Billion by 2035.*

→ [Bibliografía completa](./10_bibliografia.md) · → [Glosario](./09_glosario.md)

---

← [B_06 Aplicaciones sectoriales](./06_aplicaciones_sectoriales.md) · [B_08 Tendencias y futuro →](./08_tendencias_futuro.md)
