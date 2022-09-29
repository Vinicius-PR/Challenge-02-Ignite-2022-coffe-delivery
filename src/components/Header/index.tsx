import { Cart, HeaderContainer, Location } from './styles'
import Logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>

        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
