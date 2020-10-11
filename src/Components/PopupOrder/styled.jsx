import styled from 'styled-components'

export const Main = styled.main`
    position: fixed;
    bottom: 3.063rem;
`
export const Popup = styled.div`
    width: 22.5rem;
    height: 7.375rem;
    background: #e8222e;
    display: flex;
`
export const TimeIcon = styled.div`
    padding: 2.75rem 1.5rem;
`
export const Text = styled.div`
    padding: 1.5rem 1.5rem 1.5rem 0;
    p{
        margin: 0;
        padding-bottom: 0.5rem;
        color: white;
        width: 16rem;
        height: 1.125rem;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
    }
    b{
        display: block;
        font-weight: 400;
        padding-bottom: 0.5rem;
        width: 16rem;
        height: 1.125rem;
    }
    strong{
        text-transform: uppercase;
        width: 16rem;
        height: 1.125rem;
    }
`