import { CustomPortableText } from "@/components/shared/custom-portable-text";
import { GridImages } from "@/components/store/detail/grid-images";
import { ProductCard } from "@/components/store/shared/product-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn, getPrice } from "@/lib/utils";
import { _generateMetadata } from "@/sanity/lib/utils";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadProductBySlug } from "@/sanity/loader/loadQuery";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

const ImagesModal = dynamic(
  () =>
    import("@/components/store/detail/images-modal").then(
      (mod) => mod.ImagesModal,
    ),
  {
    ssr: false,
  },
);

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: product } = await loadProductBySlug(params.slug.join("/"));

  return _generateMetadata({
    title: product?.seo?.title || product?.title,
    description: product?.seo?.description || product?.description,
    image: product?.seo?.image || product?.gallery?.images?.[0],
  });
}

export async function generateStaticParams() {
  const slugs = await generateStaticSlugs("product");

  return slugs.map((slug) => [slug]);
}

export default async function Page({ params }: Props) {
  const { data: product } = await loadProductBySlug(params.slug.join("/"));

  if (!product) {
    return notFound();
  }

  const { discount, hasDiscount, price } = getPrice(product);

  return (
    <main className="flex-1 flex flex-col container py-4 md:py-10">
      <ul className="flex items-center text-muted-foreground text-sm  mb-4">
        <li className="flex items-center after:content-[' '] after:size-1 after:bg-muted-foreground/20 after:mx-2 after:rounded-full">
          <Link href="/">Inicio</Link>
        </li>
        <li className="flex items-center after:content-[' '] after:size-1 after:bg-muted-foreground/20 after:mx-2 after:rounded-full">
          <Link href="/tienda">Tienda</Link>
        </li>
        <li className="text-foreground lowercase first-letter:capitalize">
          {product.title}
        </li>
      </ul>

      <div className="flex gap-4 flex-col xl:gap-12 xl:flex-row xl:items-stretch">
        <GridImages product={product} />

        <div className="xl:w-1/2 flex flex-col">
          <div>
            <h1 className="text-h3 leading-h3 uppercase  mb-4">
              {product.title}
            </h1>

            <CustomPortableText
              value={product.description}
              paragraphClasses="text-muted-foreground xl:text-lg"
              listBulletClasses="text-muted-foreground xl:text-lg"
            />
          </div>

          <div>
            <h2 className="text-h3 my-4 md:mt-12 flex items-center gap-4">
              <span>{discount}</span>

              {
                hasDiscount && (
                  <span
                    className={cn(
                      "relative inline-block before:content-[''] before:absolute before:top-1/2 before:left-[-5%] before:w-[110%] before:h-[0.1em] before:bg-primary before:opacity-70 before:rounded-sm text-2xl text-primary/70",
                    )}
                  >
                    {price}
                  </span>
                )
              }
            </h2>

            <Button className="w-full" size={"xl"} variant={"accent"} asChild>
              <Link target="_blank" href="https://wa.me/message/3VYDBVF6QEELO1">
                Comprar ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {!!product.relatedProducts?.length && (
        <section className="mt-8 md:mt-20">
          <h2 className="text-2xl md:text-h3 leading-h3 mb-8">
            Productos relacionados
          </h2>

          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent className="-ml-4">
              {product.relatedProducts.map((product, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className="basis-full pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <ProductCard product={product} key={product._id} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="mt-4 w-full flex justify-end  gap-4">
              <CarouselPrevious
                className="static bg-muted-foreground/90 size-10 cursor-pointer hover:bg-muted-foreground/70"
                classNameIcon="text-white size-8"
              />
              <CarouselNext
                className="static bg-muted-foreground/90 size-10 cursor-pointer hover:bg-muted-foreground/70"
                classNameIcon="text-white size-8"
              />
            </div>
          </Carousel>
        </section>
      )}

      <ImagesModal images={product.gallery?.images ?? []} />
    </main>
  );
}
