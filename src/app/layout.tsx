import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sol Milovich | Coaching Ontológico",
  description:
    "Programas de coaching profesional, sesiones 1:1 y formación. Crece con claridad, confianza y acción.",
  metadataBase: new URL("https://sol-milovich-site.vercel.app"),
  openGraph: {
    title: "Sol Milovich | Coaching Ontológico",
    description:
      "Programas de coaching profesional, sesiones 1:1 y formación.",
    url: "https://sol-milovich-site.vercel.app",
    siteName: "Sol Milovich",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased text-neutral-900">
        {/* NAVBAR (más contraste) */}
        <header className="bg-white sticky top-0 z-50 border-b border-neutral-200 shadow-sm">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-neutral-900">
              Sol Milovich
            </Link>
            <div className="hidden sm:flex gap-6 text-sm font-medium">
              <Link className="text-neutral-800 hover:text-neutral-950" href="/carrera">Carrera</Link>
              <Link className="text-neutral-800 hover:text-neutral-950" href="/sesion-ebook">Sesión + Ebook</Link>
              <Link className="text-neutral-800 hover:text-neutral-950" href="/programas">Programas</Link>
              <Link className="text-neutral-800 hover:text-neutral-950" href="/contacto">Contacto</Link>
            </div>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="bg-neutral-900 text-white mt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} Sol Milovich · Todos los derechos reservados
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
