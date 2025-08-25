// app/sobre-sol/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Sol Milovich | Coach Ontológica, Formadora y Autora",
  description:
    "Conoce a Sol Milovich: coach ontológica profesional, formadora y autora de 'Las Llaves del Coaching'. Programas online, retos y sesiones 1:1.",
  alternates: { canonical: "/sobre-sol" },
  openGraph: {
    title: "Sobre Sol Milovich",
    description:
      "Coach ontológica, formadora y autora. Acompaño procesos de transformación personal y profesional.",
    images: ["/og-sobre-sol.jpg"], // opcional
    url: "https://solmilovich.com/sobre-sol",
    type: "profile",
  },
};

export default function SobreSolPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO BIO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide uppercase text-neutral-700 border-neutral-200">
              Sobre Sol
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
              Sol Milovich
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Coach Ontológica profesional, formadora y autora de{" "}
              <em>“Las Llaves del Coaching”</em>. Acompaño procesos de
              transformación personal y profesional con un enfoque humano,
              práctico y ético. Mi misión es ayudarte a clarificar tus metas,
              superar creencias limitantes y accionar con coherencia.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/sesion-ebook"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Sesión + Ebook
              </Link>
              <Link
                href="/carrera"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              >
                Ver la Carrera
              </Link>
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Online · Agenda flexible · Comunidad de aprendizaje
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/sol-hero.png"
                alt="Sol Milovich"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES / ESPECIALIZACIONES */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Certificaciones y Especializaciones
          </h2>
          <p className="mt-2 text-neutral-600">
            Formación académica y prácticas basadas en evidencia para acompañarte con excelencia.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c) => (
              <Card key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* VALORES / ENFOQUE */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Mi enfoque
            </h2>
            <p className="mt-2 text-neutral-700">
              Coherencia, claridad y acción. Integro herramientas conversacionales, emocionales y
              corporales para que puedas avanzar con sentido y resultados sostenibles.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {valores.map((v) => (
              <Card key={v.title} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* LIBRO / PODCAST / REDES (destacados) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Autoría y presencia
          </h2>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-8 grid gap-6 md:grid-cols-3">
          <InfoBox
            title="Libro: Las Llaves del Coaching"
            desc="Reflexiones y herramientas para una vida más plena."
            ctaLabel="Ver en Amazon"
            href="https://amzn.to/3V1Lueq"
          />
          <InfoBox
            title="Podcast: Las Llaves del Coaching"
            desc="Conversaciones breves para tu día a día."
            ctaLabel="Escuchar"
            href="https://open.spotify.com/show/6DuiPTx53HjbqnqT4CU7Lp"
          />
          <InfoBox
            title="Redes y comunidad"
            desc="Súmate a la comunidad y recibe tips y novedades."
            ctaLabel="Linktree"
            href="https://linktr.ee/solmilovich"
          />
        </div>
      </section>

      {/* TIMELINE BREVE */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Un poco de mi recorrido
          </h2>
          <div className="mt-8 space-y-6">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm text-neutral-500">{t.year}</div>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900">{t.title}</h3>
                <p className="mt-1 text-neutral-700">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Te acompaño en tu próximo paso?
          </h2>
          <p className="mt-3 text-white/80">
            Empieza con una sesión + ebook o explora la Carrera completa.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sesion-ebook"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-white text-neutral-900 hover:bg-neutral-200"
            >
              Sesión + Ebook
            </Link>
            <Link
              href="/carrera"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10"
            >
              Ver la Carrera
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Person */}
      <script
        type="application/ld+json"
        
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdPerson, null, 2),
        }}
      />
    </main>
  );
}

/* ---------- Subcomponentes ---------- */

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-700">{desc}</p>
    </div>
  );
}

function InfoBox({
  title,
  desc,
  href,
  ctaLabel,
}: {
  title: string;
  desc: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-700">{desc}</p>
      <div className="mt-4">
        <Link
          href={href}
          target="_blank"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

const certs = [
  { title: "Coach Ontológica profesional", desc: "Formación sólida en competencias conversacionales, emocionales y corporales." },
  { title: "Formadora de coaches", desc: "Diseño curricular en 3 etapas y acompañamiento a cohortes internacionales." },
  { title: "Especializaciones", desc: "Integración de herramientas de autoobservación, hábitos y liderazgo personal." },
  { title: "Experiencia en 1:1 y grupos", desc: "Sesiones individuales, programas online y retos de acción." },
  { title: "Ética y confidencialidad", desc: "Marco de trabajo basado en respeto, cuidado y acuerdos claros." },
  { title: "Autoría y divulgación", desc: "Libro, podcast y contenidos educativos para una práctica accesible." },
];

const valores = [
  { title: "Coherencia", desc: "Alinear lo que piensas, sientes y haces para accionar con sentido." },
  { title: "Claridad", desc: "Definir objetivos reales, simples y medibles." },
  { title: "Acción", desc: "Pequeños pasos sostenidos que construyen resultados." },
  { title: "Cuidado", desc: "Acompañamiento humano, escucha activa y acuerdos." },
];

const timeline = [
  { year: "2018–2020", title: "Inicio de la práctica profesional", desc: "Primeros procesos 1:1 y grupos reducidos; base metodológica y ética." },
  { year: "2021–2023", title: "Formación y programas online", desc: "Cohortes internacionales y metodología en 3 etapas." },
  { year: "2024–2025", title: "Autoría y expansión", desc: "Libro, podcast y crecimiento de la escuela y comunidad." },
];

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sol Milovich",
  jobTitle: "Coach Ontológica",
  description:
    "Coach ontológica profesional, formadora y autora de 'Las Llaves del Coaching'.",
  url: "https://solmilovich.com/sobre-sol",
  sameAs: [
    "https://www.instagram.com/solmilovich",
    "https://www.facebook.com/solmilovichcoach",
    "https://twitter.com/solmilovich",
    "https://www.youtube.com/channel/UCoc_dG9fRnQcILSsTThd9MA",
    "https://open.spotify.com/show/6DuiPTx53HjbqnqT4CU7Lp",
  ],
};
