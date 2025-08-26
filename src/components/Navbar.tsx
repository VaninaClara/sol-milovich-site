"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/carrera", label: "Carrera" },
  { href: "/programas", label: "Programas" },
  { href: "/coaching-1a1", label: "Coaching 1:1" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-sol", label: "Sobre Sol" },
  { href: "/contacto", label: "Contacto" },
];

const CTA_URL = "/sesion-ebook"; // puedes apuntar a Stripe/Hotmart si prefieres

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Marca */}
        <div className="flex items-center gap-2">
          {/* Si tienes un logo, colócalo en /public/logo.svg y descomenta la img */}
          {/* <Image src="/logo.svg" alt="Sol Milovich" width={28} height={28} /> */}
          <Link href="/" className="font-extrabold tracking-tight text-neutral-900">
            Sol Milovich
          </Link>
        </div>

        {/* Links (desktop) */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href={CTA_URL}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Sesión + Ebook
          </Link>
        </div>

        {/* Botón Mobile */}
        <button
          aria-label="Abrir menú"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-neutral-300"
          onClick={() => setOpen((v) => !v)}
        >
          {/* ícono hamburguesa simple con CSS */}
          <span className="sr-only">Menú</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-neutral-800"></span>
            <span className="block h-0.5 w-5 bg-neutral-800"></span>
            <span className="block h-0.5 w-5 bg-neutral-800"></span>
          </div>
        </button>
      </nav>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 py-3 space-y-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-neutral-100 text-neutral-900"
                        : "text-neutral-700 hover:bg-neutral-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href={CTA_URL}
                className="block text-center rounded-xl px-3 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
                onClick={() => setOpen(false)}
              >
                Sesión + Ebook
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
