import styled from "styled-components"

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  @media (min-width: 60rem) {
    width: 37.7rem;
  }

  > img {
    width: 60%;
    margin-bottom: 2.2rem;
  }

  > div {
    width: 100%;
    @media (min-width: 60rem) {
      width: 37.7rem;
    }

    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

    border: 0.1rem solid var(--color-grey-1);
    border-radius: var(--radius-2);

    display: flex;
    justify-content: center;

    padding: 1.3rem 0 1.6rem 0;

    margin-bottom: 3rem;
  }

  div > div {
    width: 92%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.9rem;
  }

  div > div > div {
    background: rgba(39, 174, 96, 0.1);

    border-radius: var(--radius-2);

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 6rem;
    max-width: 6rem;
    height: 6rem;
  }

  img:nth-child(3) {
    display: none;
    @media (min-width: 60rem) {
      display: block;
    }
  }
`
