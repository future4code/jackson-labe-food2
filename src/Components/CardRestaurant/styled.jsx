import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 20.5rem;
  height: 11.75rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 0.532rem auto;
  font-family: arial;
  cursor: pointer;
  > img {
    width: 100%;
    height: 7.5rem;
    border-radius: 8px 8px 0 0;
  }
  > p {
    height: 1.125rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.39px;
    color: #e8222e;
    margin: 0.5rem 0 0.5rem 1rem;
  }
  > span {
    letter-spacing: -0.39px;
    color: #b8b8b8;
    font-size: 1rem;
    height: 1.125rem;
    
  }
`
export const SpanMin = styled.span`
  margin: 0 10rem 1rem 1rem; 
`
export const SpanShipping = styled.span`
  margin-left: 0; 
`

