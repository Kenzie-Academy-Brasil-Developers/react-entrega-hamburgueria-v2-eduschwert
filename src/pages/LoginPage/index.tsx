import React from "react"

import { ContainerLogin } from "../../styles/Container"
import { StyledForm } from "../../styles/Form"
import { STitle } from "../../styles/typography"

export const LoginPage = () => {
  return (
    <ContainerLogin>
      <StyledForm padding="2.6rem 0">
        <STitle
          tag="h2"
          fontSize="1.8rem"
          fontWeigth="700"
          color="var(color-grey-6)"
          marginBottom="2rem"
        >
          Login
        </STitle>
      </StyledForm>
    </ContainerLogin>
  )
}
