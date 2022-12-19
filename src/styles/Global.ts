import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    
    --color-grey-6: #333333;
    --color-grey-3: #828282;
    --color-grey-2:  #999999;
    --color-grey-1: #E0E0E0;
    --color-grey-0: #F5F5F5;
    
    --color-primary: #27AE60;
    --color-primary-focus: #93D7AF;
    --color-secondary: #EB5757;

    --color-error: #E60000;
    --color-warning: #FFCD07;
    --color-success: #168821;
    --color-information: #155BCB;

    --width-desk: 40rem;

    font-size: 60%;   

    --radius-1: .8rem;
    --radius-2: .5rem;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  strong{
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`
