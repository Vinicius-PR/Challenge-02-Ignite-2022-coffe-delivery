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

export function cardReducer(state: CardState, action: any) {
  switch (action.type) {
    case 'ADD_COFFEE_AT_CARD':
      return state
    default:
      return state
  }
}
