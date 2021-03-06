import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 3.062rem;
  border-top: 1px solid #b8b8b8;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background: white;
  bottom: 0;
  margin-bottom: 0;
  > img {
    width: 1.688rem;
    height: 1.688rem;
    object-fit: contain;
    fill: ${props => props.mudarVermelho ? 'red' : 'gray'}
  }
`