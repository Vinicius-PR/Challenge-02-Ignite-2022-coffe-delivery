import styled from 'styled-components'

export const PaymentsContainer = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 480px) {
    padding: 0.8rem 0;
  }
`

export const PaymentsTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    color: ${(props) => props.theme.purple};
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
export const PayMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 375px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex: 1;
    font-size: 0.75rem;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    padding: 1rem 0;
    svg {
      color: ${(props) => props.theme.purple};
      margin-left: 1rem;
    }
  }
`
