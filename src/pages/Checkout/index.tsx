import { CheckoutAddress } from '../../components/CheckoutAddress'
import { PaymentsMethods } from '../../components/PaymentsMethods'
import {
  CheckoutAddressAndPayment,
  CheckoutContainer,
  CheckoutDetalis,
  CheckoutProducts,
  ListProducts,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutDetalis>
        <h2>Complete seu pedido</h2>

        <CheckoutAddressAndPayment>
          <CheckoutAddress />
          <PaymentsMethods />
        </CheckoutAddressAndPayment>
      </CheckoutDetalis>
      <CheckoutProducts>
        <h2>Cafés selecionados</h2>
        <ListProducts>Products</ListProducts>
      </CheckoutProducts>
    </CheckoutContainer>
  )
}
