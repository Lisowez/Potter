import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <img src="" alt="logo" />
      <ul className="header_list">
        <li className="header_list_item">
          <Link to={"/registration"}>Регистрация</Link>
        </li>
        <li className="header_list_item">
          <Link to={"/login"}>Вход</Link>
        </li>
      </ul>
    </header>
  )
}
