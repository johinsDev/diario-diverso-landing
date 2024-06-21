"use client";

import { useImagesModal } from "@/app/(website)/store/images-modal";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ImageType } from "@/types";
import Image from "next/image";

type ImagesModalProps = {
  images: ImageType[];
};

export function ImagesModal({ images }: ImagesModalProps) {
  const { handleClose, src } = useImagesModal();

  const isOpen = src !== null;

  const imageIndex = images.findIndex((image) => image.src === src);

  const startIndex = !!src
    ? Math.min(imageIndex, images.length - 1)
    : undefined;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        withClose={false}
        className="max-w-[90%] lg:max-w-[80%] xl:max-w-4xl 2xl:max-w-5xl p-0 bg-transparent border-none shadow-none"
      >
        <Carousel
          opts={{
            loop: true,
            startIndex,
          }}
        >
          <CarouselContent className="ml-0 rounded-lg">
            {images.map((image, index) => {
              return (
                <CarouselItem
                  key={image.src + index}
                  className="basis-full relative aspect-[3/4] max-h-[85vh] bg-transparent rounded-lg p-0 overflow-hidden"
                >
                  <Image
                    src={image.src}
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
  );
}
