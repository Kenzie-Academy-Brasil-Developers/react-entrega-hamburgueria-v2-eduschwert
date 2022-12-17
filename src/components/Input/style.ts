import styled from "styled-components"

export const SInput = styled.fieldset`
  fieldset {
    width: 92%;

    position: relative;

    padding-top: 1.3rem;

    border: none;

    max-width: 100%;
  }

  fieldset > input {
    width: 100%;

    background: var(--color-grey-0);

    border: 0.2rem solid var(--color-grey-0);
    border-radius: var(--radius-1);

    max-width: 100%;

    padding: 1.8rem 1.5rem;

    font-weight: 400;
    color: var(--color-grey-6);

    transition: all 0.1s linear;
  }

  fieldset > input:focus {
    border: 0.2rem solid var(--color-grey-6);
  }

  fieldset > label {
    pointer-events: none;

    position: absolute;
    top: calc(50% - 0.8rem);
    left: 1.5rem;

    transition: all 0.1s linear;

    background: var(--color-grey-0);

    padding: 0.5rem;
  }

  fieldset > input:focus + label,
  fieldset > input:not(:placeholder-shown) + label {
    font-size: 1.2rem;
    color: var(--color-grey-2);

    top: 0;

    background: var(--color-background);
  }
  fieldset > input:focus,
  fieldset > input:not(:placeholder-shown) {
    background: var(--color-background);
    border: 0.2rem solid;
  }
`
