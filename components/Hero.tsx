"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Slide = {
  name: string;
  image: string;
  alt: string;
};

type DanceHeroProps = {
  backgroundImages?: string[];
  slides?: Slide[];
};

const defaultSlides: Slide[] = [
  {
    name: "URBANO",
    image: "/dance_image/urbano/URBANO.webp",
    alt: "Grupo bailando danza urbana",
  },
  {
    name: "Bachata",
    image: "/dance_image/bachata/BACHATA.webp",
    alt: "Pareja bailando bachata",
  },
  {
    name: "K-pop",
    image: "/dance_image/kpop/KPOP.webp",
    alt: "Grupo de baile estilo K-pop",
  },
  {
    name: "Salsa Choke",
    image: "/dance_image/salsa_choke/SALSA_CHOKE.webp",
    alt: "Pareja bailando salsa choke",
  },
  {
    name: "Contemporaneo",
    image: "/dance_image/contemporaneo/CONTEMPORANEO.webp",
    alt: "Pareja bailando contemporaneo",
  },
  {
    name: "Latino",
    image: "/dance_image/latino/LATINO.webp",
    alt: "Pareja bailando latino",
  },
    {
    name: "Baile Social",
    image: "/dance_image/baile_social/BAILE_SOCIAL_1.webp",
    alt: "Pareja bailando baile social",
  },
  {
    name: "Danza Tradicional",
    image: "/dance_image/danza/DANZAS_TRADICIONALES_1.webp",
    alt: "Pareja bailando danza tradicional",
  },
];

const defaultBackgrounds = [
  "/hero_1.webp",
  "/hero_2.webp",
  "/hero_3.webp",
  "/hero_4.webp",
];

export function DanceHero({
  backgroundImages = defaultBackgrounds,
  slides = defaultSlides,
}: DanceHeroProps) {
  const normalizedSlides = useMemo(
    () => (slides.length ? slides : defaultSlides),
    [slides]
  );

  const [current, setCurrent] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // 🔥 precarga imágenes (clave para que no parpadee)
  useEffect(() => {
    normalizedSlides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });

    backgroundImages.forEach((bg) => {
      const img = new Image();
      img.src = bg;
    });
  }, [normalizedSlides, backgroundImages]);

  // slider pequeño
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % normalizedSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [normalizedSlides.length]);

  // slider fondo
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const activeSlide = normalizedSlides[current];

  const textContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_70%)]" />
      <div className="absolute inset-y-0 left-0 w-[45%] bg-linear-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center px-4 pt-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex items-center"
        >
          <div className="max-w-2xl px-6 md:px-10 lg:px-14 mt-20">

            <motion.h1
              variants={textItem}
              className="text-4xl md:text-6xl xl:text-7xl text-white leading-[0.95]"
            >
              Academia de baile en Cali
            </motion.h1>

            <motion.p
              variants={textItem}
              className="mt-6 text-white/85 max-w-lg"
            >
              Si estás buscando clases de danza urbana en Cali, este es el lugar donde puedes empezar sin presión. No importa si nunca has bailado o si ya tienes experiencia.
            </motion.p>

            <motion.div variants={textItem} className="mt-8 flex gap-3">
              <Link
                href="#servicios"
                className="bg-[#ec3236] px-6 py-3 rounded-full text-white flex items-center"
              >
                Ver servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#precios"
                className="border border-white/30 px-6 py-3 rounded-full text-white"
              >
                Ver precios
              </Link>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end mt-10">

          <div className="w-full max-w-85 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">

              {/* 🔥 SIN animación pesada */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{ backgroundImage: `url(${activeSlide.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Nombre */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 px-4 py-2 text-xs font-bold uppercase rounded-full text-black">
                  {activeSlide.name}
                </span>
              </div>

              {/* Punticos */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {normalizedSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? "w-6 bg-white"
                        : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}