import React from "react";
import {
  RestauranteContainer,
  UpperRestaurantContainer,
  ResturanteImg,
  RestaurantTitle,
  RestaurantDetails,
  DetailsMidContainer,
  SectionText,
} from "./styles";
import CartCard from "../../Components/CartCard";
function Restaurante() {
  return (
    <RestauranteContainer>
      <UpperRestaurantContainer>
        <ResturanteImg src="https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <RestaurantTitle variant="h5">Ravel Café</RestaurantTitle>
      </UpperRestaurantContainer>
      <RestaurantDetails>Cafeteria</RestaurantDetails>
      <DetailsMidContainer>
        <RestaurantDetails>20 - 30min</RestaurantDetails>
        <RestaurantDetails>Frete R$10,00</RestaurantDetails>
      </DetailsMidContainer>
      <RestaurantDetails>R. Alexandre Herculano, 69</RestaurantDetails>
      <SectionText>Principais</SectionText>
      <CartCard />
      <SectionText>Acompanhamentos</SectionText>
      <CartCard />
    </RestauranteContainer>
  );
}

export default Restaurante;
