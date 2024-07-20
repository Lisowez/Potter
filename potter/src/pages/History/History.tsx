import { useSelector } from "react-redux"
import { RootState } from "../../App/store/store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { HistoryDiv } from "../../components/HistoryDiv/HistoryDiv"
import { getUserHistory } from "../../App/store/userSlice"

export const History = () => {
  const history = useSelector(getUserHistory)

  if (history.length === 0) {
    return (
      <div
        className="favorite"
        style={{
          flexDirection: "row",
          gap: "5%",
          flexWrap: "wrap",
          justifyContent: "center",
          color: "gold",
        }}
      >
        History list is empty
      </div>
    )
  }

  return (
    <div
      className="history"
      style={{ color: "gold", flexDirection: "column", gap: `20px` }}
    >
      {history.map(x => {
        return <HistoryDiv key={x} item={x} />
      })}
    </div>
  )
}
