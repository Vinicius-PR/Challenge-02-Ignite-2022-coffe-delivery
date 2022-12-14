import styled from 'styled-components'

export const CheckoutAddressContainer = styled.div`
  padding: 2.5rem 0;
  @media (max-width: 480px) {
    padding: 0.8rem 0;
  }
`

export const CheckoutAddressTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const CheckoutAddressInputs = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.75rem;
    border: none;
    max-height: 2.6rem;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:first-child {
    max-width: 12.5rem;
  }

  input[name='complemento'],
  input[name='cidade'] {
    flex: 1;
  }

  input[name='uf'] {
    width: 3.75rem;
  }
`

export const InputBox = styled.div`
  display: flex;
  gap: 0.75rem;
  div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`

export const InputError = styled.span`
  color: red;
  font-size: 0.7rem;
`
