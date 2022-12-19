import styled, { css } from "styled-components"

interface iFormProps {
  page: "login" | "register"
}

export const StyledForm = styled.form<iFormProps>`
  width: 100%;

  @media (min-width: 60rem) {
    width: 50rem;
  }

  background: var(--color-background);

  border: 0.2rem solid var(--color-grey-0);
  border-radius: var(--radius-2);

  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 92%;
  }
  div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ page }) => {
    switch (page) {
      case "login":
        return css`
          padding: 2.6rem 0;
          div > div {
            margin-bottom: 0.6rem;
          }
          fieldset {
            margin-bottom: 1.2rem;
          }
          button {
            margin-top: 1.8rem;
            margin-bottom: 1.9rem;
          }
          button + div {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          div > small {
            width: 76%;
          }
          a {
            margin-top: 2.1rem;
          }
        `
      case "register":
        return css`
          padding: 2.8rem 0;
          div > div {
            margin-bottom: 1.9rem;
          }
          fieldset {
            margin-bottom: 1.2rem;
          }
          button {
            margin-top: 1.8rem;
          }
          a {
            background: none;
            border: none;
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--color-grey-3);
            text-decoration: underline var(--color-grey-3);
          }
        `
      default:
    }
  }}
`
