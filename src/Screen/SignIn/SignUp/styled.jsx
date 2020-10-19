import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
  > img {
      width: 104px;
      height: 58px;
      margin-top: 1.5rem;
    }
    p{
      font-size: 16px;
      margin: 1.75rem 0 0;
    }
`
export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  margin-top: 50px;
`

export const ShowPass = styled.span`
    position: fixed;
    bottom: 29%;
    right: 1.5rem;
    z-index: 1111111111;
`

export const ShowConfirmPass = styled.span`
    position: fixed;
    bottom: 18%;
    right: 1.5rem;
    z-index: 1111111111;
`