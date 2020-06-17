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
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.10833vw;
  color: #5cb646;
  grid-area: 1/1/2/2;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
`;

export const OrderDetailsDem = styled.span`
  color: #b8b8b8;
  grid-area: 2/1/3/2;
`;

export const OrderDetailsFre = styled.span `
  color: #b8b8b8;
  grid-area: 2/2/3/3;
`;
