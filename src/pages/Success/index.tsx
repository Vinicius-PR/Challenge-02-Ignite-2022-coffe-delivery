import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import deliveryImg from '../../assets/delivery-success.png'
import { OrderDetails } from '../../components/OrderDetails'
import { AddressPaymentContext } from '../../contexts/AddressPaymentContext'
import { CartContext } from '../../contexts/CartContext'
import {
  GoBackdiv,
  OrderConfirmed,
  SuccessContainer,
  SuccessImg,
} from './styles'

export function Success() {
  const { handleResetAddressAndPayment } = useContext(AddressPaymentContext)
  const { handleResetCart } = useContext(CartContext)
  const navigate = useNavigate()

  function onResetData() {
    handleResetCart()
    handleResetAddressAndPayment()
    navigate('/')
  }
  return (
    <>
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
      <GoBackdiv>
        <button onClick={onResetData}>Voltar</button>
      </GoBackdiv>
    </>
  )
}
