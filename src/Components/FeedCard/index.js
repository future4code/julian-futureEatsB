import React from "react";
import {useHistory} from 'react-router-dom'
import {
  FeedCardContainer,
  ProductImg,
  StoreName,
  TextContainer,
  OrderDetails,
} from "./styles";

function FeedCard(props) {
  let history = useHistory();
  
  const goToRestaurante = (id) => {
    history.push("/restaurante")
  }

  return (
    <FeedCardContainer onClick={() => {goToRestaurante(props.idRest)}}>
      <ProductImg src={props.foto} />
      <TextContainer>
        <StoreName>{props.nome}</StoreName>
        <div></div>
        <OrderDetails>{props.demora} min</OrderDetails>
        <OrderDetails>{props.frete === '' ? 'Frete Grátis' : `Frete R$${props.frete}`}</OrderDetails>
      </TextContainer>
    </FeedCardContainer>
  );
}

export default FeedCard;
