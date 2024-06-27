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
import { ArrowLeft, XIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ImagesModalProps = {
  images: GalleryImage[];
};

type DotsProps = {
  api: CarouselApi | null;
};

function Dots({ api }: DotsProps) {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: CarouselApi) => {
    setScrollSnaps(api?.scrollSnapList() ?? []);
  }, []);

  useEffect(() => {
    if (!api) return;

    onInit(api);
    api.on("reInit", onInit);
  }, [api, onInit]);

  if (scrollSnaps.length <= 1) {
    return null;
  }

  return (
    <div className="flex z-[90] w-full bg-black/20 rounded-lg px-2 fixed bottom-12 left-1/2 transform translate-x-[-50%] translate-y-[-50%] right-1/2 pointer-events-auto">
      {scrollSnaps.map((_, index) => {
        const isSelected = api?.selectedScrollSnap() === index;

        return (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              api?.scrollTo(index)
            }}
            className="py-2 px-1 md:py-3 md:px-2"
          >
            <div
              className={cn(
                "size-2.5 md:size-3 rounded-full",
                isSelected ? "bg-white" : "bg-white/50",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export function ImagesModal({ images }: ImagesModalProps) {
  const { handleClose, src } = useImagesModal();

  const isOpen = src !== null;

  const imageIndex = images.findIndex((image) => image.asset._id === src);

  const startIndex = !!src ? Math.min(imageIndex, images.length - 1) : -1;

  const refCarousel = useRef<CarouselApi>(null);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogPortal>
        <div className="fixed top-4 w-full px-4 z-[99] flex items-center justify-between lg:flex-row-reverse pointer-events-auto">
          <button className="lg:hidden" onClick={() => {
            console.log('CLICk')
            handleClose()
          }}>
            <ArrowLeft className="size-8 text-white" />
          </button>

          <button
            className="hidden lg:block bg-foreground/60"
            onClick={() => handleClose()}
          >
            <XIcon className="size-10 text-white" />
          </button>

          <div className="text-white text-sm font-medium bg-foreground/50 rounded-full py-0.5 px-2 cursor-pointer">
            1 / {images.length}
          </div>
        </div>
        <DialogOverlay />

        {/* <Dots api={refCarousel.current} /> */}

        <DialogContent
          onKeyDownCapture={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              refCarousel.current?.scrollNext();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              refCarousel.current?.scrollPrev();
            }
          }}

          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] bg-transparent duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 w-full md:max-w-xl",
          )}
        >
          <Carousel
            ref={refCarousel}
            opts={{
              loop: true,
              startIndex,
            }}
            className="m-auto max-w-[90vw] md:max-w-xl w-full"
            plugins={[AutoHeight()]}
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
        {/* <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      {withClose && (
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content> */}
      </DialogPortal>
    </Dialog>
  );
}
