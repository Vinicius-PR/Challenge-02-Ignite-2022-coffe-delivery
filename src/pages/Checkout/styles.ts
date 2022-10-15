import styled from 'styled-components'

export const CheckoutContainerForm = styled.form`
  display: flex;
  gap: 2rem;
  @media (max-width: 890px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  h2 {
    font-family: 'Baloo 2', cursive;
  }
`
export const CheckoutDetalis = styled.div`
  width: 40rem;
`

export const CheckoutAddressAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CheckoutProducts = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
`
