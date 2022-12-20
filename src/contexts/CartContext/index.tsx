import { createContext, useState } from "react"

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

interface iCartContext {
  cartProducts: iProduct[]
  setCartProducts: React.Dispatch<React.SetStateAction<iProduct[] | []>>
  cartProductsNoRepeat: iProduct[]
  setCartProductsNoRepeat: React.Dispatch<React.SetStateAction<iProduct[] | []>>
}

export const CartContext = createContext({} as iCartContext)

export const CartProvider = ({ children }: iUserProviderProps) => {
  const [cartProducts, setCartProducts] = useState<iProduct[] | []>([])
  const [cartProductsNoRepeat, setCartProductsNoRepeat] = useState<
    iProduct[] | []
  >([])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        cartProductsNoRepeat,
        setCartProductsNoRepeat,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
