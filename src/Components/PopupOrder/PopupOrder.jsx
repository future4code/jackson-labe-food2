import React from 'react'
import { Main, Popup, Text, TimeIcon } from './styled'
import clock from '../../Assets/Imgs/clock.svg'

export default function PopupOrder(props) {
    return (
        <Main>
            <Popup>
                <TimeIcon>
                    <img src={clock} alt="" />
                </TimeIcon>
                <Text>
                    <p>Pedido em andamento</p>
                    <b>{props.restaurantName}</b>
                    <strong>Subtotal R${props.amountTotal}0</strong>
                </Text>
            </Popup>
        </Main>
    )
}