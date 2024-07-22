import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getUserIsLoggedIn } from "../App/store/userSlice"

type Props = {
  page: JSX.Element
}

export const ProtectedRoute = ({ page }: Props) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/" />
  }
  return page
}
