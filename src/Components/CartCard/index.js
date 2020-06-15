import React from "react";
import {
  CartCardContainer,
  CardImg,
  ProductName,
  TextContainer,
  ProductDetails,
  Price,
  ActionButton,
  BottomContainer,
} from "./styles";

function CartCard() {
  return (
    <CartCardContainer>
      <CardImg src="https://images.unsplash.com/photo-1454438992604-4a8e59768a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <TextContainer>
        <div>
          <ProductName variant="h6">Latte</ProductName>
          <ProductDetails>Café, leite cremoso</ProductDetails>
        </div>
        <BottomContainer>
          <Price>R$ 15,00</Price>
          <ActionButton>Adicionar</ActionButton>
        </BottomContainer>
      </TextContainer>
    </CartCardContainer>
  );
}

export default CartCard;
