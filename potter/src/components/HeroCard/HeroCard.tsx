import style from "./HeroCard.module.css"

interface heroCardInterface {
  id: string
  image: string
  name: string
  house: string
}

export const HeroCard = (props: heroCardInterface) => {
  return (
    <div
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
    </div>
  )
}
