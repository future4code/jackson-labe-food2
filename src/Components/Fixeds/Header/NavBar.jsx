import React from "react";
import goBack from '../../../Assets/Imgs/go-back.png';
import { Header } from './styled';

export default function NavBar(props) {
    return (
        <Header>
            <span>
                <p>{props.titleHeader}</p>
            </span>
        </Header>
    );
}