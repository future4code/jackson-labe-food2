import React from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import { signUpUser } from '../../User/User'
import Inputs from '../../../Components/Inputs/Inputs'
import useForm from '../../../Hooks/useForm'

export default function SignUpForm(props) {
    const history = useHistory()
    const [form, onChange] = useForm({ name: '', email: '', "cpf": '', password: '' })

    const onClickSignUp = (event) => {
        event.preventDefault()
        const element = document.getElementById('signup_form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
            // signUp(form, history, props.setButtonName)
        }
    }

    return (
        <main>
            <Inputs
                name={'name'}
                value={''}
                onChange={'null'}
                placeholder={'Nome'}
                type={'name'}
                autoComplete={'name'}
                required
                autoFocus
            />

            <Inputs
                name={'email'}
                value={''}
                onChange={'null'}
                placeholder={'Email'}
                type={'email'}
                autoComplete={'email'}
                required
            />

            <Inputs
                name={'cpf'}
                value={''}
                onChange={'null'}
                placeholder={'000.000.000-00'}
                type={'number'}
                autoComplete={'cpf'}
                required
            />

            <Inputs
                name={'senha'}
                value={''}
                onChange={'null'}
                placeholder={'Senha'}
                type={'password'}
                autoComplete={'password'}
                required
            />

            <Inputs
                name={'senha'}
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
