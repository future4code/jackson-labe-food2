import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useAxios from '../../Hooks/useAxios'
import Router from '../../Route/Router'
import Footer from '../Fixeds/Footer/Footer'
import Header from '../Fixeds/Header/Header'

export default function AppContainer() {
    const { getProfile, profile, getRestaurants, restaurants, getActiveOrder, activeOrder, getOrderHistory, orderHistory } = useAxios()
    return (
        <main>
            <BrowserRouter>
                <header>
                    <Header />
                </header>

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

                <footer>
                    <Footer />
                </footer>
            </BrowserRouter>
        </main>
    )
}