"use client";

import { PostDocument } from "@/types";
import { Post } from "../shared/post";
import { useCategory } from "./use-category";

type GridPostsProps = {
  posts: PostDocument[];
};

export function GridPosts({ posts }: GridPostsProps) {
  const selectedCategory = useCategory(s => s.selectedCategory);

  return (
    <div className="w-full lg:w-3/4 grid md:grid-cols-2 gap-8">
      {posts
        .filter((post) => !selectedCategory || post.category._id === selectedCategory._id)
        .map((post) => (
          <Post key={post._id} post={post} />
        ))}
    </div>
  );
}
