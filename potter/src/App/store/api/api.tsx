import {
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
import { NewInterfaceForData, transformData } from "./transformAPI"

export const api = createApi({
  reducerPath: "potterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hp-api.onrender.com/api" }),
  endpoints: builder => ({
    getCharacters: builder.query<NewInterfaceForData[], void>({
      query: () => "/characters",
      transformResponse: transformData,
    }),
    getCharacterByID: builder.query<NewInterfaceForData[], string>({
      query: (id: string) => `/character/${id}`,
      transformResponse: transformData,
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterByIDQuery } = api
