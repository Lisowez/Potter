import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Character } from "../../../utils/interface/Character"

export const api = createApi({
  reducerPath: "potterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hp-api.onrender.com/api" }),
  endpoints: builder => ({
    getCharacters: builder.query<Character[], void>({
      query: () => "/characters",
    }),
    getCharacterByID: builder.query<Character[], string>({
      query: (id: string) => `/character/${id}`,
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterByIDQuery } = api
