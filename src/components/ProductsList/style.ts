import styled from "styled-components"

export const SList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  overflow-x: auto;

  width: 103%;

  li {
    min-width: 16rem;

    border: 0.125rem solid #e0e0e0;
    border-radius: 0.313rem;

    display: flex;
    flex-direction: column;

    transition: 300ms ease-in-out;
  }
  li div:nth-child(1) {
    height: 9.375rem;

    border-radius: 0.15rem 0.15rem 0 0;

    background-color: var(--color-grey-0);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  li div:nth-child(1) img {
    max-height: 100%;
    max-width: 100%;

    object-fit: cover;
  }

  li div:nth-child(2) {
    padding: 1.688rem 1.375rem 1.375rem 1.375rem;

    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
  li div:nth-child(2) > h3 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--color-grey-100);
  }
  li div:nth-child(2) > small {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-50);
  }
  li div:nth-child(2) > span {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-primary);
  }

  @media (min-width: 46.438rem) {
    flex-wrap: wrap;

    width: 100%;

    overflow: visible;

    li:hover {
      transform: scale(1.1);
    }
  }
`

export const SSearchList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;

  @media (min-width: 46.438rem) {
    width: 68%;
  }
`
export const SSearch = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    display: none;
  }

  div span {
    font-weight: 700;
    font-size: 1.625rem;
  }

  div span:nth-child(1) {
    color: var(--color-grey-100);
  }

  div span:nth-child(2) {
    color: var(--color-grey-50);
  }

  @media (min-width: 46.438rem) {
    button {
      display: block;
    }
  }
`
