import React, { useContext } from "react"
import XClose from "../../assets/X.svg"
import trashIcon from "../../assets/trash-icon.svg"
import lessIcon from "../../assets/less.svg"
import plusIcon from "../../assets/plus.svg"
import { CartContext } from "../../contexts/CartContext"
import { StyledButton, StyledButtonReset } from "../../styles/buttons"
import { SText, STitle } from "../../styles/typography"
import { StyledCart, StyledDivEmptyCart, StyledModal } from "./style"

interface iModalCartProps {
  isClosing: boolean
  closeModal: () => void
}

interface iProduct {
  id: number
  name: string
  category: string
  price: number
  img: string
}

export const ModalCart = ({ isClosing, closeModal }: iModalCartProps) => {
  const {
    cartProducts,
    setCartProducts,
    cartProductsNoRepeat,
    setCartProductsNoRepeat,
  } = useContext(CartContext)
  return (
    <StyledModal isClosing={isClosing}>
      <div>
        <div>
          <STitle
            tag="h4"
            fontSize="1.8rem"
            fontWeigth="700"
            color="var(--color-background)"
          >
            Carrinho de compras
          </STitle>
          <StyledButtonReset
            onClick={() => {
              closeModal()
            }}
          >
            <img src={XClose} alt="X" />
          </StyledButtonReset>
        </div>
        {cartProductsNoRepeat.length === 0 ? (
          <StyledDivEmptyCart>
            <STitle
              tag="h5"
              fontSize="1.8rem"
              fontWeigth="700"
              color="var(--color-grey-6)"
            >
              Sua sacola está vazia
            </STitle>
            <SText
              tag="small"
              fontSize="1.4"
              fontWeigth="400"
              color="var(--color-grey-3)"
            >
              Adicione itens
            </SText>
          </StyledDivEmptyCart>
        ) : (
          <StyledCart>
            <div>
              <ul>
                {cartProductsNoRepeat.map((product) => (
                  <li key={product.id}>
                    <div>
                      <div>
                        <img src={product.img} alt="Imagem do produto" />
                      </div>
                      <div>
                        <STitle
                          tag="h6"
                          fontSize="1.8rem"
                          fontWeigth="700"
                          color="var(--color-grey-6)"
                        >
                          {product.name}
                        </STitle>
                        <div>
                          <button
                            onClick={() => {
                              const arr = [...cartProducts]
                              arr.splice(
                                arr.findIndex(
                                  (productArr) => productArr.id === product.id
                                ),
                                1
                              )
                              setCartProducts(arr)
                              if (
                                !arr.some(
                                  (productArr) => productArr.id === product.id
                                )
                              ) {
                                setCartProductsNoRepeat(
                                  (oldCartProductsNoRepeat) =>
                                    oldCartProductsNoRepeat.filter(
                                      (productArr) =>
                                        !(productArr.id === product.id)
                                    )
                                )
                              }
                            }}
                          >
                            <img src={lessIcon} alt="Ícone de menos" />
                          </button>
                          <div>
                            {
                              cartProducts.filter(
                                (productArr) => productArr.id === product.id
                              ).length
                            }
                          </div>
                          <button
                            onClick={() =>
                              setCartProducts((oldCartProducts) => [
                                ...oldCartProducts,
                                product,
                              ])
                            }
                          >
                            <img src={plusIcon} alt="Ícone de mais" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <StyledButtonReset
                      onClick={() => {
                        setCartProducts((oldCartProducts) =>
                          oldCartProducts.filter(
                            (oldProduct) => !(oldProduct.id === product.id)
                          )
                        )
                        setCartProductsNoRepeat((oldCartProductsNoRepeat) =>
                          oldCartProductsNoRepeat.filter(
                            (oldProductNoRepeat) =>
                              !(oldProductNoRepeat.id === product.id)
                          )
                        )
                      }}
                    >
                      <img src={trashIcon} alt="Ícone de lixeira" />
                    </StyledButtonReset>
                  </li>
                ))}
              </ul>
              <div></div>
              <div>
                <SText
                  tag="p"
                  fontSize="1.4rem"
                  fontWeigth="600"
                  color="var(--color-grey-6)"
                >
                  Total
                </SText>
                <SText
                  tag="p"
                  fontSize="1.4rem"
                  fontWeigth="600"
                  color="var(--color-grey-3)"
                >
                  {cartProducts
                    .reduce(
                      (accumulator, product) => accumulator + product.price,
                      0
                    )
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </SText>
              </div>
              <StyledButton
                onClick={() => {
                  setCartProducts([])
                  setCartProductsNoRepeat([])
                }}
                buttonsize="default"
                buttonstyle="grey-1"
              >
                Remover todos
              </StyledButton>
            </div>
          </StyledCart>
        )}
      </div>
    </StyledModal>
  )
}
