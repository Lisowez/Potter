import { useNavigate } from "react-router-dom"
import { Credentials, Form } from "../../components/Forms/Form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getUserIsLoggedIn,
  login,
} from "../../App/store/userSlice"
import {
  allUserInfo,
  getAllUser,
} from "../../utils/workUser/forWorkWithUser"

export const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const status = useSelector(getUserIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status) {
      navigate("/")
    }
  }, [status])

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
      dispatch(login(userActive))
    }
  }

  return (
    <div className="login">
      <Form onSubmit={onSubmit} type="login" error={error} />
    </div>
  )
}
