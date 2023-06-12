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
  handleAddCoffeeToCart: (newCoffeeToCart: CoffeeProductProps) => void
  handleDecreaseCoffeeByOne: (coffeeId: string) => void
  handleIncreaseCoffeeByOne: (coffeeId: string) => void
  handleRemoveCoffeeFromCart: (coffeeId: string) => void
  handleResetCart: () => void
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
        'coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return {
          products: [],
          total: 0,
        }
      }
    },
  )

  const { products, total } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function handleAddCoffeeToCart(newCoffeeToCart: CoffeeProductProps) {
    dispatch(addCoffeeToCartAction(newCoffeeToCart))
  }

  function handleDecreaseCoffeeByOne(coffeeId: string) {
    dispatch(decreaseCoffeeByOneAction(coffeeId))
  }

  function handleIncreaseCoffeeByOne(coffeeId: string) {
    dispatch(increaseCoffeeByOneAction(coffeeId))
  }

  function handleRemoveCoffeeFromCart(coffeeId: string) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function handleResetCart() {
    dispatch(resetCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        handleAddCoffeeToCart,
        handleDecreaseCoffeeByOne,
        handleIncreaseCoffeeByOne,
        handleRemoveCoffeeFromCart,
        handleResetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
