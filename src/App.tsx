import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
import { AddressPaymentContextProvider } from './contexts/AddressPaymentContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <AddressPaymentContextProvider>
            <Router />
          </AddressPaymentContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
