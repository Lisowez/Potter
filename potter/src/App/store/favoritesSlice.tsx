import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FavoritesState {
  favorites: string[]
}

const initialState: FavoritesState = {
  favorites: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(id => id !== action.payload)
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload
    },
  },
})

export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoritesSlice.actions
export default favoritesSlice.reducer
