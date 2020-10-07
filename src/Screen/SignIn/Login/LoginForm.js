import React from 'react'
import { useHistory } from 'react-router-dom'
import Inputs from '../../../Components/Inputs/Inputs'
import useForm from '../../../Hooks/useForm'

export default function LoginForm(props) {
    const history = useHistory()
    const [form, onChange] = useForm({ email: '', password: '' })

    const onClickLogin = (event) => {
        event.preventDefault()
        const element = document.getElementById('login_form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
            // login(form, history, props.setButtonName)
        }
    }

    return (
        <main>
            <Inputs
                name={'email'}
                value={''}
                onChange={'null'}
                placeholder={'Email'}
                type={'email'}
                autoComplete={'email'}
                required
                autoFocus
            />

            <Inputs
                name={'password'}
                value={''}
                onChange={'null'}
                placeholder={'Senha'}
                type={'password'}
                autoComplete={'password'}
                required
            />
        </main>
    )
}