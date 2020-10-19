import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 20.5rem;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    position: relative;
    margin-bottom:8px;
`

export const ImgWrapper = styled.div`
    max-height: 100%;
    max-width: 29.573170731707314%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
    background-color: #d8d8d8;
`

export const CardContent = styled.div`
    padding: 16px;
`

export const TitleSpan = styled.span`
    display: block;
    color: #e86e5a;
    font-size: 16px;
    margin-bottom: 6px;
`
export const ContentSpan = styled.span`
    display: block;
    font-size: 14px;
    color: #b8b8b8;
    margin-bottom: 6px;
`
export const PriceSpan = styled.span`
    display: block;
    font-size: 16px;
`
export const AddButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 31px;
    border: 1px solid black;
    border-radius: 8px 0 8px 0;
    background: white;
    color: black;
    font-size: 12px;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
`

export const RemoveButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 31px;
    border: 1px solid #e86e5a;
    border-radius: 8px 0 8px 0;
    background: white;
    color: #e86e5a;
    font-size: 12px;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
`

export const Counter = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
    border: 1px solid #e86e5a;
    border-radius: 0 8px 0 8px;
    background: white;
    color: #e86e5a;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`