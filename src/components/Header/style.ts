import styled, { css } from "styled-components"

export const StyledHeader = styled.header`
  height: 8rem;
  background: var(--color-grey-0);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.5rem;
  }
  > div > img {
    width: 52%;
    max-width: 15.9rem;
  }
  > div > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;

    width: 40rem;
  }
`
export const StyledButtonHeaderCart = styled.button`
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  div {
    position: absolute;
    right: -0.8rem;
    top: -1.6rem;

    background: var(--color-primary);

    width: 2rem;
    height: 2.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.7rem;

    font-size: 1.4rem;
    font-weight: 900;
    color: var(--color-background);
  }
`
export const StyledButtonResetSearch = styled.button`
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 48rem) {
    display: none;
  }
`
interface iStyledFormSearchProps {
  openSearch: boolean
}
export const StyledFormSearch = styled.form<iStyledFormSearchProps>`
  display: none;
  @media (min-width: 48rem) {
    display: flex;
    align-items: center;
    position: relative;
  }
  button {
    border: none;
    background: none;
    position: absolute;
    right: 1rem;
  }

  input {
    width: 100%;
    height: 6rem;

    border: 0.2rem solid var(--color-grey-0);
    border-radius: var(--radius-1);

    font-weight: 400;
    color: var(--color-grey-6);

    padding: 0 5rem 0 2rem;

    transition: 200ms ease-in-out;

    &:focus {
      border: 2px solid var(--color-grey-6);
    }

    &::placeholder {
      color: var(--color-grey-1);
    }
  }

  ${({ openSearch }) => {
    if (openSearch) {
      return css`
        display: flex;
        position: absolute;
        width: 97%;
        left: 2%;
        z-index: 99;
        button {
          top: 0.8rem;
        }
      `
    }
  }}
`
