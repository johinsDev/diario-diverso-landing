"use client"

import { useImagesModal } from "@/app/store/images-modal";
import { cn } from "@/lib/utils";
import { ImageType, Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

const IMAGES_PER_ROW = 4;

type GridImagesProps = {
  product: Product;
};

export function GridImages({ product }: GridImagesProps) {
  const principalImage =
    product.images.find((image) => image.principal) || product.images[0];

  const [selectedImage, setSelectedImage] = useState<ImageType>(principalImage);

  const { handleOpen } = useImagesModal();

  const imagesRow = product.images.slice(0, IMAGES_PER_ROW);

  return (
    <div className="flex flex-col-reverse w-full gap-2 xl:gap-x-4 xl:flex-row xl:w-1/2">
      <div className="flex items-center gap-2 xl:flex-col xl:w-1/4">
        {imagesRow.map((image, index) => {
          return (
            <div
              key={image.src + index}
              className={cn(
                "bg-white aspect-square rounded-md border border-primary/40 hover:ring-2 hover:ring-accent ring-offset-2 py-1 overflow-hidden relative",
              )}
              onMouseEnter={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-contain rounded-md h-full transform hover:scale-105 transition-all duration-300"
                width={300}
                height={220}
                priority
              />

              {index == imagesRow.length - 1 &&
                product.images.length > IMAGES_PER_ROW && (
                  <button
                    className="absolute inset-0 bg-black/40 text-white text-center text-3xl font-semibold flex items-center justify-center transition-opacity duration-300"
                    onClick={() => {
                      handleOpen(image.src);
                    }}
                  >
                    + {product.images.length - IMAGES_PER_ROW}
                  </button>
                )}
            </div>
          );
        })}
      </div>

      <button
        className="relative rounded-md aspect-video min-h-96 bg-zinc-50 p-4 xl:w-3/4"
        onClick={() => handleOpen(selectedImage.src)}
      >
        <Image
          src={selectedImage.src}
          alt="Kit Plenitud"
          className="w-full h-full rounded-md object-contain"
          width={500}
          height={700}
          priority
        />
      </button>
    </div>
  );
}
