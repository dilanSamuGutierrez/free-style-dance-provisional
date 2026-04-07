import Image from "next/image"

const proofImages = [
  {
    src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=400&fit=crop",
    alt: "Grupo de baile urbano en acción",
    category: "Jóvenes"
  },
  {
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
    alt: "Niños aprendiendo a bailar",
    category: "Niños"
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
    alt: "Clase de baile para adultos",
    category: "Adultos"
  },
  {
    src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=400&fit=crop",
    alt: "Presentación de baile en vivo",
    category: "Shows"
  },
  {
    src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=400&fit=crop",
    alt: "Ensayo grupal de coreografía",
    category: "Ensayos"
  },
]

export function SocialProof() {
  return (
    <section className="py-8 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest text-[#1f1d1d]" >
          Hemos beneficiado mas de 600 estudiantes de todas las edades
        </p>
      </div>
      
      {/* Scrolling Gallery */}
      <div className="relative">
        <div className="flex gap-4 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...proofImages, ...proofImages].map((image, index) => (
            <div
              key={index}
              className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium text-primary">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
