import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../App/store/store"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import {
  CharacterContext,
  CharacterContextType,
} from "../../utils/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"

export const Favorite = () => {
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const navigate = useNavigate()
  const { characters } = useContext(CharacterContext) as CharacterContextType
  const favorites = useSelector((state: RootState) => state.userSlice.favorites)
  const [favoriteCharacters, setFavoriteCharacters] = useState(characters)

  useEffect(() => {
    if (!status) {
      navigate("/")
    }
    const filteredCharacters = characters.filter(character =>
      favorites.includes(character.id),
    )
    setFavoriteCharacters(filteredCharacters)
  }, [status, navigate, characters, favorites])

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
