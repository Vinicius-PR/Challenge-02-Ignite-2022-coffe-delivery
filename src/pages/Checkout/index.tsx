import { CheckoutAddress } from '../../components/CheckoutAddress'
import { CoffeeCard } from '../../components/CoffeeCard'
import { PaymentsMethods } from '../../components/PaymentsMethods'
import {
  CheckoutAddressAndPayment,
  CheckoutContainer,
  CheckoutDetalis,
  CheckoutProducts,
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
        <CoffeeCard />
      </CheckoutProducts>
    </CheckoutContainer>
  )
}
