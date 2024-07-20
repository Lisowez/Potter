import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Registration } from "../pages/Registration/Registration"
import { Login } from "../pages/Login/Login"
import ErrorPage from "../pages/Error/Error"
import Main from "../pages/Main/Main"
import { Favorite } from "../pages/Favorite/Favorite"
import { History } from "../pages/History/History"
import { SearchPage } from "../pages/SearchPage/SearchPage"
import { ProtectedRoute } from "./protectedRouter"
const Home = lazy(() => import("../pages/Home/Home"))
const Item = lazy(() => import("../pages/Item/Item"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage text="Sorry, an unexpected error has occurred." />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "hero/:id",
        element: <Item />,
      },
      {
        path: "/favorite",
        element: <ProtectedRoute page={<Favorite />} />,
      },
      {
        path: "/history",
        element: <ProtectedRoute page={<History />} />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
])
