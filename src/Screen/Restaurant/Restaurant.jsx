import React from 'react'
import NavBarWithButton from '../../Components/Fixeds/Header/NavBarWithButton'
import useAxios from '../../Hooks/useAxios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../Router/Coordinator'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import CardMenu from '../../Components/CardMenu/CardMenu'
import PopupAmount from '../../Components/PopupAmount/PopupAmount'
import { CardPopup, Main } from './styled'

export default function Restaurant(props) {
    const [active, setActive] = useState(false)
    const [products, setProducts] = useState([{ id: "", quantity: "" }])

    const { token } = useAxios()
    const history = useHistory()

    const activePopup = (id) => {
        setActive(!false)
        console.log(id)

    }
    const inactivePopup = (id) => {
        setActive(!true)
        setProducts(id)
    }

    React.useEffect(() => {
        props.getDetail()
        // props.getRestaurants()
        console.log(products.id)
    }, [products])

    return (
        <>
            <NavBarWithButton onClick={() => goToHome(history)} titleHeader="Restaurante" />
            <Main>

                <>
                    <div>
                        <CardRestaurant
                            logoRestaurant={props.detail.logoUrl}
                            nameRestaurant={props.detail.name}
                            deliveryTime={props.detail.deliveryTime}
                            shipping={props.detail.shipping}
                            address={props.detail.address}
                        />
                        <>
                            {props.products.map((product) => {
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