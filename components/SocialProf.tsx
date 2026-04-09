"use client"

import Image from "next/image"

const proofImages = [
  {
    src: "/dance_image/salsa_choke/SALSA_CHOKE_1.webp",
    alt: "Grupo de baile contemporáneo en acción",
    category: "Jóvenes"
  },
  {
    src: "/dance_image/baile_social/BAILE_SOCIAL.webp",
    alt: "Niños aprendiendo a bailar",
    category: "Niños"
  },
  {
    src: "/dance_image/urbano/URBANO_2.webp",
    alt: "Clase de baile para adultos",
    category: "Adultos"
  },
  {
    src: "/reconocimientos/1.webp",
    alt: "Presentación de baile en vivo",
    category: "Shows"
  },
  {
    src: "/reconocimientos/2.webp",
    alt: "Ensayo grupal de coreografía",
    category: "Ensayos"
  },
  {
    src: "/dance_image/urbano/URBANO_1.webp",
    alt: "Clase de baile para adultos",
    category: "Adultos"
  },
]

export function SocialProof() {
  return (
    <section className="py-8 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm uppercase tracking-widest text-[#1f1d1d]">
          Hemos beneficiado más de 600 estudiantes de todas las edades
        </p>
      </div>

      {/* 🔥 Contenedor optimizado */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 will-change-transform animate-scroll">

          {/* 🔁 duplicación necesaria pero controlada */}
          {[...proofImages, ...proofImages].map((image, index) => (
            <div
              key={index}
              className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden relative group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={320}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium text-white">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}