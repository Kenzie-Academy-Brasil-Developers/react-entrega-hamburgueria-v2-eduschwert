import { createContext, useEffect, useState } from "react"

import { api } from "../../services/api"

export const UserContext = createContext({})

interface iLoginForm {
  email: string
  passowrd: string
}
interface iRegisterForm {
  name: string
  email: string
  passowrd: string
}

interface iUserProviderProps {
  children: React.ReactNode
}

interface iProduct {
  id: number
  name: string
  category: string
  price: number
  img: string
}

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<iProduct[] | null>(null)
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if (!token) {
      setLoading(false)
      return
    }
    const loadUser = async () => {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const { data } = await api.get<iProduct[]>("products")
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [])
  const login = (formData: iLoginForm) => {}
  return (
    <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
  )
}
