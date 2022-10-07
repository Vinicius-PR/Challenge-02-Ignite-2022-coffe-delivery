import styled from 'styled-components'

export const Container = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(
    102.89deg,
    yellow 2.61%,
    #bd8a70 34.66%,
    #bd8a70 75.23%,
    #8047f8 98.76%
  );
  & > div {
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    margin-left: 1px;
    margin-bottom: 1px;

    padding: calc(2.5rem - 2px);
    border-radius: 6px 36px;
    background-color: ${(props) => props.theme.background};

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  svg {
    color: ${(props) => props.theme.background};
  }

  p,
  strong {
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

const BaseIconContainer = styled.div`
  min-width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const Address = styled.div`
  display: flex;
  gap: 0.75rem;

  & > div:first-child {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.purple};
    border-radius: 50%;
  }
`

export const AddressIcon = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.purple};
`

export const DeliveryTime = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const DeliveryIcon = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.yellow};
`

export const Payment = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const PaymentIcon = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
