import React from 'react'

export default function Restaurant(props) {
    React.useEffect(() => {
        props.getDetail()
    }, [])
    return (
        <main>
            Restaurant
        </main>
    )
}