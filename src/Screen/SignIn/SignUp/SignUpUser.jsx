import React from 'react'
import { ScreenContainer } from './styled'
import SignUpUserForm from './SignUpUserForm'
import useUnprotectedPage from '../../../Hooks/useUnprotectedPage'
import logo from '../../../Assets/Imgs/logo.svg'
import NavBarWithButton from '../../../Components/Fixeds/Header/NavBarWithButton'
import { goToBack, goToLogin } from '../../../Router/Coordinator'
import { useHistory } from 'react-router-dom'

export default function SignUpUser(props) {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <>
            <NavBarWithButton
                onClick={() => goToLogin(history)}
            />
            <ScreenContainer>

                <img alt={'logo'} src={logo} />
                <p>Cadastrar</p>
                <SignUpUserForm setButtonName={props.setButtonName} />
            </ScreenContainer>
        </>
    )
}