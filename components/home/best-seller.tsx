import { resolveHref, urlForImage } from "@/sanity/lib/utils";
import { loadBestSeller } from "@/sanity/loader/loadQuery";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const IMAGES = [
  "/products/lectura-azul-13.png",
  "/products/gratitud-verde-5.png",
  "/products/pareja-crema-3.png",
  "/products/amigos-verde-1.png",
  "/products/habitos-azul-11.png",
];

export async function BestSeller() {
  const { data } = await loadBestSeller();

  const products = data?.products || [];

  if (!products.length) {
    return null;
  }

  return (
    <section className="full-width bg-white">
      <div className="container mx-auto text-center py-20">
        <div className="text-h2 leading-h2 font-montserrat font-bold">
          Nuestros diarios
        </div>

        <div className="text-gray-600 text-sm mt-2 lg:text-base lowercase first-letter:capitalize">
          DIFERENTES PORTADAS Y COLORES PARA QUE LO PERSONALICES Y LE DES TU
          ESTILO
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-5 items-center mt-8 lg:mt-16 text-left gap-y-12 gap-x-4 lg:gap-y-16">
          {products.map((product, i) => {
            const image =
              product?.image || product?.product?.gallery?.images?.[0];

            const imageURL =
              image &&
              urlForImage(image)?.width(600).fit("crop").auto("format").url();

            return (
              <Link
                href={resolveHref("product", product?.product?.slug)}
                className="relative aspect-[2/3] min-h-96 duration-500 ease-in-out inline-block perspective-750 hover:rotate-z-0 md:min-h-full"
                key={product._id}
              >
                <div className="bg-white shadow absolute aspect-[2/3] overflow-hidden w-full rounded scale-[0.99]" />

                <div className="transition-all ease-linear duration-500 perspective-[1200px] -translate-y-1/2 transform-style-3d hover:-rotate-y-[32deg] hover:shadow-[20px_10px_50px_rgba(0,_0,_0,_0.2)] origin-[left_center_0px] rounded opacity-100 items-center aspect-[2/3] flex flex-row flex-wrap gap-0 justify-center overflow-hidden p-0 right-0 top-1/2 w-full absolute shadow-journal">
                  <div className="overflow-hidden absolute top-0 left-0 w-6 h-full z-10 opacity-25">
                    <div
                      className="w-[5px] h-full absolute bottom-0 top-0 left-0 opacity-100 overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(212, 212, 212) 100%)",
                      }}
                    />

                    <div
                      style={{
                        background:
                          "linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(206, 206, 206) 100%)",
                      }}
                      className="opacity-100 w-[5px] h-full absolute bottom-0 top-0 left-0 overflow-hidden"
                    />

                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(193, 193, 193, 0) 0%, rgb(193, 193, 193) 100%)",
                      }}
                      className="opacity-100 w-[5px] h-full absolute bottom-0 top-0 right-[5px] overflow-hidden0"
                    />

                    <div
                      style={{
                        background:
                          "linear-gradient(270deg, rgb(221, 221, 221) 0%, rgb(125, 125, 125) 100%)",
                      }}
                      className="opacity-100 right-1 w-[2px] h-full absolute bottom-0 top-0 overflow-hidden"
                    />

                    <div
                      style={{
                        background:
                          "linear-gradient(270deg, rgb(221, 221, 221) 0%, rgb(221, 221, 221) 100%)",
                      }}
                      className="opacity-100 w-1 h-full absolute bottom-0 top-0 right-0 overflow-hidden"
                    />
                  </div>
                  {imageURL && (
                    <Image
                      src={imageURL}
                      width={400}
                      height={590}
                      layout="responsive"
                      alt="Service Image"
                      className="aspect-[2/3]"
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
                      placeholder="blur"
                      blurDataURL={image?.asset?.metadata?.lqip}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <Button size={"xl"} className="mt-12" asChild variant="link">
          <Link href={"/tienda"}>Ver tienda</Link>
        </Button>
      </div>
    </section>
  );
}
