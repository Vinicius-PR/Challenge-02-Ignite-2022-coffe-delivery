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
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CardContext } from '../../contexts/CardContext'

export interface CoffeeProps {
  id: string
  title: string
  subtitle: string
  tags: string[]
  price: number
  imageUrl: string
}

export function Coffee({
  id,
  title,
  subtitle,
  tags,
  price,
  imageUrl,
}: CoffeeProps) {
  const { handleAddCoffeeToCard } = useContext(CardContext)
  const [quantity, setQuantity] = useState(1)

  function onDecreaseQuantity() {
    setQuantity((state) => {
      if (state === 1) {
        return 1
      } else {
        return state - 1
      }
    })
  }

  function onIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function onAddCoffeeToCard() {
    const newCoffeeToCard = {
      id,
      title,
      price,
      imageUrl,
      quantity,
    }
    handleAddCoffeeToCard(newCoffeeToCard)
  }

  return (
    <CoffeeContainer>
      <img src={imageUrl} alt="" />
      <CoffeeType>
        {tags.map((tag) => (
          <span key={id + tag}>{tag}</span>
        ))}
      </CoffeeType>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{subtitle}</CoffeeDescription>

      <CoffeeFooter>
        <CoffeePrice>
          R$ <span>{price.toFixed(2).replace('.', ',')}</span>
        </CoffeePrice>

        <CoffeeQuantity>
          <Minus size={14} weight="bold" onClick={onDecreaseQuantity} />
          {quantity}
          <Plus size={14} weight="bold" onClick={onIncreaseQuantity} />
        </CoffeeQuantity>

        <CartBtn>
          <ShoppingCartSimple
            onClick={() => onAddCoffeeToCard()}
            size={22}
            weight="fill"
          />
        </CartBtn>
      </CoffeeFooter>
    </CoffeeContainer>
  )
}
