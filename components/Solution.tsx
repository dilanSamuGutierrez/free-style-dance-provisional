"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

type SolutionSectionProps = {
  imageSrc: string
  imageAlt?: string
}

export function SolutionSection({
  imageSrc,
  imageAlt = "Clases de baile en Cali",
}: SolutionSectionProps) {

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // ✅ sin error TS
      },
    },
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section className="relative -mt-10 overflow-hidden bg-[#726165] py-42 md:py-32" id="lo-que-te-ofrecemos">
      
      {/* Corte superior */}
      <div
        className="absolute left-0 top-0 h-40 w-full bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 100%)",
        }}
      />

      {/* Corte inferior */}
      <div
        className="absolute bottom-0 left-0 h-40 w-full bg-white"
        style={{
          clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-2 md:px-6">
        
        {/* TEXTO */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          
          <motion.div
            variants={fadeUp}
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
          >
            Solución
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl text-white"
          >
            En Free Style Dance creamos algo diferente.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-white/90 max-w-xl"
          >
            Una academia en Cali donde el proceso importa tanto como el resultado. Aquí puedes equivocarte, aprender, mejorar y disfrutarlo sin presión.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href="https://wa.me/573001234567?text=Hola!%20Quiero%20empezar%20clases%20de%20baile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#ec3236] hover:bg-[#d42b2f] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Empezar ahora
            <ArrowRight className="w-5 h-5" />
          </motion.a>

        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-175 md:max-w-200">
            
            {/* glow */}
            <div className="absolute inset-0 scale-110 blur-3xl opacity-30 bg-black/30 rounded-xl" />

            <div className="relative aspect-4/5 md:aspect-5/6 w-full overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}