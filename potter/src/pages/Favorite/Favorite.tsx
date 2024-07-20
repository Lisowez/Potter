import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CharacterContext } from "../../utils/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"
import { getUserFavorites } from "../../App/store/userSlice"

export const Favorite = () => {
  const navigate = useNavigate()
  const context = useContext(CharacterContext)
  if (context) {
    const { characters } = context
    const favorites = useSelector(getUserFavorites)
    const [favoriteCharacters, setFavoriteCharacters] = useState(characters)

    useEffect(() => {
      const filteredCharacters = characters.filter(character =>
        favorites.includes(character.id),
      )
      setFavoriteCharacters(filteredCharacters)
    }, [navigate, characters, favorites])

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
