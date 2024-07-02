import "server-only";

import * as queryStore from "@sanity/react-loader";
import { draftMode } from "next/headers";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import {
  BestSeller,
  Category,
  HeroProducts,
  PostDocument,
  Product,
} from "@/types";
import {
  latestPostsQuery,
  postsQuery,
  productByCategoryQuery,
  productBySlugQuery,
  productsQuery,
  queryBestSeller,
  queryCategories,
  queryCategoryBySlug,
  queryHeroProducts,
} from "../lib/queries";

const serverClient = client.withConfig({
  token,
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === "preview",
});

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  } = options;
  // Don't cache by default
  let revalidate: NextFetchRequestConfig["revalidate"] = 0;
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
    stega: draftMode().isEnabled,
  });
}) satisfies typeof queryStore.loadQuery;

export function loadProducts() {
  return loadQuery<Product[]>(
    productsQuery,
    {},
    { next: { tags: ["products"] } },
  );
}

export function loadProductBySlug(slug: string) {
  return loadQuery<Product>(
    productBySlugQuery,
    { slug },
    { next: { tags: ["products", slug] } },
  );
}

export function loadProductsByCategory(categorySlug: string) {
  return loadQuery<Product[]>(
    productByCategoryQuery,
    { categorySlug },
    { next: { tags: ["products", categorySlug] } },
  );
}

export function loadCategories() {
  return loadQuery<Category[]>(
    queryCategories,
    {},
    { next: { tags: ["categories"] } },
  );
}

export function loadCategoryBySlug(slug: string) {
  return loadQuery<Category>(
    queryCategoryBySlug,
    { slug },
    { next: { tags: ["categories", slug] } },
  );
}

export function loadBestSeller() {
  return loadQuery<BestSeller>(
    queryBestSeller,
    { categorySlug: "best-seller" },
    { next: { tags: ["products", "best-seller"] } },
  );
}

export function loadHeroProducts() {
  return loadQuery<HeroProducts>(
    queryHeroProducts,
    {},
    { next: { tags: ["products", "hero-products"] } },
  );
}

export function loadLastPosts() {
  return loadQuery<PostDocument[]>(
    latestPostsQuery,
    {},
    { next: { tags: ["posts", "latest"] } },
  );
}

export function loadPosts() {
  return loadQuery<PostDocument[]>(
    postsQuery,
    {},
    { next: { tags: ["posts"] } },
  );
}
