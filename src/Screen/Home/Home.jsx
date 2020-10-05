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
        </main>
    )
}