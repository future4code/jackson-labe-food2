import React from 'react'
import { Main } from './styled'

export default function CheckList(props) {
    return (
        <Main>
            <input type="radio" name={props.paymentMethod} id={props.id} value={props.value} onChange={props.onChange} onClick={props.onClick} />
            <label for={props.for} >{props.titleName}</label>
        </Main>
    )
}