// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: {
      serif: string
      sans: string
      mono: string
    }
    fontSize: {
      xs: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
    }
    lineHeight: {
      base: number | string
      md: number | string
      lg: number | string
      xl: number | string
    }
    colors: {
      primary: string
      bodyBg: string
      textOnBody: string
      textOnPrimaryBg: string
      sectionBorder: string
      articleDefaultBg: string
      link: string
    }
    screen: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
