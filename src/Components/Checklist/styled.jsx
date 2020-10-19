import styled from 'styled-components'

export const Main = styled.main`
    input[type="radio"]{
        display: none;
        :checked + label:before {
            border-color: black;
            box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0)
        }
        :checked + label:after {
            transform: scale(1);
        }
        
    }
    label{
        display: inline-block;
        height:1.125rem;
        position: relative;
        padding: 0 30px;
        margin-bottom: 0;
        cursor: pointer;
        vertical-align: bottom;

        &:before, &:after {
            position: absolute;            
            content: '';  
            border-radius: 50%;
            transition: all .3s ease;
            transition-property: transform, border-color;
        }

        &:before {
            left: 0;
            top: 0.225rem;
            width: 13px;
            height: 13.5px;
            border: 2px solid black;
        }

        &:after {
            top: 0.42rem;
            left: 0.2rem;
            width:11px;
            height:11px;
            transform: scale(0);
            background:black;
        }
    }
`