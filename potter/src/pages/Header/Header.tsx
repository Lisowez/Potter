import logo from "./logo.svg"
import style from "./Header.module.css"
import { HeaderButton } from "../../components/Buttons/HeaderButton"
import { useState, useEffect } from "react"
import { Character } from "../../ulits/interface/Character"
import { Link } from "react-router-dom"

export const Header = () => {
  const [searchText, setSearchText] = useState<string>("")
  const [allCharacters, setAllCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  useEffect(() => {
    const responseData = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters",
        )
        const data: Character[] = await response.json()
        setAllCharacters(data)
        setFilteredCharacters(data)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    responseData()
  }, [])

  useEffect(() => {
    const filteredCharacters = allCharacters.filter(character =>
      character.name.toLowerCase().startsWith(searchText.toLowerCase()),
    )
    setFilteredCharacters(filteredCharacters)
  }, [searchText, allCharacters])

  function setInputText(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value)
  }

  function startSearch() {
    console.log(filteredCharacters) // действие при нажатии на кнопку поиска
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
