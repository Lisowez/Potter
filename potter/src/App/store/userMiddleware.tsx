import { ListenerMiddleware, createListenerMiddleware } from "@reduxjs/toolkit"
import { getUserActive } from "../../utils/LS/forWorkWithUser"
import { checkFavorite, checkHistory, loadUserData } from "./userSlice"

export const userListenerMiddleware = createListenerMiddleware()

userListenerMiddleware.startListening({
  actionCreator: checkFavorite,
  effect: action => {
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      userData.favorites = action.payload.user.favorites
      localStorage.setItem("userActive", JSON.stringify(userData))
    }
  },
})

userListenerMiddleware.startListening({
  actionCreator: checkHistory,
  effect: action => {
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      userData.history = action.payload.user.history
      localStorage.setItem("userActive", JSON.stringify(userData))
    }
  },
})
