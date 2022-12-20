import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

interface iStyledButtonProps {
  buttonsize: "default" | "medium"
  buttonstyle: "primary" | "grey-1" | "grey-4"
}

export const buttonCSS = css<iStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: var(--radius-1);

  transition: 200ms ease-in-out;

  font-weight: 600;

  padding: 0 2rem;

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case "default":
        return css`
          height: 6rem;
        `
      case "medium":
        return css`
          height: 4rem;
        `
      default:
    }
  }}

  ${({ buttonstyle }) => {
    switch (buttonstyle) {
      case "primary":
        return css`
          background: var(--color-primary);
          border: 0.2rem solid var(--color-primary);

          color: var(--color-background);

          &:hover {
            background: var(--color-primary-focus);
            border: 0.2rem solid var(--color-primary-focus);
          }
        `
      case "grey-1":
        return css`
          background: var(--color-grey-1);
          border: 0.2rem solid var(--color-grey-1);

          color: var(--color-grey-3);

          &:hover {
            background: var(--color-grey-3);
            border: 0.2rem solid var(--color-grey-3);

            color: var(--color-grey-1);
          }
        `
      case "grey-4":
        return css`
          background: var(--color-grey-4);
          border: 0.2rem solid var(--color-grey-4);

          font-size: 1.4rem;
          color: var(--color-background);

          &:hover {
            background: var(--color-primary);
            border: 0.2rem solid var(--color-primary);
          }
        `
      default:
    }
  }}
`

export const StyledButton = styled.button<iStyledButtonProps>`
  ${buttonCSS}
`

export const StyledLinkButton = styled(Link)<iStyledButtonProps>`
  ${buttonCSS}
`

export const StyledButtonReset = styled.button`
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
