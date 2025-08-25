// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide uppercase text-neutral-700 border-neutral-200">
              Invierte en ti
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-neutral-900">
              Carrera de Coaching Profesional{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
                en 3 etapas transformadoras
              </span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Descubre tu potencial y alcanza metas personales y profesionales con
              acompañamiento de coaches certificados. 100% online.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/carrera"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Ver la Carrera
              </Link>
              <Link
                href="/sesion-ebook"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              >
                Sesión + Ebook
              </Link>
            </div>

            {/* Micro prueba social */}
            <p className="mt-4 text-sm text-neutral-500">
              Online · Agenda flexible · Material de estudio incluido
            </p>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/sol-hero.png"
                alt="Sol Milovich, Coach Ontológica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARRERA: 3 ETAPAS (resumen) */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            La Carrera de Coaching: tu ruta en 3 etapas
          </h2>
          <p className="mt-2 text-neutral-600">
            Programa de 3 meses con material de estudio y acompañamiento.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {etapas.map((e) => (
              <article key={e.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">{e.title}</h3>
                <p className="mt-2 text-neutral-700">{e.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/carrera"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Conocer el programa completo
            </Link>
          </div>
        </div>
      </section>

      {/* SESIÓN + EBOOK (teaser) */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Descubre tu Potencial: Sesión de Coaching + Ebook
            </h2>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Una sesión de 60 minutos para explorar creencias limitantes, definir objetivos
              y salir con un plan de acción inicial. Con tu inversión recibes un ebook con
              herramientas prácticas para continuar el proceso.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/sesion-ebook"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Quiero mi Sesión + Ebook
              </Link>
              <Link
                href="/sobre-sol"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              >
                Conocer a Sol
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">¿Qué recibes?</h3>
            <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-2">
              <li>Ebook exclusivo con ejercicios</li>
              <li>Sesión 1:1 (60 min)</li>
              <li>Claridad de objetivos</li>
              <li>Plan de acción inicial</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* RETO 40 DÍAS */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Reto 40 Días de Acción
            </h2>
            <p className="mt-2 text-neutral-700">
              Un desafío para recuperar tu poder personal: 3 sesiones de coaching + ebook,
              diseñado para dejar atrás excusas y construir hábitos.
            </p>
            <div className="mt-6">
              <Link
                href="https://hotmart.com/es/marketplace/productos/reto-40-dias-de-accion/U90702573K"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Conocer el Reto
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Resultados esperados</h3>
            <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-2">
              <li>Más enfoque y constancia</li>
              <li>Mejor gestión emocional</li>
              <li>Acción alineada a tus metas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Transformaciones reales
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonios.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-neutral-600">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Empieza hoy tu transformación
          </h2>
          <p className="mt-3 text-white/80">
            Da el primer paso con la sesión + ebook o explora la Carrera completa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
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
    </main>
  );
}

const etapas = [
  { title: "Etapa 1: Transformación Personal", desc: "Supera límites, enfrenta miedos y alinea tu vida con lo que deseas." },
  { title: "Etapa 2: Desafío del Ser", desc: "Profundiza en tu evolución, relaciones y toma de decisiones asertivas." },
  { title: "Etapa 3: Evolución Personal y Profesional", desc: "Consolida habilidades y proyecta tu crecimiento sostenible." },
];

const testimonios = [
  { name: "Silvina Castetbon", quote: "Alcancé metas y superé miedos. Hoy me siento más segura y motivada." },
  { name: "Olga Cruces", quote: "Descubrí mi propósito y enfoqué mi energía en lo que me apasiona." },
  { name: "Milva Cappabianca", quote: "Mejoraron mi liderazgo y comunicación; impacto real en mi trabajo." },
];
