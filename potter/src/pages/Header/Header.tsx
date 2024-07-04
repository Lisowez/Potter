import logo from "./logo.svg"
import style from "./Header.module.css"
import { HeaderButton } from "../../components/Buttons/HeaderButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import {
  CharacterContext,
  CharacterContextType,
} from "../../ulits/context/CharacterContext"

export const Header = () => {
  const [searchText, setSearchText] = useState<string>("")
  const { characters } = useContext(CharacterContext) as CharacterContextType
  const navigate = useNavigate()

  function setInputText(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value)
  }

  function startSearch() {
    // console.log(filteredCharacters) // действие при нажатии на кнопку поиска
  }

  function handleClickSuggest(id: string) {
    return () => {
      navigate(`/hero/${id}`)
      setSearchText("")
    }
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
        {searchText.length > 0 && (
          <div className={style.suggestions}>
            {characters
              .filter(x =>
                x.name.toLowerCase().includes(searchText.toLowerCase()),
              )
              .map(x => (
                <div
                  key={x.id}
                  className={style.suggestion}
                  onClick={handleClickSuggest(x.id)}
                >
                  {x.name}
                </div>
              ))}
          </div>
        )}
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
