import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coaching 1:1 | Sol Milovich",
  description:
    "Sesiones personalizadas de coaching ontológico con Sol Milovich. Un espacio seguro para trabajar tus objetivos, desbloquear creencias y diseñar un plan de acción.",
  alternates: { canonical: "/coaching" },
};

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900">
              Coaching 1:1
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Un espacio seguro, personalizado y confidencial para trabajar tu
              transformación personal y profesional. En estas sesiones uno a uno
              con <strong>Sol Milovich</strong>, explorarás tus creencias
              limitantes, ganarás claridad y diseñarás acciones concretas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Agenda tu sesión
              </Link>
              <Link
                href="https://wa.me/19545130107?text=Hola%20Sol,%20quiero%20información%20sobre%20Coaching%201:1"
                target="_blank"
                className="rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/sol-sesion.jpg"
                alt="Sol Milovich - Coaching 1:1"
                width={500}
                height={700}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}