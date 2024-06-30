import { useRouteError } from "react-router-dom"

interface Error {
  statusText?: string
  message?: string
}

export default function Error() {
  const error = useRouteError() as Error // пришлось применить as  так как не получалось протипизировать данный элемент

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
