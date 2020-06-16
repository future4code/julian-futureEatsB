import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const RestauranteContainer = styled.div`
  width: 90%;
  margin: 2vh auto;
`;

export const UpperRestaurantContainer = styled.div`
  margin: auto;
  height: 20vh;
  border-radius: 8px;
`;

export const ResturanteImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: fill;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const RestaurantTitle = styled(Typography)`
  color: #5cb646;
`;

export const RestaurantDetails = styled(Typography)`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const DetailsMidContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionText = styled(Typography)`
  border-bottom: 1px solid black;
`;
