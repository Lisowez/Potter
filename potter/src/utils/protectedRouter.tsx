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
  const isLoggedIn = useSelector(getUserIsLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/" />
  }
  return page
}
