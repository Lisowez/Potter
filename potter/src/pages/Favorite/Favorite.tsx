import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CharacterContext } from "../../utils/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"
import { getUserFavorites } from "../../App/store/userSlice"

export const Favorite = () => {
  const context = useContext(CharacterContext)
  const favorites = useSelector(getUserFavorites)
  if (context) {
    const { characters } = context

    const favoriteCharacters = characters.filter(character =>
      favorites.includes(character.id),
    )

    if (favoriteCharacters.length === 0) {
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
        {favoriteCharacters.map(x => {
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
}
