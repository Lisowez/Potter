import { createBrowserRouter } from "react-router-dom"
import { Registration } from "../pages/Registration/Registration"
import { Login } from "../pages/Login/Login"
import Error from "../pages/Error/Error"
import Main from "../pages/Main/Main"
import { Home } from "../pages/Home/Home"
import Item from "../pages/Item/Item"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
    ],
  },
])
