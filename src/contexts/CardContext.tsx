import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  decreaseCoffeeByOneAction,
  increaseCoffeeByOneAction,
  removeCoffeeFromCartAction,
  resetCartAction,
} from '../reducers/cart/actions'
import { cartReducer, CoffeeProductProps } from '../reducers/cart/reducer'

interface CartContextType {
  products: CoffeeProductProps[]
  total: number
  handleAddCoffeeToCard: (newCoffeeToCard: CoffeeProductProps) => void
  handleDecreaseCoffeeByOne: (coffeeId: string) => void
  handleIncreaseCoffeeByOne: (coffeeId: string) => void
  handleRemoveCoffeeFromCard: (coffeeId: string) => void
  handleResetCard: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      total: 0,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        'coffee-delivery:card-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  const { products, total } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('coffee-delivery:card-state-1.0.0', stateJSON)
  }, [cartState])

  function handleAddCoffeeToCard(newCoffeeToCard: CoffeeProductProps) {
    dispatch(addCoffeeToCartAction(newCoffeeToCard))
  }

  function handleDecreaseCoffeeByOne(coffeeId: string) {
    dispatch(decreaseCoffeeByOneAction(coffeeId))
  }

  function handleIncreaseCoffeeByOne(coffeeId: string) {
    dispatch(increaseCoffeeByOneAction(coffeeId))
  }

  function handleRemoveCoffeeFromCard(coffeeId: string) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function handleResetCard() {
    dispatch(resetCartAction())
  }

  return (
    <CartContext.Provider
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
    </CartContext.Provider>
  )
}
