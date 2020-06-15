import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const CartCardContainer = styled.div`
  height: 20vh;
  border: grey 1px solid;
  width: 90%;
  margin: auto;
  border-radius: 8px;
  display: flex;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 40%;
  border: 10px;
  object-fit: contain;
`;

export const ProductName = styled(Typography)`
  color: #5cb646;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: space-between;
`;

export const ProductDetails = styled.p`
  font-size: 0.7em;
`;

export const ActionButton = styled.button`
  border: 2px #5cb646 solid;
  background-color: white;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Price = styled.p``;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
