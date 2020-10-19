import React from "react";
export { CardContainer, P, Title } from './styled';

export default function CardDetail(props) {
  return (
    <CardContainer>
      <img src={props.logoRestaurant} />
      <div>
        <Title>{props.nameRestaurant}</Title>
        <P>{props.category}</P>
        <span>{props.deliveryTime} min</span>
        <span>Frete R${props.shipping},00</span>
        <P>{props.address}</P>
      </div>
    </CardContainer>
  );
}
