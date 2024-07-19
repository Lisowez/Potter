import { useSelector } from "react-redux"
import { RootState } from "../../App/store/store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { HistoryDiv } from "../../components/HistoryDiv/HistoryDiv"

export const History = () => {
  const navigate = useNavigate()
  const status = useSelector((state: RootState) => state.userSlice.isLoggedIn)
  const history = useSelector((state: RootState) => state.userSlice.history)

  useEffect(() => {
    if (!status) {
      navigate("/")
    }
  }, [status, navigate])

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
