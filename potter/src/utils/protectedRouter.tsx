import { useSelector } from "react-redux"
import { RootState } from "../App/store/store"
import { Navigate } from "react-router-dom"

type Props = {
  page: JSX.Element
}

export const ProtectedRoute = ({ page }: Props) => {
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)

  if (!status) {
    return <Navigate to="/" />
  }

  return page
}
