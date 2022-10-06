import { Coffee } from '../Coffee'
import { CoffeeListContainer, CoffeeListContent } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1> Nossos cafés </h1>
      <CoffeeListContent>
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
