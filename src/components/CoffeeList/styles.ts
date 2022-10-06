import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 2rem;

    @media (max-width: 680px) {
      font-size: 2.5rem;
    }
  }
`
export const CoffeeListContent = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 2.5rem;
  column-gap: 2rem;
  flex-wrap: wrap;
`
