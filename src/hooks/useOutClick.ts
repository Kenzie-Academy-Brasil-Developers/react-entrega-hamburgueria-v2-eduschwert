import { useEffect, useRef } from "react"

export const useOutclick = (callback: any) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleOutclick = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement
      if (!ref.current?.contains(target)) {
        callback()
      }
    }
    window.addEventListener("mousedown", handleOutclick)
    return () => {
      window.removeEventListener("mousedown", handleOutclick)
    }
  }, [callback])
  return ref
}
