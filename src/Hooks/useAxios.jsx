import axios from 'axios'
import React from 'react'

export default function useAxios() {
    const [profile, setProfile] = React.useState([])
    const [restaurants, setRestaurants] = React.useState([])
    const [activeOrder, setActiveOrder] = React.useState([])
    const [orderHistory, setOrderHistory] = React.useState([])

    // será substituido por - - - const token = window.localStorage.getItem("token")
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBXcEhOWERScWtMRndtTllkTUFNIiwibmFtZSI6IkJhbmFuaW5oYSBDb20gQcOnYWkiLCJlbWFpbCI6IkJhbmFuaW5oYUAxMi5jb20iLCJjcGYiOiIxNDMuOTU3LjI1Ni05NyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBMb29waW5obyBCcmF6LCBpbmZpbml0ZSwgMDAwIC0gVmlsYSBOLiBpbmZpbml0byBkbyBwcmV0w6lyaXRvIiwiaWF0IjoxNjAxOTM3ODgxfQ.m21po06KvqeHnxC7T6OR9Q8BVdfoO4MIGjntMtfXRkU'

    const getProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data)
            setProfile(response)
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
            console.log(response.data)
            setRestaurants(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getActiveOrder = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/active-order', {
            headers: {
                auth: token
            }
        }).then((response) => {
            console.log(response.data)
            setActiveOrder(response.data)
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

    return { getProfile, profile, getRestaurants, restaurants, getActiveOrder, activeOrder, getOrderHistory, orderHistory }
}