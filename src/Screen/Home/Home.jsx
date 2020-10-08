import React from 'react'
import useAxios from '../../Hooks/useAxios'
import NavBar from '../../Components/Fixeds/Header/NavBar'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToRestaurant, goToSearch } from '../../Router/Coordinator'
import {Main, ImgSearch,} from './styled'
// import lupa from '../../Assets/Imgs/lupa.svg'
import Inputs from '../../Components/Inputs/Inputs'
import { useHistory } from 'react-router-dom'
import Footer from '../../Components/Fixeds/Footer/Footer'
import { goToHome, goToCart, goToUser } from '../../Router/Coordinator'
import avatar from '../../Assets/Imgs/avatar.svg'
import homePage from '../../Assets/Imgs/homepage.svg'
import shopCart from '../../Assets/Imgs/shopping-cart.svg'

export default function Home(props) {
    const { token } = window.localStorage.getItem("token")
    const history = useHistory()
    const { token } = useAxios()
    const history = useHistory()
    React.useEffect(() => {
        props.getRestaurants()
    }, [])


    return (
        <>
            <NavBar
                titleHeader="Ifuture"
               
            />
            <Main>
                <Inputs
                     placeholder="Restaurante"
                    onClick={() => goToSearch(history)}

                />
                {/* <ImgSearch
                    src={lupa} alt={"busca"}
                /> */}
                <div>
                    {props.restaurants.map((restaurant) => {
                        return (
                            <>
                                <CardRestaurant
                                    restaurantId={restaurant.id}
                                    nameRestaurant={restaurant.name}
                                    deliveryTime={restaurant.deliveryTime}
                                    shipping={restaurant.shipping}
                                    logoRestaurant={restaurant.logoUrl}
                                    clickGoToRestaurant={() => goToRestaurant(history, restaurant.id)}
                                />
                            </>
                        )
                    })}

                </div>

            </Main>
        <Footer 
                    clickGoHome={() => goToHome(history)}
                    homePage = {homePage}
                    clickGoCart={() => goToCart(history)}
                    shopCart = {shopCart}
                    clickGoUser={() => goToUser(history)}
                    avatar = {avatar}

                />
        </>      
    )
}