import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { goToEditAddress, goToHome } from '../Router/Coordinator'

export default function useAxios(props) {
    const [profile, setProfile] = React.useState([])
    const [restaurants, setRestaurants] = React.useState([])
    const [detail, setDetail] = React.useState([])
    const [products, setProducts] = React.useState([])
    const [activeOrder, setActiveOrder] = React.useState([])
    const [orderHistory, setOrderHistory] = React.useState([])
    const pathParams = useParams()

    // Método de login e cadastro
    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    // Todos os métodos post
    const login = (body, history) => {
        axios.post(`${baseUrl}/login`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                console.log(response)
                goToHome(history)
            })
            .catch((error) => {
                console.log(error)
                alert("Falha no Login, tente novamente!")
            })
    }

    const signUpUser = (body, history) => {
        axios.post(`${baseUrl}/signup`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                // goToHome(history)
            })
            .catch((error) => {
                console.log(error)
                alert("Falha no cadastro, tente novamente!")
            })
    }

    // Todos os métodos put
    const addAddress = (body, history) => {
        axios.put(`${baseUrl}/address`, body, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                goToHome(history)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
                alert("Falha no cadastro, tente novamente!")
            })
    }

    const handleUser = (body, history) => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response)
            getProfile()
            goToEditAddress(history)
        }).catch((error) => {
            console.log(error)
        })
    }

    // será substituido por - - - const token = window.localStorage.getItem("token")
    const token = window.localStorage.getItem('token')

    // Todos os métodos get
    const getProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data.user)
            setProfile(response.data.user)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getRestaurants = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data.restaurants)
            setRestaurants(response.data.restaurants)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getDetail = (id) => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/10`, {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data.restaurant.products)
            setDetail(response.data.restaurant)
            setProducts(response.data.restaurant.products)
        }).catch((error) => {
            console.log(error)
            console.log(pathParams.id)
        })
    }


    const getActiveOrder = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/active-order', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data.order)
            setActiveOrder(response.data.order)
        }).catch((error) => {
            console.log(error)
        })
    }
    const getOrderHistory = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data)
            setOrderHistory(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    return { login, signUpUser, addAddress, handleUser, getProfile, profile, getRestaurants, restaurants, getDetail, detail, products, getActiveOrder, activeOrder, getOrderHistory, orderHistory }
}