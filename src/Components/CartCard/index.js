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
  ContainerImg
} from "./styles";
import { CartReducer } from "../../functions/CardReducer";

function CartCard(props) {
  return (
    <CartCardContainer> 
      <ContainerImg>    
        <CardImg src={props.foto} alt='Foto Produto' />
      </ContainerImg>
      <TextContainer>
        <UpperContainer>
          <ProductName variant="h6">Latte</ProductName>
          <ProductDetails>Café, leite cremoso</ProductDetails>
        </UpperContainer>
        <div>
          <ProductName variant="h6">{props.nome}</ProductName>
          <ProductDetails>{props.descricao}</ProductDetails>
        </div>
        <BottomContainer>
          <Price>R${props.preco}</Price>
          <ActionButton>Adicionar</ActionButton>
        </BottomContainer>
      </TextContainer>
    </CartCardContainer>
  );
}

export default CartCard;
