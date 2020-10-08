import React from 'react';
import { OrderContainer } from './styled';

export default function OrderHistory(props) {

    return (
        <OrderContainer>
            <p>{props.title}</p>
            <small>{props.date}</small>
            <h4>{props.totalPrice}</h4>
        </OrderContainer>
    )

}