"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const handleScroll = (id: string) => {
  const el = document.querySelector(id);
  if (!el) return;

  const offset = 80; // altura navbar
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

/* ================= TYPES ================= */

type SocialIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  scrolled: boolean;
};

type MenuItem = {
  label: string;
  href: string;
};

/* ================= COMPONENT ================= */

function SocialIconLink({
  href,
  label,
  children,
  scrolled,
}: SocialIconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-110
      ${
        scrolled
          ? "border-black/20 bg-black/5 text-black hover:bg-black/10"
          : "border-white/25 bg-white/10 text-white hover:bg-white/20"
      }`}
    >
      {children}
    </Link>
  );
}

export function DanceNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Lo que pasa cuando empiezas", href: "#lo-que-te-ofrecemos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Preguntas", href: "/servicios#preguntas" },
    { label: "Precios", href: "/servicios#precios" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-4 md:px-8 transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link href="#inicio" className="flex items-center h-full">
          <div
            className={`flex items-center transition-all duration-300
            ${scrolled ? "h-12 " : "h-28 md:h-36 mt-10 md:mt-18"}`}
          >
            <img
              src="/Logo.png"
              alt="Free Style Dance"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 ml-auto">

          {/* MENU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isAnchor = item.href.startsWith("#");

            if (isAnchor) {
              return (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.href)}
                  className={`relative group text-sm font-semibold transition duration-300
                  ${
                    scrolled
                      ? "text-black"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#ec3236] transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            }

            // 👉 PARA INICIO ("/")
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative group text-sm font-semibold transition duration-300
                ${
                  scrolled
                    ? "text-black"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#ec3236] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>

          {/* SOCIALS */}
          <div className="hidden md:flex items-center gap-2">
            <SocialIconLink href="https://instagram.com" label="Instagram" scrolled={scrolled}>
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </SocialIconLink>

            <SocialIconLink href="https://tiktok.com" label="TikTok" scrolled={scrolled}>
              <FaTiktok className="h-4 w-4" />
            </SocialIconLink>

            <SocialIconLink href="https://wa.me/573000000000" label="WhatsApp" scrolled={scrolled}>
              <FaWhatsapp className="h-4 w-4" />
            </SocialIconLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border backdrop-blur-md transition
            ${
              scrolled
                ? "border-black/20 bg-black/5 text-black"
                : "border-white/25 bg-white/10 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-black font-semibold text-base"
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="https://wa.me/573000000000"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 bg-[#ec3236] text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                Escribir por WhatsApp
                <ChevronRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}