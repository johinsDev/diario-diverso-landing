import Image from "next/image";
import Brain from "../icons/brain";
import HandShake from "../icons/handshake";
import Innovation from "../icons/innovation";
import integration from "../icons/integration";
import Love from "../icons/love";
import Productivity from "../icons/productivity";
import Thinking from "../icons/thinking";
import Together from "../icons/together";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

type Feature = {
  title: string;
  description: string[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const FEATURES: Feature[] = [
  {
    title: "Mejora tu salud mental",
    description: ["Reduce el estrés", "Aumenta tu autoconsciencia"],
    icon: Brain
  },
  {
    title: "Fomenta tu creatividad",
    description: ["Explora nuevas ideas", "Potencia tu imaginación"],
    icon: Innovation
  },
  {
    title: "Mejora la productividad",
    description: ["Establecimiento de metas", "Mejor organización"],
    icon: Productivity
  },
  {
    title: "Fortacelece la memoria",
    description: ["Refuerza el recuerdo", "Aumenta la atención al detalle"],
    icon: integration
  },
  {
    title: "Beneficios emocionales",
    description: ["Procesamiento de emociones", "Aumenta la gratitud"],
    icon: Love
  },
  {
    title: "Refuerzo del compromiso",
    description: ["Monitoreo de progresos", "Responsabilidad personal"],
    icon: Thinking
  },
  {
    title: "Resolución de problemas",
    description: ["Claridad mental", "Desarrollo de estrategias"],
    icon: HandShake
  },
  {
    title: "Mejora tus relaciones",
    description: ["Calidad de tiempo", "Nuevas experiencia juntos"],
    icon: Together
  }
]

export function Features() {
  return <div className="full-width overflow-x-hidden">
    <div className="container mx-auto text-center py-20">
      <div className="text-h3 leading-h3 font-montserrat font-bold lowercase first-letter:capitalize">¿POR QUÉ USAR NUESTROS DIARIOS?</div>

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
              const Icon = feature.icon || Brain;

              return (
                <CarouselItem
                  key={i}
                  className="md:basis-[45%] pl-2 md:pl-4 lg:basis-1/3 xl:basis-1/4 basis-[80%]"
                >
                  <article className="bg-primary relative text-white p-6 flex flex-col justify-end gap-4 rounded-2xl hover:bg-accent/60 group cursor-pointer transition-all aspect-[2/3] text-left">
                    <Image src='/bg-service.svg' width={192} height={192} alt="Service Image" className="absolute top-0 size-32 right-0 -rotate-90 transform" />

                    <div className=" bg-white text-black size-20 rounded-full grid place-content-center group-hover:text-white group-hover:bg-black transition-all">
                      <Icon width={48} height={48} />
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
