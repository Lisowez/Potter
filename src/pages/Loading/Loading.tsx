import { Triangle } from "react-loader-spinner"
import style from "./Loading.module.css"
export const Loading = () => {
  return (
    <div className={style.loading}>
      {" "}
      <Triangle
        visible={true}
        height="150"
        width="150"
        color="#FFD700"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}
