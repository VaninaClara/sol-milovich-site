import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Sol Milovich",
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p>
        De acuerdo con el Reglamento (UE) 2016/679 (RGPD) informamos sobre el 
        tratamiento de los datos personales recabados en este sitio.
      </p>
      <h2 className="text-xl font-semibold mt-6">Responsable</h2>
      <p>Sol Milovich – contacto: formacionsolmilovich@gmail.com</p>
      <h2 className="text-xl font-semibold mt-6">Finalidad</h2>
      <p>
        Los datos proporcionados a través de formularios de contacto se usarán 
        exclusivamente para responder consultas y enviar información relacionada 
        con nuestros servicios.
      </p>
      <h2 className="text-xl font-semibold mt-6">Legitimación</h2>
      <p>Consentimiento expreso de la persona interesada.</p>
      <h2 className="text-xl font-semibold mt-6">Derechos</h2>
      <p>
        Puede ejercer sus derechos de acceso, rectificación, supresión, 
        limitación y oposición escribiendo al correo electrónico indicado arriba.
      </p>
      <h2 className="text-xl font-semibold mt-6">Conservación</h2>
      <p>
        Los datos se conservarán mientras exista relación con el usuario o 
        hasta que éste solicite su supresión.
      </p>
    </main>
  );
}
