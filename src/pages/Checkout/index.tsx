import { CheckoutAddress } from '../../components/CheckoutAddress'
import { CoffeeCard } from '../../components/CoffeeCard'
import { PaymentsMethods } from '../../components/PaymentsMethods'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  CheckoutAddressAndPayment,
  CheckoutContainerForm,
  CheckoutDetalis,
} from './styles'
import { useContext } from 'react'
import { AddressPaymentContext } from '../../contexts/AddressPaymentContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface DataProps {
  city: string
  complement: string
  neighborhood: string
  number: string
  payment: string
  state: string
  street: string
  zipCode: string
}

const addressValidationSchema = zod.object({
  zipCode: zod.string({ required_error: 'CEP Inválido' }),
  street: zod.string().min(1, 'Informe a Rua/Avenida'),
  complement: zod.string().optional(),
  number: zod.number({ invalid_type_error: 'Informe o Número' }),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe o Estado'),
  payment: zod.string({ invalid_type_error: 'Escolha uma forma de pagamento' }),
})

export function Checkout() {
  const navigate = useNavigate()
  const methods = useForm<DataProps>({
    resolver: zodResolver(addressValidationSchema),
  })

  const { handleSaveAddressAndPayment } = useContext(AddressPaymentContext)

  function onSubmitForm(data: DataProps) {
    navigate('/success')
    const address = {
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
    }

    const paymentMethod = data.payment
    handleSaveAddressAndPayment(address, paymentMethod)
  }
  return (
    <FormProvider {...methods}>
      <CheckoutContainerForm onSubmit={methods.handleSubmit(onSubmitForm)}>
        <CheckoutDetalis>
          <h2>Complete seu pedido</h2>

          <CheckoutAddressAndPayment>
            <CheckoutAddress />
            <PaymentsMethods />
          </CheckoutAddressAndPayment>
        </CheckoutDetalis>

        <CoffeeCard />
      </CheckoutContainerForm>
    </FormProvider>
  )
}
