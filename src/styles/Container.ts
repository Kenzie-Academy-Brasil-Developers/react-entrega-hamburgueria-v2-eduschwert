import styled from "styled-components"

const Container = styled.div`
  max-width: 100%;

  padding: 3rem 1.8rem;

  margin: 0 auto;
`

export const ContainerLogin = styled(Container)`
  width: 97rem;
  min-width: 24rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  @media (min-width: 60rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    @media (min-height: 30rem) {
      height: 100vh;
    }
  }
`
export const ContainerRegister = styled(Container)`
  width: 102.3rem;
  min-width: 24rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  @media (min-width: 60rem) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 2rem;
    @media (min-height: 35rem) {
      height: 100vh;
    }
  }
`
export const ContainerDashboard = styled(Container)`
  min-width: 27rem;
  width: 105.8rem;
`
