import React from 'react'
import { InputsContainer, SignUpFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { addAddress } from '../../User/User'

const SignUpForm = (props) => {
  const history = useHistory()
  const [form, onChange] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''})

  const onClickSignUp = (event) => {
    event.preventDefault()
    const element = document.getElementById('addAddress_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
        addAddress(form, history, props.setButtonName)
    }
  }

  return (
    <main>
        <Inputs
            name={'street'}
            value={''}
            onChange={'null'}
            placeholder={'Rua'}
            type={'name'}
            autoComplete={'rua'}
            required
            autoFocus
        />

        <Inputs
            name={'number'}
            value={''}
            onChange={'null'}
            placeholder={'Numero'}
            type={'number'}
            autoComplete={'numero'}
            required
        />

        <Inputs
            name={'neighbourhood'}
            value={''}
            onChange={'null'}
            placeholder={'Bairro'}
            type={'name'}
            autoComplete={'bairro'}
            required
        />

        <Inputs
            name={'city'}
            value={''}
            onChange={'null'}
            placeholder={'Cidade'}
            type={'name'}
            autoComplete={'cidade'}
            required
        />

        <Inputs
            name={'state'}
            value={''}
            onChange={'null'}
            placeholder={'Estado'}
            type={'name'}
            autoComplete={'estado'}
            required
        />

        <Inputs
            name={'complement'}
            value={''}
            onChange={'null'}
            placeholder={'Complemento'}
            type={'text'}
            autoComplete={'complemento'}
        />
    </main>
)
}
