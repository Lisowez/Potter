import { useSelector } from "react-redux"
import { RootState } from "../../App/store/store"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import {
  CharacterContext,
  CharacterContextType,
} from "../../utils/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"

export const Favorite = () => {
  const navigate = useNavigate()
  const characterContext = useContext(CharacterContext)
  const characters = characterContext?.characters || []
  const favorites = useSelector((state: RootState) => state.userSlice.favorites)
  const [favoriteCharacters, setFavoriteCharacters] = useState(characters)

  useEffect(() => {
    const filteredCharacters = characters.filter(character =>
      favorites.includes(character.id),
    )
    setFavoriteCharacters(filteredCharacters)
  }, [ navigate, characters, favorites])

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
