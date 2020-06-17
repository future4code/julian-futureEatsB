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
  border: 2px #e02020 solid;
  background-color: white;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 2.5em;
  width: 7em;
  color: #e02020;
`;

export const ContainerQuant = styled.div `
  width: 9.167vw;
  height: 9.167vw;
  border-radius: 0 8px 0 8px;
  border: solid 2px #5cb646;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; 
`;

export const ProductQuant = styled.p `
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108vw;
  text-align: center;
  color: #5cb646;
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

export const CabecalhoCard = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const UpperContainer = styled.div`
  height: 65%;
`;
