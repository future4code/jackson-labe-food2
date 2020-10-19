import React from 'react'

export default function (initialState) {
    const [form, setForm] = React.useState(initialState)

    const onChange = (id, value) => {
        const newForm = { ...form, [id]: value }
        setForm(newForm)
    }

    const resetState = () => {
        setForm(initialState)
    }
    return { form, onChange, resetState }
}