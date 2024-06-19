import Image from "next/image";

export default function StoreLayout() {
  return (
    <div className="bg-[#FCF6DA] flex items-center flex-1 min-h-[50rem] lg:min-h-fit">
      <div className="relative mx-auto container h-full lg:h-min lg:aspect-video">
        <Image
          src="/store.png"
          alt="Store"
          layout="fill"
          className="object-fill hidden lg:block"
        />

        <Image
          src="/store-mobile.png"
          alt="Store"
          layout="fill"
          className="object-fill md:object-contain lg:hidden"
        />
      </div>
    </div>
  );
}
