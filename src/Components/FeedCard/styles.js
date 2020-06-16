import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const FeedCardContainer = styled.div`
  border: solid 1px #b8b8b8;
  width: 328px;
  margin: 8px 16px;
  height: 188px;
  border-radius: 8px;
`;

export const ProductImg = styled.img`
  width: 328px;
  height: 120px;
  object-fit: contain;
`;

export const StoreName = styled(Typography)`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
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
`;

export const OrderDetails = styled.span`
  color: #b8b8b8;
`;
