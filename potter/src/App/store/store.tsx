import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

import { api } from "./api/api"

export const store = configureStore({
  reducer: {
    userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
