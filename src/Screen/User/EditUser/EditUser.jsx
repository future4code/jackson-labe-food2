import axios from 'axios'
import React from 'react'
import Red from '../../../Components/Buttons/Red/Red'
import NavBar from '../../../Components/Fixeds/Header/NavBar'
import Inputs from '../../../Components/Inputs/Inputs'
import useForm from '../../../Hooks/useForm'
import { Main } from './styled'

export default function EditUser(props) {
    const { form, onChange, resetState } = useForm({ name: '', email: '', cpf: '' })

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBXcEhOWERScWtMRndtTllkTUFNIiwibmFtZSI6IkJhbmFuaW5oYSBDb20gQcOnYWkiLCJlbWFpbCI6IkJhbmFuaW5oYUAxMi5jb20iLCJjcGYiOiIxNDMuOTU3LjI1Ni05NyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBMb29waW5obyBCcmF6LCBpbmZpbml0ZSwgMDAwIC0gVmlsYSBOLiBpbmZpbml0byBkbyBwcmV0w6lyaXRvIiwiaWF0IjoxNjAxOTM3ODgxfQ.m21po06KvqeHnxC7T6OR9Q8BVdfoO4MIGjntMtfXRkU'

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
                        autocomplete={props.profile.name}
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
                        autofocus={false}
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