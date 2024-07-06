import { useNavigate } from "react-router-dom"
import { Credentials, Form } from "../../components/Forms/Form"
import { useEffect, useState } from "react"

interface allUserInfo {
  user: Credentials
  history: string[]
  favorites: string[]
}

export const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")

  useEffect(() => {
    const userActive = localStorage.getItem("userActive") // заменить на проверку redax
    if (userActive) navigate("/")
  }, [])

  const onSubmit = (data: Credentials) => {
    const UsersJSON = localStorage.getItem("users")
    let users: allUserInfo[] = UsersJSON ? JSON.parse(UsersJSON) : []

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
      localStorage.setItem("userActive", JSON.stringify(userActive))
    }
    if (localStorage.getItem("userActive")) {
      navigate("/")
    }
  }

  return (
    <div className="login">
      <Form onSubmit={onSubmit} type="login" error={error} />
    </div>
  )
}
