import React from 'react'
import Footer from '../../Components/Fixeds/Footer/Footer'
import { goToHome, goToCart, goToUser } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import avatar from '../../Assets/Imgs/avatar.svg'
import homePage from '../../Assets/Imgs/homepage.svg'
import shopCart from '../../Assets/Imgs/shopping-cart.svg'

export default function Cart() {
    const history = useHistory()

    return (
        <main>
            Cart

            <Footer 
            clickGoHome={() => goToHome(history)}
            homePage = {homePage}
            clickGoCart={() => goToCart(history)}
            shopCart = {shopCart}
            clickGoUser={() => goToUser(history)}
            avatar = {avatar}

        />
        </main>
        
    )
}