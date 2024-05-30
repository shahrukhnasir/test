import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productGetApi = createApi({
  reducerPath: 'productGetApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => 'list.php?c=list',
    }),
    getCategoryById: builder.query({
      query: (slug) => `filter.php?c=${slug}`,
    }),
    getProductDetailById: builder.query({
      query: (slug) => `search.php?s=${slug}`,
    }),
    getProductDetailsById: builder.query({
      query: (id) => `lookup.php?i=${id}`,
    }),
    getRandomProduct: builder.query({
      query: (id) => `random.php`,
    }),
  }),
});

export const { useGetCategoryQuery, useGetCategoryByIdQuery, useGetProductDetailByIdQuery ,useGetProductDetailsByIdQuery,useGetRandomProductQuery} = productGetApi;
