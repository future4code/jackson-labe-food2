import React from 'react'
import { ScreenContainer } from './styled'
import SignUpUserForm from './SignUpUserForm'
import useUnprotectedPage from '../../../Hooks/useUnprotectedPage'
import logo from '../../../Assets/Imgs/logo-future-eats.png'

export default function SignUpUser(props) {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <img alt={'logo'} src={logo} />
            <SignUpUserForm setButtonName={props.setButtonName} />
        </ScreenContainer>
    )
}