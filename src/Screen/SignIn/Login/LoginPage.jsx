import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'
import logo from '../../assets/logo-future-eats.png'

const LoginPage = (props) => {
  const history = useHistory()
  useUnprotectedPage()
  
  return (
    <ScreenContainer>
      <img alt={'logo'} src={logo}/>
      <LoginForm setButtonName={props.setButtonName}/>
      <SignUpButtonContainer>
        <button
          onClick={() => goToSignUp(history)}
          type={'submit'}
        >
          Não possui cadastro? Clique aqui.
        </button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
