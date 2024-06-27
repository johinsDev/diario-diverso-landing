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
import Image from "next/image";
import { useRef } from "react";

type ImagesModalProps = {
  images: GalleryImage[];
};

export function ImagesModal({ images }: ImagesModalProps) {
  const { handleClose, src } = useImagesModal();

  const isOpen = src !== null;

  const imageIndex = images.findIndex((image) => image.asset._id === src);

  const startIndex = !!src ? Math.min(imageIndex, images.length - 1) : -1;

  const refCarousel = useRef<CarouselApi>(null);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogPortal>
        <DialogOverlay />
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
                      className="object-contain h-full max-h-[90vh]"
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
