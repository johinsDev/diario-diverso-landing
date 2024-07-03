"use client";

import { useImagesModal } from "@/app/(website)/store/images-modal";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import { GalleryImage } from "@/types";
import { DialogContent } from "@radix-ui/react-dialog";
import { MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ImagesModalProps = {
  images: GalleryImage[];
};

const ImageMotion = motion(Image);

export function ImagesModal({ images }: ImagesModalProps) {
  const { handleClose, src } = useImagesModal();

  const isOpen = src !== null;

  const imageIndex = images.findIndex((image) => image.asset._id === src);

  // intiial index keep all in the same zustand state to fix the issue
  // clone data to create a loop
  // drag and drop to change the order of the images

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
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

            <div className="text-white text-sm font-medium bg-foreground/50 rounded-full py-0.5 px-2 cursor-pointer">
              {index + 1} / {images.length}
            </div>
          </div>

          <DialogOverlay onClick={() => handleClose()} />



          <button
            className="fixed left-4 transform -translate-y-1/2 top-1/2 z-50  place-content-center p-2 bg-foreground/40 pointer-events-auto hidden lg:grid"
            onClick={(e) => {
              handlePrev();
            }}
          >
            <ChevronLeft className="size-10 text-white" />
          </button>

          <button
            className="fixed right-4 transform -translate-y-1/2 top-1/2 z-50  place-content-center p-2 bg-foreground/40 pointer-events-auto hidden lg:grid"
            onClick={(e) => {
              handleNext();
            }}
          >
            <ChevronRight className="size-10 text-white" />
          </button>

          <DialogContent
            onKeyDownCapture={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                handlePrev();
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                handleNext();
              }
            }}
            onInteractOutside={(e) => e.preventDefault()}
            className={cn(
              "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] bg-transparent duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 w-full h-full max-w-[90vw] md:max-w-2xl max-h-[80vh]",
            )}
          >
            <div className="flex z-50 w-fit lg:hidden bg-black/20 rounded-lg px-2 fixed left-1/2 transform translate-x-[-50%] right-1/2 pointer-events-auto -bottom-9">
              {images.map((_, i) => {
                const isSelected = index === i;

                return (
                  <button
                    key={i}
                    onClick={(e) => {
                      setIndex(i);
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

            <div className="w-full h-full overflow-hidden relative grid place-content-center">
              {
                [...images, ...images]
                  .map((image, i) => {
                    const imageUrl =
                      image &&
                      urlForImage(image)
                        ?.width(1200)
                        .fit("crop")
                        .format("webp")
                        .url();

                    if (!imageUrl) return null;

                    return (
                      <motion.div key={image.asset._id + i}

                        className="absolute inset-0 overflow-hidden flex items-center justify-center"
                        animate={{ x: i === index ? 0 : i < index ? "-100%" : "100%" }}
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(event, info) => {
                          if (info.offset.x > 100) {
                            handlePrev();
                          } else if (info.offset.x < -100) {
                            handleNext();
                          }
                        }}
                      >
                        <ImageMotion
                          src={imageUrl}
                          alt={image.alt || "product"}
                          className="object-contain h-full w-full"
                          width={500}
                          height={700}
                          priority
                          sizes="(min-width: 1280px) 500px, 25vw"
                          placeholder="blur"
                          blurDataURL={image.asset.metadata.lqip}
                        />
                      </motion.div>
                    )
                  })}

            </div>

          </DialogContent>
        </DialogPortal>
      </Dialog>
    </MotionConfig>
  );
}
