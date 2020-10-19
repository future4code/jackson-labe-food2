import React from 'react'
import NavBarWithButton from '../../Components/Fixeds/Header/NavBarWithButton'
import useAxios from '../../Hooks/useAxios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { goToHome } from '../../Router/Coordinator'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import CardMenu from '../../Components/CardMenu/CardMenu'
import PopupAmount from '../../Components/PopupAmount/PopupAmount'
import { CardPopup, Main } from './styled'
import axios from 'axios'

export default function Restaurant(props) {
    const [detail, setDetail] = useState()
    const [active, setActive] = useState(false)
    const [products, setProducts] = useState()
    const pathParams = useParams()
    const { token } = useAxios()
    const history = useHistory()

    const getDetail = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${pathParams.restaurantId}`, {
            headers: {
                auth: token
            }
        }).then((response) => {
            setDetail(response.data.restaurant)
            setProducts(response.data.restaurant.products)
        }).catch((error) => {
            console.log(error)
            console.log(pathParams.id)
        })
    }

    const activePopup = (id) => {
        setActive(!false)
        console.log(id)

    }
    const inactivePopup = (id) => {
        setActive(!true)
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <>
            <NavBarWithButton onClick={() => goToHome(history)} titleHeader="Restaurante" />
            <Main>

                <>
                    <div>
                        {detail &&
                            <CardRestaurant
                                logoRestaurant={detail.logoUrl}
                                nameRestaurant={detail.name}
                                deliveryTime={detail.deliveryTime}
                                shipping={detail.shipping}
                                address={detail.address}
                            />}
                        <>
                            {products && products.map((product) => {
                                return (
                                    <CardMenu
                                        productName={product.name}
                                        description={product.description}
                                        price={product.price}
                                        photoUrl={product.photoUrl}
                                        // productQuantity={""}
                                        clickAdd={() => activePopup(product.id)}
                                    />
                                )
                            })}
                        </>
                    </div>
                </>
            </Main>

            {active &&
                <CardPopup>
                    <PopupAmount adicionar={inactivePopup} />
                </CardPopup>}
        </>
    )
}