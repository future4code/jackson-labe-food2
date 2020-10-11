import React from 'react'
import Footer from '../../Components/Fixeds/Footer/Footer'
import { goToHome, goToCart, goToUser } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import avatar from '../../Assets/Imgs/avatar.svg'
import homePage from '../../Assets/Imgs/homepage.svg'
import shopCart from '../../Assets/Imgs/shopping-cart (1).svg'
import CheckList from '../../Components/Checklist/CheckList'
import NavBar from '../../Components/Fixeds/Header/NavBar'
import { Main, Entrega, Vazio, SubTotal, FormPayment } from './styled'
import Red from '../../Components/Buttons/Red/Red'
import axios from 'axios'
import useForm from '../../Hooks/useForm'

export default function Cart(props) {
    const history = useHistory()
    const { resetState } = useForm()
    const [payment, setPayment] = React.useState()

    const postPlceOrder = () => {
        const body = {
            "products": [{
                "id": "CnKdjU6CyKakQDGHzNln",
                "quantity": 10
            }, {
                "quantity": 1,
                "id": "KJqMl2DxeShkSBevKVre"
            }],
            paymentMethod: payment
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/1/order', body, {
            headers: {
                auth: "token"
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
            console.log(payment)
        })
    }

    const changePayment = (event) => {
        setPayment(event.target.value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        postPlceOrder()
        resetState()
    }

    React.useEffect(() => {
        props.getProfile()
        props.getActiveOrder()
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

                <form onSubmit={handleSubmission}>
                    <span>
                        <p>Frete R$0,00</p>
                    </span>

                    <SubTotal>
                        <p>SUBTOTAL</p>
                        <b>R$00,00</b>
                    </SubTotal>

                    <FormPayment>
                        <p>Forma de pagamento</p>
                    </FormPayment>

                    <CheckList
                        name={"name"}
                        titleName="Dinheiro"
                        for="Dinheiro"
                        id={"Dinheiro"}
                        value='money'
                        onChange={changePayment}
                    />
                    <CheckList
                        name={"name"}
                        titleName="Cartão de Crédito"
                        for="Cartão de Crédito"
                        id={"Cartão de Crédito"}
                        value='creditcard'
                        onChange={changePayment}
                    />
                    <Red
                        nameButton="Confirmar"
                    />
                </form>
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