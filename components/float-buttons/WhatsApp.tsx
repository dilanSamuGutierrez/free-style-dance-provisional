import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573175644737?text=Hola!%20Quiero%20información%20sobre%20clases"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        className="text-4xl text-white"
      />
    </a>
  )
}