import { Credentials } from "../../components/Forms/Form"

export interface allUserInfo {
  user: Credentials
  history: string[]
  favorites: string[]
}

export const getUserActive = (): string | null => {
  const user = localStorage.getItem("userActive")
  return user
}

export const getAllUser = (): allUserInfo[] => {
  const UsersJSON = localStorage.getItem("users")
  let users: allUserInfo[] = UsersJSON ? JSON.parse(UsersJSON) : []
  return users
}

export const setUserActive = (user: allUserInfo) => {
  localStorage.setItem("userActive", JSON.stringify(user))
}

export const setAllUsers = (users: allUserInfo[]) => {
  localStorage.setItem("users", JSON.stringify(users))
}

export const removeUser = () => {
  localStorage.removeItem("userActive")
}

export const addFavorite = (id: string) => {
  const userJSON = getUserActive()
  if (userJSON) {
    const user: allUserInfo = JSON.parse(userJSON)
    user.favorites.push(id)
    const users = getAllUser()
    const index = users.findIndex(x => x.user.email === user.user.email)
    users[index] = user
    setUserActive(user)
    setAllUsers(users)
  }
}

export const removeFavorite = (id: string) => {
  const userJSON = getUserActive()
  if (userJSON) {
    const user: allUserInfo = JSON.parse(userJSON)
    user.favorites = user.favorites.filter(x => x !== id)
    const users = getAllUser()
    const index = users.findIndex(x => x.user.email === user.user.email)
    users[index] = user
    setUserActive(user)
    setAllUsers(users)
  }
}

export const addHistory = (text: string) => {
  const userJSON = getUserActive()
  if (userJSON) {
    const user: allUserInfo = JSON.parse(userJSON)
    if (!user.history.some(x => x === text)) {
      user.history.push(text)
      const users = getAllUser()
      const index = users.findIndex(x => x.user.email === user.user.email)
      users[index] = user
      setUserActive(user)
      setAllUsers(users)
    }
  }
}

export const removeHistory = (text: string) => {
  const userJSON = getUserActive()
  if (userJSON) {
    const user: allUserInfo = JSON.parse(userJSON)
    user.history = user.history.filter(x => x !== text)
    const users = getAllUser()
    const index = users.findIndex(x => x.user.email === user.user.email)
    users[index] = user
    setUserActive(user)
    setAllUsers(users)
  }
}
