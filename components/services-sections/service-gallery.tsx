"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  {
    src: "/dance_image/urbano/URBANO.webp",
    alt: "Grupo bailando danza urbana"
  },
  {
    src: "/dance_image/bachata/BACHATA.webp",
    alt: "Pareja bailando bachata"
  },
  {
    src: "/dance_image/kpop/KPOP.webp",
    alt: "Grupo de baile estilo K-pop"
  },
  {
    src: "/dance_image/salsa_choke/SALSA_CHOKE.webp",
    alt: "Pareja bailando salsa choke"
  },
  {
    src: "/dance_image/contemporaneo/CONTEMPORANEO.webp",
    alt: "Pareja bailando contemporáneo"
  },
  {
    src: "/dance_image/latino/LATINO.webp",
    alt: "Pareja bailando latino"
  },
  {
    src: "/dance_image/baile_social/BAILE_SOCIAL_1.webp",
    alt: "Pareja bailando baile social"
  },
  {
    src: "/dance_image/danza/DANZAS_TRADICIONALES_1.webp",
    alt: "Pareja bailando danza tradicional"
  },

  // EXTRA (proofImages)
  {
    src: "/dance_image/salsa_choke/SALSA_CHOKE_1.webp",
    alt: "Grupo de salsa choke en acción"
  },
  {
    src: "/dance_image/baile_social/BAILE_SOCIAL.webp",
    alt: "Niños aprendiendo a bailar"
  },
  {
    src: "/dance_image/urbano/URBANO_2.webp",
    alt: "Clase de baile urbano"
  },
  {
    src: "/reconocimientos/1.webp",
    alt: "Presentación en vivo"
  },
  {
    src: "/reconocimientos/2.webp",
    alt: "Ensayo grupal"
  },
  {
    src: "/dance_image/urbano/URBANO_1.webp",
    alt: "Entrenamiento de danza urbana"
  }
]

export function ServiceGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#ec3236] text-sm font-medium uppercase tracking-widest mb-4 block">
            Galería
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            NUESTRAS CLASES EN ACCIÓN
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 || index === 3
                  ? "row-span-2 aspect-square"
                  : "aspect-video"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* glow rojo sutil */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#ec3236]/10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}