import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { allUserInfo } from "../../utils/workUser/forWorkWithUser"

interface UserState {
  isLoggedIn: boolean
  favorites: string[]
  history: string[]
}

const initialState: UserState = {
  isLoggedIn: false,
  favorites: [],
  history: [],
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
    checkHistory: (state, action: PayloadAction<{ user: allUserInfo }>) => {
      state.history = action.payload.user.history
    },
    loadUserData: (state, action: PayloadAction<{ user: allUserInfo }>) => {
      state.isLoggedIn = true
      state.favorites = action.payload.user.favorites
      state.history = action.payload.user.history
    },
  },
})

export const { checkUserActive, checkFavorite, loadUserData, checkHistory } =
  userSlice.actions
export default userSlice.reducer
