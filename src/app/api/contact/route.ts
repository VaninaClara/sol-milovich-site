// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

// Definimos la forma del payload que esperamos
type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    // Parseamos el body como ContactPayload parcial
    const data = (await req.json()) as Partial<ContactPayload>;

    // Validación básica
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // 👉 Aquí va tu lógica real:
    // enviar mail, guardar en DB, etc.
    // Ejemplo de log en server-side:
    console.log("Nuevo contacto:", data);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    // Narrowing de error
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
