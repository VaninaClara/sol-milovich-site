"use client";

import { useEffect, useState } from "react";

const KEY = "cookie_consent"; // "accepted" | "rejected"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = (typeof window !== "undefined" && localStorage.getItem(KEY)) || "";
    if (!current) setVisible(true);

    // 👉 escuchar evento global para reabrir
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-banner", open);
    return () => window.removeEventListener("open-cookie-banner", open);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
      document.cookie = `${KEY}=${value};path=/;max-age=${60 * 60 * 24 * 365}`;
    } finally {
      setVisible(false);
      if (value === "accepted") location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-4xl m-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg">
        <p className="text-sm text-neutral-800">
          Usamos cookies propias y de terceros para fines funcionales y analíticos.{" "}
          Consulta la <a className="underline" href="/cookies">Política de Cookies</a> y la{" "}
          <a className="underline" href="/privacidad">Privacidad</a>.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => decide("accepted")}
            className="rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Aceptar
          </button>
          <button
            onClick={() => decide("rejected")}
            className="rounded-xl px-4 py-2 text-sm font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
