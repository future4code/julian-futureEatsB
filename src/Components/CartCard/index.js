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
  ProductQuant

} from "./styles";
import { CartReducer } from "../../functions/CardReducer";

function CartCard(props) {
  return (
    <CartCardContainer>
      <ContainerImg>
        <CardImg src={props.foto} alt="Foto Produto" />
      </ContainerImg>
      <TextContainer>
        <UpperContainer>
          <CabecalhoCard>
            <ProductName>{props.nome}</ProductName>
            <ContainerQuant>
              <ProductQuant>1</ProductQuant>
            </ContainerQuant>
          </CabecalhoCard>
          <ProductDetails>dhwdhsjhjdh jhdsjhfjdshfjdshfj hdsjfhjdsh fjdshfjdshfjh</ProductDetails>
        </UpperContainer>
        <BottomContainer>
          <Price>R${props.preco}</Price>
          <ActionButton>Remover</ActionButton>
        </BottomContainer>
      </TextContainer>
    </CartCardContainer>
  );
}

export default CartCard;
