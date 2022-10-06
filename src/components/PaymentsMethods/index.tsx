import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentsContainer, PaymentsTitle, PayMethods } from './styles'

export function PaymentsMethods() {
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
        <div>
          <CreditCard size={16} />
          <p>cartão de credito</p>
        </div>

        <div>
          <Bank size={16} />
          <p>cartão de débito</p>
        </div>

        <div>
          <Money />
          <p>Dinheiro</p>
        </div>
      </PayMethods>
    </PaymentsContainer>
  )
}
