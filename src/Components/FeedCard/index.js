import React from "react";
import {
  FeedCardContainer,
  ProductImg,
  StoreName,
  TextContainer,
  OrderDetails,
} from "./styles";

function FeedCard() {
  return (
    <FeedCardContainer>
      <ProductImg src="https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <TextContainer>
        <StoreName variant="h6">Ravel Café</StoreName>
        <div></div>
        <OrderDetails>20 - 30mins</OrderDetails>
        <OrderDetails>Frete R$10,00</OrderDetails>
      </TextContainer>
    </FeedCardContainer>
  );
}

export default FeedCard;
