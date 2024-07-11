import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import favoritesSlice from "./favoritesSlice"

export const store = configureStore({
  reducer: { userSlice, favoritesSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
