/* ============================================================
   BIOLOGÍA CELULAR — Contenido del curso.
   Rellena los módulos siguiendo el mismo formato que data.js:
   cada módulo necesita: id, seccion, titulo, minutos,
   objetivos[], vocabulario[], contenido (HTML), quiz[]
   ============================================================ */

const SECCIONES_CELULAS = [
  { id: "intro",      nombre: "🔬 Introducción a la célula" },
  { id: "estructura", nombre: "🧬 Estructura celular" },
  { id: "funciones",  nombre: "⚡ Funciones y procesos" },
  { id: "tipos",      nombre: "🌿 Tipos y diversidad" },
];

const MODULOS_CELULAS = [
  /* ============ MÓDULO 1 ============
  {
    id: 1,
    seccion: "intro",
    titulo: "¿Qué es una célula?",
    minutos: 7,
    objetivos: [
      "Definir célula y comprender por qué es la unidad básica de la vida.",
      "Distinguir entre organismos unicelulares y pluricelulares.",
      "Conocer la teoría celular y sus tres postulados principales.",
    ],
    vocabulario: [
      { termino: "Célula", explicacion: "Unidad estructural y funcional mínima de todo ser vivo." },
      { termino: "Teoría celular", explicacion: "Principio que establece que todos los seres vivos están formados por células." },
    ],
    contenido: `
      <h2>La unidad de la vida</h2>
      <p>Escribe aquí el contenido del módulo en HTML...</p>
    `,
    quiz: [
      {
        pregunta: "¿Cuál es la unidad básica de la vida?",
        opciones: ["La célula", "El átomo", "La molécula", "El tejido"],
        correcta: 0,
        explicacion: "La célula es la unidad estructural y funcional mínima de todos los seres vivos.",
      },
    ],
  },
  ============ FIN MÓDULO 1 ============ */
];

const GLOSARIO_CELULAS = [
  /* Ejemplo:
  { termino: "Célula", definicion: "Unidad estructural y funcional básica de los seres vivos." },
  { termino: "Membrana plasmática", definicion: "Capa que rodea la célula y controla qué entra y qué sale." },
  */
];

DATOS.celulas = {
  es: {
    SECCIONES: SECCIONES_CELULAS,
    MODULOS: MODULOS_CELULAS,
    GLOSARIO: GLOSARIO_CELULAS,
  },
};
