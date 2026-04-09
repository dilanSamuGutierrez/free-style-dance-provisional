"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

const services = [
  {
    title: "Danza Urbana",
    subtitle: "Hip Hop, Breaking & Street Dance",
    description:
      "Libera tu energía con los ritmos más actuales. Aprende técnicas urbanas y desarrolla tu propio estilo.",
    image: "/dance_image/urbano/URBANO_1.webp",
    slug: "danza-urbana",
    benefits: [
      "Mejora tu coordinación y ritmo",
      "Desarrolla tu estilo propio",
      "Expresa tu personalidad",
      "Entrena mientras te diviertes",
    ],
  },
  {
    title: "K-Pop",
    subtitle: "Coreografías de tus grupos favoritos",
    description:
      "Aprende coreografías de K-pop y conecta con una comunidad apasionada por la música y el baile.",
    image: "/dance_image/kpop/KPOP_2.webp",
    slug: "kpop",
    benefits: [
      "Aprende coreografías originales",
      "Mejora tu precisión",
      "Entrena sincronización",
      "Participa en covers",
    ],
  },
  {
    title: "Bachata",
    subtitle: "Sensualidad y conexión",
    description:
      "Descubre la bachata y mejora tu conexión, musicalidad y confianza al bailar en pareja.",
    image: "/dance_image/bachata/BACHATA.webp",
    slug: "bachata",
    benefits: [
      "Conexión con pareja",
      "Mayor confianza",
      "Mejor musicalidad",
      "Ideal para sociales",
    ],
  },
  {
    title: "Salsa Choke",
    subtitle: "El ritmo más caleño",
    description:
      "Vive el ritmo urbano más auténtico de Cali con energía, actitud y mucho flow.",
    image: "/dance_image/salsa_choke/SALSA_CHOKE_1.webp",
    slug: "salsa-choke",
    benefits: [
      "Movimiento energético",
      "Estilo urbano caleño",
      "Perfecto para fiestas",
      "Desarrolla tu flow",
    ],
  },
  {
    title: "Champeta",
    subtitle: "Ritmos africanos y caribeños",
    description:
      "Muévete con ritmos alegres y libera el estrés con movimientos de cadera y energía.",
    image: "/dance_image/champeta/CHAMPETA.webp",
    slug: "champeta",
    benefits: [
      "Cardio divertido",
      "Movilidad corporal",
      "Conexión cultural",
      "Alta energía",
    ],
  },
  {
    title: "Contemporáneo",
    subtitle: "Expresión artística y técnica",
    description:
      "Explora el movimiento como arte combinando técnica, emoción y expresión corporal.",
    image: "/dance_image/contemporaneo/CONTEMPORANEO.webp",
    slug: "contemporaneo",
    benefits: [
      "Mejora técnica",
      "Expresión emocional",
      "Flexibilidad",
      "Creatividad corporal",
    ],
  },
  {
    title: "Latino",
    subtitle: "Ritmos para disfrutar",
    description:
      "Disfruta de ritmos latinos y aprende a moverte con confianza en cualquier ambiente.",
    image: "/dance_image/latino/LATINO.webp",
    slug: "latino",
    benefits: [
      "Ritmo y coordinación",
      "Confianza al bailar",
      "Diversión social",
      "Variedad de estilos",
    ],
  },
  {
    title: "Baile Social",
    subtitle: "Conexión en pareja",
    description:
      "Aprende a bailar en pareja y siéntete seguro en cualquier evento o fiesta.",
    image: "/dance_image/baile_social/BAILE_SOCIAL.webp",
    slug: "baile-social",
    benefits: [
      "Conexión con pareja",
      "Seguridad al bailar",
      "Aplicación real",
      "Ambiente social",
    ],
  },
  {
    title: "Gimnasia",
    subtitle: "Fuerza y disciplina",
    description:
      "Fortalece tu cuerpo con técnica, disciplina y entrenamiento físico funcional.",
    image: "/dance_image/gimnasia/GIMNASIA.webp",
    slug: "gimnasia",
    benefits: [
      "Fuerza física",
      "Disciplina",
      "Flexibilidad",
      "Control corporal",
    ],
  },
]

export function ServiceDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-32">

          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              id={service.slug} // 🔥 AQUÍ ESTÁ LA CLAVE
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >

              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Contenido */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                
                <span className="text-[#ec3236] text-sm font-medium uppercase tracking-widest mb-2 block">
                  {service.subtitle}
                </span>

                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                {/* Beneficios */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#ec3236]" />
                    Beneficios
                  </h3>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#ec3236] shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}