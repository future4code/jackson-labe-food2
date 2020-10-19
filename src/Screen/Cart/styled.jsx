import styled from 'styled-components'

export const Main = styled.main`
    padding: 0 1rem;

    span{
        /* width: 20.5rem; */
        text-align: end;
        p{
            margin: 0;
            margin: 2.063rem 0 0.875rem;
        }
    }
`
export const Entrega = styled.div`
    width: 22.5rem;
    height: 6.75rem;
    background-color: #eeeeee;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    p{
        width: 20.5rem;
        margin: 0;
        padding: 1rem 1rem 0.5rem;
        color: #b8b8b8;
    }
    b{
        padding: 0rem 1rem 1rem;
        display: block;
        font-weight: 400;
        color: #000000;
    }
`
export const Vazio = styled.div`
    font-size: 1rem;
    p{
        width: 18.5rem;
        margin: 0;
        padding: 0.75rem 2rem;
        text-align: center;
    }
`
export const SubTotal = styled.div`
    display: flex;
    p{
        width: 10.25rem;
        margin: 0 0 1.5rem;
    }
    b{  
        width: 10.25rem;
        color: #e8222e;
        text-align: end;
        font-size: 1.125rem;
        margin: 0 0 1.5rem;
    }
`
export const FormPayment = styled.div`
    font-size: 1rem;
    p{
        width: 18.5rem;
        margin: 0 0 0.5rem;
    }
    border-bottom: 1px solid black;
    margin: 0 0 1.5rem;
`