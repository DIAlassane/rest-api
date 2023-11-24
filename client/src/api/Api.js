import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export async function productsData() {
    const products = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
    );
    return products.data;  // Assurez-vous de retourner les données et non l'objet de réponse complet
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["ProductsV2"],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => '/client/products',
            providesTags: ["ProductsV2"],
        })
    })
})

// console.log(REACT_APP_BASE_URL)

export const {
    useGetProductsQuery,
} = api;