# B_04 · Tipos de gemelos digitales

**Sección:** Tecnología · **Lectura estimada:** 6 min  
← [B_03 Arquitectura tecnológica](./03_arquitectura_tecnologica.md) · [B_05 El mercado global →](./05_mercado_global.md)

---

## Objetivos de aprendizaje

Al completar este bloque podrás:

1. Distinguir los cuatro tipos de gemelos según escala: componente, activo, sistema y proceso.
2. Diferenciar las funciones descriptiva, predictiva y prescriptiva.
3. Relacionar cada tipo con casos de uso concretos del informe.

---

## Clasificación por escala del objeto modelado

No todos los gemelos digitales son iguales. La primera clasificación es por la **escala del objeto que replican**, que va de lo más pequeño a lo más complejo:

### Tipo 01 · Gemelo de componente *(escala micro)*
Modela una pieza individual: un rodamiento, un motor eléctrico, una válvula, un sensor.

- Es el nivel más básico y el punto de partida más habitual.
- Permite monitorizar el desgaste y el rendimiento de piezas concretas.
- **Ejemplo:** el gemelo de un rodamiento en una turbina que detecta desgaste prematuro antes de que provoque un fallo mayor.

---

### Tipo 02 · Gemelo de activo *(escala meso)*
Integra varios componentes en la representación de un equipo completo: una turbina de viento, una línea de montaje, un vehículo.

- Permite monitorizar interacciones entre componentes dentro del mismo equipo.
- **Ejemplo:** gemelo de un avión completo para que la aerolínea planifique el mantenimiento de todos sus sistemas integrados.

---

### Tipo 03 · Gemelo de sistema *(escala macro)*
Replica sistemas enteros formados por múltiples activos interrelacionados: una planta de producción, una red eléctrica, un aeropuerto.

- Permite optimizar el rendimiento del sistema global, no solo de sus partes.
- **Ejemplo:** gemelo de una planta petroquímica completa para simular cambios en el proceso antes de implementarlos físicamente.

---

### Tipo 04 · Gemelo de proceso *(escala global)*
Modela flujos de trabajo completos: cadenas de suministro, procesos hospitalarios, ciudades enteras.

- Es el nivel más complejo y el que mayor inversión y madurez tecnológica requiere.
- **Ejemplo:** **Virtual Singapore** — la réplica virtual tridimensional y dinámica de toda la ciudad-Estado, usada para planificación urbana, gestión de emergencias y análisis de tráfico.

---

## Clasificación por función desempeñada

Independientemente de la escala, los gemelos digitales se diferencian también por **lo que son capaces de hacer** con los datos. Estas tres funciones son acumulativas: un gemelo prescriptivo también es predictivo y descriptivo.

| Función | Pregunta que responde | Requisitos |
|---------|----------------------|-----------|
| **Descriptivo** | *¿Qué está pasando ahora mismo?* | Sensores conectados + visualización |
| **Predictivo** | *¿Qué va a pasar si seguimos así?* | Datos históricos + modelos de IA |
| **Prescriptivo** | *¿Qué deberíamos hacer y cuándo?* | IA avanzada + sistemas de decisión |

---

## Relación entre escala y función

En la práctica, los gemelos digitales más simples (componente) suelen empezar siendo descriptivos y evolucionar hacia lo predictivo con más datos y madurez. Los gemelos de proceso (ciudades, hospitales) con mayor frecuencia incorporan directamente funciones prescriptivas, porque la complejidad del sistema hace inviable la gestión sin recomendaciones automáticas.

---

## Preguntas de reflexión

- ¿En qué tipo de gemelo clasificarías Virtual Singapore según la escala? ¿Y según la función?
- ¿Podría un gemelo de componente ser al mismo tiempo prescriptivo? ¿Qué necesitaría para lograrlo?
- ¿Por qué crees que la mayoría de las implementaciones iniciales empiezan por gemelos de componente o activo, y no directamente por gemelos de sistema o proceso?

---

## Fuentes de este bloque

- AWS. (2025). *¿Qué es la tecnología de gemelos digitales?*
- Iberdrola. (2024). *Gemelos Digitales: qué son, ventajas y aplicaciones.*
- foundtech.me. (2023). *Gemelos Digitales en la Vida Real: Ejemplos Reales.*

→ [Bibliografía completa](./10_bibliografia.md)

---

← [B_03 Arquitectura tecnológica](./03_arquitectura_tecnologica.md) · [B_05 El mercado global →](./05_mercado_global.md)
