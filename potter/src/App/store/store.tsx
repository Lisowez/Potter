import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import favoritesSlice from "./favoritesSlice"
import { api } from "./api/api"

export const store = configureStore({
  reducer: {
    userSlice,
    favoritesSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
