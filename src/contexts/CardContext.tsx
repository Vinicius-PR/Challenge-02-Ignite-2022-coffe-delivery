import { produce } from 'immer'
import { createContext, ReactNode, useReducer } from 'react'

interface CoffeeProductProps {
  id: string
  title: string
  price: number
  imageUrl: string
  quantity: number
}

interface CardState {
  products: CoffeeProductProps[]
  total: number
}

interface CardContextType {
  products: CoffeeProductProps[]
  total: number
  handleAddCoffeeToCard: (newCoffeeToCard: CoffeeProductProps) => void
  handleDecreaseCoffeeByOne: (coffeeId: string) => void
  handleIncreaseCoffeeByOne: (coffeeId: string) => void
  handleRemoveCoffeeFromCard: (coffeeId: string) => void
  handleResetCard: () => void
}

interface CardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardState, dispatch] = useReducer(
    (state: CardState, action: any) => {
      switch (action.type) {
        case 'ADD_COFFEE_AT_CARD': {
          const currentValuePrice =
            action.payload.newCoffeeToCard.quantity *
            action.payload.newCoffeeToCard.price

          const currentProductIndex = state.products.findIndex((product) => {
            return product.id === action.payload.newCoffeeToCard.id
          })

          return produce(state, (draft) => {
            if (currentProductIndex > -1) {
              draft.products[currentProductIndex].quantity +=
                action.payload.newCoffeeToCard.quantity
            } else {
              draft.products.push(action.payload.newCoffeeToCard)
            }
            draft.total += currentValuePrice
            draft.total = Math.round(draft.total * 100) / 100
          })
        }

        case 'DECREASE_COFFEE_BY_ONE': {
          const currentProductIndex = state.products.findIndex((product) => {
            return product.id === action.payload.coffeeId
          })

          const valueToDecrease = state.products[currentProductIndex].price

          return produce(state, (draft) => {
            if (draft.products[currentProductIndex].quantity === 1) {
              draft.products.splice(currentProductIndex, 1)
            } else {
              draft.products[currentProductIndex].quantity--
            }
            draft.total -= valueToDecrease
            draft.total = Math.round(draft.total * 100) / 100
          })
        }

        case 'INCREASE_COFFEE_BY_ONE': {
          const currentProductIndex = state.products.findIndex((product) => {
            return product.id === action.payload.coffeeId
          })

          const valueToIncrease = state.products[currentProductIndex].price

          return produce(state, (draft) => {
            draft.products[currentProductIndex].quantity++
            draft.total += valueToIncrease
            draft.total = Math.round(draft.total * 100) / 100
          })
        }

        case 'REMOVE_COFFEE_FROM_CARD': {
          const currentProductIndex = state.products.findIndex((product) => {
            return product.id === action.payload.coffeeId
          })
          const valueToDecrease =
            state.products[currentProductIndex].price *
            state.products[currentProductIndex].quantity
          return produce(state, (draft) => {
            draft.products.splice(currentProductIndex, 1)
            draft.total -= valueToDecrease
            draft.total = Math.round(draft.total * 100) / 100
          })
        }

        case 'RESET_CARD':
          return produce(state, (draft) => {
            draft.products = []
            draft.total = 0
          })

        default:
          return state
      }
    },
    {
      products: [],
      total: 0,
    },
  )

  const { products, total } = cardState

  function handleAddCoffeeToCard(newCoffeeToCard: CoffeeProductProps) {
    dispatch({
      type: 'ADD_COFFEE_AT_CARD',
      payload: {
        newCoffeeToCard,
      },
    })
  }

  function handleDecreaseCoffeeByOne(coffeeId: string) {
    dispatch({
      type: 'DECREASE_COFFEE_BY_ONE',
      payload: {
        coffeeId,
      },
    })
  }

  function handleIncreaseCoffeeByOne(coffeeId: string) {
    dispatch({
      type: 'INCREASE_COFFEE_BY_ONE',
      payload: {
        coffeeId,
      },
    })
  }

  function handleRemoveCoffeeFromCard(coffeeId: string) {
    dispatch({
      type: 'REMOVE_COFFEE_FROM_CARD',
      payload: {
        coffeeId,
      },
    })
  }

  function handleResetCard() {
    dispatch({
      type: 'RESET_CARD',
    })
  }

  return (
    <CardContext.Provider
      value={{
        products,
        total,
        handleAddCoffeeToCard,
        handleDecreaseCoffeeByOne,
        handleIncreaseCoffeeByOne,
        handleRemoveCoffeeFromCard,
        handleResetCard,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}