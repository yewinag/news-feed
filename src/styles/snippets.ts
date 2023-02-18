import { css, DefaultTheme } from 'styled-components'
import { defaultTheme } from './theme'

type StyledCSS = ReturnType<typeof css>

const fontFamily = (family: keyof DefaultTheme['fontFamily']) => css`
  font-family: ${(props) => props.theme.fontFamily[family]};
`

const fontSize = (size: keyof DefaultTheme['fontSize']) => css`
  font-size: ${(props) => props.theme.fontSize[size]};
`

const lineHeight = (size: keyof DefaultTheme['lineHeight']) => css`
  line-height: ${(props) => props.theme.lineHeight[size]};
`

const colorPrimaryBg = css`
  background-color: ${(props) => props.theme.colors.primary};
`

const colorTextOnPrimaryBg = css`
  color: ${(props) => props.theme.colors.textOnPrimaryBg};
`

const colorTextOnBody = css`
  color: ${(props) => props.theme.colors.textOnBody};
`

const snippets = {
  fontFamily: Object.fromEntries(
    (
      Object.keys(
        defaultTheme.fontFamily
      ) as (keyof DefaultTheme['fontFamily'])[]
    ).map((variant) => [variant, fontFamily(variant)])
  ) as Record<keyof DefaultTheme['fontFamily'], StyledCSS>,
  fontSize: Object.fromEntries(
    (
      Object.keys(defaultTheme.fontSize) as (keyof DefaultTheme['fontSize'])[]
    ).map((variant) => [variant, fontSize(variant)])
  ) as Record<keyof DefaultTheme['fontSize'], StyledCSS>,
  lineHeight: Object.fromEntries(
    (
      Object.keys(
        defaultTheme.lineHeight
      ) as (keyof DefaultTheme['lineHeight'])[]
    ).map((variant) => [variant, lineHeight(variant)])
  ) as Record<keyof DefaultTheme['lineHeight'], StyledCSS>,
  colors: {
    primaryBg: colorPrimaryBg,
    textOnPrimaryBg: colorTextOnPrimaryBg,
    textOnBody: colorTextOnBody,
  },
}

export default snippets
