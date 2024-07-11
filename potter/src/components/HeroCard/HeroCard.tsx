import { useSelector, useDispatch } from "react-redux"
import style from "./HeroCard.module.css"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../App/store"
import { useEffect, useState } from "react"
import {
  addFavorite,
  allUserInfo,
  getUserActive,
  removeFavorite,
} from "../../ulits/LS/forWorkWithUser"
import favoritesSlice, { checkFavorite } from "../../App/favoritesSlice"

interface HeroCardInterface {
  id: string
  image: string
  name: string
  house: string
}

export const HeroCard = (props: HeroCardInterface) => {
  const favorites = useSelector(
    (state: RootState) => state.favoritesSlice.favorites,
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (favorites.some(x => x === props.id)) {
      setIsFavorite(true)
    }
  }, [dispatch, favorites])

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).classList.contains(style.button)) {
      navigate(`/hero/${props.id}`)
    }
  }

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    isFavorite ? setIsFavorite(false) : setIsFavorite(true)
    isFavorite ? removeFavorite(props.id) : addFavorite(props.id)
    dispatch(checkFavorite())
  }

  return (
    <div
      onClick={handleCardClick}
      className={style.hero_card}
      id={props.id}
      style={{ color: "gold", padding: "10px", border: "2px solid gold" }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "300px", height: "450px" }}
      />
      <p className="hero_name">Name: {props.name}</p>
      <p className="hero_house">Faculty: {props.house}</p>
      {status && (
        <button className={style.button} onClick={handleFavoriteClick}>
          {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        </button>
      )}
    </div>
  )
}
