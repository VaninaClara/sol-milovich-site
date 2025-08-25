import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://sol-milovich-site.vercel.app";
const OG = `${SITE}/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Sol Milovich | Coaching Ontológico",
  description:
    "Programas de coaching profesional, sesiones 1:1 y formación. Crece con claridad, confianza y acción.",
  openGraph: {
    title: "Sol Milovich | Coaching Ontológico",
    description:
      "Programas de coaching profesional, sesiones 1:1 y formación.",
    url: SITE,
    siteName: "Sol Milovich",
    images: [{ url: OG, width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sol Milovich | Coaching Ontológico",
    description:
      "Programas de coaching profesional, sesiones 1:1 y formación.",
    images: [OG],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased text-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
