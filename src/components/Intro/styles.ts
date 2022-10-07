import styled from 'styled-components'

export const IntroContainer = styled.div`
  margin-top: 5.8rem;
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 680px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 0;
  }
`

export const IntroContent = styled.div`
  max-width: 36.75rem;
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export const IntroDetails = styled.div`
  color: ${(props) => props.theme['base-text']};
  margin-top: 4.1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  @media (max-width: 680px) {
    margin-top: 2rem;
  }
`

export const IntroDetailColumn = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
`

export const IntroItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  p {
    font-size: 1rem;
  }
`

const BACKGROUND_COLOR_SVG = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IntroIconProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR_SVG
}

export const IntroIcon = styled.div<IntroIconProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) =>
    props.theme[BACKGROUND_COLOR_SVG[props.backgroundColor]]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.theme.background};
  }
`

export const IntroImg = styled.div`
  @media (max-width: 1024px) {
    img {
      width: 25rem;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 20rem;
    }
  }

  @media (max-width: 680px) {
    img {
      width: 15rem;
    }
  }
`
