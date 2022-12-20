import styled from "styled-components"

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  overflow-x: auto;

  width: 103%;

  li {
    min-width: 25rem;

    border: 0.2rem solid var(--color-grey-1);
    border-radius: var(--radius-2);

    display: flex;
    flex-direction: column;

    transition: 200ms ease-in-out;
  }
  li div:nth-child(1) {
    height: 15rem;

    border-radius: var(--radius-2) var(--radius-2) 0 0;

    background: var(--color-grey-0);

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
    padding: 2.667rem 1.9rem 1.5rem 2.1rem;

    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  @media (min-width: 48rem) {
    flex-wrap: wrap;

    width: 100%;

    overflow: visible;

    li:hover {
      transform: scale(1.1);
      border: 0.2rem solid var(--color-primary);
    }
  }
`
