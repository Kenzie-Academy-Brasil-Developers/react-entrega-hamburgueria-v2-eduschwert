import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledButton } from "../../styles/buttons"

import { SList, SSearchList, SSearch } from "./style"

export const ProductsList = () => {
  const { products } = useContext(UserContext)
  //   productsList,
  //   searchedList,
  //   cartProductsList,
  //   searchInput,
  //   setSearchInput,
  //   setCartProductsList,
  //   setInput,

  // const addToCart = (product) => {
  // const findDuplicateItem = cartProductsList.find(
  //   (productCart) => product.id === productCart.id
  // )
  // if (!findDuplicateItem) {
  //   return setCartProductsList((previousCart) => [...previousCart, product])
  // }
  // }
  return (
    //   <SSearchList>
    //     {searchInput !== "" ? (
    //       <SSearch>
    //         <div>
    //           <span>Resultados para: </span>
    //           <span>{searchInput}</span>
    //         </div>
    //         <SButton
    //           onClick={() => {
    //             setSearchInput("")
    //             setInput("")
    //           }}
    //           ButtonType="medium"
    //           ButtonColor="primary"
    //           size={"0.875rem"}
    //           weigth={"500"}
    //         >
    //           Limpar busca
    //         </SButton>
    //       </SSearch>
    //     ) : (
    //       <></>
    //     )}
    <SList>
      {products &&
        products.map((product, i) => (
          <li key={i}>
            <div className="div1">
              <img src={product.img} alt="" />
            </div>
            <div className="div2">
              <h3>{product.name}</h3>
              <small>{product.category}</small>
              <span>
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <StyledButton buttonsize="medium" buttonstyle="grey">
                Adicionar
              </StyledButton>
            </div>
          </li>
        ))}
    </SList>
    //   </SSearchList>
  )
}
