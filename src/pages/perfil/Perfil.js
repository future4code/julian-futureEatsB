import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Perfil.css";
import {
  BasicInfoText,
  AdressContainer,
  BotaoEdit,
  UpperContainer,
  Endereço,
  LowerContainer,
  AdressLowerContainer,
  PedidosText,
} from "./styles";
import { Edit } from "@material-ui/icons";
import CardHistorico from "../../Components/CardHistorico";
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

export function Perfil(props) {
  return (
    <div className="telatoda">
      <Header title={"Meu perfil"} />
      <UpperContainer>
        <BasicInfoText>Bruna Oliveira</BasicInfoText>
        <BotaoEdit>
          <Edit />
        </BotaoEdit>
      </UpperContainer>
      <LowerContainer>
        <BasicInfoText>bruoliveira@gmail</BasicInfoText>
        <BasicInfoText>888.888.888-88</BasicInfoText>
      </LowerContainer>
      <AdressContainer>
        <Endereço>Endereço cadastrado</Endereço>
        <AdressLowerContainer>
          <BasicInfoText>Rua dos bobos, no 0</BasicInfoText>
          <BotaoEdit>
            <Edit />
          </BotaoEdit>
        </AdressLowerContainer>
      </AdressContainer>
      <PedidosText>Histórico de pedidos</PedidosText>
      <CardHistorico />
      <Footer page={"perfil"} />
    </div>
  );
}

export default Perfil;
