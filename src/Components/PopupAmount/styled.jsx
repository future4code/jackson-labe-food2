import styled from 'styled-components'
import dropDown from '../../Assets/Imgs/dropDown.svg'

export const Main = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 22.5rem;
    height: 40rem;
`

export const Popup = styled.div`
    width: 20.5rem;
    height: 13.5rem;
    margin: 0 1rem;
    position: absolute;
    top: 30%;
    background-color: #ffffff;
    p{
        width: 18.5rem;
        padding: 2.3rem 1rem 1.938rem;
        margin: 0;
        text-align: center;
    }
    select{
        width: 18.5rem;
        height: 3.5rem;
        margin: 0 1rem;
        padding: 1.188rem 1rem;
        font-size: 1rem;
        appearance: none;
        border-radius: 4px;
        border: 1px solid #b8b8b8;
        :focus{
            outline: none;
        }
        background: #e9e9e9 url(${dropDown}) 95.5% 50% no-repeat;
        option{
            :checked{
                font-size: 13px;
                background: gray;
            }
            :not(:checked){
                background: white;
            }
        }
    }
    b{
        display: block;
        font-weight: 400;
        font-size: 1rem;
        color: #4f81a8;
        text-transform: uppercase;
        text-align: right;
        padding: 1.75rem 1.188rem 1.313rem 0;
    }
`