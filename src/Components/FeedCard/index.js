import React from "react";
import {useHistory} from 'react-router-dom'
import {
  FeedCardContainer,
  ProductImg,
  StoreName,
  TextContainer,
  OrderDetailsDem,
  OrderDetailsFre
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
        <OrderDetailsDem >{props.demora} min</OrderDetailsDem>
        <OrderDetailsFre>{props.frete === '' ? 'Frete Grátis' : `Frete R$${props.frete}`}</OrderDetailsFre>
      </TextContainer>
    </FeedCardContainer>
  );
}

export default FeedCard;
