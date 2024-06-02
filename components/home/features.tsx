import { Laptop } from "lucide-react"
import Image from "next/image"

export function Features() {
  return <section className="full-width ">
    <div className="container mx-auto text-center py-20">
      <div className="text-gray-600">SERVICES</div>
      <div className="text-h2 leading-h2 font-space font-bold">Our Expertise</div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 text-left gap-12">
        {
          new Array(4).fill(0).map((_, i) => {
            return (
              <article
                key={i}
                className="bg-primary relative text-white p-6 flex flex-col justify-end gap-4 rounded-2xl hover:bg-accent group cursor-pointer transition-all aspect-[2/3]">
                <Image src='/bg-service.svg' width={192} height={192} alt="Service Image" className="absolute top-0 size-32 right-0 -rotate-90 transform" />

                <div className=" bg-white text-black size-16 rounded-full grid place-content-center group-hover:text-white group-hover:bg-black transition-all">
                  <Laptop className="size-8" />
                </div>

                <div className="font-space text-2xl font-medium text-white">
                  <div>Digital</div>
                  <div>Marketing</div>
                </div>

                <div className="text-gray-100">
                  Expand your reach and grow your business with our digital marketing services.
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  </section>
}
