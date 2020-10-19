import React from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../../Hooks/useForm'
import Inputs from '../../../Components/Inputs/Inputs'
import useAxios from '../../../Hooks/useAxios'
import Red from '../../../Components/Buttons/Red/Red'

export default function SignUpAddressForm(props) {
    const history = useHistory()
    const { addAddress } = useAxios()
    const { form, onChange, resetState } = useForm({ street: '', number: '', neighbourhood: '', city: '', state: '', complement: '' })

    const handleForm = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }
    const handleSubmission = (event) => {
        event.preventDefault()
        addAddress(form, history)
        resetState()
    }

    return (
        <main>
            <form onSubmit={handleSubmission}>
                <Inputs
                    name='street'
                    value={form.street}
                    onChange={handleForm}
                    placeholder={'Rua'}
                    type='name'
                    autoComplete={'rua'}
                    required
                    autoFocus
                />

                <Inputs
                    name='number'
                    value={form.number}
                    onChange={handleForm}
                    placeholder={'Número'}
                    type='number'
                    autoComplete={'numero'}
                    required
                />

                <Inputs
                    name='neighbourhood'
                    value={form.neighbourhood}
                    onChange={handleForm}
                    placeholder={'Bairro'}
                    type='name'
                    autoComplete={'bairro'}
                    required
                />

                <Inputs
                    name='city'
                    value={form.city}
                    onChange={handleForm}
                    placeholder={'Cidade'}
                    type='name'
                    autoComplete={'cidade'}
                    required
                />

                <Inputs
                    name='state'
                    value={form.state}
                    onChange={handleForm}
                    placeholder={'Estado'}
                    type='name'
                    autoComplete={'estado'}
                    required
                />

                <Inputs
                    name='complement'
                    value={form.complement}
                    onChange={handleForm}
                    placeholder={'Complemento'}
                    type='text'
                    autoComplete={'complemento'}
                    required={false}
                />
                <Red
                    nameButton="Salvar"
                />
            </form>
        </main>
    )
}
