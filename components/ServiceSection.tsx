"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

const services = [
  {
    title: "Danza Urbana",
    description: "Hip hop, breaking y estilos urbanos para liberar tu energía",
    image: "/dance_image/urbano/URBANO_1.webp",
    slug: "danza-urbana"
  },
  {
    title: "K-Pop",
    description: "Aprende las coreografías de tus grupos favoritos de K-pop",
    image: "/dance_image/kpop/KPOP_2.webp",
    slug: "kpop"
  },
  {
    title: "Bachata",
    description: "Sensualidad y conexión en cada paso de este ritmo latino",
    image: "/dance_image/bachata/BACHATA.webp",
    slug: "bachata"
  },
  {
    title: "Salsa Choke",
    description: "El ritmo más auténtico de Cali, con sabor y actitud",
    image: "/dance_image/salsa_choke/SALSA_CHOKE.webp",
    slug: "salsa-choke"
  },
  {
    title: "Champeta",
    description: "Movimientos africanos y caribeños llenos de alegría",
    image: "/dance_image/champeta/CHAMPETA.webp",
    slug: "champeta"
  },
  {
    title: "Contemporáneo",
    description: "Expresión artística y técnica en movimientos fluidos",
    image: "/dance_image/contemporaneo/CONTEMPORANEO.webp",
    slug: "contemporaneo"
  },
  {
    title: "Latino",
    description: "Ritmos latinos para disfrutar y conectar con la música",
    image: "/dance_image/latino/LATINO.webp",
    slug: "latino"
  },
  {
    title: "Baile Social",
    description: "Aprende a bailar en pareja y disfruta en cualquier evento",
    image: "/dance_image/baile_social/BAILE_SOCIAL.webp",
    slug: "baile-social"
  },
  {
    title: "Gimnasia",
    description: "Fortalece tu cuerpo con movimiento, disciplina y técnica",
    image: "/dance_image/gimnasia/gim_1.webp",
    slug: "gimnasia"
  },
]

export function ServicesSection() {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="servicios" className="py-20 md:py-0">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 text-[#1f1d1d]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Encuentra tu{" "}
            <span className="text-[#ec3236]">Ritmo</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde ritmos urbanos hasta bailes latinos tradicionales. 
            Tenemos el estilo perfecto para ti.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={card}>
              <Link
                href={{
                  pathname: "/servicios",
                  hash: service.slug,
                }}
                className="group relative aspect-3/2 rounded-2xl overflow-hidden block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl text-white mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>

                  <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ec3236]/50 rounded-2xl transition-colors" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 rounded-2xl bg-white border border-[#e5e5e5] text-center shadow-sm"
        >
          <h3 className="text-3xl md:text-4xl text-[#1f1d1d] mb-4">
            SHOWS PARA EVENTOS
          </h3>

          <p className="text-[#726165] max-w-xl mx-auto mb-6 leading-relaxed">
            ¿Necesitas un espectáculo de baile para tu evento corporativo, fiesta o celebración? 
            Nuestro equipo de bailarines profesionales hará de tu evento algo inolvidable.
          </p>

          <motion.a
            href="https://wa.me/573001234567?text=Hola!%20Quiero%20cotizar%20un%20show%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#ec3236] hover:bg-[#d42b2f] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Cotizar Show
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}