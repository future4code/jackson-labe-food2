import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../Screen/Cart/Cart'
import Home from '../Screen/Home/Home'
import Restaurant from '../Screen/Restaurant/Restaurant'
import Search from '../Screen/Search/Search'
import LoginPage from '../Screen/SignIn/Login/LoginPage'
import SignUpAddress from '../Screen/SignIn/SignUp/SignUpAddress'
import SignUpUser from '../Screen/SignIn/SignUp/SignUpUser'
import EditAddress from '../Screen/User/EditAddress/EditAddress'
import EditUser from '../Screen/User/EditUser/EditUser'
import User from '../Screen/User/User'
import ErrorPage from '../Screen/ErrorPage/ErrorPage'

export default function Router(props) {
    return (
        <Switch>
            <Route exact path="/">
                {/* Tela inicial */}
                <Home
                    getProfile={props.getProfile}
                    profile={props.profile}
                    getRestaurants={props.getRestaurants}
                    restaurants={props.restaurants}
                    getActiveOrder={props.getActiveOrder}
                    activeOrder={props.activeOrder}
                    getOrderHistory={props.getOrderHistory}
                    orderHistory={props.orderHistory}
                />
            </Route>

            <Route exact path="/login">
                {/* Tela de login */}
                <LoginPage setButtonName={props.setButtonName} />
            </Route>

            <Route exact path="/cadastro">
                {/* Tela de Sign Up */}
                <SignUpUser />
            </Route>

            <Route exact path="/cadastro-de-endereco">
                {/* Tela de cadastro de endereço */}
                <SignUpAddress />
            </Route>

            <Route exact path="/busca">
                {/* Tela de busca */}
                <Search />
            </Route>

            <Route exact path="/restaurante/:restaurantId">
                {/* Tela de detalhes restaurante*/}
                <Restaurant />
            </Route>

            <Route exact path="/usuario/">
                {/* Tela de usuario */}
                <User 
                    getProfile={props.getProfile}
                    profile={props.profile}
                />
            </Route>

            <Route exact path="/editar/usuario">
                {/* Tela de edição das infos do usuario */}
                <EditUser
                    getProfile={props.getProfile}
                    profile={props.profile}
                />
            </Route>

            <Route exact path="/editar/endereco">
                {/* Tela de edição do endereço do usuario */}
                <EditAddress />
            </Route>

            <Route exact path="/carrinho">
                {/* Tela de carrinho */}
                <Cart />
            </Route>

            <Route>
                {/* Tela de 404 */}
                <ErrorPage />
            </Route>
        </Switch>
    )
}