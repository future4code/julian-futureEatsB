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
  ContainerImg
} from "./styles";

function CartCard(props) {
  return (
    <CartCardContainer>
      
      <ContainerImg>    
        <CardImg src={props.foto} alt='Foto Produto' />
      </ContainerImg>
      
      <TextContainer>
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
