import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CardContextProvider } from './contexts/CardContext'
import { AddressPaymentContextProvider } from './contexts/AddressPaymentContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CardContextProvider>
          <AddressPaymentContextProvider>
            <Router />
          </AddressPaymentContextProvider>
        </CardContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
