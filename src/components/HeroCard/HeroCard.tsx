import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import style from "./HeroCard.module.css"
import { useNavigate } from "react-router-dom"
import {
  addFavorites,
  getUserFavorites,
  getUserIsLoggedIn,
  removeFavorites,
} from "../../App/store/userSlice"

interface HeroCardInterface {
  id: string
  image: string
  name: string
  house: string
}

export const HeroCard = (props: HeroCardInterface) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector(getUserIsLoggedIn)
  const favorites = useSelector(getUserFavorites)

  const isFavorite = favorites?.includes(props.id)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isFavorite) {
      dispatch(removeFavorites({ id: props.id }))
    } else {
      dispatch(addFavorites({ id: props.id }))
    }
  }

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).classList.contains(style.button)) {
      navigate(`/hero/${props.id}`)
    }
  }

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
        <button
          className={style.button}
          type="submit"
          onClick={handleFavoriteClick}
        >
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
