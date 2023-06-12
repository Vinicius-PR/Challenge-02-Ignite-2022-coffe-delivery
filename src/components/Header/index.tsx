import { Cart, HeaderContainer, Location } from './styles'
import Logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { products } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>

        <NavLink to="/checkout" title="checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            {products?.length > 0 ? <div>{products.length}</div> : ''}
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
