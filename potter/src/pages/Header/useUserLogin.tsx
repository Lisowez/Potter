import { useState, useEffect } from "react"

export const useUserLogin = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false)
  let userActive = localStorage.getItem("userActive")

  useEffect(() => {
    const handleStorageChange = () => {
      userActive = localStorage.getItem("userActive")
      setIsLogined(!!userActive)
    }

    handleStorageChange()

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [userActive])

  const handleLogout = () => {
    localStorage.removeItem("userActive")
    setIsLogined(false)
  }

  return { isLogined, handleLogout }
}
