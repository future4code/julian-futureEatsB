import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const FeedCardContainer = styled.div`
  border: 1px grey solid;
  width: 90%;
  margin: auto;
  height: 20vh;
  border-radius: 10px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;

export const StoreName = styled(Typography)`
  color: #5cb646;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const OrderDetails = styled.span`
  color: #b8b8b8;
`;
