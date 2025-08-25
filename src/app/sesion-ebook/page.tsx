// app/sesion-ebook/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CTA_URL =
  "https://go.hotmart.com/U90702573K"; // TODO: cambia por enlace real (Stripe/Hotmart/Form)
const WHATSAPP_URL =
  "https://wa.me/19545130107?text=Hola%20Sol,%20quiero%20reservar%20la%20Sesión%20+%20Ebook";

export const metadata: Metadata = {
  title: "Sesión de Coaching Ontológico + Ebook | Sol Milovich",
  description:
    "Una sesión de 60 minutos + ebook exclusivo para iniciar tu proceso de transformación personal con Coaching Ontológico.",
  openGraph: {
    title: "Sesión de Coaching Ontológico + Ebook | Sol Milovich",
    description:
      "Una sesión de 60 minutos + ebook exclusivo para iniciar tu proceso de transformación personal.",
    images: ["/og-sesion-ebook.jpg"], // (opcional) crea esta imagen en /public
    url: "https://solmilovich.com/sesion-ebook",
    type: "website",
  },
  alternates: {
    canonical: "/sesion-ebook",
  },
};

export default function SesionEbookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide uppercase text-neutral-700 border-neutral-200">
              Sesión + Ebook
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
              Descubre tu Potencial:{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
                Sesión de Coaching Ontológico
              </span>{" "}
              + Ebook Gratis
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              El primer paso hacia una vida más plena y auténtica comienza aquí.
              Una sesión de 60 minutos para ganar claridad, destrabar creencias
              y salir con un plan de acción inicial.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={CTA_URL}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                Quiero mi Sesión + Ebook
              </Link>
              <Link
                href="#que-recibes"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              >
                Ver qué recibes
              </Link>
            </div>

            {/* Micro social proof */}
            <p className="mt-4 text-sm text-neutral-500">
              100% online · Agenda flexible · Acompañamiento profesional
            </p>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/sol-hero.png"
                alt="Sol Milovich, Coach Ontológica"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ RECIBES */}
      <section id="que-recibes" className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            ¿Qué recibes con tu inversión?
          </h2>
          <p className="mt-2 text-neutral-600">
            Todo lo necesario para iniciar tu proceso con foco y acompañamiento.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* TEXTO INSPIRADOR (tu copy) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-neutral-200">
            <p className="text-neutral-800 leading-relaxed">
              Te ofrezco un e-book que te proporcionará herramientas y
              perspectivas para tu viaje de autodescubrimiento y crecimiento
              personal incluso después de nuestra sesión juntos. ¿Sesión? ¡Sí!
              Con la inversión del e-book, te regalo una sesión de Coaching de
              1 (una) hora, donde tendrás la oportunidad de sumergirte en el
              poderoso mundo del Coaching Ontológico. Juntos exploraremos
              algunas de tus creencias limitantes, identificaremos tus objetivos
              y comenzaremos a diseñar un plan de acción inicial para que puedas
              avanzar hacia la vida que deseas vivir.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Aunque una sola sesión puede ofrecer valiosas revelaciones y
              claridad, es importante destacar que el Coaching Ontológico es un
              proceso continuo que puede requerir varias sesiones para lograr un
              cambio significativo y duradero. Considera esta sesión como el
              primer paso emocionante hacia una vida más plena y auténtica, y
              estoy aquí para acompañarte en cada paso del camino.
            </p>
            <footer className="mt-4 text-sm text-neutral-500">
              — Sol Milovich
            </footer>
          </blockquote>
          <div className="mt-6">
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Lo que dicen quienes ya comenzaron
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* MINI BIO + WHATSAPP */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Sobre Sol Milovich
            </h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Coach Ontológica profesional, formadora y autora de “Las Llaves
              del Coaching”. Acompaña procesos de transformación personal y
              profesional con un enfoque práctico, humano y ético. Ofrece
              programas online, retos de acción y sesiones 1:1.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h4 className="font-semibold text-neutral-900">
              ¿Prefieres consultar por WhatsApp?
            </h4>
            <p className="mt-2 text-neutral-600 text-sm">
              Si tienes dudas sobre la sesión o métodos de pago, escríbenos.
            </p>
            <div className="mt-4">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500"
              >
                Hablar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            No pospongas tu cambio. Hoy es el mejor momento para invertir en ti.
          </h2>
          <p className="mt-3 text-white/80">
            Reserva tu sesión y recibe el ebook exclusivo para comenzar.
          </p>
          <div className="mt-6">
            <CTAButtons dark />
          </div>
        </div>
      </section>

      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOffer, null, 2),
        }}
      />
    </main>
  );
}

/* ------------ Subcomponentes & data ------------- */

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-700">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <figure className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <blockquote className="text-neutral-800">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-neutral-600">— {name}</figcaption>
    </figure>
  );
}

function CTAButtons({ dark = false }: { dark?: boolean }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold focus:outline-none focus-visible:ring-2";
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link
        href={CTA_URL}
        className={`${base} ${
          dark
            ? "bg-white text-neutral-900 hover:bg-neutral-200 focus-visible:ring-white/50"
            : "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-400"
        }`}
      >
        Quiero mi Sesión + Ebook
      </Link>
      <Link
        href="/sobre-sol"
        className={`${base} ${
          dark
            ? "border border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/50"
            : "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400"
        }`}
      >
        Conocer a Sol
      </Link>
    </div>
  );
}

const features = [
  {
    title: "Ebook exclusivo",
    description:
      "Herramientas prácticas y ejercicios para continuar tu proceso luego de la sesión.",
  },
  {
    title: "Sesión 1:1 (60 min)",
    description:
      "Espacio de claridad para abordar tus retos actuales con Coaching Ontológico.",
  },
  {
    title: "Creencias limitantes",
    description:
      "Identificaremos bloqueos clave y alternativas para desbloquear tu avance.",
  },
  {
    title: "Objetivos claros",
    description:
      "Definirás objetivos personales/profesionales y métricas sencillas de progreso.",
  },
  {
    title: "Plan de acción",
    description:
      "Saldrás con un primer plan concreto para empezar a moverte hoy mismo.",
  },
  {
    title: "Proceso continuo",
    description:
      "Esta sesión es el primer paso; te orientaré sobre las siguientes etapas.",
  },
];

const testimonials = [
  {
    name: "Silvina Castetbon",
    quote:
      "Logré una transformación personal que me impulsó a alcanzar mis metas y superar miedos. Hoy me siento más segura y motivada.",
  },
  {
    name: "Olga Cruces",
    quote:
      "Descubrí mi propósito y enfoqué mi energía en lo que me apasiona. Me siento más conectada conmigo y con mi entorno.",
  },
  {
    name: "Milva Cappabianca",
    quote:
      "Desarrollé habilidades de liderazgo y comunicación que impactaron mi trabajo y relaciones. Experiencia valiosa y duradera.",
  },
];

const jsonLdOffer = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Sesión de Coaching Ontológico + Ebook",
  description:
    "Sesión individual de 60 minutos + ebook exclusivo con herramientas de autodescubrimiento.",
  url: "https://solmilovich.com/sesion-ebook",
  priceCurrency: "USD",
  // TODO: cuando definas el precio real, reemplázalo (ej: "49.00"):
  price: "0.00",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Person",
    name: "Sol Milovich",
  },
};
