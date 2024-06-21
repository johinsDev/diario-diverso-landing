import { AboutUs } from "@/components/home/about-us";
import { BestSeller } from "@/components/home/best-seller";
import { CallToAction } from "@/components/home/call-to-action";
import { Features } from "@/components/home/features";
import { LatestPost } from "@/components/home/latest-post";
import { Button } from "@/components/ui/button";
import { resolveHref, urlForImage } from "@/sanity/lib/utils";
import { loadHeroProducts } from "@/sanity/loader/loadQuery";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

type Image = {
  src: string;
  className: string;
  base64?: string;
  classNameMobile?: string;
  url?: string;
};

const IMAGES = [
  {
    src: "/products/pajeras-azul-1.png",
    className:
      "aspect-4/3 object-cover drop-shadow-xl transform -rotate-12 -translate-x-8 translate-y-6 cursor-pointer hover:z-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3",
    classNameMobile:
      "aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-[20%] top-0 -rotate-[30deg] origin-bottom-right -translate-y-[12%]",
    url: "/tienda/pajeras-azul",
  },
  {
    src: "/products/lectura-crema-1.png",
    className:
      "aspect-4/3 object-cover drop-shadow-xl transform hover:scale-105 duration-300 ease-in-out border hover:z-10 border-secondary/50 cursor-pointer w-1/3",
    classNameMobile:
      "aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-1/2 top-0 -translate-x-1/2",
    url: "/tienda/lectura-crema",
  },
  {
    src: "/products/amigos-verde-9.png",
    className:
      "aspect-4/3 object-cover drop-shadow-xl transform rotate-12 translate-x-8 translate-y-6 cursor-pointer hover:z-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3",
    classNameMobile:
      "aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute right-[20%] top-0 rotate-[30deg] origin-bottom-left -translate-y-[12%]",
    url: "/tienda/amigos-verde",
  },
  {
    src: "/products/habitos-verde-3.png",
    className:
      "aspect-4/3 object-cover drop-shadow-xl transform -rotate-6 translate-y-1 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 -translate-x-4",
    classNameMobile:
      "aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-[5%] top-0 -rotate-[60deg] origin-bottom-right -translate-y-[12%]",
    url: "/tienda/habitos-verde",
  },
  {
    src: "/products/gratitud-azul-7.png",
    className:
      "aspect-4/3 object-cover drop-shadow-xl transform rotate-6 translate-y-1 cursor-pointer translate-x-4 hover:z-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3",
    classNameMobile:
      "aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute right-[5%] top-0 rotate-[60deg] origin-bottom-left -translate-y-[12%]",
    url: "/tienda/gratitud-azul",
  },
];

export default async function Home() {
  const { data } = await loadHeroProducts();

  console.log(data);
  const images = data.products.map((product, index) => {
    const image = product?.image || product?.product?.gallery?.images[0];

    const url = urlForImage(image)?.width(300).fit('crop').url() || '';

    return {
      src: url,
      base64: image?.asset?.metadata?.lqip,
      className: IMAGES[index].className,
      classNameMobile: IMAGES[index].classNameMobile,
      url: resolveHref('product', product?.product?.slug),
    };
  }
  );

  return (
    <main className="flex min-h-screen flex-col container">
      <section className="w-full pb-0 pt-12 lg:py-12 bg-secondary/20 overflow-hidden full-width">
        <div className="container mx-auto flex items-center gap-8 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-h2 leading-h2 text-center lg:text-left font-bold text-foreground font-poppins">
              La{" "}
              <span className="animate-text bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                clave para una vida{" "}
              </span>
              llena de inspiración y relaciones significativas
            </h1>

            <div className="mt-5 text-gray-500 text-center lg:text-left text-lg md:text-2xl">
              Diarios personalizables que impulsan tu creatividad y tu salud
              mental
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button size={"xxl"} asChild>
                <Link href="/tienda">Comprar</Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:block">
            <div className="items-center flex-wrap justify-center hidden lg:flex">
              {images.map((image) => (
                <Link
                  key={image.src}
                  href={image.url}
                  className={image.className}
                >
                  <Image
                    src={image.src}
                    width={180}
                    height={260}
                    alt="Hero Image"
                    priority
                    placeholder="blur"
                    blurDataURL={image.base64}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center flex-wrap justify-center h-52 md:h-80 lg:h-52 relative full-width overflow-hidden lg:hidden">
              {images.map((image) => (
                <Link key={image.src} href={image.url}>
                  <Image
                    src={image.src}
                    width={180}
                    height={260}
                    alt="Hero Image"
                    className={image.classNameMobile}
                    priority
                    placeholder="blur"
                    blurDataURL={image.base64}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Features />

      <Suspense>
        <BestSeller />
      </Suspense>

      <LatestPost />

      <AboutUs />

      <CallToAction />
    </main>
  );
}
