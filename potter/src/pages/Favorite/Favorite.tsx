import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../App/store"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import {
  CharacterContext,
  CharacterContextType,
} from "../../ulits/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"

export const Favorite = () => {
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const navigate = useNavigate()
  if (!status) navigate("/")
  const favorites = useSelector(
    (state: RootState) => state.favoritesSlice.favorites,
  )
  const dispatch = useDispatch()

  const { characters } = useContext(CharacterContext) as CharacterContextType
  const [favoriteCharacters, setFavoriteCharacter] = useState(characters)

  useEffect(() => {
    const filteredCharacters = characters.filter(character =>
      favorites.includes(character.id),
    )
    setFavoriteCharacter(filteredCharacters)
  }, [favorites, dispatch])

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
