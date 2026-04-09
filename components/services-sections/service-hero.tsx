import { MessageCircle } from "lucide-react"

export function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/hero_1.webp')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mt-15">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground mb-6">
            CLASES DE BAILE<br />
            <span className="text-primary">EN CALI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-pretty">
            Descubre todos nuestros estilos de baile. Desde ritmos urbanos hasta los más tradicionales de la costa. 
            Clases para niños, jóvenes y adultos de todos los niveles.
          </p>
        </div>
      </div>
    </section>
  )
}