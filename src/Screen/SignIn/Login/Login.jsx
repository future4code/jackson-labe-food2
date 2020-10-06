import React from 'react'
import Inputs from '../../../Components/Inputs/Inputs'

export default function Login() {
    const { form, onChange, resetState } = React.useState()
    return (
        <main>
            <Inputs
                name={'email'}
                value={'Auto e avante'}
                onChange={'null'}
                placeholder={'Email'}
                type={'email'}
                autoComplete={'email'}
                required
                autoFocus
            />
        </main>
    )
}