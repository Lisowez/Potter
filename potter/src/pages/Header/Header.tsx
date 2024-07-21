import logo from "./logo.svg"
import style from "./Header.module.css"
import { HeaderButton } from "../../components/Buttons/HeaderButton"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import {
  CharacterContext,
  CharacterContextType,
} from "../../utils/context/CharacterContext"
import { useDispatch, useSelector } from "react-redux"
import {
  checkHistory,
  checkUserActive,
  getUserIsLoggedIn,
} from "../../App/store/userSlice"
import {
  addHistory,
  getUserActive,
  removeUser,
} from "../../utils/workUser/forWorkWithUser"
import useDebounce from "./useDebounce"

export const Header = () => {
  const location = useLocation()
  const [searchText, setSearchText] = useState<string>("")
  const [debouncedValue, isDebouncing] = useDebounce(searchText, 500)

  const { characters } = useContext(CharacterContext) as CharacterContextType
  const status = useSelector(getUserIsLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isVisibleSuggest, setIsVisibleSuggest] = useState(true)

  useEffect(() => {
    const user = getUserActive()
    if (user) {
      dispatch(checkUserActive({ user }))
    }
    if (location.pathname === "/search") {
      setSearchText(location.search.slice(1))
    } else {
      setSearchText("")
    }
  }, [dispatch, status, navigate, location])

  function setInputText(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value)
  }

  function startSearch() {
    addHistory(debouncedValue)
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      dispatch(checkHistory({ user: userData }))
    }
    navigate(`/search?${debouncedValue}`)
  }

  function handleClickSuggest(id: string) {
    return () => {
      navigate(`/hero/${id}`)
      setSearchText("")
    }
  }

  function onClickLogout() {
    removeUser()
    const user = getUserActive()
    if (!user) {
      dispatch(checkUserActive({ user: null }))
    }
    navigate("/")
  }

  return (
    <header
      className={style.header}
      onClick={e =>
        (e.target as HTMLElement).classList.contains(style.suggestion) ||
        (e.target as HTMLElement).classList.contains(style.search_input)
          ? setIsVisibleSuggest(true)
          : setIsVisibleSuggest(false)
      }
    >
      <Link to="/">
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
        {debouncedValue.length > 0 && isVisibleSuggest && !isDebouncing && (
          <div className={style.suggestions}>
            {characters
              .filter(x =>
                x.name.toLowerCase().includes(debouncedValue.toLowerCase()),
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
