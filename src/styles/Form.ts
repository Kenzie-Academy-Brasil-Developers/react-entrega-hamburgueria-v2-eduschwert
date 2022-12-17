import styled from "styled-components"

interface iFormProps {
  padding: string
}

export const StyledForm = styled.form<iFormProps>`
  width: 50rem;
  max-width: 100%;

  background: var(--color-background);

  border: 0.2rem solid var(--color-grey-0);
  border-radius: var(--radius-2);

  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ padding }) => padding};
`
