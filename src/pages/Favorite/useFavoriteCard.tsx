import { useSelector } from "react-redux"
import { useContext } from "react"
import { CharacterContext } from "../../utils/context/CharacterContext"
import { RootState } from "../../App/store/store"

export const useFavoriteCards = () => {
  const favorites = useSelector((state: RootState) => state.userSlice.favorites)
  const context = useContext(CharacterContext)

  if (context) {
    const { characters } = context
    const favoriteCharacters = characters.filter(character =>
      favorites.includes(character.id),
    )

    return favoriteCharacters
  }

  return []
}
