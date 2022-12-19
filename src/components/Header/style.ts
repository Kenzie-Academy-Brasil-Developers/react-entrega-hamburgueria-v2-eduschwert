import styled from "styled-components"

export const StyledHeader = styled.header`
  height: 8rem;
  background: var(--color-grey-0);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
  }
  > div > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;

    width: 40rem;
  }
  > div > div > form {
    display: flex;
    align-items: center;

    position: relative;
  }
  > div > div > form {
    display: none;
    @media (min-width: 48rem) {
      display: flex;
    }
  }
  > div > div > form > button {
    border: none;
    background: none;

    position: absolute;
    right: 1rem;
  }
`
export const StyledInputSearch = styled.input`
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
`
export const StyledButtonHeaderCart = styled.button`
  background: none;
  border: none;

  position: relative;

  div {
    position: absolute;
    right: -0.8rem;
    top: -1.3rem;

    background: var(--color-primary);

    width: 2rem;
    height: 2.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    font-size: 1.4rem;
    font-weight: 900;
    color: var(--color-background);
  }
`
export const StyledButtonHeaderLogout = styled.button`
  background: none;
  border: none;
`
