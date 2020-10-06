import React from 'react';
import { Input } from './style';

export default function Inputs(props) {
    return (
        <Input
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type}
            autoComplete={props.autoComplete}
            autoFocus
            required
        />
    )
}