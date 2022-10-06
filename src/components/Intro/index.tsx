import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeImg from '../../assets/coffee-intro.png'
import {
  IntroContainer,
  IntroContent,
  IntroDetailColumn,
  IntroDetails,
  IntroIcon,
  IntroImg,
  IntroItems,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o coffee Delivery você recebe o seu café onde estiver, a qualquer
          hora
        </p>

        <IntroDetails>
          <IntroDetailColumn>
            <IntroItems>
              <IntroIcon backgroundColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </IntroIcon>
              <p>Compra simples e segura</p>
            </IntroItems>

            <IntroItems>
              <IntroIcon backgroundColor="yellow">
                <Timer size={16} weight="fill" />
              </IntroIcon>
              <p>Entrega rápida e rastreada</p>
            </IntroItems>
          </IntroDetailColumn>

          <IntroDetailColumn>
            <IntroItems>
              <IntroIcon backgroundColor="gray">
                <Package size={16} weight="fill" />
              </IntroIcon>
              <p>Embalagem mantém o café intacto</p>
            </IntroItems>

            <IntroItems>
              <IntroIcon backgroundColor="purple">
                <Coffee size={16} weight="fill" />
              </IntroIcon>
              <p>O café chega fresquinho até você</p>
            </IntroItems>
          </IntroDetailColumn>
        </IntroDetails>
      </IntroContent>

      <IntroImg>
        <img src={coffeeImg} alt="" />
      </IntroImg>
    </IntroContainer>
  )
}
