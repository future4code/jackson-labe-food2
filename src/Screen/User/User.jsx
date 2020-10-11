
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/Fixeds/Header/NavBar';
import Footer from '../../Components/Fixeds/Footer/Footer';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';
import { goToEditUser, goToEditAddress, goToHome, goToCart, goToUser } from '../../Router/Coordinator';
import { ProfileData, Address, HistoryTitle, Status } from './styled';
import editUser from '../../Assets/Imgs/edit-user.png';
import avatar from '../../Assets/Imgs/avatar.svg'
import homePage from '../../Assets/Imgs/homepage.svg'
import shopCart from '../../Assets/Imgs/shopping-cart.svg'

export default function User(props) {

  useEffect(() => {
    getOrderHistory()
    props.getProfile()
  }, [])

  const history = useHistory()

  const [orderHistory, setOrderHistory] = useState({})
  const getOrderHistory = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history', {
      headers: {
        auth: window.localStorage.getItem("token")
      }
    }).then((response) => {
      setOrderHistory(response.data.order)
    }).catch((error) => {
      console.log(error)
    })
  }

  const listOrders = () => {
    return (
      <OrderHistory
        title={orderHistory.restaurantName}
        date={orderHistory.createdAt}
        price={orderHistory.totalPrice}
      />
    )
  }

  return (
    <div>
      <NavBar titleHeader={'Meu perfil'} />
      <ProfileData>
        <span>{props.profile.name}</span>
        <img onClick={() => goToEditUser(history)} src={editUser} alt={'Editar dados de usuário'} data-testid={'editUser'} />
        <p>{props.profile.email}</p>
        <p>{props.profile.cpf}</p>
      </ProfileData>
      <Address>
        <span>Endereço cadastrado</span>
        <img onClick={() => goToEditAddress(history)} src={editUser} alt={'Editar endereço'} />
        <p>{props.profile.address}</p>
      </Address>
      <HistoryTitle>Histórico de pedidos</HistoryTitle>
      {listOrders.length > 0 ? listOrders : <Status>Você não realizou nenhum pedido</Status>}
      <Footer
        homePage={homePage}
        shopCart={shopCart}
        avatar={avatar}
        clickGoHome={() => goToHome(history)}
        clickGoCart={() => goToCart(history)}
        clickGoUser={() => goToUser(history)}
      />
    </div>
  )

}


