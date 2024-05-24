import { Button } from "@/components/ui/button";
import { Book, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IMAGES = ['/habit.jpg', '/aventuras.jpg', '/crecimiento.jpg', '/lectura.jpg']

export default function Home() {
  return (<>
    <header className="sticky top-0 flex h-20 items-center gap-4 w-full bg-white z-50">
      <nav className="hidden container mx-auto w-full flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-12">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold mr-auto"
        >
          <Book className="h-6 w-6 text-primary" />
          <span>Diario Diverso</span>
        </Link>

        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          Inicio
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          Tienda
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          Blog
        </Link>

        <Button size={'xl'} variant={"outline"} className="ml-auto">Comprar</Button>
      </nav>
    </header>
    <main className="flex min-h-screen flex-col container">



      <section className="flex items-stretch gap-5 w-full pt-12">
        <div className="flex-1">
          <h1 className="text-title leading-title font-semibold text-stone-800">
            Transforma tu vida con <span className="bg-gradient-to-b from-primary/90 via-primary to-accent-foreground/50 inline-block text-transparent bg-clip-text">Habitos</span>
          </h1>

          <div className="mt-5 text-gray-500 text-base">
            Empowering businesses with innovative digital solutions that create lasting impressions. Elevate your brand with us!
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button size={'xl'}>Comprar</Button>
            <Button size={'xl'} variant={'link'} className="px-4">Aprender más</Button>
          </div>

          <div className="mt-12">
            <div className="text-gray-500">Worked with</div>

            <div className="flex items-center gap-12 mt-4 text-foreground/90">
              <div className="flex flex-col gap-1 text-left justify-start">
                <div className="text-5xl font-semibold font-space">100 +</div>
                <div className="font-semibold">Clients & Partnerships</div>
              </div>
              <div>
                <div className="flex flex-col gap-1 text-left justify-start">
                  <div className="text-5xl font-semibold font-space">80%</div>
                  <div className="font-semibold">Project Succession Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Image src='/hero.svg' width={500} height={500} layout='responsive' alt="Hero Image" />
        </div>
      </section>

      <section className="full-width bg-[#F0E9DE]/30 mt-20">
        <div className="container mx-auto text-center py-20">
          <div className="text-gray-600">
            BEST SELLER
          </div>
          <div className="text-subTitle font-space font-bold">Nuestros diarios</div>

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
                      className="bg-white shadow absolute  aspect-[2/3] overflow-hidden w-full rounded scale-[0.99]"
                    />
                    {/*
                    <Image src='/habit.jpg' width={500} height={500} layout='responsive' alt="Service Image" className="aspect-[2/3] transition-all ease-linear duration-500 transform-style-3d hover:-rotate-y-[32deg] hover:shadow-[20px_10px_50px_rgba(0,_0,_0,_0.2)] origin-[left_center_0px] rounded-tr-lg rounded-br-lg" /> */}

                    <div

                      style={{
                        borderRadius: '6px',
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1.8px 3.6px 0px, rgba(0, 0, 0, 0.08) 0px 10.8px 21.6px 0px, rgba(0, 0, 0, 0.1) 0px -0.9px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 1.8px 1.8px 0px inset, rgba(0, 0, 0, 0.1) 3.6px 0px 3.6px 0px inset',
                        // transform: 'perspective(1200px) translateY(-50%)',
                        opacity: 1,
                        alignItems: 'center',
                        aspectRatio: '2 / 3',
                        display: 'flex',
                        flex: 'none',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        gap: '0px',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        padding: '0',
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        width: '100%',
                      }}
                      className="transition-all ease-linear duration-500 perspective-[1200px] -translate-y-1/2 transform-style-3d hover:-rotate-y-[32deg] hover:shadow-[20px_10px_50px_rgba(0,_0,_0,_0.2)] origin-[left_center_0px] "
                    >

                      <div style={{
                        flex: '0 0 auto',
                        height: '100%',
                        left: '0px',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: '0',
                        width: '24px',
                        zIndex: 1,
                        opacity: 0.21

                        // flex: 0 0 auto;
                        // height: 400px;
                        // left: 0px;
                        // overflow: hidden;
                        // position: absolute;
                        // top: calc(50% - 200px);
                        // width: 24px;
                        // z-index: 1;
                      }}>
                        <div
                          style={{
                            background: 'linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(212, 212, 212) 100%)',
                            opacity: 1,
                            bottom: 0,
                            flex: '0 0 auto',
                            left: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            width: '5px',
                          }}
                        >

                        </div>

                        <div
                          style={{
                            background: 'linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(206, 206, 206) 100%)',
                            opacity: 1,
                            bottom: 0,
                            flex: '0 0 auto',
                            left: '5px',
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            width: '5px',
                          }}
                        >

                        </div>
                        <div style={{
                          background: 'linear-gradient(90deg, rgba(193, 193, 193, 0) 0%, rgb(193, 193, 193) 100%)',
                          opacity: 1,
                          bottom: 0,
                          flex: '0 0 auto',
                          overflow: 'hidden',
                          position: 'absolute',
                          top: 0,
                          right: '5px',
                          width: '5px',
                        }}
                        >
                        </div>

                        <div
                          style={{
                            background: 'linear-gradient(270deg, rgb(221, 221, 221) 0%, rgb(125, 125, 125) 100%)',
                            opacity: 1,
                            bottom: 0,
                            flex: '0 0 auto',
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            right: '4px',
                            width: '2px',
                          }}
                        >

                        </div>

                        <div
                          style={{
                            background: 'linear-gradient(270deg, rgb(221, 221, 221) 0%, rgb(221, 221, 221) 100%)',
                            opacity: 1,
                            bottom: 0,
                            flex: '0 0 auto',
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '4px',
                          }}
                        ></div>
                      </div>

                      <Image src={image} width={500} height={500} layout='responsive' alt="Service Image" className="aspect-[2/3] rounded-tr-lg rounded-br-lg" />

                    </div>

                    {/* <div>
                      <div
                        style={{
                          background: 'linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(212, 212, 212) 100%)'
                        }}
                        className="absolute w-[5px] overflow-hidden left-0 top-0 bottom-0"
                      />

                      <div
                        style={{
                          background: 'linear-gradient(270deg, rgb(206, 206, 206) 0%, rgb(212, 212, 212) 100%)'
                        }}
                        className="absolute w-[5px] overflow-hidden left-[5px] top-0 bottom-0"
                      />
                    </div> */}


                    {/* <div class="framer-1lnxzjy" data-framer-name="Back" style="background-color: rgb(244, 244, 244);border-radius: 6px;opacity: 1;transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(-21deg) skewX(0deg) skewY(0deg) translateZ(0px);"><div class="framer-y1w1ds" data-framer-name="White" style="background-color: rgb(255, 255, 255); opacity: 1; transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(-99deg) skewX(0deg) skewY(0deg) translateZ(0px);"></div></div> */}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="bg-white h-[700px] mx-auto text-center py-20 w-full">
        <div className="text-gray-600">SERVICES</div>
        <div className="text-subTitle font-space font-bold">Our Expertise</div>
      </section>

      <section className="full-width bg-[#F0E9DE]/30">
        <div className="container mx-auto text-center py-20">
          <div className="text-gray-600">SERVICES</div>
          <div className="text-subTitle font-space font-bold">Our Expertise</div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 text-left gap-12">
            {
              new Array(4).fill(0).map((_, i) => {
                return (
                  <article
                    key={i}
                    className="bg-primary relative text-white p-6 flex flex-col justify-end gap-4 rounded-2xl hover:bg-amber-200 group cursor-pointer transition-all pt-32">
                    <Image src='/bg-service.svg' width={192} height={192} alt="Service Image" className="absolute top-0 size-32 right-0 -rotate-90 transform" />

                    <div className=" bg-white text-black size-16 rounded-full grid place-content-center group-hover:text-white group-hover:bg-black transition-all">
                      <Laptop className="size-8" />
                    </div>

                    <div className="font-space text-2xl font-medium group-hover:text-foreground">
                      <div>Digital</div>
                      <div>Marketing</div>
                    </div>

                    <div className="text-gray-200 group-hover:text-gray-600">
                      Expand your reach and grow your business with our digital marketing services.
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </section>


    </main >
  </>
  );
}
