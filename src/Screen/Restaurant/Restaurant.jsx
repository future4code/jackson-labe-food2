import React from 'react'
import NavBarWithButton from '../../Components/Fixeds/Header/NavBarWithButton'
import useAxios from '../../Hooks/useAxios'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../Router/Coordinator'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import CardMenu from '../../Components/CardMenu/CardMenu'

export default function Restaurant(props) {
    const { token } = useAxios()
    const history = useHistory()

    React.useEffect(() => {
        props.getDetail()
        // props.getRestaurants()
    }, [])

    return (
    <>

        <NavBarWithButton onClick={()=>goToHome(history)} titleHeader="Restaurante"/>
        <main>
            <div>

                    <CardRestaurant
                        logoRestaurant={props.detail.logoUrl}
                        nameRestaurant={props.detail.name}
                        deliveryTime={props.detail.deliveryTime}
                        shipping={props.detail.shipping}
                        address={props.detail.address}
                    />
                    <>
                        {props.products.map((product)=>{
                            return(
                                <CardMenu
                                productName={product.name}
                                description={product.description}
                                price={product.price}
                                photoUrl={product.photoUrl}
                                productQuantity={""}
                                clickRemove={}
                        />      
                            )
                        })}
                    </>
                   
        </div>  
        </main>
        
    </>
    )
}