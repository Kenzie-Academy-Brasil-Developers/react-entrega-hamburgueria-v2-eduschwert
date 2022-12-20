import React, { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CartContext } from "../../contexts/CartContext"
import { ContainerDashboard } from "../../styles/Container"
import logo from "../../assets/logo.svg"
import logoutIMG from "../../assets/logout.svg"
import cart from "../../assets/cart.svg"
import searchIcon from "../../assets/search-icon.svg"
import buttonSearch from "../../assets/button-search.svg"
import {
  StyledButtonHeaderCart,
  StyledButtonResetSearch,
  StyledFormSearch,
  StyledHeader,
} from "./style"
import { StyledButtonReset } from "../../styles/buttons"

interface iHeaderProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setSearch, setOpen }: iHeaderProps) => {
  const { logout } = useContext(UserContext)
  const { cartProducts } = useContext(CartContext)
  const [input, setInput] = useState("")
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <StyledHeader>
      <ContainerDashboard>
        <img src={logo} alt="Logo" />
        <div>
          <StyledButtonResetSearch onClick={() => setOpenSearch(true)}>
            <img src={searchIcon} alt="Botão de pesquisa" />
          </StyledButtonResetSearch>
          <StyledFormSearch
            onSubmit={(event) => {
              event.preventDefault()
              setSearch(input)
              setOpenSearch(false)
            }}
            openSearch={openSearch}
          >
            <input
              onChange={(event) => setInput(event.target.value)}
              type="text"
            />
            <button type="submit">
              <img src={buttonSearch} alt="Search Button" />
            </button>
          </StyledFormSearch>
          <StyledButtonHeaderCart onClick={() => setOpen(true)}>
            <img src={cart} alt="Cart" />
            <div>{cartProducts.length}</div>
          </StyledButtonHeaderCart>
          <StyledButtonReset>
            <img onClick={() => logout()} src={logoutIMG} alt="Logout" />
          </StyledButtonReset>
        </div>
      </ContainerDashboard>
    </StyledHeader>
  )
}
