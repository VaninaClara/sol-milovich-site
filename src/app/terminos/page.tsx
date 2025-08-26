import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Sol Milovich",
};

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      <p>
        El presente sitio web (solmilovich.com) es gestionado por Sol Milovich. 
        El acceso y uso del sitio implican la aceptación de estos términos.
      </p>
      <h2 className="text-xl font-semibold mt-6">Uso del sitio</h2>
      <p>
        Los usuarios se comprometen a utilizar la web de manera lícita, sin 
        dañar los derechos de Sol Milovich ni de terceros.
      </p>
      <h2 className="text-xl font-semibold mt-6">Propiedad intelectual</h2>
      <p>
        Todos los contenidos (textos, imágenes, diseños, logotipos) son 
        propiedad de Sol Milovich, salvo indicación en contrario.
      </p>
      <h2 className="text-xl font-semibold mt-6">Limitación de responsabilidad</h2>
      <p>
        No nos hacemos responsables de los daños que puedan derivarse del uso 
        de la información contenida en el sitio.
      </p>
    </main>
  );
}
