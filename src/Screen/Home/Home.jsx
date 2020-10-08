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


export default function Home(props) {
    const { token } = window.localStorage.getItem("token")
    const history = useHistory()

    useEffect(() => {
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
        </>
    )
}