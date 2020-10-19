import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../../Router/Coordinator'
import logo from '../../../Assets/Imgs/logo.svg'
import useUnprotectedPage from '../../../Hooks/useUnprotectedPage'

export default function LoginPage(props) {
    const history = useHistory()
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <img alt={'logo'} src={logo} />
            <p>Entrar</p>
            <LoginForm setButtonName={props.setButtonName} />

            <SignUpButtonContainer>
                <span onClick={() => goToSignUp(history)}>
                    Não possui cadastro? Clique aqui.
                </span>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}