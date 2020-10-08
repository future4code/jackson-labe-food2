import React from 'react'
import useAxios from '../../Hooks/useAxios'
import { useHistory } from 'react-router-dom'
import Footer from '../../Components/Fixeds/Footer/Footer'
import { goToHome, goToCart, goToUser } from '../../Router/Coordinator'
import avatar from '../../Assets/Imgs/avatar.svg'
import homePage from '../../Assets/Imgs/homepage.svg'
import shopCart from '../../Assets/Imgs/shopping-cart.svg'

export default function Home(props) {
    const { token } = useAxios()
    const history = useHistory()
    React.useEffect(() => {
        props.getRestaurants()
        props.getProfile()
        props.getActiveOrder()
        props.getOrderHistory()
    }, [])
    return (
        <main>
            Home

            {props.restaurants.length > 0 ?
                <div>
                    {props.restaurants.map((restaurants) => {
                        return (
                            <div>
                                {restaurants.name}
                            </div>
                        )
                    })}
                </div> :
                undefined
            }
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