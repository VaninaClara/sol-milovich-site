// app/carrera/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carrera de Coaching Profesional | Sol Milovich",
  description:
    "Programa 100% online en 3 etapas transformadoras. Acompañamiento de coaches certificados, cohortes y materiales incluidos.",
  alternates: { canonical: "/carrera" },
};

export default function CarreraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide uppercase text-neutral-700 border-neutral-200">
            Carrera de Coaching
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
            Tu ruta en 3 etapas transformadoras
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
            Programa de 3 meses, 100% online. Material de estudio incluido, sesiones interactivas
            y acompañamiento de coaches certificados. Diseñado para llevarte de la claridad a la acción.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#etapas"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Ver las etapas
            </Link>
            <Link
              href="#cohortes"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
            >
              Próximas cohortes
            </Link>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            100% online · Agenda flexible · Soporte durante el programa
          </p>
        </div>
      </section>

      {/* ETAPAS */}
      <section id="etapas" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Las 3 etapas</h2>
          <p className="mt-2 text-neutral-600">
            Cada etapa tiene objetivos claros y actividades prácticas. Abre cada bloque para ver el detalle.
          </p>

          <div className="mt-8 space-y-4">
            <Accordion
              title="Etapa 1 · Transformación Personal"
              summary="Supera límites, enfrenta miedos y alinea tu vida con lo que deseas."
              bullets={[
                "Autodiagnóstico inicial y diseño de intención.",
                "Gestión emocional y hábitos base.",
                "Detección de creencias limitantes y lenguajes internos.",
                "Acciones mínimas viables para ganar inercia.",
              ]}
            />
            <Accordion
              title="Etapa 2 · Desafío del Ser"
              summary="Profundiza en tu evolución, relaciones y toma de decisiones asertivas."
              bullets={[
                "Autoobservación del diálogo interno y coherencia.",
                "Comunicación y límites sanos (ámbitos personal y laboral).",
                "Decisiones con criterios y valores.",
                "Seguimiento de metas y feedback 1:1.",
              ]}
            />
            <Accordion
              title="Etapa 3 · Evolución Personal y Profesional"
              summary="Consolida habilidades y proyecta tu crecimiento sostenible."
              bullets={[
                "Plan a 90 días con métricas simples.",
                "Habilidades de liderazgo y colaboración.",
                "Revisión de identidad/propósito y próximos pasos.",
                "Cierre de ciclo y continuidad (mentoría/opciones avanzadas).",
              ]}
            />
          </div>

          <div className="mt-8">
            <Link
              href="/sesion-ebook"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Empezar con Sesión + Ebook
            </Link>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Qué incluye</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((f) => (
              <Card key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* COHORTES / PRECIOS / FINANCIACIÓN */}
      <section id="cohortes" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Próximas cohortes</h2>
          <p className="mt-2 text-neutral-600">
            Las fechas pueden variar según la demanda. Reserva tu plaza con antelación.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {cohortes.map((c) => (
              <div key={c.date} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">{c.title}</h3>
                <p className="mt-1 text-neutral-700">{c.date}</p>
                <p className="mt-2 text-sm text-neutral-600">{c.mode}</p>
                <p className="mt-3 text-neutral-800">
                  {c.price}{" "}
                  <span className="text-neutral-500 text-sm">({c.currency})</span>
                </p>
                <Link
                  href={c.cta}
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
                >
                  Aplicar / Reservar
                </Link>
              </div>
            ))}
          </div>

          {/* Financiación / becas */}
          <div className="mt-8 rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold text-neutral-900">Financiación y becas</h3>
            <p className="mt-2 text-neutral-700">
              Opciones de pago en cuotas y becas parciales según perfil y disponibilidad. 
              Consúltanos por WhatsApp para evaluar tu caso.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/19545130107?text=Hola%20Sol,%20quiero%20información%20sobre%20financiación%20y%20becas%20de%20la%20Carrera."
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500"
              >
                Consultar por WhatsApp
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              >
                Escribir por formulario
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <FAQ key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Lista para comenzar tu transformación?
          </h2>
          <p className="mt-3 text-white/80">
            Aplica a la próxima cohorte o empieza hoy con la Sesión + Ebook.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#cohortes"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-white text-neutral-900 hover:bg-neutral-200"
            >
              Ver cohortes
            </Link>
            <Link
              href="/sesion-ebook"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10"
            >
              Sesión + Ebook
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponentes ---------- */

function Accordion({
  title,
  summary,
  bullets,
}: {
  title: string;
  summary: string;
  bullets: string[];
}) {
  return (
    <details className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="text-neutral-700">{summary}</p>
        </div>
        <span className="shrink-0 rounded-full border border-neutral-300 p-2 text-xs text-neutral-600 group-open:rotate-45 transition">
          +
        </span>
      </summary>
      <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </details>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-700">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-neutral-200 bg-white p-5">
      <summary className="cursor-pointer list-none text-neutral-900 font-semibold">
        {q}
      </summary>
      <p className="mt-2 text-neutral-700">{a}</p>
    </details>
  );
}

/* ---------- Data ---------- */

const includes = [
  { title: "Plataforma 100% online", desc: "Estudia desde cualquier lugar, con sesiones en vivo y materiales descargables." },
  { title: "Acompañamiento profesional", desc: "Coaches certificados, apoyo grupal y seguimiento." },
  { title: "Material de estudio", desc: "Guías, ejercicios y lecturas para cada etapa." },
  { title: "Comunidad", desc: "Espacio de apoyo y accountability (Discord/Grupo privado)." },
  { title: "Certificado", desc: "Certificado de finalización al completar las 3 etapas." },
  { title: "Soporte", desc: "Resolución de dudas por email/WhatsApp durante el programa." },
];

const cohortes = [
  {
    title: "Cohorte Septiembre",
    date: "Inicio: 15 Sep (12 semanas)",
    mode: "Online en vivo · Cupos limitados",
    price: "USD 000",
    currency: "USD",
    cta: "/contacto", // o link a checkout/formulario
  },
  {
    title: "Cohorte Octubre",
    date: "Inicio: 20 Oct (12 semanas)",
    mode: "Online en vivo · Cupos limitados",
    price: "USD 000",
    currency: "USD",
    cta: "/contacto",
  },
  {
    title: "Cohorte Noviembre",
    date: "Inicio: 17 Nov (12 semanas)",
    mode: "Online en vivo · Cupos limitados",
    price: "USD 000",
    currency: "USD",
    cta: "/contacto",
  },
];

const faqs = [
  {
    q: "¿Es necesario tener conocimientos previos?",
    a: "No. Empezamos por tu situación actual y te acompañamos paso a paso.",
  },
  {
    q: "¿Cuánto tiempo debo dedicar por semana?",
    a: "Recomendamos 3–5 horas entre sesiones, lecturas y prácticas.",
  },
  {
    q: "¿Hay grabaciones si no puedo asistir en vivo?",
    a: "Sí. Tendrás acceso a las grabaciones y materiales.",
  },
  {
    q: "¿Puedo fraccionar el pago?",
    a: "Sí, ofrecemos opciones en cuotas y becas parciales según perfil.",
  },
  {
    q: "¿Qué recibo al finalizar?",
    a: "Un certificado de finalización y un plan de continuidad para tu evolución.",
  },
];
