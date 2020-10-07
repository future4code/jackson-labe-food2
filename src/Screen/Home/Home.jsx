import React from 'react'
import useAxios from '../../Hooks/useAxios'

export default function Home(props) {
    const { token } = useAxios()
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
        </main>
    )
}