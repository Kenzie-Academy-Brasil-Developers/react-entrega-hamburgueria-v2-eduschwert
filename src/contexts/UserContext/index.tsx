import { createContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import {
  iLoginForm,
  iProduct,
  iRegisterForm,
  iResponse,
  iUserContext,
  iUserProviderProps,
} from "./types"

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate()
  const [globalLoading, setGlobalLoading] = useState(true)
  const [products, setProducts] = useState<iProduct[] | null>(null)
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if (!token) {
      setGlobalLoading(false)
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
        setGlobalLoading(false)
      }
    }
    loadUser()
  }, [])

  async function login(
    formData: iLoginForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true)
      const response = await api.post<iResponse>("login", formData)
      localStorage.setItem("@TOKEN", response.data.accessToken)
      api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`
      const { data } = await api.get<iProduct[]>("products")
      toast.success("Login efetuado com sucesso")
      setProducts(data)
    } catch (error) {
      toast.error("Email ou senha incorretos")
    } finally {
      setLoading(false)
    }
  }
  async function register(
    formData: iRegisterForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true)
      await api.post<iResponse>("users", formData)
      toast.success("Registro efetuado com sucesso")
      navigate("/")
    } catch (error) {
      toast.error("Email já está em uso")
    } finally {
      setLoading(false)
    }
  }
  const logout = () => {
    localStorage.removeItem("@TOKEN")
    setProducts(null)
  }
  return (
    <UserContext.Provider
      value={{ login, register, globalLoading, products, logout }}
    >
      {children}
    </UserContext.Provider>
  )
}
