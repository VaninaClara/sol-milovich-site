import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Sol Milovich",
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
      <p>
        Utilizamos cookies propias y de terceros para fines analíticos y de 
        personalización. Al continuar navegando en este sitio, aceptas su uso.
      </p>
      <h2 className="text-xl font-semibold mt-6">¿Qué son las cookies?</h2>
      <p>
        Son pequeños archivos que se almacenan en tu dispositivo y permiten 
        recordar información sobre tu navegación.
      </p>
      <h2 className="text-xl font-semibold mt-6">Tipos de cookies utilizadas</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Cookies técnicas (necesarias para el funcionamiento del sitio).</li>
        <li>Cookies de análisis (ej. Google Analytics).</li>
        <li>Cookies de personalización (preferencias de idioma, etc.).</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Gestión de cookies</h2>
      <p>
        Puedes configurar tu navegador para aceptar o rechazar cookies. 
        Ten en cuenta que desactivar cookies puede afectar al funcionamiento 
        correcto del sitio.
      </p>
    </main>
  );
}
