import { AboutUs } from "@/components/home/about-us";
import { BestSeller } from "@/components/home/best-seller";
import { CallToAction } from "@/components/home/call-to-action";
import { Features } from "@/components/home/features";
import { LatestPost } from "@/components/home/latest-post";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Image = {
  src: string;
  className: string;
  base64?: string;
  classNameMobile?: string;
}

const IMAGES = [
  {
    src: '/products/pajeras-azul-1.png',
    className: 'aspect-4/3 object-cover drop-shadow-xl transform -rotate-12 -translate-x-8 translate-y-6 cursor-pointer hover:z-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3',
    classNameMobile: 'aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-[20%] top-0 -rotate-[30deg] origin-bottom-right -translate-y-[12%]'
  },
  {
    src: '/products/lectura-crema-1.png',
    className: 'aspect-4/3 object-cover drop-shadow-xl transform hover:scale-105 duration-300 ease-in-out border hover:z-10 border-secondary/50 cursor-pointer w-1/3',
    classNameMobile: 'aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-1/2 top-0 -translate-x-1/2'
  },
  {
    src: '/products/amigos-verde-9.png',
    className: 'aspect-4/3 object-cover drop-shadow-xl transform rotate-12 translate-x-8 translate-y-6 cursor-pointer hover:z-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3',
    classNameMobile: 'aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute right-[20%] top-0 rotate-[30deg] origin-bottom-left -translate-y-[12%]'
  },
  {
    src: '/products/habitos-verde-3.png',
    className: 'aspect-4/3 object-cover drop-shadow-xl transform -rotate-6 translate-y-1 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 -translate-x-4',
    classNameMobile: 'aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute left-[5%] top-0 -rotate-[60deg] origin-bottom-right -translate-y-[12%]'
  },
  {
    src: '/products/gratitud-azul-7.png',
    className: 'aspect-4/3 object-cover drop-shadow-xl transform rotate-6 translate-y-1 cursor-pointer translate-x-4 hover:z-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3',
    classNameMobile: 'aspect-4/3 object-cover drop-shadow-xl transform cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-secondary/50 w-1/3 absolute right-[5%] top-0 rotate-[60deg] origin-bottom-left -translate-y-[12%]'
  },
]


const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_DOMAIN;


export async function generateBase64(url: string) {
  const base64str = await fetch(
    `${baseUrl}/_next/image?url=${encodeURIComponent(url)}&w=16&q=10`
  ).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64")
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%'
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}


export default async function Home() {
  const images = await Promise.all(
    IMAGES.map(async (image) => {
      const base64 = await generateBase64(image.src);

      return {
        ...image,
        base64
      }
    })
  );

  return (
    <main className="flex min-h-screen flex-col container">
      <section className="w-full pb-0 pt-12 lg:py-12 bg-secondary/20 d full-width">
        <div className="container mx-auto flex items-center gap-8 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl text-center lg:text-left md:text-5xl lg:text-6xl font-bold text-foreground">
              La <span className="animate-text bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">clave  para una vida </span>llena de inspiración y relaciones significativas
            </h1>

            <div className="mt-5 text-gray-500 text-center lg:text-left text-lg md:text-2xl">
              Diarios personalizables que impulsan tu creatividad y tu salud mental
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button size={'xxl'} >Comprar</Button>
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:block">
            <div className="items-center flex-wrap justify-center hidden lg:flex">
              {
                images.map((image) => (
                  <Image key={image.src} src={image.src} width={180} height={260} alt="Hero Image" className={image.className} priority placeholder="blur" blurDataURL={image.base64} />
                ))
              }
            </div>

            <div className="flex items-center flex-wrap justify-center h-44 relative full-width overflow-hidden lg:hidden">
              {
                images.map((image) => (
                  <Image key={image.src} src={image.src} width={180} height={260} alt="Hero Image" className={image.classNameMobile} priority placeholder="blur" blurDataURL={image.base64} />
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <BestSeller />

      <AboutUs />

      <Features />

      <LatestPost />

      <CallToAction />
    </main >
  );
}
