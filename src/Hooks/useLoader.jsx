import React from 'react'

export default function useLoader() {
    const [done, setDone] = React.useState(undefined)

    React.useEffect(() => {
        setTimeout(() => {
            setDone(true)
        }, 2000)
    })

    return { done }
}