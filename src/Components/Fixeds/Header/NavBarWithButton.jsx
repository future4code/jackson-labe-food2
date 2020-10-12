import React from "react";
import goBack from '../../../Assets/Imgs/go-back.png';
import { Header } from './styled';

export default function NavBarWithButton(props) {
    return (
        <Header>
            <img onClick={props.onClick} src={goBack} alt='Voltar' />
            <div>
                <p data-testid={'titleHeader'}>{props.titleHeader}</p>
            </div>
        </Header>
    );
}