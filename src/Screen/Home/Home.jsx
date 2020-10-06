import React from 'react'

export default function Home(props) {
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