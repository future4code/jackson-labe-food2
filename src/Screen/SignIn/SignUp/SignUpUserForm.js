import React from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import Inputs from '../../../Components/Inputs/Inputs'
import useForm from '../../../Hooks/useForm'
import useAxios from '../../../Hooks/useAxios'
import Red from '../../../Components/Buttons/Red/Red'
import hide from '../../../Assets/Imgs/hide.svg'
import show from '../../../Assets/Imgs/show.svg'
import { ShowPass, ShowConfirmPass } from './styled'
import { goToAddress } from '../../../Router/Coordinator'

export default function SignUpForm(props) {
    const [type, setType] = React.useState('password')
    const [typeConfirm, setTypeConfirm] = React.useState('password')
    const history = useHistory()
    const { signUpUser } = useAxios()
    const { form, onChange, resetState } = useForm({ name: '', email: '', cpf: '', password: '', confirmPassword: '' })

    const handleForm = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmission = () => {
        signUpUser(form, history)
        resetState()
        goToAddress(history)
    }

    const validity = (event) => {
        const senha1 = form.password
        const senha2 = form.confirmPassword
        if (senha1 === senha2) {
            console.log('senhas iguais')
            handleSubmission()
            event.preventDefault()
        } else {
            alert('Confirme a senha e tente novamente!')
            event.preventDefault()
        }
    }
    const showHide = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setType(type === 'input' ? 'password' : 'input')
    }
    const showHideConfirm = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setTypeConfirm(typeConfirm === 'input' ? 'password' : 'input')
    }

    return (
        <main >
            <form onSubmit={validity}>
                <Inputs
                    name='name'
                    value={form.name}
                    onChange={handleForm}
                    placeholder={'Nome'}
                    type={'name'}
                    autoComplete={'name'}
                    required
                    autoFocus
                />

                <Inputs
                    name={'email'}
                    value={form.email}
                    onChange={handleForm}
                    placeholder={'Email'}
                    type={'email'}
                    autoComplete={'email'}
                    required
                />

                <Inputs
                    name='cpf'
                    value={form.cpf}
                    onChange={handleForm}
                    placeholder={'000.000.000-00'}
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    type={'cpf'}
                    autoComplete={'cpf'}
                    required
                />

                <Inputs
                    name='password'
                    value={form.password}
                    onChange={handleForm}
                    placeholder={'Senha*'}
                    // pattern = '/[0-9a-zA-Z]{6,}/'
                    senha1
                    type={type}
                    autoComplete={'password'}
                    required
                />
                <ShowPass onClick={showHide}>
                    {type === 'input' ?
                        <img src={hide} alt="" /> : <img src={show} alt="" />}
                </ShowPass>

                <Inputs
                    name='confirmPassword'
                    value={form.confirmPassword}
                    onChange={handleForm}
                    senha2
                    placeholder={'Confirmar Senha*'}
                    pattern = '/[0-9a-zA-Z]{6,}/'
                    type={typeConfirm}
                    autoComplete={'password'}
                    required
                />
                <ShowConfirmPass onClick={showHideConfirm}>
                    {typeConfirm === 'input' ?
                        <img src={hide} alt="" /> : <img src={show} alt="" />}
                </ShowConfirmPass>
                <Red
                    nameButton='Salvar'
                />
            </form>
        </main>
    )
}
