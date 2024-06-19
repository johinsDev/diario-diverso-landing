import Image from "next/image";

export default function Maintenance() {
  return (
    <div className="bg-[#FCF6DA] flex items-center flex-1 min-h-[50rem] flex-col lg:min-h-fit">
      <div className="relative mx-auto container h-full lg:h-min lg:aspect-video flex-1">
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
