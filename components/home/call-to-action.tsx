import Image from "next/image";
import { Button } from "../ui/button";

export function CallToAction() {
  return <section className="relative bg-white py-20 overflow-hidden full-width">
    <div className="bg-background w-screen top-1/2 bottom-0 absolute" />

    <div className="container mx-auto">
      <div className="relative bg-accent/20 rounded-lg px-4 md:px-16 py-12 text-left overflow-hidden flex flex-col">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <h2 className="text-h2 leading-h2 text-foreground font-semibold">
            todavia pensandolo?
          </h2>

          <div className="text-foreground/70 mt-4 text-xl">
            Inspírate, crea y comparte tu viaje con nosotros. ¡Comienza hoy y transforma tu vida!
          </div>

          <Button className="mt-8 px-12 font-semibold" variant={"black"}>Adquirir mi diario</Button>
        </div>

        <div className="absolute top-0 right-0 bottom-0 hidden md:block md:w-2/5 lg:w-1/3">
          <Image src="/cta3.jpg" className="object-cover" alt="Hero Image" fill />
        </div>
      </div>
    </div>
  </section>
}
