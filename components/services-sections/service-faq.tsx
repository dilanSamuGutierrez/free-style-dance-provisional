"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Necesito experiencia previa para inscribirme?",
    answer: "¡No! Tenemos clases para todos los niveles, incluyendo principiantes absolutos. Nuestros instructores están capacitados para guiarte desde cero y adaptarse a tu ritmo de aprendizaje."
  },
  {
    question: "¿Qué edad mínima se requiere para las clases?",
    answer: "Tenemos clases para niños desde los 5 años, adolescentes y adultos. Cada grupo está diseñado para edades específicas para asegurar la mejor experiencia de aprendizaje."
  },
  {
    question: "¿Puedo tomar una clase de prueba?",
    answer: "¡Por supuesto! Ofrecemos una clase de prueba gratuita para que conozcas nuestras instalaciones, instructores y metodología antes de inscribirte. Solo contáctanos por WhatsApp para agendarla."
  },
  {
    question: "¿Qué debo llevar a mi primera clase?",
    answer: "Solo necesitas ropa cómoda que te permita moverte libremente, zapatos deportivos (o los que indique tu instructor según el estilo) y muchas ganas de aprender. Nosotros nos encargamos del resto."
  },
  {
    question: "¿Tienen presentaciones o shows?",
    answer: "Sí, realizamos presentaciones trimestrales donde todos nuestros estudiantes pueden participar. También tenemos un grupo de presentación para los más avanzados que participan en eventos y competencias."
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer: "Aceptamos efectivo, transferencias bancarias, Nequi, Daviplata y tarjetas de crédito/débito. Ofrecemos planes mensuales, trimestrales y semestrales con descuentos especiales."
  },
  {
    question: "¿Puedo cambiar de estilo de baile?",
    answer: "¡Claro! Puedes probar diferentes estilos y cambiar cuando quieras. De hecho, muchos de nuestros estudiantes toman más de un estilo para una experiencia más completa."
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos ubicados en el Barrio Granada, Cali. Es una zona de fácil acceso con transporte público cercano y parqueadero disponible para nuestros estudiantes."
  }
]

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white" id="preguntas">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#ec3236] text-sm font-medium uppercase tracking-widest mb-4 block">
              Preguntas Frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl tracking-wide text-gray-900 mb-4">
              ¿TIENES DUDAS?
            </h2>
            <p className="text-gray-500">
              Aquí respondemos las preguntas más comunes de nuestros estudiantes.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className={`bg-white border rounded-xl px-6 transition-all shadow-sm hover:shadow-md ${
                    isOpen ? "border-[#ec3236]/50" : "border-gray-200"
                  }`}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-[#ec3236] transition-colors">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isOpen ? "text-[#ec3236]" : "text-gray-400"
                        }`}
                      />
                    </motion.div>
                  </button>

                  {/* Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              ¿No encontraste tu pregunta? Escríbenos directamente.
            </p>
            <a
              href="https://wa.me/573001234567?text=Hola!%20Tengo%20una%20pregunta%20sobre%20las%20clases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ec3236] hover:underline font-medium"
            >
              Contactar por WhatsApp →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}