export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToHome = (history) => {
    history.push('/')
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

export const goToUser = (history) => {
    history.push('/usuario/')
}

export const goToEditUser = (history) => {
    history.push("/editar/usuario")
}

export const goToEditAddress = (history) => {
    history.push("/editar/endereco")
}

export const goToCart = (history, id) => {
    history.push(`/carrinho`)
}

export const goToBack = (history) => {
    history.goBack()
}