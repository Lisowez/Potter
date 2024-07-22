import { createListenerMiddleware } from "@reduxjs/toolkit"
import {
  addFavorite,
  addHistory,
  removeFavorite,
  removeHistory,
  removeUser,
  setUserActive,
} from "../../utils/workUser/forWorkWithUser"
import {
  addFavorites,
  removeFavorites,
  addHistories,
  removeHistories,
  login,
  logout,
} from "./userSlice"

export const userListenerMiddleware = createListenerMiddleware()

userListenerMiddleware.startListening({
  actionCreator: addFavorites,
  effect: action => {
    addFavorite(action.payload.id)
  },
})

userListenerMiddleware.startListening({
  actionCreator: removeFavorites,
  effect: action => {
    removeFavorite(action.payload.id)
  },
})

userListenerMiddleware.startListening({
  actionCreator: addHistories,
  effect: action => {
    addHistory(action.payload.text)
  },
})

userListenerMiddleware.startListening({
  actionCreator: removeHistories,
  effect: action => {
    removeHistory(action.payload.text)
  },
})

userListenerMiddleware.startListening({
  actionCreator: login,
  effect: (action, listenerApi) => {
    setUserActive(action.payload)
  },
})

userListenerMiddleware.startListening({
  actionCreator: logout,
  effect: (action, listenerApi) => {
    removeUser()
  },
})
