import {
  CoffeeQuantity,
  ConfirmBtn,
  Container,
  ContainerTitle,
  EmptyCardContainer,
  Prices,
  Product,
  ProductDetails,
  ProductPrice,
  RemoveCoffeeBtn,
} from './styles'
import { Minus, Plus, SmileySad, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CardContext'
import { useNavigate } from 'react-router-dom'

export function CoffeeCard() {
  const navigate = useNavigate()
  const {
    products,
    total,
    handleDecreaseCoffeeByOne,
    handleIncreaseCoffeeByOne,
    handleRemoveCoffeeFromCard,
  } = useContext(CartContext)

  function onBtnClickToSeeCoffees() {
    navigate('/')
  }

  return (
    <>
      {products.length === 0 ? (
        <EmptyCardContainer>
          <h2> Carrinho vazio</h2>
          <SmileySad size={34} />
          <button type="button" onClick={onBtnClickToSeeCoffees}>
            Olhar Cafés
          </button>
        </EmptyCardContainer>
      ) : (
        <div>
          <ContainerTitle>Cafés selecionados</ContainerTitle>
          <Container>
            {products.map((product) => {
              return (
                <Product key={product.id}>
                  <img src={product.imageUrl} alt="" />
                  <ProductDetails>
                    <p>{product.title}</p>
                    <div>
                      <CoffeeQuantity>
                        <Minus
                          size={14}
                          weight="bold"
                          onClick={() => handleDecreaseCoffeeByOne(product.id)}
                        />
                        {product.quantity}
                        <Plus
                          size={14}
                          weight="bold"
                          onClick={() => handleIncreaseCoffeeByOne(product.id)}
                        />
                      </CoffeeQuantity>

                      <RemoveCoffeeBtn
                        onClick={() => handleRemoveCoffeeFromCard(product.id)}
                      >
                        <Trash size={16} />
                        <p>remover</p>
                      </RemoveCoffeeBtn>
                    </div>
                  </ProductDetails>
                  <ProductPrice>
                    {(product.price * product.quantity)
                      .toFixed(2)
                      .replace('.', ',')}
                  </ProductPrice>
                </Product>
              )
            })}

            <Prices>
              <div>
                <p>Total de itens</p>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>

              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>

              <div>
                <strong>Total</strong>
                <strong>R$ {(total + 3.5).toFixed(2).replace('.', ',')}</strong>
              </div>
            </Prices>

            <ConfirmBtn type="submit">Confirmar Pedido</ConfirmBtn>
          </Container>
        </div>
      )}
    </>
  )
}
