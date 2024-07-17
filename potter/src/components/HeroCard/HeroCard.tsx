import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import style from "./HeroCard.module.css"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../App/store/store"
import {
  addFavorite,
  getUserActive,
  removeFavorite,
} from "../../utils/LS/forWorkWithUser"
import { checkFavorite, loadUserData } from "../../App/store/userSlice"
import { Fragment, useEffect } from "react"

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

  const isFavorite = favorites?.includes(props.id)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (isFavorite) {
      removeFavorite(props.id)
    } else {
      addFavorite(props.id)
    }
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      dispatch(checkFavorite({ user: userData }))
    }
  }

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).classList.contains(style.button)) {
      navigate(`/hero/${props.id}`)
    }
  }

  useEffect(() => {
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      dispatch(loadUserData({ user: userData }))
    }
  }, [favorites.length])
  return (
    <div
      onClick={handleCardClick}
      className={style.hero_card}
      id={props.id}
      style={{ color: "gold", padding: "10px", border: "2px solid gold" }}
    >
      {props.image ? (
        <img
          src={props.image}
          alt={props.name}
          style={{ width: "300px", height: "450px" }}
        />
      ) : (
        <div style={{ color: "red" }}>photo is not in the API</div>
      )}
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

HeroCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  house: PropTypes.string,
}
