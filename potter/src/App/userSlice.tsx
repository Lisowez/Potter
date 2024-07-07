import { createSlice } from "@reduxjs/toolkit"

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
      const userActive = localStorage.getItem("userActive")
      state.isLoggedIn = !!userActive
    },
  },
})

export const { checkUserActive } = userSlice.actions
export default userSlice.reducer
