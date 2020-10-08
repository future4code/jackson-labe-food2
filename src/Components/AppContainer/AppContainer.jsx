import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useAxios from '../../Hooks/useAxios'
import Router from '../../Router/Router'
import Footer from '../Fixeds/Footer/Footer'
import NavBar from '../Fixeds/Header/NavBar'


export default function AppContainer() {
    const { getProfile, profile, getRestaurants, restaurants, getActiveOrder, activeOrder, getOrderHistory, orderHistory } = useAxios()
    return (
        <main>
            <BrowserRouter>
                {/* <header>
                    <NavBar />
                </header> */}

                <div>
                    <Router
                        getProfile={getProfile}
                        profile={profile}
                        getRestaurants={getRestaurants}
                        restaurants={restaurants}
                        getActiveOrder={getActiveOrder}
                        activeOrder={activeOrder}
                        getOrderHistory={getOrderHistory}
                        orderHistory={orderHistory}
                    />
                </div>

            </BrowserRouter>
        </main>
    )
}