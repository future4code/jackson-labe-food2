import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  > img {
      width: 104px;
      height: 58px;
      margin-top: 4.25rem;
    }
    p{
      font-size: 16px;
      margin: 1.75rem 0 0;
    }
`
export const SignUpButtonContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-top: 30px;
  :hover{
      cursor: pointer;
    }
`

export const ShowPass = styled.span`
    position: fixed;
    bottom: 52%;
    right: 1.5rem;
    z-index: 1111111111;
`