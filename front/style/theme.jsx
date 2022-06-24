import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    main: '#4f4f4f',
    secondary: '#828282',
    smallText: '#BDBDBD',
    buttonText: '#ffffff',
    buttonColor: '#2F80ED',
    bgIcon: '#219653'
  },
  fonts: ["sans-serif", "Noto-Sans", "Poppins"],
  fontSize: {
    large: '18px',
    medium: '12px',
    small: '10px',
    xs: '8px'
  }
}

const Theme = ({ children }) => {
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme