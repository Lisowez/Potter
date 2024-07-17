import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./utils/router"
import { useEffect, useState, useMemo } from "react"
import { CharacterContext } from "./utils/context/CharacterContext"
import { Suspense } from "react"
import { Loading } from "./pages/Loading/Loading"
import { withErrorBoundary } from "react-error-boundary"
import ErrorPage from "./pages/Error/Error"
import { useGetCharactersQuery } from "./App/store/api/api"
import { NewInterfaceForData } from "./App/store/api/transformAPI"

const App = () => {
  const [characters, setCharacters] = useState<NewInterfaceForData[]>([])
  const { data } = useGetCharactersQuery()
  useEffect(() => {
    if (data) {
      setCharacters(data)
    }
  }, [data])

  const characterContextValue = useMemo(() => {
    return { characters }
  }, [characters])

  return (
    <CharacterContext.Provider value={characterContextValue}>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </div>
    </CharacterContext.Provider>
  )
}

export default withErrorBoundary(App, {
  fallback: <ErrorPage text="Something went wrong" />,
})
