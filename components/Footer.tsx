import { MapPin, Phone, Music } from "lucide-react"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Footer() {
  return (
    <footer className="bg-[#1f1d1d] text-white pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-16 md:grid-cols-2 items-center">

        {/* IZQUIERDA */}
        <div className="space-y-8">

          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              Free Style Dance
            </h3>

            <p className="text-white/70 max-w-md leading-relaxed">
              Más que una academia, un espacio donde descubres tu confianza, te expresas sin miedo y haces parte de una comunidad real.
            </p>
          </div>

          {/* UBICACIÓN */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#ec3236] mt-1" />
            <div>
              <p className="text-sm text-white/50">Ubicación</p>
              <p className="text-white">Cali, Carrera 85A # 15-133 barrio Ingenio 2</p>
            </div>
          </div>

          {/* REDES */}
          <div className="flex gap-4 pt-4">

            <a
              href="https://wa.me/573175644737?text=Hola!%20Quiero%20información%20sobre%20clases"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ec3236] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/freestyledance"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ec3236] transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              <span className="text-sm">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@freestyledance09"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ec3236] transition-all duration-300"
            >
              <Music className="w-4 h-4" />
              <span className="text-sm">TikTok</span>
            </a>

          </div>
        </div>

       {/* DERECHA (MAPA MÁS PRO) */}
        <div className="relative w-full max-w-full overflow-hidden">
          
          {/* glow */}
          <div className="absolute inset-0 bg-[#ec3236]/10 blur-2xl scale-110 opacity-30 pointer-events-none" />

          <div className="relative w-full aspect-16/12 sm:aspect-16/10 md:aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?output=embed&q=FREE+STYLE+DANCE+ESCUELA+DE+BAILE+Cali"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>

      </div>

      {/* LINEA + COPY */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Free Style Dance — Todos los derechos reservados
      </div>

    </footer>
  )
}