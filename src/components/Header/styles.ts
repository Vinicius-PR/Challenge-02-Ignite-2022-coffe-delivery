import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }

  div {
    display: flex;
  }
`
export const Location = styled.div`
  height: 2.4rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 8px;

  margin-right: 0.75rem;

  svg {
    margin-right: 0.25rem;
  }
`

export const Cart = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;

  div {
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`
