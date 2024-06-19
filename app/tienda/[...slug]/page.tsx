'use client'

import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState('/products/kit-plenitud.png');



  return (
    <main className="flex-1 flex flex-col container py-4 md:py-20">
      <h1 className="font-semibold">Tienda</h1>

      <div className="mt-2 text-muted-foreground text-xl">
        Consulta nuestra colección completa de productos.
      </div>

      <div className="grid grid-cols-4 grid-rows-4 w-2/5 gap-2 gap-x-4">
        <button className="bg-white aspect-[4/5] rounded-md border border-primary/40 hover:ring-2 hover:ring-accent ring-offset-2 py-1 overflow-hidden"
          // onHover={() => setSelectedImage('/products/kit-plenitud.png')}
          onMouseEnter={() => {
            setSelectedImage('/products/kit-plenitud.png')
          }}
        >

          <Image
            src="/products/kit-plenitud.png"
            alt="Kit Plenitud"
            className="object-contain rounded-md h-full transform hover:scale-105 transition-all duration-300"
            width={300}
            height={220}
          />
        </button>
        <button className="bg-white aspect-[4/5] rounded-md col-start-1 row-start-2  border border-primary/40 hover:ring-2 hover:ring-accent ring-offset-2 py-1 overflow-hidden"
          onMouseEnter={() => setSelectedImage('/products/amigos-verde-1.png')}
        >
          <Image
            src="/products/amigos-verde-1.png"
            alt="Kit Plenitud"
            className="object-contain rounded-md h-full transform hover:scale-105 transition-all duration-300"
            width={300}
            height={220}
          />
        </button>
        <button className="bg-white aspect-[4/5] rounded-md col-start-1 row-start-3 border-2 border-primary/40 hover:ring-2 hover:ring-accent ring-offset-2 py-1 overflow-hidden"
          onMouseEnter={() => setSelectedImage('/products/habitos-azul-11.png')}
        >
          <Image
            src="/products/habitos-azul-11.png"
            alt="Kit Plenitud"
            className="object-contain rounded-md h-full transform hover:scale-105 transition-all duration-300"
            width={300}
            height={220}
          />
        </button>
        <button className="bg-white aspect-[4/5] rounded-md col-start-1 row-start-4 border-2 border-primary/40 hover:ring-2 hover:ring-accent ring-offset-2 py-1 overflow-hidden"
          onMouseEnter={() => setSelectedImage('/products/habitos-verde-3.png')}
        >
          <Image
            src="/products/habitos-verde-3.png"
            alt="Kit Plenitud"
            className="object-contain rounded-md h-full transform hover:scale-105 transition-all duration-300"
            width={300}
            height={220}
          />
        </button>
        <button className="bg-white relative rounded-md col-span-3 row-span-4">
          <Image
            src={selectedImage}
            alt="Kit Plenitud"
            className="object-contain rounded-md"
            width={500}
            height={700}
          />
        </button>
      </div>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent
          withClose={false}
          className="max-w-[90%] lg:max-w-[80%] xl:max-w-4xl 2xl:max-w-5xl p-0"
        >
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="ml-0 rounded-lg">
              {new Array(5).fill(0).map((_, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className="basis-full relative aspect-[3/4] max-h-[85vh] bg-white rounded-lg p-0 overflow-hidden"
                  >
                    <Image
                      src="/products/kit-plenitud.png"
                      alt="Kit Plenitud"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselIndicators className="absolute bottom-4 left-1/2 -translate-x-1/2" />

            <CarouselPrevious
              className="xl:-left-28 bg-white/20 size-14 -left-20 text-white hover:bg-white/20 hidden lg:flex"
              classNameIcon="size-10"
            />
            <CarouselNext
              className="xl:-right-28 bg-white/20 size-14 -right-20 text-white hover:bg-white/20 hidden lg:flex"
              classNameIcon="size-10"
            />
          </Carousel>
        </DialogContent>
      </Dialog>
    </main>
  );
}
