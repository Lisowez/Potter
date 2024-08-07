import { useContext } from "react"
import { CharacterContext } from "../../utils/context/CharacterContext"
import { HeroCard } from "../../components/HeroCard/HeroCard"

const Home = () => {
  const context = useContext(CharacterContext)
  if (context) {
    const { characters } = context
    const charactersHome = characters.slice(0, 12)
    return (
      <div
        className="home"
        style={{
          flexDirection: "row",
          gap: "5%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {charactersHome.map(x => {
          return (
            <HeroCard
              id={x.id}
              name={x.name}
              image={x.image}
              house={x.house}
              key={x.id}
            />
          )
        })}
      </div>
    )
  }
}

export default Home
