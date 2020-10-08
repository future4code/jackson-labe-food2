import React, {useState} from 'react'
import avatar from '../../../Assets/Imgs/avatar.svg'
import homePage from '../../../Assets/Imgs/homepage.svg'
import shopCart from '../../../Assets/Imgs/shopping-cart.svg'
import { FooterContainer } from './styled';

export default function Footer(props) {
    const [mudarVermelho, setMudarVermelho] = useState(false)
        return(
            <FooterContainer>
            
                <img onClick={props.clickGoHome} src={props.homePage} alt='Home' mudarDeCor={props.mudarVermelho}/>
                <img onClick={props.clickGoCart} src={props.shopCart} alt='Carrinho' mudarDeCor={mudarVermelho} />
                <img onClick={props.clickGoUser} src={props.avatar} alt='Usuario' mudarDeCor={mudarVermelho} />

            </FooterContainer>
    )
}