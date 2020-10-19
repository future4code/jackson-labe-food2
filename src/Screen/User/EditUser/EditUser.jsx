import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Red from '../../../Components/Buttons/Red/Red'
import NavBarWithButton from '../../../Components/Fixeds/Header/NavBarWithButton'
import Inputs from '../../../Components/Inputs/Inputs'
import useAxios from '../../../Hooks/useAxios'
import useForm from '../../../Hooks/useForm'
import { goToBack, goToUser } from '../../../Router/Coordinator'
import { Main } from './styled'

export default function EditUser(props) {
    const { handleUser } = useAxios()
    const { form, onChange, resetState } = useForm({ name: '', email: '', cpf: '' })
    const history = useHistory()
    
    const handleForm = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleUser(form, history)
        resetState()
    }

    React.useEffect(() => {
        props.getProfile()
    }, [])

    return (
        <>
            <NavBarWithButton
                titleHeader='Editar'
                clickGoBack={() => goToUser(history)}
            />
            <Main>
                <form onSubmit={handleSubmission}>
                    <Inputs
                        type='name'
                        name='name'
                        value={form.value}
                        onChange={handleForm}
                        placeholder={props.profile.name}
                        autoComplete={props.profile.name}
                        autofocus={false}
                        required
                    />
                    <Inputs
                        type='email'
                        name='email'
                        value={form.value}
                        onChange={handleForm}
                        placeholder={props.profile.email}
                        autofocus={false}
                        required
                    />
                    <Inputs
                        type='cpf'
                        name='cpf'
                        value={form.value}
                        onChange={handleForm}
                        placeholder={props.profile.cpf}
                        autoComplete="on"
                        autofocus={false}
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        dataMask="000.000.000-00"
                        required
                    />
                    <Red
                        nameButton='Salvar'
                    />
                </form>
            </Main>
        </>
    )
}