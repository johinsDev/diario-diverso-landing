"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import * as resolve from "@/sanity/plugins/resolve";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { colorInput } from "@sanity/color-input";
import category from "./sanity/schemas/documents/category";
import categoryPost from "./sanity/schemas/documents/category-post";
import post from "./sanity/schemas/documents/post";
import product from "./sanity/schemas/documents/product";
import gallery from "./sanity/schemas/objects/gallery";
import homeProduct from "./sanity/schemas/objects/home-product";
import seo from "./sanity/schemas/objects/seo";
import bestSeller from "./sanity/schemas/singletons/best-seller";
import heroProducts from "./sanity/schemas/singletons/hero-products";
import settings from "./sanity/schemas/singletons/settings";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      bestSeller,
      heroProducts,
      settings,
      // Documents
      product,
      category,
      categoryPost,
      post,
      // Objects
      gallery,
      seo,
      homeProduct,
    ],
  },
  plugins: [
    colorInput(),
    structureTool({
      structure: pageStructure([settings, bestSeller, heroProducts]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name, bestSeller.name, heroProducts.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
