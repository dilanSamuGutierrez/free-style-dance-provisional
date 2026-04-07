"use client"

import { Sparkles, Heart, Smile, Users, Zap, Star } from "lucide-react"
import { motion, Variants } from "framer-motion"

const benefits = [
  {
    icon: Sparkles,
    title: "Confianza",
    description: "Desarrolla seguridad en ti mismo con cada clase"
  },
  {
    icon: Heart,
    title: "Expresión",
    description: "Libera emociones a través del movimiento"
  },
  {
    icon: Smile,
    title: "Diversión",
    description: "Ejercicio que no se siente como ejercicio"
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Amigos que se convierten en familia"
  },
  {
    icon: Zap,
    title: "Energía",
    description: "Mejora tu estado físico y mental"
  },
  {
    icon: Star,
    title: "Talento",
    description: "Descubre habilidades que no sabías que tenías"
  }
]

export function BenefitsSection() {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="beneficios" className="py-20 md:py-16 relative overflow-hidden">

      {/* Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#ec3236]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#1f1d1d]">
            Más que <span className="text-[#ec3236]">bailar</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-[#726165] leading-relaxed">
            El baile transforma. Estos son algunos de los beneficios que nuestros estudiantes viven en cada clase.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-white border border-[#e5e5e5] hover:border-[#ec3236]/40 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              >
                
                {/* efecto hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-br from-[#ec3236]/10 via-transparent to-transparent" />

                {/* ICON */}
                <div className="relative w-16 h-16 mx-auto rounded-2xl bg-[#ec3236]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#ec3236]/20 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#ec3236]" />
                </div>

                {/* TITLE */}
                <h3 className="relative text-lg font-semibold text-[#1f1d1d] mb-2">
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative text-sm text-[#726165] leading-relaxed group-hover:text-[#1f1d1d] transition-colors">
                  {benefit.description}
                </p>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}