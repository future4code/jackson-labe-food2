import React from 'react'
import SignUpAddressForm from './SignUpAddressForm'
import NavBarWithButton from '../../../Components/Fixeds/Header/NavBarWithButton'
import { ScreenContainer } from './styled'
import { goToBack } from '../../../Router/Coordinator'
import { useHistory } from 'react-router-dom'


export default function SignUpAddress() {
    const history = useHistory()
    return (
        <>
            <NavBarWithButton
                clickGoBack={() => goToBack(history)}
            />
            <ScreenContainer>
                <p>Meu Endereço</p>
                <SignUpAddressForm />
            </ScreenContainer>
        </>
    )
}