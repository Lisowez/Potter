import logo from "./logo.svg"
import style from "./Header.module.css"
import { HeaderButton } from "../../components/Buttons/HeaderButton"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  const [searchText, setSearchText] = useState<string>("")

  function setInputText(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value)
  }

  function startSearch() {
    // console.log(filteredCharacters) // действие при нажатии на кнопку поиска
  }

  return (
    <header className={style.header}>
      <Link to="/">
        {" "}
        <img src={logo} alt="logo" />
      </Link>

      <div className={style.search_div}>
        <input
          className={style.search_input}
          type="text"
          onChange={setInputText}
          value={searchText}
          placeholder="search..."
        />
        <button onClick={startSearch} className={style.search_button}>
          Search
        </button>
      </div>
      <div className={style.buttons_header}>
        <HeaderButton type="registration" />
        <HeaderButton type="login" />
      </div>
    </header>
  )
}
