import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contactApi"],
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (contact, token) => ({
        url: "contact",
        method: "POST",
        body: contact,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApi"],
    }),
    editContact: builder.mutation({
      query: (contact, token, id) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: contact,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApi"],
    }),
    deleteContact: builder.mutation({
      query: (token, id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApi"],
    }),
    getContacts: builder.query({
      query: (token) => ({
        url: "contact",
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["contactApi"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useEditContactMutation,
  useDeleteContactMutation,
} = contactApi;
