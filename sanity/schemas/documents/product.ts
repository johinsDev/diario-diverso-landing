// define a schema for product with a title, price, description as portable text, hightligt, and image gallery

import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    orderRankField({ type: "product" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Product title",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
      description: "Product URL",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
      description: "Product price",
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (rule) => rule.max(100),
      description: "Product discount",
    }),
    defineField({
      name: "discountDateStart",
      title: "Discount date",
      type: "date",
      description: "Discount start date",
    }),
    defineField({
      name: "discountDateEnd",
      title: "Discount date",
      type: "date",
      description: "Discount end date",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      description: "Product content",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (rule) => rule.required(),
      description: "Product category",
    }),
    defineField({
      name: "highlightInHome",
      title: "Highlight in home",
      type: "boolean",
      description: "Highlight product on the homepage",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "gallery",
      description: "Product images",
    }),
    // related products
    defineField({
      name: "relatedProducts",
      title: "Related products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
      description: "Related products",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "gallery.images.0",
      subtitle: "category.0.title",
    },
    prepare(value) {
      const { title, media, subtitle } = value;
      return {
        title,
        media,
        subtitle,
      };
    },
  },
});
