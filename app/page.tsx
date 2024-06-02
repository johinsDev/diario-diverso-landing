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
      <section className="w-full py-12 bg-white full-width">
        <div className="container mx-auto flex items-stretch gap-5">
          <div className="flex-1">
            <h1 className="text-h1 leading-h1 font-semibold text-stone-800">
              Tu vida, tus colores, tu <span className="bg-gradient-to-b from-primary via-primary/80 to-primary/60 inline-block text-transparent bg-clip-text">diario.</span>
            </h1>

            <div className="mt-5 text-gray-500 text-base">
              Descubre Diario Diverso. Un diario para ti, para tus colores, para tu vida.
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button size={'xl'}>Comprar</Button>
              <Button size={'xl'} variant={'link'} className="px-4">Aprender más</Button>
            </div>

            <div className="mt-12">
              <div className="text-gray-500">Worked with</div>

              <div className="flex items-center gap-12 mt-4 text-foreground/90">
                <div className="flex flex-col gap-1 text-left justify-start">
                  <div className="text-5xl font-semibold font-space">100 +</div>
                  <div className="font-semibold">Clients & Partnerships</div>
                </div>
                <div>
                  <div className="flex flex-col gap-1 text-left justify-start">
                    <div className="text-5xl font-semibold font-space">80%</div>
                    <div className="font-semibold">Project Succession Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Image src='/hero.svg' width={500} height={500} layout='responsive' alt="Hero Image" />
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
