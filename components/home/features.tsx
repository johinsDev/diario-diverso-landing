import { Laptop } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

type Feature = {
  title: string;
  description: string[];
  icon: string;
}

const FEATURES: Feature[] = [
  {
    title: "Mejora tu salud mental",
    description: ["Reduce el estrés", "Aumenta tu autoconsciencia"],
    icon: ''
  },
  {
    title: "Fomenta tu creatividad",
    description: ["Explora nuevas ideas", "Potencia tu imaginación"],
    icon: ''
  },
  {
    title: "Mejora la productividad",
    description: ["Establecimiento de metas", "Mejor organización"],
    icon: ''
  },
  {
    title: "Fortacelece la memoria",
    description: ["Refuerza el recuerdo", "Aumenta la atención al detalle"],
    icon: ''
  },
  {
    title: "Beneficios emocionales",
    description: ["Procesamiento de emociones", "Aumenta la gratitud"],
    icon: ''
  },
  {
    title: "Refuerzo del compromiso",
    description: ["Monitoreo de progresos", "Responsabilidad personal"],
    icon: ''
  },
  {
    title: "Resolución de problemas",
    description: ["Claridad mental", "Desarrollo de estrategias"],
    icon: ''
  },
  {
    title: "Mejora tus relaciones",
    description: ["Calidad de tiempo", "Nuevas experiencia juntos"],
    icon: ''
  }
]

export function Features() {
  return <div className="full-width overflow-x-hidden">
    <div className="container mx-auto text-center pt-20">
      <div className="text-h2 leading-h2 font-montserrat font-bold lowercase first-letter:capitalize">¿POR QUÉ USAR NUESTROS DIARIOS?</div>

      <Carousel
        opts={{
          loop: true,
          align: 'start',
        }}
        className="mt-8 lg:mt-20 lg:px-12"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {
            FEATURES.map((feature, i) => {
              return (
                <CarouselItem
                  key={i}
                  className="md:basis-[45%] pl-2 md:pl-4 lg:basis-1/3 xl:basis-1/4 basis-[80%]"
                >
                  <article className="bg-primary relative text-white p-6 flex flex-col justify-end gap-4 rounded-2xl hover:bg-accent/60 group cursor-pointer transition-all aspect-[2/3] text-left">
                    <Image src='/bg-service.svg' width={192} height={192} alt="Service Image" className="absolute top-0 size-32 right-0 -rotate-90 transform" />

                    <div className=" bg-white text-black size-20 rounded-full grid place-content-center group-hover:text-white group-hover:bg-black transition-all">
                      <Laptop className="size-12" />
                    </div>

                    <div className="font-montserrat text-2xl font-medium text-white">
                      {feature.title}
                    </div>

                    <ul className="text-gray-100">
                      {
                        feature.description.map((desc, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-xl">•</span>
                            <span>{desc}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </article>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  </div>
}
