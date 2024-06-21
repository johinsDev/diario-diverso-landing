// define the schema for the home product object image, product reference, and title

import { HomeIcon } from "lucide-react";

import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeProduct",
  title: "Home Product",
  type: "object",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "product.title",
      media: "image",
      productImage: "product.gallery.images.0",
    },
    prepare({ title, media, productImage }) {
      return {
        title: title || "No title",
        media: media || productImage || HomeIcon,
      };
    },
  },
});
