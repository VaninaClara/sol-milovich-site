// app/contacto/page.tsx

// src/app/contacto/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Sol Milovich",
  description:
    "Escríbenos para sesiones, carrera de coaching, programas o prensa. También puedes agendar por Calendly o WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide uppercase text-neutral-700 border-neutral-200">
            Contacto
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
            Hablemos
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
            Escríbenos para consultas sobre la <strong>Carrera</strong>, <strong>Sesiones 1:1</strong>,
            <strong> Programas</strong> o <strong>prensa</strong>. También puedes agendar una llamada rápida.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#form"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Enviar consulta
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
            >
              Agendar por Calendly
            </a>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-12 sm:py-16 bg-white" id="form">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Formulario</h2>
            <p className="mt-2 text-neutral-600">Te responderemos dentro de las próximas 24–48 horas hábiles.</p>
            <ContactForm />
          </div>

          {/* Info de contacto */}
          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Datos de contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>Fort Lauderdale, Florida, EE.UU.</li>
              <li><a href="tel:+19545130107" className="hover:underline">+1 (954) 513-0107</a></li>
              <li><a href="mailto:formacionsolmilovich@gmail.com" className="hover:underline">formacionsolmilovich@gmail.com</a></li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-neutral-600">Redes</p>
              <div className="mt-2 flex items-center gap-3 text-sm">
                <Link href="https://www.instagram.com/solmilovich" target="_blank" className="text-neutral-600 hover:text-neutral-900">IG</Link>
                <Link href="https://www.facebook.com/solmilovichcoach" target="_blank" className="text-neutral-600 hover:text-neutral-900">FB</Link>
                <Link href="https://twitter.com/solmilovich" target="_blank" className="text-neutral-600 hover:text-neutral-900">X</Link>
                <Link href="https://www.youtube.com/channel/UCoc_dG9fRnQcILSsTThd9MA" target="_blank" className="text-neutral-600 hover:text-neutral-900">YT</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CALENDLY */}
      <section id="agenda" className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Agendar una llamada</h2>
          <p className="mt-2 text-neutral-600">Elige un horario disponible directamente en el calendario.</p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200">
            <iframe
              title="Calendly"
              src="https://calendly.com/tu-usuario/15min"
              className="w-full"
              style={{ height: 700 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
