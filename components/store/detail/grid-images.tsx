"use client";

import { useImagesModal } from "@/app/(website)/store/images-modal";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import { CustomImage, Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

const IMAGES_PER_ROW = 4;

type GridImagesProps = {
  product: Product;
};

type SelectedImage = CustomImage["image"] & {
  src: string | null | undefined;
};

export function GridImages({ product }: GridImagesProps) {
  const images = product.gallery?.images || [];

  const principalImage = images[0];

  const principalImageURL = urlForImage(principalImage)
    ?.width(500)
    .fit("crop")
    .auto("format")
    .url();

  const [selectedImage, setSelectedImage] = useState<SelectedImage>({
    ...principalImage,
    src: principalImageURL,
  });

  const { handleOpen } = useImagesModal();

  const imagesRow = images.slice(0, IMAGES_PER_ROW);

  return (
    <div className="flex flex-col-reverse w-full gap-2 xl:gap-x-4 xl:flex-row xl:items-start xl:w-1/2">
      <div className="flex items-center gap-2 xl:flex-col xl:w-1/4">
        {imagesRow.map((image, index) => {
          const imageUrl =
            image &&
            urlForImage(image)?.width(700).fit("crop").auto("format").url();

          return (
            <div
              key={image.asset._id + index}
              className={cn(
                "aspect-[3/4] hover:ring-2 hover:ring-accent ring-offset-2 py-1 overflow-hidden relative",
              )}
              onMouseEnter={() => setSelectedImage({ ...image, src: imageUrl })}
            >
              {!!imageUrl && (
                <Image
                  src={imageUrl}
                  alt={image.alt || "product"}
                  className="object-contain rounded-md h-full w-full transform hover:scale-105 transition-all duration-300"
                  width={300}
                  height={220}
                  priority
                  sizes="(min-width: 1280px) 300px, 25vw"
                  placeholder="blur"
                  blurDataURL={image.asset.metadata.lqip}
                />
              )}

              {index == imagesRow.length - 1 &&
                images.length > IMAGES_PER_ROW && (
                  <button
                    className="absolute inset-0 bg-black/40 text-white text-center text-3xl font-semibold flex items-center justify-center transition-opacity duration-300"
                    onClick={() => {
                      handleOpen(image.asset._id);
                    }}
                  >
                    + {images.length - IMAGES_PER_ROW}
                  </button>
                )}
            </div>
          );
        })}
      </div>

      <button
        className="overflow-hidden rounded-md min-h-96 xl:w-3/4"
        onClick={() => handleOpen(selectedImage.asset._id)}
      >
        {selectedImage?.src && (
          <Image
            src={selectedImage?.src}
            alt="Kit Plenitud"
            className="h-full object-contain"
            width={500}
            height={700}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={selectedImage.asset.metadata.lqip}
          />
        )}
      </button>
    </div>
  );
}
