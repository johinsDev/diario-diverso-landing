import { Categories } from "@/components/blog/categories";
import { GridPosts } from "@/components/blog/grid-posts";
import { Post } from "@/components/shared/post";
import { loadPosts } from "@/sanity/loader/loadQuery";

export default async function StorePage() {
  const { data } = await loadPosts();

  return (
    <main className="flex-1 flex flex-col container py-4 md:py-10">
      <section className="bg-accent p-4 md:p-12 full-width">
        <div className="container">
          <h1 className="text-4xl text-white font-bold mb-2 leading-tight capitalize">
            <span className="block">Explora nuestros </span>
            <span className="block">Ultimos articulos</span>
          </h1>
        </div>
      </section>

      <section className="w-full flex items-start gap-10 mt-8 lg:mt-16">
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
