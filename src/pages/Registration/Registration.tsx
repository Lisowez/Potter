import { useNavigate } from "react-router-dom"
import { Credentials, Form } from "../../components/Forms/Form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserIsLoggedIn, login } from "../../App/store/userSlice"
import {
  allUserInfo,
  getAllUser,
  getUserActive,
  setAllUsers,
} from "../../utils/workUser/forWorkWithUser"

export const Registration = () => {
  const status = useSelector(getUserIsLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  useEffect(() => {
    if (status) {
      navigate("/")
    }
  }, [status])

  const onSubmit = (data: Credentials) => {
    let users: allUserInfo[] = getAllUser()

    if (users.filter(x => x.user.email === data.email).length === 0) {
      const userInfo: allUserInfo = {
        user: data,
        history: [],
        favorites: [],
      }
      users.push(userInfo)
      setAllUsers(users)
      dispatch(login(userInfo))
    } else if (users.filter(x => x.user.email === data.email).length > 0) {
      setError("this email address has already been registered")
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    if (getUserActive()) {
      navigate("/")
    }
  }

  return (
    <div className="registration">
      <Form onSubmit={onSubmit} type="registration" error={error} />
    </div>
  )
}
