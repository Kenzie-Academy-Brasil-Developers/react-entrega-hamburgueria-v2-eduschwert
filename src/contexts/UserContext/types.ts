export interface iUserProviderProps {
  children: React.ReactNode
}

export interface iLoginForm {
  email: string
  password: string
}
export interface iRegisterForm {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export interface iProduct {
  id: number
  name: string
  category: string
  price: number
  img: string
}

export interface iUser {
  name: string
  email: string
  id: string
}

export interface iResponse {
  user: iUser
  accessToken: string
}

export interface iUserContext {
  login: (
    formData: iLoginForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  register: (
    formData: iRegisterForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  globalLoading: boolean
  products: iProduct[] | null
  logout: () => void
}

export interface iRequestError {
  data: string
}
