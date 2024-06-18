import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    title: "La Ciencia de la Gratitud: Cómo Llevar un Diario Puede Mejorar tu bienestar",
    category: "Gratitud",
    date: "7 JUN",
    image: "/blog-gratitud.png",
  },
  {
    title: "El poder de la lectura: Cómo un Diario de Lectura Puede Transformar tu Experiencia Literaria",
    category: "Lectura",
    date: "12 JUN",
    image: "/blog-lectura.jpg",
  },
  {
    title: "Construyendo Hábitos Exitosos: El Impacto de un Diario de Hábitos en tu Vida",
    category: "Habitos",
    date: "17 JUN",
    image: "/blog-habitos.jpg",
  },
]

function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-');
}

export function LatestPost() {
  return (<section className="bg-white full-width text-center py-20 w-full flex flex-col gap-4 items-center">
    <div className="container mx-auto">
      <div>
        BLOG
      </div>
      <h2 className="text-h2 leading-h2 font-montserrat font-bold">
        Ultimos Artículos
      </h2>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {
          POSTS.map((post, i) => {
            return <Link href={
              `/blog/${slugify(post.title)}`
            } key={i} className="flex flex-col rounded-2xl overflow-hidden shadow-lg group relative hover:bg-secondary/40">
              <Image src={post.image} width={512} height={240} alt="Blog" className="object-cover w-full h-60 flex-shrink-0" sizes="(min-width: 1024px) 33vw, 100vw" />

              <div className="px-4 py-5 z-10 absolute right-5 top-5 flex flex-col justify-between bg-white rounded-2xl">
                <div className="text-base font-semibold">
                  {post.date.split(' ')[1]}
                </div>
                <div className="text-primary font-semibold text-h3 leading-none mt-1">
                  {post.date.split(' ')[0]}
                </div>
              </div>

              <div className="p-5 pt-10 text-left text-foreground transition-all duration-300 relative flex-1 flex flex-col justify-between">
                <div className="uppercase bg-primary text-accent-foreground absolute -top-5 rounded h-10 p-2 px-6 py-2 text-base font-semibold transition-all duration-300">
                  {post.category}
                </div>

                <h5 className="text-xl font-semibold lowercase first-letter:capitalize">
                  {post.title}
                </h5>
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
    </div>
  </section>)
}
