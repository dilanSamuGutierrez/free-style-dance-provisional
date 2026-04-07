"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  name: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Laura Gómez",
    text: "Nunca había bailado y ahora me siento segura y feliz cada vez que entro a clase.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Ruiz",
    text: "El ambiente es brutal. No es solo aprender, es disfrutar y soltar el estrés.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Valentina Rojas",
    text: "Me ayudó a perder el miedo completamente. Ahora quiero presentarme en shows.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const backgroundImage = "/validationHero.png";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[current];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex justify-center">

          <div
            className="relative w-full max-w-6xl h-52 md:h-64 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-center px-6 md:px-16"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            
            {/* overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

            {/* CONTENIDO */}
            <div className="relative z-10 flex flex-col items-center max-w-2xl">

              <AnimatePresence mode="wait">

                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >

                  {/* AVATAR */}
                  <motion.img
                    src={active.avatar}
                    alt={active.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-4 border-white mb-3"
                  />

                  {/* NOMBRE */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg font-bold text-white"
                  >
                    {active.name}
                  </motion.p>

                  {/* TEXTO */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 text-white/90 text-sm md:text-base leading-relaxed"
                  >
                    “{active.text}”
                  </motion.p>

                </motion.div>

              </AnimatePresence>

              {/* DOTS */}
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className="group"
                  >
                    <motion.div
                      animate={{
                        width: index === current ? 24 : 8,
                        backgroundColor:
                          index === current ? "#ec3236" : "rgba(255,255,255,0.6)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-2 rounded-full"
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}