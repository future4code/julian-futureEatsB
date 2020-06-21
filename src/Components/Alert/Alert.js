import React, {useContext, useState} from 'react';
import Relogio from '../../img/clock.png';
import CardContext from './../../functions/CardContext';
import { 
    AlertaContainer, 
    IconeRelogio,
    Pedido,
    Restaurante,
    Total
} from './styles';




const Alerta= (props) => {
    const alertaContexto = useContext(CardContext);

    return (
        <AlertaContainer>
            <IconeRelogio src={Relogio} alt="Ícone relógio"/>
            <div>
                <Pedido>Pedido em Andamento</Pedido>
                <Restaurante>{alertaContexto.pedido.order.restaurantName}</Restaurante>
                <Total><b>SUBTOTAL R${alertaContexto.pedido.order.totalPrice.toFixed(2).replace(".", ",")}</b></Total>
            </div>

        </AlertaContainer>
    );
}

export default Alerta