import { groq } from "next-sanity";

export const productsQuery = groq`
  *[_type == "product"] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    highlightInHome,
    category[]->{
      ...,
      "slug": slug.current,
    },
    gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    seo,
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    highlightInHome,
    relatedProducts[]->{
      ...,
      "slug": slug.current,
      price,
         gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    },
    category[]->{
      ...,
      "slug": slug.current,
    },
    gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    seo,
  }
`;

export const productByCategoryQuery = groq`
  *[_type == "product" && $categorySlug in category[]->slug.current] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    highlightInHome,
    category[]->{
      ...,
      "slug": slug.current,
    },
    gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    seo,
  }
`;

export const queryCategories = groq`
  *[_type == "category"]{
    ...,
    _id,
    title,
    "slug": slug.current,
    seo,
  }
`;

export const queryCategoryBySlug = groq`
  *[_type == "category" && slug.current == $slug][0]{
    ...,
    _id,
    title,
    "slug": slug.current,
    seo,
  }
`;

export const queryBestSeller = groq`
  *[_type == "bestSeller"][0]{
    ...,
    _id,
    products[]->{
      ...,
      "slug": slug.current,
      price,
      gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    },
  }
`;

export const queryHeroProducts = groq`
  *[_type == "heroProducts"][0]{
    ...,
    _id,
    products[0..4]{
      image{
        ...,
        asset->{
          ...,
          "_ref": _id,
        },
      },
      product->{
        ...,
        "slug": slug.current,
        price,
        gallery{
          ...,
          images[]{
            ...,
            asset->{
              ...,
              "_ref": _id,
            },
          },
        },
      },
    },
  }
`;
