"use client";

export default function CookieSettingsLink({
  className = "",
}: { className?: string }) {
  const openBanner = (e: React.MouseEvent) => {
    e.preventDefault();
    // borro la elección para que el banner vuelva a salir si recargan
    localStorage.removeItem("cookie_consent");
    document.cookie = "cookie_consent=; Max-Age=0; path=/";
    // y lo abro ahora mismo
    window.dispatchEvent(new Event("open-cookie-banner"));
  };

  return (
    <a href="#" onClick={openBanner} className={className}>
      Configurar cookies
    </a>
  );
}
