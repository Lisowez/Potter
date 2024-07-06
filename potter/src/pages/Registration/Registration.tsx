import { useNavigate } from "react-router-dom"
import { Credentials, Form } from "../../components/Forms/Form"
import { useEffect, useState } from "react"

interface allUserInfo {
  user: Credentials
  history: string[]
  favorites: string[]
}

export const Registration = () => {
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
      const userInfo: allUserInfo = {
        user: data,
        history: [],
        favorites: [],
      }
      users.push(userInfo)
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("userActive", JSON.stringify(userInfo))
    } else if (users.filter(x => x.user.email === data.email).length > 0) {
      setError("this email address has already been registered")
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    if (localStorage.getItem("userActive")) {
      navigate("/")
    }
  }

  return (
    <div className="registration">
      <Form onSubmit={onSubmit} type="registration" error={error} />
    </div>
  )
}
