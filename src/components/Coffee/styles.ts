import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const CoffeeType = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 99px;
  }
`

export const CoffeeTitle = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
`

export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  width: 13.5rem;
`

export const CoffeeFooter = styled.footer`
  display: flex;
`

export const CoffeePrice = styled.div`
  color: ${(props) => props.theme['base-text']};
  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const CoffeeQuantity = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  margin-left: 1.4rem;

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const CartBtn = styled.button`
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 0.5rem;
`
