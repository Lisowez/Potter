import { useState, useEffect } from "react"

function useDebounce<T>(value: T, delay: number): [T, boolean] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (value !== debouncedValue) {
      setIsDebouncing(true)
      timer = setTimeout(() => {
        setDebouncedValue(value)
        setIsDebouncing(false)
      }, delay)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [value, debouncedValue, delay])

  return [debouncedValue, isDebouncing]
}

export default useDebounce
