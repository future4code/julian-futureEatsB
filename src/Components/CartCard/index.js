import React, { useReducer } from "react";
import {
  CartCardContainer,
  CardImg,
  ProductName,
  TextContainer,
  ProductDetails,
  Price,
  ActionButton,
  BottomContainer,
  UpperContainer,
} from "./styles";
import { CartReducer } from "../../functions/CardReducer";

function CartCard() {
  // const [state, dispatch] = useReducer(CartReducer, initialState);

  // const addProductToCart = (product) => {
  //   dispatch({ type: "ADD", product });
  // };
  return (
    <CartCardContainer>
      <CardImg src="https://images.unsplash.com/photo-1454438992604-4a8e59768a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <TextContainer>
        <UpperContainer>
          <ProductName variant="h6">Latte</ProductName>
          <ProductDetails>Café, leite cremoso</ProductDetails>
        </UpperContainer>
        <BottomContainer>
          <Price>R$ 15,00</Price>
          <ActionButton>Adicionar</ActionButton>
        </BottomContainer>
      </TextContainer>
    </CartCardContainer>
  );
}

export default CartCard;
