import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { Character } from "../../utils/interface/Character"
import style from "./Item.module.css"
import { useDispatch, useSelector } from "react-redux"
import { checkFavorite } from "../../App/store/favoritesSlice"
import { removeFavorite, addFavorite } from "../../utils/LS/forWorkWithUser"
import { RootState } from "../../App/store/store"
import { useGetCharacterByIDQuery } from "../../App/store/api/api"

const Item = () => {
  const { id } = useParams()
  const { data } = useGetCharacterByIDQuery(id!)
  const [itemData, setItemData] = useState<Character | null>(null)

  useEffect(() => {
    if (data) {
      setItemData(data[0])
    }
  }, [data])

  const dispatch = useDispatch()
  const favorites = useSelector(
    (state: RootState) => state.favoritesSlice.favorites,
  )

  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)

  const isFavorite: boolean = favorites.includes(id!)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    isFavorite ? removeFavorite(id!) : addFavorite(id!)
    dispatch(checkFavorite())
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
