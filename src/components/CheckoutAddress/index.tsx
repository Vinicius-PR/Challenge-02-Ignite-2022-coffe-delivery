import { MapPinLine } from 'phosphor-react'
import {
  CheckoutAddressContainer,
  CheckoutAddressTitle,
  CheckoutForm,
} from './styles'

export function CheckoutAddress() {
  return (
    <CheckoutAddressContainer>
      <CheckoutAddressTitle>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber o seu produto</p>
        </div>
      </CheckoutAddressTitle>

      <CheckoutForm>
        <input type="text" name="cep" placeholder="CEP" />
        <input type="text" name="rua" placeholder="Rua" />
        <div>
          <input type="number" name="numero" placeholder="Numero" />
          <input type="text" name="complemento" placeholder="Complemento" />
        </div>
        <div>
          <input type="text" name="bairro" placeholder="Bairro" />
          <input type="text" name="cidade" placeholder="Cidade" />
          <input type="text" name="uf" placeholder="UF" />
        </div>
      </CheckoutForm>
    </CheckoutAddressContainer>
  )
}
