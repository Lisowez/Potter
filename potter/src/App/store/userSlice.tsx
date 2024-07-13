import { createSlice } from "@reduxjs/toolkit"
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
    checkUserActive: state => {
      const userActive = getUserActive()
      state.isLoggedIn = !!userActive
    },
    checkFavorite: state => {
      const userActive = getUserActive()
      if (userActive) {
        const user: allUserInfo = JSON.parse(userActive)
        state.favorites = user.favorites
      }
    },
    loadUserData: state => {
      const userActive = getUserActive()
      if (userActive) {
        const user: allUserInfo = JSON.parse(userActive)
        state.isLoggedIn = true
        state.favorites = user.favorites
      }
    },
  },
})

export const { checkUserActive, checkFavorite, loadUserData } =
  userSlice.actions
export default userSlice.reducer
