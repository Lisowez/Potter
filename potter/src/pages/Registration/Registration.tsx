import { useNavigate } from "react-router-dom"
import { Credentials, Form } from "../../components/Forms/Form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserActive } from "../../App/store/userSlice"
import { RootState } from "../../App/store/store"
import {
  allUserInfo,
  getAllUser,
  getUserActive,
  setAllUsers,
  setUserActive,
} from "../../utils/LS/forWorkWithUser"

export const Registration = () => {
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  useEffect(() => {
    dispatch(checkUserActive())
    if (status) {
      navigate("/")
    }
  }, [dispatch, status, navigate])

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
      setUserActive(userInfo)
      dispatch(checkUserActive())
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
