import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {
  allUserInfo,
  getUserActive,
} from "../../utils/workUser/forWorkWithUser"
import { RootState } from "./store"

interface UserState {
  isLoggedIn: boolean
  favorites: string[]
  history: string[]
}

const initialState: UserState = (() => {
  const userJSON = getUserActive()
  if (userJSON) {
    const user: allUserInfo = JSON.parse(userJSON)
    return {
      isLoggedIn: true,
      favorites: user.favorites,
      history: user.history,
    }
  } else {
    return {
      isLoggedIn: false,
      favorites: [],
      history: [],
    }
  }
})()

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<allUserInfo>) => {
      state.isLoggedIn = true
      state.favorites = action.payload.favorites
      state.history = action.payload.history
    },
    logout: state => {
      state.isLoggedIn = false
      state.favorites = []
      state.history = []
    },
    addFavorites: (state, action: PayloadAction<{ id: string }>) => {
      state.favorites.push(action.payload.id)
    },
    removeFavorites: (state, action: PayloadAction<{ id: string }>) => {
      state.favorites = state.favorites.filter(id => id !== action.payload.id)
    },
    addHistories: (state, action: PayloadAction<{ text: string }>) => {
      state.history.push(action.payload.text)
    },
    removeHistories: (state, action: PayloadAction<{ text: string }>) => {
      state.history = state.history.filter(text => text !== action.payload.text)
    },
  },
})

export const {
  login,
  logout,
  addFavorites,
  removeFavorites,
  addHistories,
  removeHistories,
} = userSlice.actions
export default userSlice.reducer

export const getUserFavorites = (state: RootState) => state.userSlice.favorites
export const getUserHistory = (state: RootState) => state.userSlice.history
export const getUserIsLoggedIn = (state: RootState) =>
  state.userSlice.isLoggedIn
