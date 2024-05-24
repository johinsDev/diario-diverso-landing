import { Button } from "@/components/ui/button";
import { Book, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container">
      <header className="sticky top-0 flex h-20 items-center gap-4 w-full bg-background">
        <nav className="hidden w-full flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-12">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold mr-auto"
          >
            <Book className="h-6 w-6 text-primary" />
            <span>Diario Diverso</span>
          </Link>

          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Tienda
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>

          <Button size={'xl'} variant={"outline"} className="ml-auto">Comprar</Button>
        </nav>
      </header>


      <section className="flex items-stretch gap-5 w-full pt-12">
        <div className="flex-1">
          <h1 className="text-title leading-title font-semibold text-stone-800">
            Transforma tu vida con <span className="bg-gradient-to-b from-primary/90 via-primary to-accent-foreground/50 inline-block text-transparent bg-clip-text">Habitos</span>
          </h1>

          <div className="mt-5 text-gray-500 text-base">
            Empowering businesses with innovative digital solutions that create lasting impressions. Elevate your brand with us!
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
      </section>


      <section className="full-width bg-gray-100 mt-28">
        <div className="container mx-auto text-center py-20">
          <div className="text-gray-600">SERVICES</div>
          <div className="text-subTitle font-space font-bold">Our Expertise</div>

          <div className="grid grid-cols-4 mt-10 text-left gap-12">
            {
              new Array(4).fill(0).map((_, i) => (
                <article
                  key={i}
                  className="bg-primary relative text-white p-6 flex flex-col justify-end gap-4 rounded-2xl hover:bg-amber-200 group cursor-pointer transition-all  pt-40">
                  <Image src='/bg-service.svg' width={192} height={192} alt="Service Image" className="absolute top-0 size-36 right-0 -rotate-90 transform" />

                  <div className=" bg-white text-black size-16 rounded-full grid place-content-center group-hover:text-white group-hover:bg-black transition-all">
                    <Laptop className="size-8" />
                  </div>

                  <div className="font-space text-2xl font-medium group-hover:text-foreground">
                    <div>Digital</div>
                    <div>Marketing</div>
                  </div>

                  <div className="text-gray-200 group-hover:text-gray-600">
                    Expand your reach and grow your business with our digital marketing services.
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </section>
    </main >
  );
}
