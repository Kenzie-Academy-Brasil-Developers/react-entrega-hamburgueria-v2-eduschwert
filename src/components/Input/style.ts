import styled, { css } from "styled-components"
import { FieldError } from "react-hook-form"

interface iStyledInputProp {
  error?: FieldError
  inputClicked?: boolean
}

export const SInput = styled.fieldset<iStyledInputProp>`
  position: relative;

  padding-top: 1.3rem;

  border: none;

  max-width: 100%;

  input {
    width: 100%;

    background: var(--color-grey-0);

    border: 0.2rem solid var(--color-grey-0);
    border-radius: var(--radius-1);

    max-width: 100%;

    padding: 1.8rem 1.5rem;

    font-weight: 400;
    color: var(--color-grey-6);

    transition: all 0.1s linear;

    ${({ inputClicked, error }) => {
      if (inputClicked) {
        return error
          ? "border: .2rem solid var(--color-error)"
          : "border: .2rem solid var(--color-success)"
      }
    }}
  }

  input:focus {
    border: 0.2rem solid var(--color-grey-6);
  }

  label {
    pointer-events: none;

    position: absolute;
    top: calc(50% - 0.8rem);
    left: 1.5rem;

    transition: all 0.1s linear;

    background: var(--color-grey-0);

    padding: 0.5rem;

    font-size: 1.2rem;
    color: var(--color-grey-2);
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ inputClicked }) => {
    if (inputClicked) {
      return css`
        label {
          top: 0;

          background: var(--color-background);
        }
        input {
          background: var(--color-background);
        }
      `
    }
  }}
`
