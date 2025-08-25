import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Marca */}
        <div>
          <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">
            Sol Milovich
          </h3>
          <p className="mt-3 text-sm text-neutral-600">
            Coaching ontológico, formación online y recursos para tu
            transformación personal y profesional.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Navegación</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/carrera" className="text-neutral-600 hover:text-neutral-900">Carrera de Coaching</Link></li>
            <li><Link href="/programas" className="text-neutral-600 hover:text-neutral-900">Programas & Cursos</Link></li>
            <li><Link href="/coaching" className="text-neutral-600 hover:text-neutral-900">Coaching 1:1</Link></li>
            <li><Link href="/blog" className="text-neutral-600 hover:text-neutral-900">Blog</Link></li>
            <li><Link href="/sobre-sol" className="text-neutral-600 hover:text-neutral-900">Sobre Sol</Link></li>
            <li><Link href="/contacto" className="text-neutral-600 hover:text-neutral-900">Contacto</Link></li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Recursos</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/sesion-ebook" className="text-neutral-600 hover:text-neutral-900">Sesión + Ebook</Link></li>
            <li><Link href="https://amzn.to/3V1Lueq" target="_blank" className="text-neutral-600 hover:text-neutral-900">Libro: Las Llaves del Coaching</Link></li>
            <li><Link href="https://hotmart.com/es/marketplace/productos/reto-40-dias-de-accion/U90702573K" target="_blank" className="text-neutral-600 hover:text-neutral-900">Reto 40 Días</Link></li>
            <li><Link href="https://linktr.ee/solmilovich" target="_blank" className="text-neutral-600 hover:text-neutral-900">Linktree</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>Fort Lauderdale, Florida, EE.UU.</li>
            <li><a className="hover:text-neutral-900" href="tel:+19545130107">+1 (954) 513-0107</a></li>
            <li><a className="hover:text-neutral-900" href="mailto:formacionsolmilovich@gmail.com">formacionsolmilovich@gmail.com</a></li>
          </ul>

          {/* Redes */}
          <div className="mt-4 flex items-center gap-3">
            <Link href="https://www.instagram.com/solmilovich" target="_blank" aria-label="Instagram" className="text-neutral-500 hover:text-neutral-900">IG</Link>
            <Link href="https://www.facebook.com/solmilovichcoach" target="_blank" aria-label="Facebook" className="text-neutral-500 hover:text-neutral-900">FB</Link>
            <Link href="https://twitter.com/solmilovich" target="_blank" aria-label="X/Twitter" className="text-neutral-500 hover:text-neutral-900">X</Link>
            <Link href="https://www.youtube.com/channel/UCoc_dG9fRnQcILSsTThd9MA" target="_blank" aria-label="YouTube" className="text-neutral-500 hover:text-neutral-900">YT</Link>
            <Link href="https://open.spotify.com/show/6DuiPTx53HjbqnqT4CU7Lp" target="_blank" aria-label="Spotify" className="text-neutral-500 hover:text-neutral-900">SP</Link>
          </div>
        </div>
      </div>

      {/* Legal + derechos */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {year} Sol Milovich · Todos los derechos reservados
          </p>
          <div className="text-xs text-neutral-500 space-x-4">
            <Link href="/terminos" className="hover:text-neutral-800">Términos</Link>
            <Link href="/privacidad" className="hover:text-neutral-800">Privacidad</Link>
            <Link href="/cookies" className="hover:text-neutral-800">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
