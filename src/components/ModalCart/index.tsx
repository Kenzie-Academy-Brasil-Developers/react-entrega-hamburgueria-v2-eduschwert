import React, { useContext } from "react"
import { useOutclick } from "../../hooks/useOutClick"
import xClose from "../../assets/X.svg"
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

export interface iProduct {
  id: number
  name: string
  category: string
  price: number
  img: string
}

export const ModalCart = ({ isClosing, closeModal }: iModalCartProps) => {
  const decreaseProduct = (product: iProduct) => {
    const copyCartProducts = [...cartProducts]
    copyCartProducts.splice(
      copyCartProducts.findIndex(
        (productCopy) => productCopy.id === product.id
      ),
      1
    )
    setCartProducts(copyCartProducts)
    if (
      !copyCartProducts.some((productCopy) => productCopy.id === product.id)
    ) {
      setCartProductsNoRepeat((oldCartProductsNoRepeat) =>
        oldCartProductsNoRepeat.filter(
          (productCopy) => !(productCopy.id === product.id)
        )
      )
    }
  }
  const increaseProduct = (product: iProduct) => {
    setCartProducts((oldCartProducts) => [...oldCartProducts, product])
  }
  const deleteProduct = (product: iProduct) => {
    setCartProducts((oldCartProducts) =>
      oldCartProducts.filter((oldProduct) => !(oldProduct.id === product.id))
    )
    setCartProductsNoRepeat((oldCartProductsNoRepeat) =>
      oldCartProductsNoRepeat.filter(
        (oldProductNoRepeat) => !(oldProductNoRepeat.id === product.id)
      )
    )
  }
  const sumProducts = (productsArr: iProduct[]) =>
    cartProducts
      .reduce((accumulator, product) => accumulator + product.price, 0)
      .toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
  const removeAllProducts = () => {
    setCartProducts([])
    setCartProductsNoRepeat([])
  }
  const modalRef = useOutclick(() => closeModal())
  const {
    cartProducts,
    setCartProducts,
    cartProductsNoRepeat,
    setCartProductsNoRepeat,
  } = useContext(CartContext)
  return (
    <StyledModal isClosing={isClosing}>
      <div ref={modalRef}>
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
            <img src={xClose} alt="X" />
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
                          <button onClick={() => decreaseProduct(product)}>
                            <img src={lessIcon} alt="Ícone de menos" />
                          </button>
                          <div>
                            {
                              cartProducts.filter(
                                (productArr) => productArr.id === product.id
                              ).length
                            }
                          </div>
                          <button onClick={() => increaseProduct(product)}>
                            <img src={plusIcon} alt="Ícone de mais" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <StyledButtonReset onClick={() => deleteProduct(product)}>
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
                  {sumProducts(cartProducts)}
                </SText>
              </div>
              <StyledButton
                onClick={() => removeAllProducts()}
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
