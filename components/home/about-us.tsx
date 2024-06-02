import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutUs() {
  return (<section className=" bg-white full-width">
    <div className="container mx-auto  text-center py-20 w-full flex items-stretch">
      <div className="w-2/3">
        <Image src="/about-us.svg" width={776} height={496} sizes="(min-width: 1024px) 776px, 100vw" alt="About Us" className="object-contain" />
      </div>
      <div className="flex flex-col gap-4 w-1/3 text-left">
        <div>
          ABOUT
        </div>
        <h2 className="text-h2 leading-h2 font-space font-bold">
          Your Trusted
          Digital Partner
        </h2>

        <div className="text-gray-400 text-xl">
          We are a team of passionate digital experts dedicated to helping client businesses thrive online. With years of proven track record of delivering outstanding digital results.
        </div>

        <Button variant={'link'} size={"xl"} className="font-semibold mr-auto pl-0 mt-auto">Learn More</Button>
      </div>
    </div>
  </section>)
}
