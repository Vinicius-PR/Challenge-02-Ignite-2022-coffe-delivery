/* eslint-disable no-unused-vars */
import { CoffeeProductProps } from './reducer'

export enum ActionsCartTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  DECREASE_COFFEE_BY_ONE = 'DECREASE_COFFEE_BY_ONE',
  INCREASE_COFFEE_BY_ONE = 'INCREASE_COFFEE_BY_ONE',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeToCartAction(newCoffeeToCard: CoffeeProductProps) {
  return {
    type: ActionsCartTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffeeToCard,
    },
  }
}

export function decreaseCoffeeByOneAction(coffeeId: string) {
  return {
    type: ActionsCartTypes.DECREASE_COFFEE_BY_ONE,
    payload: {
      coffeeId,
    },
  }
}

export function increaseCoffeeByOneAction(coffeeId: string) {
  return {
    type: ActionsCartTypes.INCREASE_COFFEE_BY_ONE,
    payload: {
      coffeeId,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: string) {
  return {
    type: ActionsCartTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionsCartTypes.RESET_CART,
  }
}
