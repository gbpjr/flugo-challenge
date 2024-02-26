import { createTheme } from '@mui/material/styles'
import { Shadows } from '@mui/material/styles/shadows'

// colors
const black: string = '#333333'
const gray: string = '#2B3743'
const darkGray: string = '#151B21'

const MainTheme = createTheme({
  shadows: Array(25).fill('rgba(149, 157, 165, 0.2) 0px 8px 24px') as Shadows,
  palette: {
    primary: {
      main: `${gray}`,
      dark: `${darkGray}`,
      light: '#FEAC28',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFFFFF',
      dark: `${black}`,
      light: '#526A82',
      contrastText: `${black}`
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      fontSize: '24px',
      textTransform: 'uppercase',
      fontWeight: '600',
      color: `${black}`,
      letterSpacing: '-1px',
    },
    fontFamily: [
      'Work Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
        styleOverrides: {
            root: {
                wordWrap: "break-word"
            },
        },
  }},
})

export { MainTheme }