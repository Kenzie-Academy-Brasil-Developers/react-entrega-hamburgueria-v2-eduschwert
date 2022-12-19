import logo from "../../assets/logo.svg"
import shoppingBag from "../../assets/shopping-bag.svg"
import elipses from "../../assets/elipses.svg"
import { StyledDiv } from "./style"
import { SText } from "../../styles/typography"

export const Logo = () => {
  return (
    <StyledDiv>
      <img src={logo} alt="Logo" />
      <div>
        <div>
          <div>
            <img src={shoppingBag} alt="Shopping Bar" />
          </div>
          <SText
            tag="p"
            fontSize="1.4rem"
            fontWeigth="400"
            color="var(--color-grey-3)"
          >
            A vida é como um sanduíche, é preciso recheá-la com os
            <strong> melhores </strong>
            ingredientes.
          </SText>
        </div>
      </div>
      <img src={elipses} alt="Elipses" />
    </StyledDiv>
  )
}
