import { createSlice } from "@reduxjs/toolkit"
import { allUserInfo, getUserActive } from "../ulits/LS/forWorkWithUser"

interface FavoritesState {
  favorites: string[]
}

const initialState: FavoritesState = {
  favorites: [],
}

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    checkFavorite: state => {
      const userActive = getUserActive()
      if (userActive) {
        const user: allUserInfo = JSON.parse(userActive)
        state.favorites = user.favorites
      }
    },
  },
})

export const { checkFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
