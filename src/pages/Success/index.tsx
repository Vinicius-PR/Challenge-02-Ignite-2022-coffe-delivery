import deliveryImg from '../../assets/delivery-success.png'
import { OrderDetails } from '../../components/OrderDetails'
import { OrderConfirmed, SuccessContainer, SuccessImg } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <OrderConfirmed>
        <h2>Uhu! Pedido Confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderDetails />
      </OrderConfirmed>

      <SuccessImg>
        <img src={deliveryImg} alt="" />
      </SuccessImg>
    </SuccessContainer>
  )
}
