import React from 'react'
import axios from 'axios'
import Red from '../../../Components/Buttons/Red/Red'
import NavBarWithButton from '../../../Components/Fixeds/Header/NavBarWithButton'
import Inputs from '../../../Components/Inputs/Inputs'
import useForm from '../../../Hooks/useForm'
import useAxios from "../../../Hooks/useAxios"
import { useHistory } from 'react-router-dom'
import {Main} from './styled'


export default function EditAddress() {
    const {form, onChange, resetState} =useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})
    const {addAddress} = useAxios()
    const token = window.localStorage.getItem("token")
    const history = useHistory()

    const handleSubmission = (event) =>{    
        event.preventDefault()
        addAddress(form,history)
        resetState()
    }
    const handleForm = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }   



    return (
       <>
        <NavBarWithButton
            titleHeader="Endereço"
        />
        <Main>

            <form
                onSubmit={handleSubmission}
            >
                <Inputs
                type='text'
                name='street'
                value={form.street}
                onChange={handleForm}
                placeholder="Rua"
                autoComplete=""
                autofocus={false}
                required
                />
                <Inputs
                type='text'
                name='number'
                value={form.number}
                onChange={handleForm}
                placeholder="Numero"
                autoComplete=""
                autofocus={false}
                required
                />
                <Inputs
                type='text'
                name='neighbourhood'
                min={0}
                value={form.neighbourhood}
                onChange={handleForm}
                placeholder="Bairro"
                autoComplete=""
                autofocus={false}
                required
                />
                <Inputs
                type='text'
                name='city'
                value={form.city}
                onChange={handleForm}
                placeholder="Cidade"
                autoComplete=""
                autofocus={false}
                required
                />
                <Inputs
                type='text'
                name='state'
                value={form.state}
                onChange={handleForm}
                placeholder="Estado"
                autoComplete=""
                autofocus={false}
                required
                />
                <Inputs
                type='text'
                name='complement'
                value={form.complement}
                onChange={handleForm}
                placeholder="Complemento"
                autoComplete=""
                autofocus={false}
                required
                />
                <Red
                    nameButton="Salvar"
                />
            </form>

        </Main>
        </>
    )
}