import { createContext, useState } from "react"
import { iCartContext, iUserProviderProps, iProduct } from "./types"

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
