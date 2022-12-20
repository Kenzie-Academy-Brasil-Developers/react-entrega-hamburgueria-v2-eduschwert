export interface iUserProviderProps {
  children: React.ReactNode
}

export interface iProduct {
  id: number
  name: string
  category: string
  price: number
  img: string
}

export interface iCartContext {
  cartProducts: iProduct[]
  setCartProducts: React.Dispatch<React.SetStateAction<iProduct[] | []>>
  cartProductsNoRepeat: iProduct[]
  setCartProductsNoRepeat: React.Dispatch<React.SetStateAction<iProduct[] | []>>
}
