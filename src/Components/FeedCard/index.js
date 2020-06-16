import React from "react";
import {
  FeedCardContainer,
  ProductImg,
  StoreName,
  TextContainer,
  OrderDetails,
} from "./styles";
import Foto from "../../img/image.png"

function FeedCard(props) {
  return (
    <FeedCardContainer>
      <ProductImg src={Foto} />
      <TextContainer>
        <StoreName variant="h6">{props.nome}</StoreName>
        <div></div>
        <OrderDetails>{props.demora} min</OrderDetails>
        <OrderDetails>Frete R${props.frete},00</OrderDetails>
      </TextContainer>
    </FeedCardContainer>
  );
}

export default FeedCard;
