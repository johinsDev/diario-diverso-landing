import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";
import type { Image as ImageType } from "sanity";

import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";

interface ImageBoxProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
  "data-sanity"?: string;
}

export function ImageBox({
  image,
  alt = "Cover image",
  width = 3500,
  height = 2000,
  size = "100vw",
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit("crop").url();

  return (
    <div
      className={`w-full overflow-hidden rounded-[3px] bg-gray-50 ${classesWrapper}`}
      data-sanity={props["data-sanity"]}
    >
      {imageUrl && (
        <Image
          className="absolute h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          placeholder="blur"
          blurDataURL={image.asset.metadata.lqip}
        />
      )}
    </div>
  );
}

export function CustomPortableText({
  paragraphClasses,
  value,
  listBulletClasses,
}: {
  paragraphClasses?: string;
  listBulletClasses?: string;
  value?: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => (
        <ul
          className={cn(
            "list-disc list-inside flex flex-col gap-1",
            listBulletClasses,
          )}
        >
          {children}
        </ul>
      ),
    },
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: ImageType & { alt?: string; caption?: string };
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        );
      },
    },
  };

  if (!value) {
    return null;
  }

  return <PortableText components={components} value={value} />;
}
