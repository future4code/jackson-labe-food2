import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/Fixeds/Header/NavBar';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';
import { goToEditUser, goToEditAddress } from '../../Router/Coordinator';
import { getProfile, getOrderHistory } from '../../Hooks/useAxios';
import editUser from '../../Assets/Imgs/edit-user.png';

export default function User(){

  const history = useHistory()

  const { profile, setProfile } = getProfile()

  const { orderHistory, setOrderHistory } = getOrderHistory()

  const listOrders = orderHistory.map(order => {
    return (
      <OrderHistory
        title={order.restaurantName}
        date={order.createdAt}
        price={order.totalPrice}
      />
    )
  })

  return (
    <div>
      <NavBar titleHeader={'Meu perfil'} />
      <ProfileData>
        <span>{profile.name}</span>
        <img onClick={() => goToEditUser(history, profile.id)} src={editUser} alt={'Editar dados de usuário'} />
        <p>{profile.email}</p>
        <p>{profile.cpf}</p>
      </ProfileData>
      <Address>
        <div>
          <p>Endereço cadastrado</p>
          <p>{profile.address}</p>
        </div>
        <div>
          <img onClick={() => goToEditAddress(history)} src={editUser} alt={'Editar endereço'} />
        </div>
      </Address>
      <p>Histórico de pedidos</p>
      {listOrders.length > 0 ? listOrders : <p>Você não realizou nenhum pedido</p>}
    </div>
  )

}

