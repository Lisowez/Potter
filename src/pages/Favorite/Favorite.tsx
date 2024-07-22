import { HeroCard } from "../../components/HeroCard/HeroCard"
import { useFavoriteCards } from "./useFavoriteCard"

export const Favorite = () => {
  const favorites = useFavoriteCards()

  if (favorites.length === 0) {
    return (
      <div
        className="favorite"
        style={{
          flexDirection: "row",
          gap: "5%",
          flexWrap: "wrap",
          justifyContent: "center",
          color: "gold",
        }}
      >
        Favorites list is empty
      </div>
    )
  }

  return (
    <div
      className="favorite"
      style={{
        flexDirection: "row",
        gap: "5%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {favorites.map(x => {
        return (
          <HeroCard
            image={x.image}
            id={x.id}
            name={x.name}
            house={x.house}
            key={x.id}
          />
        )
      })}
    </div>
  )
}
