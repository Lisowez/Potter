import { useContext } from "react"
import { useSearchParams } from "react-router-dom"
import { CharacterContext } from "../../utils/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = [...searchParams.keys()][0]
  const context = useContext(CharacterContext)
  if (context) {
    const { characters } = context
    const searchCharacters = characters.filter(x =>
      x.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    console.log(searchQuery)
    return (
      <div
        className="search"
        style={{
          flexDirection: "row",
          gap: "5%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {searchCharacters.map(x => {
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
