
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/Fixeds/Header/NavBar';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';
import { goToEditUser, goToEditAddress } from '../../Router/Coordinator';
import { ProfileData, Address, HistoryTitle, Status } from './styled';
import editUser from '../../Assets/Imgs/edit-user.png';

export default function User(props){

  useEffect(() => {
    props.getOrderHistory()
    props.getProfile()
  }, [])

  const history = useHistory()

  const listOrders = () => {
    return (
      <OrderHistory
        title={props.orderHistory.restaurantName}
        date={props.orderHistory.createdAt}
        price={props.orderHistory.totalPrice}
      />
    )
  }

  return (
    <div>
      <NavBar titleHeader={'Meu perfil'} />
      <ProfileData>
        <span>{props.profile.name}</span>
        <img onClick={() => goToEditUser(history)} src={editUser} alt={'Editar dados de usuário'} />
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
    </div>
  )

}


