import {
  CartBtn,
  CoffeeContainer,
  CoffeeType,
  CoffeeFooter,
  CoffeeQuantity,
  CoffeeTitle,
  CoffeeDescription,
  CoffeePrice,
} from './styles'
import coffeeImg from '../../assets/products/expresso-tradicional.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function Coffee() {
  return (
    <CoffeeContainer>
      <img src={coffeeImg} alt="" />
      <CoffeeType>
        <span>tradicional</span>
        <span>tradicional</span>
      </CoffeeType>
      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <CoffeeDescription>
        O tradicional café feito com agua quente e grãos moidos
      </CoffeeDescription>

      <CoffeeFooter>
        <CoffeePrice>
          R$ <span>9,90</span>
        </CoffeePrice>

        <CoffeeQuantity>
          <Minus size={14} weight="bold" /> 1 <Plus size={14} weight="bold" />
        </CoffeeQuantity>

        <CartBtn>
          <ShoppingCartSimple size={22} weight="fill" />
        </CartBtn>
      </CoffeeFooter>
    </CoffeeContainer>
  )
}
