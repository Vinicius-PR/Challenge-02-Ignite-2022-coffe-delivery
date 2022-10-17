import styled from 'styled-components'

export const ContainerTitle = styled.h2`
  margin-bottom: 1rem;
`

export const Container = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;

  @media (max-width: 425px) {
    padding: 0.8rem;
  }
`

export const Product = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  margin-bottom: 3rem;
  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;

    @media (max-width: 375px) {
      width: 3rem;
      height: 3rem;
      margin-right: 0.5rem;
    }
  }
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    display: flex;
    gap: 0.5rem;

    @media (max-width: 375px) {
      gap: 0.25rem;
    }
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

  @media (max-width: 375px) {
    width: 4rem;
  }

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
export const RemoveCoffeeBtn = styled.div`
  padding: 0.5rem;
  font-size: 0.75rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['base-button']};
  cursor: pointer;

  @media (max-width: 375px) {
    padding: 0.25rem;
    gap: 0.1rem;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const ProductPrice = styled.div`
  color: ${(props) => props.theme['base-text']};
  flex: 1;
  text-align: right;
  font-weight: 700;
`
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }
`
export const ConfirmBtn = styled.button`
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  width: 100%;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.3;
  background-color: ${(props) => props.theme.yellow};
  padding: 0.75rem 0;
  cursor: pointer;
`
export const EmptyCardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    border: none;
    border-radius: 6px;
    margin-top: 1rem;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    padding: 0.8rem 1.5rem;
    cursor: pointer;
  }
`
