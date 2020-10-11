import React from 'react';
import { CardContainer, SpanMin, SpanShipping, SpanAddress } from './styled';

export default function CardRestaurant(props) {

    return (
        <CardContainer onClick={props.clickGoToRestaurant} key={props.restaurantId}>
            <img src={props.logoRestaurant} alt={'Logo do restaurante'}/>
            <p>{props.nameRestaurant}</p>
            <SpanMin>{props.deliveryTime} min</SpanMin>
            <SpanShipping>Frete R${props.shipping},00</SpanShipping>
            <SpanAddress>{props.address}</SpanAddress>
        </CardContainer>
    )
}
