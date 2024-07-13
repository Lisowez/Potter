import logo from "./logo.svg"
import style from "./Header.module.css"
import { HeaderButton } from "../../components/Buttons/HeaderButton"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import {
  CharacterContext,
  CharacterContextType,
} from "../../utils/context/CharacterContext"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../App/store/store"
import {
  checkFavorite,
  checkUserActive,
  loadUserData,
} from "../../App/store/userSlice"
import { removeUser } from "../../utils/LS/forWorkWithUser"

export const Header = () => {
  const [searchText, setSearchText] = useState<string>("")
  const { characters } = useContext(CharacterContext) as CharacterContextType
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isVisibleSuggest, setisVisibleSuggest] = useState(true)

  useEffect(() => {
    dispatch(checkUserActive())
  }, [dispatch, status, navigate])

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

  function onClickLogout() {
    removeUser()
    dispatch(checkUserActive())
    dispatch(checkFavorite())
    navigate("/")
  }

  return (
    <header
      className={style.header}
      onClick={e =>
        (e.target as HTMLElement).classList.contains(style.suggestion) ||
        (e.target as HTMLElement).classList.contains(style.search_input)
          ? setisVisibleSuggest(true)
          : setisVisibleSuggest(false)
      }
    >
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
        {searchText.length > 0 && isVisibleSuggest && (
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
        {status ? (
          <>
            <HeaderButton type="history" />
            <HeaderButton type="favorite" />
            <button className={style.btn} onClick={onClickLogout}>
              logout
            </button>
          </>
        ) : (
          <>
            <HeaderButton type="registration" />
            <HeaderButton type="login" />
          </>
        )}
      </div>
    </header>
  )
}
