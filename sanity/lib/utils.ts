import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "@/sanity/lib/api";
import { Seo } from "@/types";
import capitalize from "just-capitalize";
import flush from "just-flush";
import { Metadata } from "next";
import { toPlainText } from "next-sanity";

export const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format");
};

export function urlForOpenGraphImage(image: Image | undefined) {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url();
}

export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case "product":
      return `/tienda/${slug}`;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}

export function _generateMetadata(seo?: Seo): Metadata {
  const ogImage = urlForOpenGraphImage(seo?.image);

  return flush({
    title: seo?.title ? capitalize(seo?.title) : undefined,
    description: seo?.description ? toPlainText(seo?.description) : undefined,
    image: ogImage ? { url: ogImage } : undefined,
  });
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const extractYoutubeId = (url: string) => {
  const match = url.match(
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );

  return match ? match[1] : undefined;
};
