// components/ContactForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  honey: string; // anti-spam
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  topic: "Consulta general",
  message: "",
  honey: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Por favor, indícanos tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Email no válido.";
    if (form.message.trim().length < 10) return "Cuéntanos un poco más (mínimo 10 caracteres).";
    if (form.honey) return "Spam detectado.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setResult({ ok: false, msg: error });
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error al enviar.");
      setResult({ ok: true, msg: "¡Gracias! Te responderemos pronto." });
      setForm(initialState);
    } catch (err) {
      setResult({ ok: false, msg: (err as Error).message || "No se pudo enviar. Intenta otra vez." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5" id="form">
      {/* Honey (oculto) */}
      <input
        type="text"
        name="honey"
        value={form.honey}
        onChange={onChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700">Nombre *</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700">Teléfono (opcional)</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400"
            placeholder="+1 954 000 0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700">Tema</label>
          <select
            name="topic"
            value={form.topic}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <option>Consulta general</option>
            <option>Carrera de Coaching</option>
            <option>Sesión 1:1</option>
            <option>Programas & Cursos</option>
            <option>Prensa</option>
            <option>Otros</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700">Mensaje *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          required
          rows={5}
          className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
        <Link
          href="https://wa.me/19545130107?text=Hola%20Sol,%20quisiera%20hacer%20una%20consulta"
          target="_blank"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
        >
          WhatsApp
        </Link>
      </div>

      {result && (
        <p className={`mt-2 text-sm ${result.ok ? "text-emerald-700" : "text-rose-700"}`}>
          {result.msg}
        </p>
      )}
    </form>
  );
}
