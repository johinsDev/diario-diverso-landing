import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function AboutUs() {
  return (<section className="bg-secondary/20 full-width">
    <div className="container mx-auto text-center py-20 w-full flex items-center flex-col-reverse gap-8 lg:flex-row">
      <div className="lg:w-1/2">
        <Image src="/about-us.png" width={776} height={496} sizes="(min-width: 1024px) 776px, 100vw" alt="About Us" className="object-contain" />
      </div>

      <div className="flex flex-col gap-4 lg:w-1/2 text-left">
        <h2 className="text-h2 leading-h2 font-montserrat font-bold">
          NOSOTROS
        </h2>

        <p className="text-gray-400 text-xl">
          En Diario Diverso, creemos en el poder de las palabras y la constancia para transformar vidas. Nuestra misión es proporcionar herramientas inspiradoras y efectivas que te acompañen en tu viaje de mejora continua, tanto a nivel personal como en tus relaciones.
        </p>

        <p className="text-gray-400 text-xl">
          Ofrecemos una variedad de diarios diseñados para ayudarte a establecer y alcanzar tus metas, desarrollar hábitos positivos y fortalecer tus vínculos. Cada página está pensada para motivarte, guiarte y recordarte tu capacidad para lograr grandes cosas.
        </p>

        <p className="text-gray-400 text-xl">
          Nos apasiona ver cómo nuestros diarios se convierten en un aliado indispensable para nuestros usuarios, ayudándolos a convertirse en la mejor versión de sí mismos.
        </p>

        <Button variant={'link'} size={"xl"} className="font-semibold mr-auto pl-0 mt-auto" asChild>
          <Link href="/nosotros">Conoce más</Link>
        </Button>
      </div>
    </div>
  </section>)
}
