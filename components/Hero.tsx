"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Slide = {
  name: string;
  image: string;
  alt: string;
};

type DanceHeroProps = {
  backgroundImage?: string;
  slides?: Slide[];
};

const defaultSlides: Slide[] = [
  {
    name: "Danza urbana",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
    alt: "Grupo bailando danza urbana",
  },
  {
    name: "Bachata",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
    alt: "Pareja bailando bachata",
  },
  {
    name: "K-pop",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    alt: "Grupo de baile estilo K-pop",
  },
];

export function DanceHero({
  backgroundImage =
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1600&q=80",
  slides = defaultSlides,
}: DanceHeroProps) {
  const normalizedSlides = useMemo(
    () => (slides.length ? slides : defaultSlides),
    [slides]
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % normalizedSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [normalizedSlides.length]);

  const activeSlide = normalizedSlides[current];

  const textContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1f1d1d]">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* overlays */}
      <div className="absolute inset-y-0 left-0 w-[40%] bg-linear-to-r from-white/90 via-white/60 to-transparent backdrop-blur-sm" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center px-4 pt-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-0">

        {/* LEFT */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="relative flex items-center lg:min-h-screen"
        >
          <div className="relative z-10 max-w-2xl px-6 md:px-10 lg:px-14 mt-20">

            <motion.h1
              variants={textItem}
              className="max-w-xl text-4xl leading-[0.95] tracking-tight text-white md:text-6xl xl:text-7xl"
            >
              Academia de baile en Cali
            </motion.h1>

            <motion.p
              variants={textItem}
              className="mt-6 max-w-lg text-base leading-7 text-white/85 md:text-lg"
            >
              Si estás buscando clases de danza urbana en Cali, este es el lugar donde puedes empezar sin presión. No importa si nunca has bailado o si ya tienes experiencia. Aquí avanzas a tu ritmo.
            </motion.p>

            <motion.div
              variants={textItem}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="#servicios"
                className="inline-flex items-center rounded-full bg-[#ec3236] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.05]"
              >
                Ver servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#precios"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver precios
              </Link>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <div className="relative flex items-center justify-center mt-10 md:mt-14 lg:mt-0 pb-12 lg:justify-end lg:pb-0 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-85 rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md"
          >

            <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeSlide.image})` }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              {/* TOP */}
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1f1d1d]">
                  {activeSlide.name}
                </span>

                <button
                  onClick={() =>
                    setCurrent((prev) =>
                      (prev - 1 + normalizedSlides.length) %
                      normalizedSlides.length
                    )
                  }
                  className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/25"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>

              {/* BOTTOM */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

                <div className="mb-4 flex gap-2">
                  {normalizedSlides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrent(index)}
                      animate={{
                        width: index === current ? 28 : 8,
                        backgroundColor:
                          index === current ? "#ec3236" : "rgba(255,255,255,0.6)",
                      }}
                      className="h-2 rounded-full"
                    />
                  ))}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                      Próxima experiencia
                    </p>
                    <p className="mt-2 text-2xl font-black">
                      {activeSlide.name}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ec3236]">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}