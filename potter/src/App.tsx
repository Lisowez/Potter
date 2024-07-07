import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./ulits/router"
import { useEffect, useState, useMemo } from "react"
import { Character } from "./ulits/interface/Character"
import { CharacterContext } from "./ulits/context/CharacterContext"

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const responseData = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters",
        )
        const data: Character[] = await response.json()
        setCharacters(data)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    responseData()
  }, [])

  const characterContextValue = useMemo(() => {
    return { characters }
  }, [characters])

  return (
    <CharacterContext.Provider value={characterContextValue}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </CharacterContext.Provider>
  )
}

export default App
