import styled from "styled-components"

const Container = styled.div`
  max-width: 100%;

  padding: 0 1.8rem;

  margin: 0 auto;
`

export const ContainerLogin = styled(Container)`
  width: 93.9rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 1.4rem;

  @media (min-width: 40rem) {
    flex-direction: row;
    gap: 6.2rem;
  }
`
export const ContainerRegister = styled(Container)`
  width: 102.3rem;
`
export const ContainerDashboard = styled(Container)`
  width: 136.8rem;
`
