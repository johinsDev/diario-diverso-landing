import { groq } from "next-sanity";

export const productsQuery = groq`
  *[_type == "product"]|order(orderRank) {
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
  *[_type == "product" && $categorySlug in category[]->slug.current]|order(price asc) {
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
  *[_type == "category"]|order(orderRank){
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

export const latestPostsQuery = groq`
  *[_type == "post"]|order(date desc)[0..2] {
    _id,
    title,
    "slug": slug.current,
    date,
    image{
      ...,
      asset->{
        ...,
        "_ref": _id,
      },
    },
    content,
    category->{
      ...,
      "slug": slug.current,
    },
    seo,
  }
`;

export const postsQuery = groq`
  *[_type == "post"]|order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    image{
      ...,
      asset->{
        ...,
        "_ref": _id,
      },
    },
    content,
    category->{
      ...,
      "slug": slug.current,
    },
    seo,
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    image{
      ...,
      asset->{
        ...,
        "_ref": _id,
      },
    },
    content,
    category->{
      ...,
      "slug": slug.current,
    },
    seo,
  }
`;

export const queryCategoriesPosts = groq`
  *[_type == "categoryPost"]|order(orderRank){
    ...,
    _id,
    title,
    "slug": slug.current,
    seo,
  }
`;

export const querySimilarPosts = groq`
  *[_type == "post" && category._ref == $categoryId && slug.current != $slug][0..3] {
    _id,
    title,
    "slug": slug.current,
    date,
    image{
      ...,
      asset->{
        ...,
        "_ref": _id,
      },
    },
    content,
    category->{
      ...,
      "slug": slug.current,
    },
    seo,
  }
`;

export const queryLastProducts = groq`
  *[_type == "product"]|order(_createdAt desc)[0..6] {
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
