import styled, { css } from "styled-components"
import { AnimationFade, AnimationFadeOut } from "../../styles/animation"

interface iStyledModalProps {
  isClosing: boolean
}

export const StyledModal = styled.div<iStyledModalProps>`
  background: rgba(51, 51, 51, 0.5);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  top: 0;
  z-index: 99;

  > div {
    background: var(--color-background);

    width: 50rem;
    max-width: 92%;

    position: absolute;
    top: 10%;

    border-radius: 0.6rem;

    animation: animateModal 0.2s;

    ${({ isClosing }) => {
      if (isClosing) {
        return css`
          animation: ${AnimationFadeOut} 0.3s forwards;
        `
      } else {
        return css`
          animation: ${AnimationFade} 0.3s forwards;
        `
      }
    }}
  }

  > div > div:nth-child(1) {
    background: var(--color-primary);

    height: 54px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2.2rem;

    border-radius: var(--radius-2) var(--radius-2) 0 0;
  }
`
export const StyledDivEmptyCart = styled.div`
  height: 15.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const StyledCart = styled.div`
  padding: 2rem 0;

  display: flex;
  justify-content: center;

  > div {
    width: 92%;

    display: flex;
    flex-direction: column;
  }
  > div > ul {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    max-height: 28rem;

    overflow-y: auto;

    margin-bottom: 1.8rem;
  }
  > div > ul > li {
    height: 8rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  > div > ul > li > div {
    display: flex;
    gap: 0.95rem;
  }
  > div > ul > li > div > div:nth-child(1) {
    height: 8rem;
    width: 8.226rem;

    background: var(--color-grey-1);
    border-radius: var(--radius-2);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > ul > li > div > div:nth-child(1) > img {
    width: 90%;
    height: 90%;

    object-fit: cover;
  }
  > div > ul > li > div > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div > ul > li > div > div:nth-child(2) > div {
    display: flex;
  }
  > div > ul > li > div > div:nth-child(2) > div > button:nth-child(1),
  > div > ul > li > div > div:nth-child(2) > div > button:nth-child(3) {
    background: #f2f2f2;

    width: 3.044rem;
    height: 3.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
  }
  > div > ul > li > div > div:nth-child(2) > div > div:nth-child(2) {
    border-top: 0.2rem solid #f2f2f2;
    border-bottom: 0.2rem solid #f2f2f2;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.568rem;
  }
  > div > div:nth-child(2) {
    height: 0.2rem;

    background: var(--color-grey-1);

    margin-bottom: 1.5rem;
  }
  > div > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2rem;
  }
`
