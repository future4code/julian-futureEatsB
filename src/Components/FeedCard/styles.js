import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const FeedCardContainer = styled.div`
  border: solid 1px #b8b8b8;
  width: 92%;
  margin: 1vh auto;
  height: 20vh;
  border-radius: 8px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: fill;
`;

export const StoreName = styled(Typography)`
  height: 18px;
  font-family: Roboto;
  font-size: 1em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 2vh;
`;

export const OrderDetails = styled.span`
  color: #b8b8b8;
`;
