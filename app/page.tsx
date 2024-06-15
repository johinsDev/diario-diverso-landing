import { AboutUs } from "@/components/home/about-us";
import { BestSeller } from "@/components/home/best-seller";
import { CallToAction } from "@/components/home/call-to-action";
import { Features } from "@/components/home/features";
import { LatestPost } from "@/components/home/latest-post";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container">
      <section className="w-full pb-0 pt-12 lg:py-12 bg-secondary/20 d full-width">
        <div className="container mx-auto flex items-center gap-8 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl text-center lg:text-left md:text-5xl lg:text-6xl font-bold text-foreground">
              La <span className="animate-text bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">clave  para una vida </span>llena de inspiración y relaciones significativas
            </h1>

            <div className="mt-5 text-gray-500 text-center lg:text-left text-lg md:text-2xl">
              Diarios personalizables que impulsan tu creatividad y tu salud mental
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button size={'xxl'} >Comprar</Button>
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:block">
            <div className="flex items-center flex-wrap justify-center h-44 relative full-width overflow-hidden">
              <Image src='/lectura.jpg' width={200} height={200} alt="Hero Image" className="aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-1/2 top-0 -translate-x-1/2" />

              <Image src='/aventuras.jpg' width={200} height={200} alt="Hero Image" className="aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-[20%] top-0 -rotate-[30deg] origin-bottom-right -translate-y-[12%]" />

              <Image src='/crecimiento.jpg' width={200} height={200} alt="Hero Image" className="aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute right-[20%] top-0 rotate-[30deg] origin-bottom-left -translate-y-[12%] " />

              <Image src='/habit.jpg' width={200} height={200} alt="Hero Image" className="aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-[5%] top-0 -rotate-[60deg] origin-bottom-right -translate-y-[12%]" />

              <Image src='/habit.jpg' width={200} height={200} alt="Hero Image" className="aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute right-[5%] top-0 rotate-[60deg] origin-bottom-left -translate-y-[12%]" />\
            </div>
          </div>
        </div>
      </section>

      <BestSeller />

      <AboutUs />

      <Features />

      <LatestPost />

      <CallToAction />
    </main >
  );
}
