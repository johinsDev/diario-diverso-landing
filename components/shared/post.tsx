import { resolveHref, urlForImage } from "@/sanity/lib/utils";
import { PostDocument } from "@/types";
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  post: PostDocument
}


function getMonth(date: string) {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  return months[new Date(date).getMonth()].slice(0, 3)
}

function getDay(date: string) {
  return new Date(date).getDate()
}

export function Post({ post }: PostProps) {
  const image = post.image && urlForImage(post.image)?.width(512).fit("crop").auto("format").url()

  return <Link
    href={resolveHref("post", post.slug)}
    className="flex flex-col rounded-2xl overflow-hidden shadow-lg group relative hover:bg-secondary/40"
  >
    <Image
      src={image || ""}
      width={512}
      height={240}
      alt="Blog"
      className="object-cover w-full aspect-video flex-shrink-0"
      sizes="(min-width: 1024px) 33vw, 100vw"
      placeholder="blur"
      blurDataURL={post.image?.asset.metadata.lqip}
    />

    <div className="px-4 py-5 z-10 absolute right-5 top-5 flex flex-col justify-between bg-white rounded-2xl">
      <div className="text-base font-semibold">
        {getMonth(post.date)}
      </div>
      <div className="text-primary font-semibold text-h3 leading-none mt-1">
        {getDay(post.date)}
      </div>
    </div>

    <div className="p-5 pt-10 text-left text-foreground transition-all duration-300 relative flex-1 flex flex-col justify-between">
      <div className="uppercase bg-primary text-accent-foreground absolute -top-5 rounded h-10 p-2 px-6 py-2 text-base font-semibold transition-all duration-300">
        {post.category.title}
      </div>

      <h5 className="text-xl font-semibold lowercase first-letter:capitalize">
        {post.title}
      </h5>
      <div className="mt-4">
        by <strong>Diario Diverso</strong>
      </div>
    </div>
  </Link>
}
