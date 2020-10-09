import React from 'react'
import Footer from '../../Components/Fixeds/Footer/Footer'
import { goToHome, goToCart, goToUser } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import avatar from '../../Assets/Imgs/avatar.svg'
import homePage from '../../Assets/Imgs/homepage.svg'
import shopCart from '../../Assets/Imgs/shopping-cart (1).svg'
import CheckList from '../../Components/Checklist/CheckList'
import useForm from '../../Hooks/useForm'
import NavBar from '../../Components/Fixeds/Header/NavBar'
import { Main, Entrega, Vazio, SubTotal, FormPayment } from './styled'

export default function Cart(props) {
    const history = useHistory()
    const { form, onChange, resetState } = useForm({ paymentMethods: "" })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
        console.log(name, value)
    }

    React.useEffect(() => {
        props.getProfile()
    }, [])

    return (
        <>
            <NavBar
                titleHeader="Meu carrinho"
            />
            <Entrega>
                <p>Endereço de entrega</p>
                <b>{props.profile.address}</b>
            </Entrega>
            <Vazio>
                <p>Carrinho vazio</p>
            </Vazio>
            <Main>

                <span>
                    <p>Frete R$0,00</p>

                </span>
                <SubTotal>
                    <p>SUBTOTAL</p>
                    <b>R$00.00</b>
                </SubTotal>
                <FormPayment>
                    <p>Forma de pagamento</p>
                </FormPayment>
                <CheckList
                    paymentMethod="paymentMethods"
                    titleName="Dinheiro"
                    for="Dinheiro"
                    id={"Dinheiro"}
                    value={form.paymentMethods}
                    onChange={handleOnChange}
                />
                <CheckList
                    paymentMethod="paymentMethods"
                    titleName="Cartão de crédito"
                    for="Cartão de crédito"
                    id={"Cartão de crédito"}
                    value={form.paymentMethods}
                    onChange={handleOnChange}
                />

            </Main>
            <Footer
                clickGoHome={() => goToHome(history)}
                homePage={homePage}
                clickGoCart={() => goToCart(history)}
                shopCart={shopCart}
                clickGoUser={() => goToUser(history)}
                avatar={avatar}
            />
        </>
    )
}