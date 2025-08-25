// app/programas/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Programas & Cursos | Sol Milovich",
  description:
    "Explora la Carrera de Coaching, la Sesión + Ebook, el Reto 40 Días y más programas online. Modalidades en vivo y on‑demand.",
  alternates: { canonical: "/programas" },
};

export default function ProgramasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
            Programas & Cursos
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
            Elige tu próximo paso: empieza con la <strong>Sesión + Ebook</strong>, 
            súmate al <strong>Reto 40 Días</strong> o avanza con la 
            <strong> Carrera de Coaching Profesional</strong>.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.slug} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              {c.badge && (
                <span className="inline-block rounded-full border px-3 py-1 text-[11px] tracking-wide uppercase text-neutral-700 border-neutral-200">
                  {c.badge}
                </span>
              )}
              <h2 className="mt-3 text-xl font-semibold text-neutral-900">{c.title}</h2>
              <p className="mt-2 text-neutral-700">{c.summary}</p>

              <ul className="mt-3 text-sm text-neutral-600 space-y-1">
                <li><strong>Modalidad:</strong> {c.modality}</li>
                <li><strong>Duración:</strong> {c.duration}</li>
                {c.level && <li><strong>Nivel:</strong> {c.level}</li>}
                {c.price && (
                  <li>
                    <strong>Precio:</strong> {c.price}{" "}
                    {c.currency && <span className="text-neutral-500">({c.currency})</span>}
                  </li>
                )}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/programas/${c.slug}`}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
                >
                  Ver detalle
                </Link>
                {c.ctaUrl && (
                  <Link
                    href={c.ctaUrl}
                    target={c.ctaUrl.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
                  >
                    {c.slug === "carrera-coaching" ? "Aplicar / Reservar" : "Comprar / Reservar"}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
