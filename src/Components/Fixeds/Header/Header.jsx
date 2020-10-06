import React from "react";
import goBack from './go-back.png';
import { Header } from './style';

export default function Header() {
  return (
  <Header>
    <img src={goBack} alt='Voltar'/>
    <div>
      <p>{props.titleHeader}</p>
    </div>
  </Header>
  );
}