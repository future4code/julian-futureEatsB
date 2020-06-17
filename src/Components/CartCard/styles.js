import styled from "styled-components";
import { Typography } from "@material-ui/core";

//usarei px nas alturas porque foi pedido que não importasse o tamanho da tela, que a altura deveria ser sempre a mesma

export const CartCardContainer = styled.div`
  height: 112px;
  border: grey 1px solid;
  margin: 1vh auto;
  width: 91.111vw;
  margin: 8px auto;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
`;

export const ContainerImg = styled.div`
  height: 100%;
  width: 30vw;
  overflow: hidden;
`;
export const CardImg = styled.img`
  object-fit: cover;
  height: 100%;
  margin-left: -60%;
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
  height: 35%;
`;

export const UpperContainer = styled.div`
  height: 65%;
`;
