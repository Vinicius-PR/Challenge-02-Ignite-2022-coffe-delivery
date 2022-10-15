import { Coffee, CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { AddressPaymentContext } from '../../contexts/AddressPaymentContext'
import { CardContext } from '../../contexts/CardContext'
import {
  Address,
  AddressIcon,
  Container,
  DeliveryIcon,
  DeliveryTime,
  Payment,
  PaymentIcon,
  ProductIcon,
  ProductsList,
} from './styles'

export function OrderDetails() {
  const { address, paymentMethod } = useContext(AddressPaymentContext)
  const { products, total } = useContext(CardContext)
  return (
    <Container>
      <div>
        <Address>
          <AddressIcon>
            <MapPin size={16} weight="fill" />
          </AddressIcon>
          <div>
            <p>
              Entrega em{' '}
              <strong>
                {address.street}, {address.number}
              </strong>
            </p>
            <p>
              <strong>{address.complement}</strong>
            </p>
            <p>
              {address.neighborhood} - {address.city}, {address.state}
            </p>
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
            <strong>
              {paymentMethod} - R$ {total.toFixed(2).replace('.', ',')}
            </strong>
          </div>
        </Payment>

        <ProductsList>
          <ProductIcon>
            <Coffee size={16} />
          </ProductIcon>
          <div>
            <h4>Cafés</h4>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <strong>
                    {product.title} x {product.quantity} unidade(s)
                  </strong>
                </div>
              )
            })}
          </div>
        </ProductsList>
      </div>
    </Container>
  )
}
