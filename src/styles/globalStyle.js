import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
    box-shadow: none;
    background: none;
  }

  :root {
    --global-offset: 1rem;

    --blue: #0099E0;
  }
`

export default GlobalStyle
