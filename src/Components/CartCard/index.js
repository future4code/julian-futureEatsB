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
  ContainerImg,
  CabecalhoCard,
  ContainerQuant,
  ProductQuant,
} from "./styles";
import { CartReducer } from "../../functions/CardReducer";

function CartCard(props) {
  return (
    <CartCardContainer>
      <ContainerImg>
        <CardImg src={props.main.photoUrl} alt="Foto Produto" />
      </ContainerImg>
      <TextContainer>
        <UpperContainer>
          <ProductName variant="h6">{props.main.name}</ProductName>
          <ProductDetails>{props.descricao}</ProductDetails>
        </UpperContainer>
        <BottomContainer>
          <Price>R${props.main.price.toFixed(2)}</Price>
          <ActionButton>Adicionar</ActionButton>
        </BottomContainer>
      </TextContainer>
    </CartCardContainer>
  );
}

export default CartCard;
