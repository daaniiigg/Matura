# B_01 · ¿Qué es un gemelo digital?

**Sección:** Fundamentos · **Lectura estimada:** 8 min  
← [Índice](./00_indice.md) · [B_02 Historia y origen →](./02_historia_origen.md)

---

## Objetivos de aprendizaje

Al completar este bloque podrás:

1. Definir con precisión qué es un gemelo digital y qué lo diferencia de una simulación estática.
2. Comprender el concepto de conexión bidireccional entre el mundo físico y el espacio digital.
3. Identificar las tres funciones principales: descriptiva, predictiva y prescriptiva.

---

## Definición formal

> **Un gemelo digital** (*digital twin*) es una réplica virtual dinámica de un objeto, sistema o proceso físico real, alimentada en tiempo real por datos de sensores y dispositivos conectados, que permite simular, analizar y optimizar el comportamiento de su contraparte física.
>
> *Fuente: AWS (2025) · OpenText (2025) · UNIR (2025)*

La clave está en tres palabras: **réplica virtual dinámica**. No es una fotografía estática del objeto, sino una representación que cambia en tiempo real a medida que el objeto físico cambia. Esto la diferencia fundamentalmente de otros tipos de modelos digitales.

> 💡 **Analogía para entenderlo:** piensa en el GPS de navegación de un coche. No solo muestra el mapa estático — recibe datos del tráfico en tiempo real, recalcula rutas y anticipa lo que pasará. Un gemelo digital hace exactamente eso, pero para cualquier sistema físico: una turbina, un hospital o un puente.

---

## La conexión bidireccional

El elemento más importante — y más frecuentemente malentendido — es la **bidireccionalidad**. El gemelo digital no solo recibe datos del mundo físico: también puede devolver instrucciones, alertas o recomendaciones al sistema físico.

```
MUNDO FÍSICO  →  datos en tiempo real (temperatura, vibración, posición...)  →  GEMELO DIGITAL
GEMELO DIGITAL  →  instrucciones, alertas y recomendaciones optimizadas  →  MUNDO FÍSICO
```

Es un espejo inteligente que no solo refleja: también piensa y actúa.

> ℹ️ **Diferencia clave:** un modelo CAD (diseño asistido por ordenador) es una fotografía del objeto. Un gemelo digital es un vídeo en directo. La diferencia no es cosmética — es estructural.

---

## Las tres funciones principales

### Función 01 · Descriptivo
Muestra el estado actual del objeto físico en tiempo real. Responde a: *¿qué está pasando ahora mismo?*

Es el nivel más básico y el más común en implementaciones iniciales. No requiere modelos de IA avanzados — basta con conectar los sensores y visualizar los datos.

### Función 02 · Predictivo
Incorpora modelos analíticos y de machine learning para anticipar comportamientos futuros. Responde a: *¿qué va a pasar si seguimos así?*

Requiere suficientes datos históricos para entrenar los modelos. Es el nivel donde la inversión inicial se recupera más claramente — detectar un fallo antes de que ocurra tiene un valor económico directo y cuantificable.

### Función 03 · Prescriptivo
El nivel más avanzado: no solo predice, sino que recomienda acciones concretas y optimizadas. Responde a: *¿qué deberíamos hacer y cuándo?*

Requiere integración con sistemas de decisión y, en algunos casos, de actuación automática. Es el nivel donde el gemelo digital deja de ser una herramienta de análisis para convertirse en un sistema de gestión autónomo.

---

## Preguntas de reflexión

- ¿En qué se diferencia un gemelo digital de una simulación convencional de ingeniería?
- ¿Puede un gemelo digital ser útil sin la función prescriptiva? ¿Para qué casos bastaría con la función descriptiva?
- ¿Qué tipo de datos necesitaría recoger para construir un gemelo digital de una biblioteca universitaria?

---

## Fuentes de este bloque

- AWS. (2025). *¿Qué es la tecnología de gemelos digitales?*
- OpenText. (2025). *¿Qué es un gemelo digital? Transforme ya la gestión de activos.*
- UNIR. (2025). *La revolución de los gemelos digitales: Transforma la industria con IoT e IA.*

→ [Bibliografía completa](./10_bibliografia.md) · → [Glosario de términos](./09_glosario.md)

---

← [Índice](./00_indice.md) · [B_02 Historia y origen →](./02_historia_origen.md)
