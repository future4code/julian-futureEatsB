import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const CartCardContainer = styled.div`
  height: 20vh;
  border: grey 1px solid;
  width: 96%;
  margin: 1vh auto;
  border-radius: 8px;
  display: flex;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 40%;
  border: 10px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ProductName = styled(Typography)`
  color: #5cb646;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: space-between;
  margin-left: 5%;
`;

export const ProductDetails = styled.p`
  font-size: 0.8em;
  color: #b8b8b8;
`;

export const ActionButton = styled.button`
  border: 2px #5cb646 solid;
  background-color: white;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 2.5em;
  width: 7em;
`;

export const Price = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 5%;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 24%;
`;

export const UpperContainer = styled.div`
  height: 76%;
`;
