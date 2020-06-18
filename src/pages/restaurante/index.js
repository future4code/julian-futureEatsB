import React, { useEffect, useState } from "react";
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
import { useParams, useHistory } from "react-router-dom";
import { getRestaurant } from "../../functions/integracao";

function Restaurante(props) {
  const pathParams = useParams();

  const history = useHistory();

  const [rest, setRest] = useState({});

  useEffect(() => {
    const token = window.localStorage('token')
    if (token === null) {
      history.push("/Login")
    }
  })

  useEffect(() => {
    getRestaurant(pathParams.pageID).then((res) => setRest(res.restaurant));
  }, []);

  const teste = () => {
    console.log(rest);
  };
  return (
    <RestauranteContainer>
      <UpperRestaurantContainer>
        <ResturanteImg src="https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <RestaurantTitle variant="h5" onClick={teste}>
          {rest.name}
        </RestaurantTitle>
      </UpperRestaurantContainer>
      <RestaurantDetails>{rest.category}</RestaurantDetails>
      <DetailsMidContainer>
        <RestaurantDetails>{rest.deliveryTime}mins</RestaurantDetails>
        <RestaurantDetails>
          Frete R$
          {rest.shipping === undefined ? "..." : rest.shipping.toFixed(2)}
        </RestaurantDetails>
      </DetailsMidContainer>
      <RestaurantDetails>{rest.address}</RestaurantDetails>
      <SectionText>Principais</SectionText>
      {rest.products === undefined ? (
        <p>...</p>
      ) : (
        rest.products
          .filter((product) => product.category !== "Bebida")
          .map((mainProducts) => {
            return <CartCard main={mainProducts} />;
          })
      )}
      <SectionText>Acompanhamentos</SectionText>
      {rest.products === undefined ? (
        <p>...</p>
      ) : (
        rest.products
          .filter((product) => product.category === "Bebida")
          .map((acompanhamentos) => {
            return <CartCard main={acompanhamentos} />;
          })
      )}
    </RestauranteContainer>
  );
}

export default Restaurante;
