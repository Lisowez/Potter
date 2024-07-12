import { useNavigate } from "react-router-dom"
import { Credentials, Form } from "../../components/Forms/Form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserActive } from "../../App/store/userSlice"
import { RootState } from "../../App/store/store"
import {
  allUserInfo,
  getAllUser,
  setUserActive,
} from "../../utils/LS/forWorkWithUser"

export const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserActive())
    if (status) {
      navigate("/")
    }
  }, [dispatch, status, navigate])

  const onSubmit = (data: Credentials) => {
    let users: allUserInfo[] = getAllUser()

    if (users.filter(x => x.user.email === data.email).length === 0) {
      setError("This email address is not registered")
      setTimeout(() => {
        setError("")
      }, 2000)
    } else if (
      users.filter(
        x => x.user.email === data.email && x.user.password !== data.password,
      ).length > 0
    ) {
      setError("password does not match")
      setTimeout(() => {
        setError("")
      }, 2000)
    } else if (
      users.filter(
        x => x.user.email === data.email && x.user.password === data.password,
      ).length > 0
    ) {
      const userActive = users.filter(x => x.user.email === data.email)[0]
      setUserActive(userActive)
      dispatch(checkUserActive())
    }
  }

  return (
    <div className="login">
      <Form onSubmit={onSubmit} type="login" error={error} />
    </div>
  )
}
