import styled from 'styled-components'

export const Main = styled.main`
    background-color: #e8222e;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Span = styled.span`
    display: flex;
    align-items: center;
`
export const ImgIf = styled.img`
    width: 30px; 
    height: 40px;   
`
export const ImgU = styled.img`
    width: 27px;
    height: 25px;
    animation: title 0.3s ease-in-out;
    animation-delay: 1s;
    @keyframes title {
        0%{}
        100%{filter: invert(75%);}
    }
`
export const ImgT = styled.img`
    width: 15px;
    height: 35px;
`
export const ImgRe = styled.img`
    width: 40px;
    height: 29px;
`


export const ImgTitle = styled.img`
    width: 126px;
`

export const ImgArrow = styled.img`
    width: 56px;
    position: relative;
    animation: arrow 1s ease-in-out;
    @keyframes arrow {
        0%{top: -2%; left: -7%; transform: rotateZ(100deg)}
        /* 50%{top: -0.1%; left: -2%; transform: rotateZ(50deg)} */
        100%{top: 0%; left: 0%; transform: rotateZ(0deg);}
    }
`