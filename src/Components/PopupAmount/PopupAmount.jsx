import React from 'react'
import { Main, Popup } from './styled'

export default function PopupAmount(props) {
    const [options] = React.useState([{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }])
    const [amount, setAmount] = React.useState()

    const changeAmount = (event) => {
        setAmount(event.target.value)
    }
    return (
        <Main>
            <Popup>
                <p>Selecione a quantidade desejada</p>
                <select onChange={changeAmount}>
                    <option value="none">0</option>
                    {options.map((o) => {
                        return (
                            <option value={o.val} key={o.val}>{o.val}</option>
                        )
                    })}
                </select>
                <b onClick={props.adicionar}>Adicionar ao carrinho</b>
            </Popup>
        </Main>
    )
}