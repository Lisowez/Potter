import style from "./Error.module.css"
import { useNavigate } from "react-router-dom"

interface Error {
  statusText?: string
  message?: string
}

interface Error {
  text: string
}

export default function ErrorPage({ text }: Error) {
  const navigate = useNavigate()
  function goHome() {
    navigate("/")
  }

  return (
    <div id="error-page" className={style.error}>
      <h1>Oops!</h1>
      <p>{text}</p>

      <button className={style.goHome} onClick={goHome}>
        Go Home
      </button>
    </div>
  )
}
