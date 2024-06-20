import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => 'items',
        }),
        addItem: builder.mutation({
            query: (newItem) => ({
                url: 'items',
                method: 'POST',
                body: newItem,
            }),
        }),
        updateItem: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `items/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
        deleteItem: builder.mutation({
            query: (id) => ({
                url: `items/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetItemsQuery, useAddItemMutation, useUpdateItemMutation, useDeleteItemMutation } = apiSlice;
export default apiSlice;
