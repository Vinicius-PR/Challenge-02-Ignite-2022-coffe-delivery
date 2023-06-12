import produce from 'immer'
import { ActionsCartTypes } from './actions'

export interface CoffeeProductProps {
  id: string
  title: string
  price: number
  imageUrl: string
  quantity: number
}

interface CartState {
  products: CoffeeProductProps[]
  total: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionsCartTypes.ADD_COFFEE_TO_CART: {
      const currentValuePrice =
        action.payload.newCoffeeToCart.quantity *
        action.payload.newCoffeeToCart.price

      const currentProductIndex = state.products.findIndex((product) => {
        return product.id === action.payload.newCoffeeToCart.id
      })

      return produce(state, (draft) => {
        if (currentProductIndex > -1) {
          draft.products[currentProductIndex].quantity +=
            action.payload.newCoffeeToCart.quantity
        } else {
          draft.products.push(action.payload.newCoffeeToCart)
        }
        draft.total += currentValuePrice
        draft.total = Math.round(draft.total * 100) / 100
      })
    }

    case ActionsCartTypes.DECREASE_COFFEE_BY_ONE: {
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

    case ActionsCartTypes.INCREASE_COFFEE_BY_ONE: {
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

    case ActionsCartTypes.REMOVE_COFFEE_FROM_CART: {
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

    case ActionsCartTypes.RESET_CART:
      return produce(state, (draft) => {
        draft.products = []
        draft.total = 0
      })

    default:
      return state
  }
}
