import { Link } from "react-router-dom"
import style from "./HeaderButton.module.css"

interface HeaderButtonProps {
  type: string
}

export const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <button className={style.header_button}>
      <Link className={style.link} to={`/${props.type}`}>
        {props.type}
      </Link>
    </button>
  )
}
