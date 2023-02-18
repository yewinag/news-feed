import { createGlobalStyle } from 'styled-components'
import snippets from './snippets'

export const GlobalStyleWithTheme = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.bodyBg};
    ${snippets.fontFamily.sans};
    ${snippets.colors.textOnBody};
  }

  a {
    color: ${(props) => props.theme.colors.link};
  }
`
