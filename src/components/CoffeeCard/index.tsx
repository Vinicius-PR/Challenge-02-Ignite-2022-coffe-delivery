import {
  CoffeeQuantity,
  ConfirmBtn,
  Container,
  Prices,
  Product,
  ProductDetails,
  ProductPrice,
  RemoveCoffeeBtn,
} from './styles'
import coffeeImg from '../../assets/products/expresso-tradicional.png'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <Container>
      <Product>
        <img src={coffeeImg} alt="" />
        <ProductDetails>
          <p>Expresso Tradicional</p>
          <div>
            <CoffeeQuantity>
              <Minus size={14} weight="bold" /> 1{' '}
              <Plus size={14} weight="bold" />
            </CoffeeQuantity>

            <RemoveCoffeeBtn>
              <Trash size={16} />
              <p>remover</p>
            </RemoveCoffeeBtn>
          </div>
        </ProductDetails>
        <ProductPrice>R$ 9,90</ProductPrice>
      </Product>

      <Product>
        <img src={coffeeImg} alt="" />
        <ProductDetails>
          <p>Latte</p>
          <div>
            <CoffeeQuantity>
              <Minus size={14} weight="bold" /> 1{' '}
              <Plus size={14} weight="bold" />
            </CoffeeQuantity>

            <RemoveCoffeeBtn>
              <Trash size={16} />
              <p>remover</p>
            </RemoveCoffeeBtn>
          </div>
        </ProductDetails>
        <ProductPrice>R$ 19,90</ProductPrice>
      </Product>

      <Prices>
        <div>
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </div>

        <div>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </div>

        <div>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>
      </Prices>

      <ConfirmBtn>Confirmar Pedido</ConfirmBtn>
    </Container>
  )
}
