import { createSlice } from "@reduxjs/toolkit"
import { getUserActive } from "../ulits/LS/forWorkWithUser"

interface UserState {
  isLoggedIn: boolean
}

const initialState: UserState = {
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserActive: state => {
      const userActive = getUserActive()
      state.isLoggedIn = !!userActive
    },
  },
})

export const { checkUserActive } = userSlice.actions
export default userSlice.reducer
