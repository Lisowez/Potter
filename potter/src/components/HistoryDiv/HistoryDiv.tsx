import { Link } from "react-router-dom"
import style from "./HistoryDiv.module.css"
import {
  getUserActive,
  removeHistory,
} from "../../utils/workUser/forWorkWithUser"
import { useDispatch } from "react-redux"
import { checkHistory } from "../../App/store/userSlice"

interface Props {
  item: string
}

export const HistoryDiv = (props: Props) => {
  const dispatch = useDispatch()

  function deleteClick() {
    removeHistory(props.item)
    const user = getUserActive()
    if (user) {
      const userData = JSON.parse(user)
      dispatch(checkHistory({ user: userData }))
    }
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
