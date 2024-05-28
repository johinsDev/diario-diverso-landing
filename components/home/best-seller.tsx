import Image from "next/image"
import Link from "next/link"

const IMAGES = ['/habit.jpg', '/aventuras.jpg', '/crecimiento.jpg', '/lectura.jpg']

export function BestSeller() {
  return <section className="full-width bg-[#F0E9DE]/30 mt-20">
    <div className="container mx-auto text-center py-20">
      <div className="text-gray-600">
        BEST SELLER
      </div>
      <div className="text-h2 leading-h2 font-space font-bold">Nuestros diarios</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 text-left gap-12">
        {
          new Array(4).fill(0).map((_, i) => {
            const image = IMAGES[i % IMAGES.length]

            return (
              <Link
                href="#"
                className="relative aspect-[2/3] duration-500 ease-in-out inline-block perspective-750 hover:rotate-z-0"
                key={i}

              >
                <div
                  className="bg-white shadow absolute aspect-[2/3] overflow-hidden w-full rounded scale-[0.99]"
                />

                <div
                  className="transition-all ease-linear duration-500 perspective-[1200px] -translate-y-1/2 transform-style-3d hover:-rotate-y-[32deg] hover:shadow-[20px_10px_50px_rgba(0,_0,_0,_0.2)] origin-[left_center_0px] rounded opacity-100 items-center aspect-[2/3] flex flex-row flex-wrap gap-0 justify-center overflow-hidden p-0 right-0 top-1/2 w-full absolute shadow-journal"
                >
                  <div className="overflow-hidden absolute top-0 left-0 w-6 h-full z-10 opacity-25">
                    <div
                      className="w-[5px] h-full absolute bottom-0 top-0 left-0 opacity-100 overflow-hidden"
                      style={{
                        background: 'linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(212, 212, 212) 100%)'
                      }}
                    />

                    <div
                      style={{
                        background: 'linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(206, 206, 206) 100%)'
                      }}
                      className="opacity-100 w-[5px] h-full absolute bottom-0 top-0 left-0 overflow-hidden"
                    />

                    <div
                      style={{
                        background: 'linear-gradient(90deg, rgba(193, 193, 193, 0) 0%, rgb(193, 193, 193) 100%)',
                      }}
                      className="opacity-100 w-[5px] h-full absolute bottom-0 top-0 right-[5px] overflow-hidden0"
                    />

                    <div
                      style={{
                        background: 'linear-gradient(270deg, rgb(221, 221, 221) 0%, rgb(125, 125, 125) 100%)',
                      }}
                      className="opacity-100 right-1 w-[2px] h-full absolute bottom-0 top-0 overflow-hidden"
                    />

                    <div
                      style={{
                        background: 'linear-gradient(270deg, rgb(221, 221, 221) 0%, rgb(221, 221, 221) 100%)',
                      }}
                      className="opacity-100 w-1 h-full absolute bottom-0 top-0 right-0 overflow-hidden"
                    />
                  </div>
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    layout='responsive'
                    alt="Service Image"
                    className="aspect-[2/3] rounded-tr-lg rounded-br-lg"
                  />
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  </section>
}