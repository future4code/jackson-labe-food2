import axios from 'axios'
import React from 'react'
import Red from '../../../Components/Buttons/Red/Red'
import NavBar from '../../../Components/Fixeds/Header/NavBar'
import Inputs from '../../../Components/Inputs/Inputs'
import useForm from '../../../Hooks/useForm'
import { Main } from './styled'

export default function EditUser(props) {
    const { form, onChange, resetState } = useForm({ name: '', email: '', cpf: '' })

    const token = window.localStorage.getItem("token")
    const handleUser = () => {
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf
        }
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response)
            props.getProfile()
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleForm = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleUser()
        resetState()
    }

    React.useEffect(() => {
        props.getProfile()
    }, [])

    return (
        <>
            <NavBar
                titleHeader='Editar'
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