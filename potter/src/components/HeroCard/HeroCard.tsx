import { useSelector, useDispatch } from "react-redux"
import style from "./HeroCard.module.css"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../App/store/store"
import { addFavorite, removeFavorite } from "../../utils/LS/forWorkWithUser"
import { checkFavorite, loadUserData } from "../../App/store/userSlice"
import { useEffect } from "react"

interface HeroCardInterface {
  id: string
  image: string
  name: string
  house: string
}

export const HeroCard = (props: HeroCardInterface) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const favorites = useSelector((state: RootState) => state.userSlice.favorites)

  const isFavorite = favorites.includes(props.id)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (isFavorite) {
      removeFavorite(props.id)
      dispatch(checkFavorite())
    } else {
      addFavorite(props.id)
      dispatch(checkFavorite())
    }
  }

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).classList.contains(style.button)) {
      navigate(`/hero/${props.id}`)
    }
  }

  useEffect(() => {
    dispatch(loadUserData())
  }, [])

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
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      )}
    </div>
  )
}
