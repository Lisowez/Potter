import { createBrowserRouter } from "react-router-dom"
import { Registration } from "../components/Registration/Registration"
import { Login } from "../components/Login/Login"
import Error from "../components/Error/Error"
import Main from "../components/Main/Main"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])
