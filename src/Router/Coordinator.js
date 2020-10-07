export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToHome = (history) => {
    history.push('/home')
}

export const goToAddress = (history, id) => {
    history.push(`/cadastro-de-endereco`)
}

export const goToSearch = (history, id) => {
    history.push(`/busca`)
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToUser = (history, id) => {
    history.push(`/usuario/${id}`)
}

export const goToEditUser = (history, id) => {
    history.push(`/usuario/editar/${id}`)
}

export const goToEditAddress = (history, id) => {
    history.push(`/usuario/editar/endereco`)
}

export const goToCart = (history, id) => {
    history.push(`/carrinho`)
}
