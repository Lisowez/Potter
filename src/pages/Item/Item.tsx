import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Item.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  removeFavorite,
  addFavorite,
  getUserActive,
} from "../../utils/workUser/forWorkWithUser"
import { useGetCharacterByIDQuery } from "../../App/store/api/api"
import {
  addFavorites,
  getUserFavorites,
  getUserIsLoggedIn,
  removeFavorites,
} from "../../App/store/userSlice"
import { NewInterfaceForData } from "../../App/store/api/transformAPI"

const Item = () => {
  const { id } = useParams()
  const { data } = useGetCharacterByIDQuery(id!)
  const [itemData, setItemData] = useState<NewInterfaceForData | null>(null)

  useEffect(() => {
    if (data) {
      setItemData(data[0])
    }
  }, [data])

  const dispatch = useDispatch()

  const status = useSelector(getUserIsLoggedIn)

  const favorites = useSelector(getUserFavorites)

  const isFavorite = favorites.includes(id!)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (isFavorite) {
      dispatch(removeFavorites({ id: id! }))
    } else {
      dispatch(addFavorites({ id: id! }))
    }
  }

  return (
    <div
      className="item"
      style={{
        color: "gold",
        flexDirection: "column",
        gap: "15px",
        fontSize: "30px",
        width: "30%",
        border: "5px solid gold",
        padding: "20px",
      }}
    >
      <img
        className={style.item_img}
        src={itemData?.image}
        alt={itemData?.name}
      />
      <p className={style.item_year}>Year of birth: {itemData?.yearOfBirth}</p>
      <p className={style.item_name}>Name: {itemData?.name}</p>
      <p className={style.item_house}>Faculty: {itemData?.house}</p>
      <p className={style.item_actor}>Actor: {itemData?.actor}</p>
      {status && (
        <button className={style.button} onClick={handleFavoriteClick}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      )}
    </div>
  )
}

export default Item
