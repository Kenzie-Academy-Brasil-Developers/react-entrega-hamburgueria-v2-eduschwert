import React from "react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { StyledButton } from "../../styles/buttons"
import { SText, STitle } from "../../styles/typography"
import { StyledList } from "./style"

interface iProduct {
  id: number
  name: string
  category: string
  price: number
  img: string
}

interface iProductsProps {
  filteredList: undefined | iProduct[]
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Products = ({
  filteredList: products,
  setOpenModal,
}: iProductsProps) => {
  const { setCartProducts, setCartProductsNoRepeat } = useContext(CartContext)
  return (
    <StyledList>
      {products &&
        products.map((product, i) => (
          <li key={i}>
            <div className="div1">
              <img src={product.img} alt="" />
            </div>
            <div className="div2">
              <STitle
                tag="h3"
                fontSize="1.8rem"
                fontWeigth="700"
                color="var(--color-grey-6)"
              >
                {product.name}
              </STitle>
              <SText
                tag="small"
                fontSize="1.2rem"
                fontWeigth="400"
                color="var(--color-grey-3)"
              >
                {product.category}
              </SText>
              <SText
                tag="span"
                fontSize="1.4rem"
                fontWeigth="600"
                color="var(--color-primary)"
              >
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </SText>
              <StyledButton
                onClick={() => {
                  setCartProducts((oldCartProducts) => [
                    ...oldCartProducts,
                    product,
                  ])
                  setCartProductsNoRepeat((oldCartProductsNoRepeat) =>
                    oldCartProductsNoRepeat.some(
                      (oldProduct) => oldProduct.id === product.id
                    )
                      ? [...oldCartProductsNoRepeat]
                      : [...oldCartProductsNoRepeat, product]
                  )
                  setOpenModal(true)
                }}
                buttonsize="medium"
                buttonstyle="grey-4"
              >
                Adicionar
              </StyledButton>
            </div>
          </li>
        ))}
    </StyledList>
  )
}
