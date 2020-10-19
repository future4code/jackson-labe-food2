import React from 'react';
import {Counter, RemoveButton, AddButton, CardContainer, ImgWrapper, Img, CardContent, TitleSpan, ContentSpan, PriceSpan}from './styled';

export default function CardMenu(props) {

    const renderCartQuantity = props.productQuantity 
    ? <Counter>{props.productQuantity}</Counter> 
    : null

    const removeFromCartButton = props.productQuantity 
    ? <RemoveButton onClick={props.clickRemove}>Remover</RemoveButton> 
    : <AddButton onClick={props.clickAdd}>Adicionar</AddButton>

    return (
        <CardContainer>
            <ImgWrapper>
                <Img src={props.photoUrl} />
            </ImgWrapper>
            <CardContent>
                <TitleSpan>{props.productName}</TitleSpan>
                <ContentSpan>{props.description}</ContentSpan>
                <PriceSpan>R$ {props.price}</PriceSpan>
            </CardContent>
            {renderCartQuantity}
            {removeFromCartButton}
        </CardContainer>
    )
}