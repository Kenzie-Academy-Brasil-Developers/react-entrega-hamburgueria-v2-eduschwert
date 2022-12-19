import React from "react"
import { ContainerDashboard } from "../../styles/Container"
import logo from "../../assets/logo.svg"
import logout from "../../assets/logout.svg"
import buttonSearch from "../../assets/button-search.svg"
import cart from "../../assets/cart.svg"
import {
  StyledButtonHeaderCart,
  StyledButtonHeaderLogout,
  StyledHeader,
  StyledInputSearch,
} from "./style"

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerDashboard>
        <img src={logo} alt="Logo" />
        <div>
          <form>
            <StyledInputSearch type="text" />
            <button>
              <img src={buttonSearch} alt="Search Button" />
            </button>
          </form>
          <StyledButtonHeaderCart>
            <img src={cart} alt="Cart" />
            <div>0</div>
          </StyledButtonHeaderCart>
          <StyledButtonHeaderLogout>
            <img src={logout} alt="Logout" />
          </StyledButtonHeaderLogout>
        </div>
      </ContainerDashboard>
    </StyledHeader>
  )
}
