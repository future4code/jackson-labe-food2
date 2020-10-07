import styled from 'styled-components';

export const Header = styled.header`
  font-family: arial;
  display: flex;
  width: 100%;
  height: 2.75rem;
  border-bottom: 1px solid #b8b8b8;
  align-items: center;
  > img {
    height: 16px;
    padding-left: 30px
  }
  > div {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    padding-right: 30px;
    > p {
      font-weight: 600;
    }
  }
  span{
      width: 50%;
      margin: 0 auto;
      text-align: center;
      p {
        font-weight: 600;
      }
    }
`