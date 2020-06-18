import React, { useState, useEffect} from "react";
import { useHistory } from "react-router";
import {
  BasicInfoText,
  AdressContainer,
  BotaoEdit,
  UpperContainer,
  Endereço,
  LowerContainer,
  AdressLowerContainer,
  PedidosText,
  ProfileContainer,
  HistoricoContainer,
} from "./styles";
import { Edit } from "@material-ui/icons";
import CardHistorico from "../../Components/CardHistorico";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export function Perfil(props) {
  let history = useHistory();

  useEffect(() => {
    const token = window.localStorage('token')
    if (token === null) {
      history.push("/Login")
    }
  })

  return (
    <ProfileContainer>
      <Header title={"Meu perfil"} />
      <UpperContainer>
        <BasicInfoText>Bruna Oliveira</BasicInfoText>
        <BotaoEdit onClick={() => history.push("/perfil/cadastro")}>
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
          <BotaoEdit onClick={() => history.push("/perfil/endereco")}>
            <Edit />
          </BotaoEdit>
        </AdressLowerContainer>
      </AdressContainer>
      <HistoricoContainer>
        <PedidosText>Histórico de pedidos</PedidosText>
        <CardHistorico />
      </HistoricoContainer>
      <Footer page={"perfil"} />
    </ProfileContainer>
  );
}

export default Perfil;
