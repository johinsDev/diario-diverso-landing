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
      {/* <AsideThemeEdit /> */}
      {/*
      <div className="size-28 bg-primary text-primary-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>


      <div className="size-28 bg-secondary text-secondary-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>


      <div className="size-28 bg-accent text-accent-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>


      <div className="size-28 bg-destructive text-destructive-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>

      <div className="size-28 bg-popover text-popover-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>

      <div className="size-28 bg-muted text-muted-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>

      <div className="size-28 bg-card text-card-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>


      <div className="size-28 bg-border text-card-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>


      <div className="size-28 bg-input text-card-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div>

      <div className="size-28 bg-ring text-card-foreground text-2xl grid place-content-center">
        <h1>HI</h1>
      </div> */}

      <section className="w-full py-12 bg-secondary/20 d full-width">
        <div className="container mx-auto flex items-stretch gap-5">
          <div className="flex-1">
            <h1 className="text-h1 leading-h1 font-semibold text-stone-800">
              La <span className="text-accent/70">clave</span> para una vida llena de inspiración y relaciones significativas
            </h1>

            <div className="mt-5 text-gray-500 text-base">
              Diarios personalizables que impulsan tu creatividad y tu salud mental
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button size={'xl'} className="uppercase">Comprar</Button>
            </div>

            <div className="mt-12">
              <div className="text-gray-500">Incluye:</div>

              <div className="flex md:items-center gap-8 md:gap-12 mt-4 text-foreground/90 flex-col md:flex-row">
                <div className="flex flex-col gap-1 text-left justify-start">
                  <div className="text-2xl font-semibold font-space md:text-3xl">+5 REFERENCIAS</div>
                  <div className="font-semibold text-sm md:text-base">Para que disfrutes tu proceso y logres tus objetivos</div>
                </div>

                <div>
                  <div className="flex flex-col gap-1 text-left justify-start">
                    <div className="text-2xl font-semibold font-space md:text-3xl">+3 COLORES</div>
                    <div className="font-semibold text-sm md:text-base">Para que eligas tu favorito</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 relative">
            <Image src='/hero-2.png' width={500} height={500} alt="Hero Image" className="w-full aspect-4/3 object-cover drop-shadow-xl" />
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
