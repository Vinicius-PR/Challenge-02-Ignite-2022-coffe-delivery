import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Address,
  AddressIcon,
  Container,
  DeliveryIcon,
  DeliveryTime,
  Payment,
  PaymentIcon,
} from './styles'

export function OrderDetails() {
  return (
    <Container>
      <div>
        <Address>
          <AddressIcon>
            <MapPin size={16} weight="fill" />
          </AddressIcon>
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </Address>

        <DeliveryTime>
          <DeliveryIcon>
            <Timer weight="fill" size={16} />
          </DeliveryIcon>
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30min</strong>
          </div>
        </DeliveryTime>

        <Payment>
          <PaymentIcon>
            <CurrencyDollar size={16} />
          </PaymentIcon>
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </Payment>
      </div>
    </Container>
  )
}
