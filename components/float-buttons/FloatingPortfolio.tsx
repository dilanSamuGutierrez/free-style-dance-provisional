"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"

export function FloatingPortfolio({ fileUrl = "/files/Portafolio.pdf" }) {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(true)
      setTimeout(() => setShowText(false), 2000) // texto visible 2s
    }, 6000) // cada 6s aparece
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-36 right-6 z-50 flex items-center">
      {/* Texto desplegable a la izquierda */}
      <div
        className={`mr-3 bg-[#ec3236] text-white px-4 py-2 rounded-full shadow-lg transition-all duration-500 ease-out
        ${showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"}`}
      >
        Ver Portafolio
      </div>

      {/* Botón siempre visible */}
      <Link
        href={fileUrl}
        download
        className="w-14 h-14 bg-[#ec3236] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Ver Portafolio"
      >
        <FontAwesomeIcon icon={faFileDownload} className="w-6 h-6" />
      </Link>
    </div>
  )
}