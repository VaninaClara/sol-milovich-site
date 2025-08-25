// src/data/courses.ts

export type Course = {
  slug: string;
  title: string;
  summary: string;
  modality: "Online" | "Online en vivo" | "On‑demand" | "Híbrido";
  duration: string;       // ej: "12 semanas", "60 min", "3 horas"
  level?: "Inicial" | "Intermedio" | "Avanzado";
  price?: string;         // ej: "USD 199", "USD 49"
  currency?: "USD" | "EUR" | "ARS";
  ctaUrl?: string;        // checkout externo o ruta interna
  badge?: string;         // ej: "Programa principal", "Nuevo"
  syllabus: string[];     // bullets
  outcomes: string[];     // bullets
  instructors?: string[]; // nombres
  faqs?: { q: string; a: string }[];
};

export const courses: Course[] = [
  // ==========================
  // PROGRAMAS ACTUALES
  // ==========================
  {
    slug: "carrera-coaching",
    title: "Carrera de Coaching Profesional (3 etapas)",
    summary:
      "Programa integral en 3 etapas: claridad, hábitos y liderazgo personal. Material de estudio, sesiones en vivo y acompañamiento.",
    modality: "Online en vivo",
    duration: "12 semanas",
    level: "Intermedio",
    price: "USD 000", // TODO: define precio real
    currency: "USD",
    ctaUrl: "/contacto", // o ruta de checkout si la habilitamos
    badge: "Programa principal",
    syllabus: [
      "Etapa 1: Transformación Personal",
      "Etapa 2: Desafío del Ser",
      "Etapa 3: Evolución Personal y Profesional",
      "Material de estudio y prácticas semanales",
      "Sesiones en vivo + grabaciones",
    ],
    outcomes: [
      "Claridad de metas y plan a 90 días",
      "Herramientas conversacionales y emocionales",
      "Hábitos sostenibles y coherencia",
      "Liderazgo personal y comunicación asertiva",
    ],
    instructors: ["Sol Milovich"],
    faqs: [
      { q: "¿Necesito experiencia previa?", a: "No, te acompañamos desde tu punto de partida." },
      { q: "¿Hay cuotas o becas?", a: "Sí, contáctanos para evaluar opciones de financiación." },
    ],
  },
  {
    slug: "sesion-ebook",
    title: "Sesión 1:1 + Ebook",
    summary:
      "Una sesión de 60 minutos para desbloquear creencias y salir con un plan de acción inicial. Incluye ebook con ejercicios.",
    modality: "Online",
    duration: "60 min",
    level: "Inicial",
    price: "USD 000", // TODO
    currency: "USD",
    ctaUrl: "/sesion-ebook", // o Stripe/Hotmart
    badge: "Primer paso",
    syllabus: [
      "Exploración de creencias limitantes",
      "Definición de objetivos",
      "Plan de acción inicial",
      "Ebook con herramientas",
    ],
    outcomes: ["Claridad y dirección", "Acción inmediata", "Siguientes pasos del proceso"],
    instructors: ["Sol Milovich"],
  },
  {
    slug: "reto-40-dias",
    title: "Reto 40 Días de Acción",
    summary:
      "Desafío práctico para recuperar foco y constancia: 3 sesiones de coaching + ebook. Ideal para construir hábitos.",
    modality: "On‑demand",
    duration: "40 días",
    level: "Inicial",
    price: "USD 000", // TODO
    currency: "USD",
    ctaUrl:
      "https://hotmart.com/es/marketplace/productos/reto-40-dias-de-accion/U90702573K",
    badge: "Popular",
    syllabus: [
      "Plan de 40 días con tareas simples",
      "3 sesiones de coaching",
      "Ebook de apoyo y seguimiento",
    ],
    outcomes: ["Más enfoque y constancia", "Gestión emocional práctica", "Hábitos alineados a tus metas"],
    instructors: ["Sol Milovich"],
  },

  // ==========================
  // PLACEHOLDERS FUTUROS
  // ==========================
  {
    slug: "workshop-autoestima",
    title: "Workshop: Autoestima y Coherencia",
    summary:
      "Taller intensivo para fortalecer tu autoestima y alinear lo que piensas, sientes y haces.",
    modality: "Online en vivo",
    duration: "3 horas",
    level: "Inicial",
    price: "USD 000", // TODO
    currency: "USD",
    ctaUrl: "/contacto",
    badge: "Nuevo",
    syllabus: ["Autoobservación del diálogo interno", "Prácticas de coherencia", "Micro‑planes de 7 días"],
    outcomes: ["Más seguridad personal", "Hábitos de cuidado", "Acción alineada"],
    instructors: ["Sol Milovich"],
  },
  {
    slug: "mentoria-avanzada",
    title: "Mentoría Avanzada",
    summary:
      "Acompañamiento personalizado para profundizar tu proceso y sostener resultados en el tiempo.",
    modality: "Híbrido",
    duration: "8 semanas",
    level: "Avanzado",
    price: "USD 000", // TODO
    currency: "USD",
    ctaUrl: "/contacto",
    badge: "Cupos limitados",
    syllabus: ["Plan a medida", "Sesiones 1:1", "Feedback y accountability"],
    outcomes: ["Resultados sostenibles", "Liderazgo personal", "Comunicación efectiva"],
    instructors: ["Sol Milovich"],
    faqs: [{ q: "¿Requisitos?", a: "Ideal haber completado la Carrera o procesos previos 1:1." }],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
