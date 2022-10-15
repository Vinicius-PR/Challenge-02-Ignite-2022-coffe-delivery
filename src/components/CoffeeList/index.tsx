import { Coffee, CoffeeProps } from '../Coffee'
import { CoffeeListContainer, CoffeeListContent } from './styles'
import expressoTradicionalImg from '../../assets/products/expresso-tradicional.png'
import expressoAmericanoImg from '../../assets/products/expresso-americano.png'
import expressoCremosoImg from '../../assets/products/expresso-cremoso.png'
import expressoGeladoImg from '../../assets/products/expresso-gelado.png'
import cafeComLeiteImg from '../../assets/products/cafe-com-leite.png'
import latteImg from '../../assets/products/latte.png'
import capuccinoImg from '../../assets/products/capuccino.png'
import macchiatoImg from '../../assets/products/macchiato.png'
import mocaccinoImg from '../../assets/products/mocaccino.png'
import chocolateQuenteImg from '../../assets/products/chocolate-quente.png'
import cubanoImg from '../../assets/products/cubano.png'
import havaianoImg from '../../assets/products/havaiano.png'
import arabeImg from '../../assets/products/arabe.png'
import irlandesImg from '../../assets/products/irlandes.png'

const coffees: CoffeeProps[] = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    imageUrl: expressoTradicionalImg,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    imageUrl: expressoAmericanoImg,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    imageUrl: expressoCremosoImg,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    imageUrl: expressoGeladoImg,
  },
  {
    id: '5',
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: cafeComLeiteImg,
  },
  {
    id: '6',
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: latteImg,
  },
  {
    id: '7',
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: capuccinoImg,
  },
  {
    id: '8',
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: macchiatoImg,
  },
  {
    id: '9',
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imageUrl: mocaccinoImg,
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    imageUrl: chocolateQuenteImg,
  },
  {
    id: '11',
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    imageUrl: cubanoImg,
  },
  {
    id: '12',
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    imageUrl: havaianoImg,
  },
  {
    id: '13',
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    imageUrl: arabeImg,
  },
  {
    id: '14',
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    imageUrl: irlandesImg,
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1> Nossos cafés </h1>
      <CoffeeListContent>
        {coffees.map((coffee) => {
          return (
            <Coffee
              key={coffee.id}
              id={coffee.id}
              title={coffee.title}
              subtitle={coffee.subtitle}
              tags={coffee.tags}
              imageUrl={coffee.imageUrl}
              price={coffee.price}
            />
          )
        })}
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
