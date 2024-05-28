import Image from "next/image";
import { Button } from "../ui/button";

export function CallToAction() {
  return <section className="relative pb-24 overflow-hidden full-width">
    <div className="bg-stone-50 w-screen top-1/2 bottom-0 absolute" />

    <div className="container mx-auto">
      <div className="relative bg-[#766DF1] rounded-lg px-16 py-12 text-left overflow-hidden">
        <div className="w-1/2">
          <h2 className="text-h2 leading-h2 text-white font-semibold">
            Ready to transform
            your digital presence?
          </h2>

          <div className="text-gray-200 mt-4 text-xl">
            Let us transform your digital business in just a month.
          </div>

          <Button className="mt-8 px-12 font-semibold" variant={"secondary"}>Get Started</Button>
        </div>

        <Image src="/hero.svg" width={512} height={512} alt="CTA" className="absolute right-0 top-0 w-2/3" />
      </div>
    </div>
  </section>
}
