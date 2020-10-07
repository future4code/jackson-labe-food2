import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../../Router/Coordinator'
import logo from '../../../Assets/Imgs/logo-future-eats.png'
import useUnprotectedPage from '../../../Hooks/useUnprotectedPage'

export default function LoginPage(props) {
    const history = useHistory()
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <img alt={'logo'} src={logo} />
            <LoginForm setButtonName={props.setButtonName} />

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