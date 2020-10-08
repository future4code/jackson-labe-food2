import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/Fixeds/Header/NavBar';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';
import { goToEditUser, goToEditAddress } from '../../Router/Coordinator';
// import { ProfileData, Address } from './styled';
import editUser from '../../Assets/Imgs/edit-user.png';

export default function User(){

  useEffect(() => {
    getOrderHistory()
    getProfile()
  }, [])

  const history = useHistory()

  const [ profile, setProfile ] = useState({})

  const getProfile = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', {
        headers: {
            auth: localStorage.getItem('token')
        }
    }).then((response) => {
      console.log(response.data.user)
      setProfile(response.data.user)
    }).catch((error) => {
        console.error(error)
    })
}

  const [ orderHistory, setOrderHistory ] = useState({})
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
      <div>
        <span>{profile.name}</span>
        <img onClick={() => goToEditUser(history)} src={editUser} alt={'Editar dados de usuário'} />
        <p>{profile.email}</p>
        <p>{profile.cpf}</p>
      </div>
      <div>
        <div>
          <p>Endereço cadastrado</p>
          <p>{profile.address}</p>
        </div>
        <div>
          <img onClick={() => goToEditAddress(history)} src={editUser} alt={'Editar endereço'} />
        </div>
      </div>
      <p>Histórico de pedidos</p>
      {listOrders.length > 0 ? listOrders : <p>Você não realizou nenhum pedido</p>}
    </div>
  )

}

