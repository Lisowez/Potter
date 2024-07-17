import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { allUserInfo, getUserActive } from "../../utils/LS/forWorkWithUser"

interface UserState {
  isLoggedIn: boolean
  favorites: string[]
}

const initialState: UserState = {
  isLoggedIn: false,
  favorites: [],
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserActive: (
      state,
      action: PayloadAction<{ user: string | null }>,
    ) => {
      state.isLoggedIn = !!action.payload.user
    },
    checkFavorite: (state, action: PayloadAction<{ user: allUserInfo }>) => {
      state.favorites = action.payload.user.favorites
    },
    loadUserData: (state, action: PayloadAction<{ user: allUserInfo }>) => {
      state.isLoggedIn = true
      state.favorites = action.payload.user.favorites
    },
  },
})

export const { checkUserActive, checkFavorite, loadUserData } =
  userSlice.actions
export default userSlice.reducer
