import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  ErrorPaymentMessage,
  PaymentsContainer,
  PaymentsTitle,
  PayMethods,
} from './styles'
import { useFormContext } from 'react-hook-form'

interface PaymentFormProps {
  payment: string
}

export function PaymentsMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PaymentFormProps>()
  return (
    <PaymentsContainer>
      <PaymentsTitle>
        <CurrencyDollar weight="bold" size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </div>
      </PaymentsTitle>

      <PayMethods>
        <label htmlFor="cartao-credito">
          <CreditCard size={16} />
          <input
            type="radio"
            id="cartao-credito"
            value="Cartão de Credito"
            {...register('payment')}
          />
          <p>cartão de credito</p>
        </label>

        <label htmlFor="cartao-debito">
          <Bank size={16} />
          <input
            type="radio"
            id="cartao-debito"
            value="Cartão de Debito"
            {...register('payment')}
          />
          <p>cartão de Débito</p>
        </label>

        <label htmlFor="dinheiro">
          <Money />
          <input
            type="radio"
            id="dinheiro"
            value="Dinheiro"
            {...register('payment')}
          />
          <p>Dinheiro</p>
        </label>
      </PayMethods>
      {errors.payment?.message ? (
        <ErrorPaymentMessage>{errors.payment?.message}</ErrorPaymentMessage>
      ) : (
        ''
      )}
    </PaymentsContainer>
  )
}
