import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
            }),
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
  preview: {
    select: {
      images: "images",
      image: "images.0",
    },
    prepare({ images, image }) {
      return {
        title: `Gallery block of ${images.length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      };
    },
  },
});
