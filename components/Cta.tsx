"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

type FinalCTAProps = {
  imageSrc: string
}

export function FinalCTA({ imageSrc }: FinalCTAProps) {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 items-center gap-12">
          
          {/* TEXTO */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >

            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1f1d1d]"
            >
              Tu momento es <span className="text-[#ec3236]">ahora</span>.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg text-[#726165] leading-relaxed max-w-xl"
            >
              Escríbenos por WhatsApp y empieza hoy tus clases de baile en Cali con una comunidad que realmente te impulsa a crecer.
            </motion.p>

            {/* CTA */}
            <motion.a
              variants={item}
              href="https://wa.me/573001234567?text=Hola!%20Quiero%20empezar%20clases%20de%20baile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center gap-3 bg-[#ec3236] hover:bg-[#d42b2f] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              {/* glow animado */}
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300" />

              Empezar ahora
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            {/* micro confianza */}
            <motion.p
              variants={item}
              className="text-sm text-[#726165]/80"
            >
              Sin experiencia previa • Cupos limitados
            </motion.p>

          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-65 md:max-w-140.5">
              
              {/* glow */}
              <div className="absolute inset-0 scale-110 blur-3xl opacity-25 bg-[#ec3236]/30 rounded-xl" />

              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
                <Image
                  src={imageSrc}
                  alt="Clases de baile en Cali"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}