import { Link } from "react-router-dom"
import style from "./HistoryDiv.module.css"
import { useDispatch } from "react-redux"
import { removeHistories } from "../../App/store/userSlice"

interface Props {
  item: string
}

export const HistoryDiv = (props: Props) => {
  const dispatch = useDispatch()

  function deleteClick() {
    dispatch(removeHistories({ text: props.item }))
  }
  return (
    <div className={style.item}>
      <Link className={style.link} to={`/search?${props.item}`}>
        {props.item}
      </Link>
      <button onClick={deleteClick} className={style.button}>
        Delete
      </button>
    </div>
  )
}
