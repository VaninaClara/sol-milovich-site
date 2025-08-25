// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Cambia este email por el destino real:
const TO = process.env.CONTACT_TO_EMAIL || "formacionsolmilovich@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "noreply@tudominio.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, topic, message, honey } = body || {};

    // Validación rápida
    if (honey) return NextResponse.json({ ok: true }, { status: 200 });
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obligatorios faltantes." }, { status: 400 });
    }

    const text = `
Nuevo mensaje desde el formulario de contacto:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "-"}
Tema: ${topic || "-"}

Mensaje:
${message}
    `.trim();

    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Contacto Web - ${topic || "Consulta"}`,
      replyTo: email,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
