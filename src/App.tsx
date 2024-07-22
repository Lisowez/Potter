import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./utils/router"
import { useMemo } from "react"
import { CharacterContext } from "./utils/context/CharacterContext"
import { Suspense } from "react"
import { Loading } from "./pages/Loading/Loading"
import { withErrorBoundary } from "react-error-boundary"
import ErrorPage from "./pages/Error/Error"
import { useGetCharactersQuery } from "./App/store/api/api"
import { NewInterfaceForData } from "./App/store/api/transformAPI"

const App = () => {
  const { data, isLoading, error } = useGetCharactersQuery()
  const characters: NewInterfaceForData[] = data ? data : []
  const characterContextValue = useMemo(() => {
    return { characters }
  }, [characters])

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <ErrorPage text={"Data loading error"} />
  }

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
