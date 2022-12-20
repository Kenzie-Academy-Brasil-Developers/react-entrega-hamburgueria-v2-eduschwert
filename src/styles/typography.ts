import styled from "styled-components"

import { BaseText } from "./BaseText"
import { BaseTitle } from "./BaseTitle"

interface iText {
  fontSize: string
  fontWeigth: "400" | "600" | "700"
  color:
    | "var(--color-grey-6)"
    | "var(--color-grey-3)"
    | "var(--color-grey-2)"
    | "var(--color-error)"
    | "var(--color-primary)"
    | "var(--color-background)"
  textAlign?: string
  marginTop?: string
  marginBottom?: string
}

export const STitle = styled(BaseTitle)<iText>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeigth }) => fontWeigth};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`

export const SText = styled(BaseText)<iText>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeigth }) => fontWeigth};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`
