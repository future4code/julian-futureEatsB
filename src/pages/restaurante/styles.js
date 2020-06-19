import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const RestauranteContainer = styled.div`
  overflow-x: hidden;
  padding: 0 4.444vw;
`;

export const UpperRestaurantContainer = styled.div`
  margin: 2.656vh 0 1.875vh 0;
  border-radius: 8px;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 18.75vh;
  border-radius: 8px 8px 0 0 ;
  overflow: hidden;
`
export const ResturanteImg = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const RestaurantTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  color: #5cb646;
  margin-top: 1.875vh;
`;

export const RestaurantDetails = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  color: #b8b8b8;
`;

export const RestaurantDetailsFrete = styled.p`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  color: #b8b8b8;
  margin-left: 5vw;
`;

export const DetailsMidContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 1.25vh 0;
`;

export const SectionText = styled.p`
  border-bottom: 1px solid black;
  margin-top: 2.5vh;
  padding-bottom: 1.25vh
`;
