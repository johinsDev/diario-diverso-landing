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

export default function Page() {
  return (
    <main className="flex-1 flex flex-col container py-4 md:py-20">
      <h1 className="font-semibold">Tienda</h1>

      <div className="mt-2 text-muted-foreground text-xl">
        Consulta nuestra colección completa de productos.
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
