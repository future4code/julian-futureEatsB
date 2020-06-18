import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  NameText,
  AdressContainer,
  BotaoEdit,
  UpperContainer,
  Endereço,
  LowerContainer,
  AdressLowerContainer,
  PedidosText,
  ProfileContainer,
  HistoricoContainer,
  BasicInfoText,
  StreetText
} from "./styles";
import { EditOutlined } from "@material-ui/icons";
import CardHistorico from "../../Components/CardHistorico";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { autorização } from "../../functions";

export function Perfil(props) {
  const history = useHistory();

  useEffect(() => {
    autorização(history);
  }, []);

  return (
    <ProfileContainer>
      <Header title={"Meu perfil"} />
      <UpperContainer>
        <NameText>Bruna Oliveira</NameText>
        <BotaoEdit onClick={() => history.push("/perfil/cadastro")}>
          <EditOutlined />
        </BotaoEdit>
      </UpperContainer>
      <LowerContainer>
        <BasicInfoText>brunoliveira@gmail</BasicInfoText>
        <BasicInfoText>888.888.888-88</BasicInfoText>
      </LowerContainer>
      <AdressContainer>
        <Endereço>Endereço cadastrado</Endereço>
        <AdressLowerContainer>
          <StreetText>Rua dos bobos, no 0</StreetText>
          <BotaoEdit onClick={() => history.push("/perfil/endereco")}>
            <EditOutlined />
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
