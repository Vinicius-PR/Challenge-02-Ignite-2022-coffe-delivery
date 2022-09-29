import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  max-width: 74rem; /** 74rem - 2rem of padding at left and righ = 70rem **/
  padding: 0 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`
