import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Character } from "../../ulits/interface/Character"
import style from "./Item.module.css"

const Item = () => {
  const { id } = useParams()

  const [itemData, setItemData] = useState<Character | null>(null)

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch(
          `https://hp-api.onrender.com/api/character/${id}`,
        )
        const data: Character[] = await response.json()
        setItemData(data[0])
      } catch (error) {
        throw new Error(`error:${error}`)
      }
    }
    fetchItemData()
  }, [id])

  return (
    <div
      className="item"
      style={{
        color: "gold",
        flexDirection: "column",
        gap: "20px",
        fontSize: "30px",
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
    </div>
  )
}

export default Item
