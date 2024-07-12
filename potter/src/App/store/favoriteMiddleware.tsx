import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit"
import {
  allUserInfo,
  getUserActive,
  setUserActive,
} from "../../utils/LS/forWorkWithUser"
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from "./favoritesSlice"

const favoriteMiddleware = createListenerMiddleware()

favoriteMiddleware.startListening({
  matcher: isAnyOf(addToFavorites, removeFromFavorites, setFavorites),
  effect: async (action, listenerApi) => {
    const userActive = getUserActive()
    if (userActive) {
      const user: allUserInfo = JSON.parse(userActive)
      // @ts-ignore
      user.favorites = listenerApi.getState().favoritesSlice.favorites // так и не понял, что тут сделать,убил часов 5 на это
      setUserActive(user)
    }
  },
})

export default favoriteMiddleware
