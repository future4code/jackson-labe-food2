import React from 'react';
import { Button } from './style';

export default function Red(props) {
    return (
        <Button onClick={props.onClick}>{props.nameButton}</Button>
    )
}