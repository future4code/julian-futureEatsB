import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const BasicInfoText = styled(Typography)``;

export const AdressContainer = styled.div`
  background-color: #eeeeee;
  padding: 1em;
  height: 7vh;
  margin: 1vh auto;
`;

export const BotaoEdit = styled.button`
  background: none;
  border: none;
`;

export const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  height: 5vh;
  margin: 1vh auto;
`;

export const Endereço = styled(Typography)`
  color: #b8b8b8;
`;

export const LowerContainer = styled.div`
  padding: 0 1em;
  height: 5vh;
  margin: 1vh auto;
`;

export const AdressLowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vh auto;
`;

export const PedidosText = styled.p`
  border-bottom: 1px solid black;
  margin: 1em;
  font-size: 1.2em;
`;

export const ProfileContainer = styled.div`
  height: 90vh;
  margin: 1vh auto;
`;

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
