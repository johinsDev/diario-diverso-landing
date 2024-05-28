import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function LatestPost() {
  return (<section className="bg-white mx-auto text-center py-20 w-full flex flex-col gap-4 items-center">
    <div>
      BLOG
    </div>
    <h2 className="text-h2 leading-h2 font-space font-bold">
      Ultimos Artículos
    </h2>

    <section className="grid grid-cols-3 gap-8 mt-12">
      {
        new Array(3).fill(0).map((_, i) => {
          return <Link href="#" key={i} className="flex flex-col rounded-2xl overflow-hidden shadow-lg group relative">
            <Image src="/entry.webp" width={512} height={240} alt="Blog" className="object-cover w-full h-60" sizes="(min-width: 1024px) 33vw, 100vw" />

            <div className="px-4 py-5 z-10 absolute right-5 top-5 flex flex-col justify-between bg-white rounded-2xl">
              <div className="text-base font-semibold">ENE</div>
              <div className="text-primary font-semibold text-h3 leading-none mt-1">12</div>
            </div>

            <div className="bg-white p-5 pt-10 text-left text-black group-hover:text-white group-hover:bg-primary relative">
              <div className="uppercase bg-primary text-white group-hover:bg-accent group-hover:text-primary absolute -top-5 rounded h-10 p-2 px-6 py-2 text-base font-semibold">
                General
              </div>

              <h5 className="text-2xl font-semibold">Power of Content Marketing: Strategies for Online Success</h5>
              <div className="mt-4">
                by <strong>Diario Diverso</strong>
              </div>
            </div>
          </Link>
        })
      }
    </section>

    <Button variant={'link'} size={"xl"} className="font-semibold mt-12">
      <Link href="/blog">Ver todos los artículos</Link>
    </Button>
  </section>)
}
