import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";


const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Academia de baile en Cali | Clases de danza para niños, jóvenes y adultos",
  description:
    "Aprende a bailar en Cali sin experiencia. Clases de danza urbana, bachata, salsa choke, kpop y más. Academia con ambiente familiar, horarios flexibles y shows para eventos.",

  keywords: [
    "academia de baile en Cali",
    "clases de baile en Cali",
    "clases de danza en Cali",
    "clases de baile para niños en Cali",
    "clases de baile para jóvenes en Cali",
    "clases de baile para adultos en Cali",
    "danza urbana Cali",
    "clases de bachata Cali",
    "clases de kpop Cali",
    "shows de baile en Cali",
  ],

  authors: [{ name: "Free Style Dance" }],
  creator: "Free Style Dance",

  openGraph: {
    title: "Academia de baile en Cali | Aprende sin miedo y disfruta",
    description:
      "Clases de baile en Cali para todos los niveles. Vive la experiencia, mejora tu confianza y forma parte de una comunidad real.",
    url: "https://tudominio.com",
    siteName: "Free Style Dance",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://tudominio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className={`${arvo.className} min-h-full flex flex-col bg-black text-white`}>
        {children}

      </body>
    </html>
  );
}