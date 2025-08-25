// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<ContactPayload>;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // TODO: aquí procesas el mensaje (enviar email, guardar en DB, etc.)

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

