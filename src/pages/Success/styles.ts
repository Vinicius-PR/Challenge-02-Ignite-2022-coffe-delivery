import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 680px) {
    margin-top: 1rem;
    gap: 3rem;
  }
`

export const OrderConfirmed = styled.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  & > p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 2.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessImg = styled.div`
  @media (max-width: 680px) {
    img {
      width: 20rem;
    }
  }
`

export const GoBackdiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  button {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    border: none;
    padding: 1rem 2rem;
    border-radius: 6px;
  }
`
