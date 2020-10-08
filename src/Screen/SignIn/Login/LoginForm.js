import React from 'react'
import { useHistory } from 'react-router-dom'
import Red from '../../../Components/Buttons/Red/Red'
import Inputs from '../../../Components/Inputs/Inputs'
import useAxios from '../../../Hooks/useAxios'
import useForm from '../../../Hooks/useForm'
import hide from '../../../Assets/Imgs/hide.svg'
import show from '../../../Assets/Imgs/show.svg'
import { ShowPass } from './styled'

export default function LoginForm(props) {
    const [type, setType] = React.useState('password')
    const { login } = useAxios()
    const history = useHistory()
    const { form, onChange, resetState } = useForm({ email: '', password: '' })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
        resetState()
    }



    const showHide = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setType(type === 'input' ? 'password' : 'input')
    }

    return (
        <main>
            <form onSubmit={handleSubmission}>
                <Inputs
                    name='email'
                    value={form.email}
                    onChange={handleOnChange}
                    placeholder={'email@email.com'}
                    type='email'
                    autoComplete={'email'}
                    required
                    autoFocus
                />

                <Inputs
                    name='password'
                    value={form.password}
                    onChange={handleOnChange}
                    placeholder={'Minimo de 6 caracteres'}
                    pattern = '/[0-9a-zA-Z]{6,}/'
                    type={type}
                    autoComplete={'password'}
                    required
                />
                <ShowPass onClick={showHide}>
                    {type === 'input' ?
                        <img src={hide} alt="" /> : <img src={show} alt="" />}
                </ShowPass>
                <Red
                    nameButton="Entrar"
                />
            </form>
        </main>
    )
}