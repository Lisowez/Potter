import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getUserIsLoggedIn, loadUserData } from "../App/store/userSlice"
import { getUserActive } from "./workUser/forWorkWithUser"
import { useEffect, useState } from "react"
import { Loading } from "../pages/Loading/Loading"
type Props = {
  page: JSX.Element
}

export const ProtectedRoute = ({ page }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const isLoggedIn = useSelector(getUserIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      dispatch(loadUserData({ user: userData }))
      setIsLoading(false)
    }
  }, [dispatch])

  if (isLoading) {
    return <Loading />
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }
  return page
}
