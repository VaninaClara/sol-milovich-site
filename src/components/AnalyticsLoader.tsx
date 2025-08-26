"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // ej: "G-XXXXXXXXXX"
const KEY = "cookie_consent";

export default function AnalyticsLoader() {
  useEffect(() => {
    if (!GA_ID) return;
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem(KEY);
    if (consent !== "accepted") return;

    // Inserta gtag.js
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      // Anonimizar IP por RGPD
      gtag('config', '${GA_ID}', { anonymize_ip: true });
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
}
