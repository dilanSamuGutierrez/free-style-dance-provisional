"use client"

import Image from "next/image"
import { Heart, Flame, ShieldAlert } from "lucide-react"
import { motion, Variants } from "framer-motion"

type ProblemSectionProps = {
  imageSrc: string
  imageAlt?: string
}

export function ProblemSection({
  imageSrc,
  imageAlt = "Persona tomando clases de baile",
}: ProblemSectionProps) {

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
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
    <section className="w-full py-0 md:py-0 bg-[#fefbfe]">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

        {/* 🔥 GAP RESPONSIVE AJUSTADO */}
        <div className="grid items-center gap-0 sm:gap-8 md:gap-12 md:grid-cols-2">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden"
          >
            <div className="relative aspect-4/5 w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-[#ec3236]/10 px-4 py-2 text-sm font-medium text-[#ec3236]"
            >
              <ShieldAlert className="h-4 w-4" />
              El problema real
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <h2 className="text-3xl text-[#1f1d1d] md:text-5xl">
                Mucha gente quiere empezar a bailar...
              </h2>

              <p className="max-w-xl text-base leading-7 text-[#726165] md:text-lg">
                Pero no todos encuentran un lugar donde se sientan cómodos, acompañados y seguros para dar ese primer paso.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ec3236]/10 text-[#ec3236] shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <p className="text-[#1f1d1d] leading-snug">
                  Muchos lo intentan, pero pierden la motivación al poco tiempo.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ec3236]/10 text-[#ec3236] shrink-0">
                  <Flame className="h-5 w-5" />
                </div>
                <p className="text-[#1f1d1d] leading-snug">
                  Otros se frenan por miedo, inseguridad o pena.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#726165]/15 bg-[#1f1d1d] p-6"
            >
              <p className="text-base leading-7 text-[#fefbfe]">
                Y ahí es donde una buena academia hace la diferencia: no solo enseña pasos, también da confianza, acompañamiento y ganas de seguir.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["Ambiente cómodo", "Motivación real", "Sin presión"].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -5 }}
                  className="rounded-full bg-[#1f1d1d] px-4 py-2 text-sm font-medium text-[#fefbfe] cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}