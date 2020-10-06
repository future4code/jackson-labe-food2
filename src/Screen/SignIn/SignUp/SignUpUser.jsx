import React from 'react'
import { ScreenContainer } from './styled'
import SignUpUserForm from './SignUpUserForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import logo from '../../assets/logo-future-eats.png'

const SignUpUser = (props) => {
  useUnprotectedPage()
  
  return (
    <ScreenContainer>
      <img alt={'logo'} src={logo}/>
      <SignUpForm setButtonName={props.setButtonName}/>
    </ScreenContainer>
  )
}

export default SignUpUser
