import { css, DefaultTheme } from 'styled-components'
import { defaultTheme } from './theme'

export const mobileFirstMedia =
  (breakpoint: keyof DefaultTheme['screen']) =>
  (...styles: Parameters<typeof css>) =>
    css`
      @media (min-width: ${(props) => props.theme.screen[breakpoint]}) {
        ${css(...styles)};
      }
    `

const media = Object.fromEntries(
  (Object.keys(defaultTheme.screen) as (keyof DefaultTheme['screen'])[]).map(
    (breakpoint) => [breakpoint, mobileFirstMedia(breakpoint)]
  )
) as Record<keyof DefaultTheme['screen'], typeof css>

export default media
