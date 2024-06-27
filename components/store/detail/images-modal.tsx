"use client";

import { useImagesModal } from "@/app/(website)/store/images-modal";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import { GalleryImage } from "@/types";
import { DialogContent } from "@radix-ui/react-dialog";
import AutoHeight from "embla-carousel-auto-height";
import { ArrowLeft, ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ImagesModalProps = {
  images: GalleryImage[];
};

type DotsProps = {
  api: CarouselApi | null;
};

function Dots({ api }: DotsProps) {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onInit = useCallback((api: CarouselApi) => {
    setScrollSnaps(api?.scrollSnapList() ?? []);
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    setSelectedIndex(api?.selectedScrollSnap() ?? 0);
  }, []);

  useEffect(() => {
    if (!api) return;

    api?.on("reInit", onInit);
    api?.on("init", onInit);
    api?.on("select", onSelect);
  }, [api, onInit, onSelect]);

  if (scrollSnaps.length <= 1) {
    return null;
  }

  return (
    <div className="flex z-50 w-fit lg:hidden bg-black/20 rounded-lg px-2 fixed bottom-12 left-1/2 transform translate-x-[-50%] translate-y-[-50%] right-1/2 pointer-events-auto">
      {scrollSnaps.map((_, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              api?.scrollTo(index);
            }}
            className="py-2 px-1 md:py-3 md:px-2"
          >
            <div
              className={cn(
                "size-2.5 md:size-3 rounded-full  transition-all duration-500",
                isSelected ? "bg-white" : "bg-white/50",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

type CountProps = {
  api: CarouselApi | null;
};

export function Count({ api }: CountProps) {
  const [total, setTotal] = useState<number>(0);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onInit = useCallback((api: CarouselApi) => {
    setTotal((api?.scrollSnapList() ?? []).length);
    setSelectedIndex(api?.selectedScrollSnap() ?? 0);
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    setSelectedIndex(api?.selectedScrollSnap() ?? 0);
  }, []);

  useEffect(() => {
    if (!api) return;

    api?.on("reInit", onInit);
    api?.on("init", onInit);
    api?.on("select", onSelect);
  }, [api, onInit, onSelect]);

  return (
    <div className="text-white text-sm font-medium bg-foreground/50 rounded-full py-0.5 px-2 cursor-pointer">
      {selectedIndex + 1} / {total}
    </div>
  );
}

type ArrowLeftCarouselProps = {
  api: CarouselApi | null;
};

export function ArrowLeftCarousel({ api }: ArrowLeftCarouselProps) {
  return (
    <button
      className="fixed left-4 transform -translate-y-1/2 top-1/2 z-50  place-content-center p-2 bg-foreground/40 pointer-events-auto hidden lg:grid"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        api?.scrollPrev();
      }}
    >
      <ChevronLeft className="size-10 text-white" />
    </button>
  );
}

type ArrowRightCarouselProps = {
  api: CarouselApi | null;
};

export function ArrowRightCarousel({ api }: ArrowRightCarouselProps) {
  return (
    <button
      className="fixed right-4 transform -translate-y-1/2 top-1/2 z-50  place-content-center p-2 bg-foreground/40 pointer-events-auto hidden lg:grid"
      onClick={(e) => {
        e.stopPropagation();
        api?.scrollNext();
      }}
    >
      <ChevronRight className="size-10 text-white" />
    </button>
  );
}

export function ImagesModal({ images }: ImagesModalProps) {
  const { handleClose, src } = useImagesModal();

  const isOpen = src !== null;

  const imageIndex = images.findIndex((image) => image.asset._id === src);

  const startIndex = !!src ? Math.min(imageIndex, images.length - 1) : -1;

  const [carousel, setCarousel] = useState<CarouselApi | null>(null);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogPortal>
        <div className="fixed top-4 w-full px-4 z-50 flex items-center justify-between lg:flex-row-reverse pointer-events-auto">
          <button
            className="lg:hidden"
            onClick={() => {
              handleClose();
            }}
          >
            <ArrowLeft className="size-8 text-white" />
          </button>

          <button
            className="hidden lg:block bg-foreground/60"
            onClick={() => handleClose()}
          >
            <XIcon className="size-10 text-white" />
          </button>

          <Count api={carousel} />
        </div>
        <DialogOverlay onClick={() => handleClose()} />

        <Dots api={carousel} />

        <ArrowLeftCarousel api={carousel} />

        <ArrowRightCarousel api={carousel} />

        <DialogContent
          onKeyDownCapture={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              carousel?.scrollNext();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              carousel?.scrollPrev();
            }
          }}
          onInteractOutside={(e) => e.preventDefault()}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] bg-transparent duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 w-full md:max-w-xl",
          )}
        >
          <Carousel
            opts={{
              loop: true,
              startIndex,
            }}
            className="m-auto max-w-xl w-full"
            plugins={[AutoHeight()]}
            setApi={setCarousel}
          >
            <CarouselContent className="rounded-none backface-hidden touch-pinch-zoom touch-pan-y items-start">
              {images.map((image, index) => {
                const imageUrl =
                  image &&
                  urlForImage(image)
                    ?.width(1200)
                    .fit("crop")
                    .auto("format")
                    .url();

                if (!imageUrl) {
                  return null;
                }

                return (
                  <CarouselItem key={(image.asset._id ?? "") + index}>
                    <Image
                      src={imageUrl}
                      alt={image.alt || "product"}
                      width={1200}
                      height={900}
                      placeholder="blur"
                      blurDataURL={image.asset.metadata.lqip}
                      className="object-contain h-full max-h-[70vh]"
                      priority={index <= 4}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
