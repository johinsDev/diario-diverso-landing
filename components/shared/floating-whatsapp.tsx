import Image from "next/image";
import Link from "next/link";

export function FloatingWhatsapp() {
  return (
    <Link href="https://wa.me/message/3VYDBVF6QEELO1" target="_blank">
      <div className="fixed bottom-12 right-12 z-50 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 drop-shadow-xl">
        <Image
          src="/whatsapp.svg"
          alt="whatsapp"
          className="w-20 h-20"
          width={80}
          height={80}
          data-ph-capture-attribute-title="Whatsapp Floating Button"
        />
      </div>
    </Link>
  );
}
