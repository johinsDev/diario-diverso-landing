import { Categories } from "@/components/blog/categories";
import { GridPosts } from "@/components/blog/grid-posts";
import { Post } from "@/components/shared/post";
import { loadPosts } from "@/sanity/loader/loadQuery";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "Explora nuestros ultimos articulos.",
};

export default async function StorePage() {
  const { data } = await loadPosts();

  return (
    <main className="flex-1 flex flex-col container pb-4 md:pb-10">
      <section className="bg-accent full-width">
        <div className="container relative p-4 md:p-12">
          <h1 className="text-4xl text-white font-bold mb-2 leading-tight capitalize">
            <span className="block">Explora nuestros </span>
            <span className="block">Ultimos articulos</span>
          </h1>

          <div className="absolute top-0 right-0 bottom-0 hidden lg:block lg:w-1/2">
            <Image
              src="/bg-blog-3.png"
              className="object-cover object-top"
              alt="Hero Image"
              fill
            />
          </div>
        </div>


      </section>

      <section className="w-full flex items-start gap-12 mt-8 lg:mt-16">
        <div className="w-1/4 hidden lg:block">
          <div className="bg-muted p-4 rounded-md">
            <div className="flex gap-2 items-center">
              <div className="bg-primary w-8 rounded-md h-1" />
              <div className="text-2xl font-bold capitalize">Categorias</div>
            </div>

            <Categories posts={data} />
          </div>

          <div className="mt-8">
            <div className="flex gap-2 items-center">
              <div className="bg-primary w-8 rounded-md h-1" />
              <div className="text-2xl font-bold capitalize">
                Ultimos articulos
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {data.slice(0, 2).map((post) => (
                <Post
                  key={post._id}
                  post={post}
                  className="shadow-none hover:bg-secondary/0"
                />
              ))}
            </div>
          </div>
        </div>

        <GridPosts posts={data} />
      </section>
    </main>
  );
}
