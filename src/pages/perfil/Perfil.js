import React, { useState, useEffect, useContext } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
  StreetText,
} from "./styles";
import { EditOutlined } from "@material-ui/icons";
import CardHistorico from "../../Components/CardHistorico";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { autorização } from "../../functions";
import { getProfile, pegaEndereço } from "../../functions/integracao";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
    },
  },
});

export function Perfil(props) {
  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [address, setAddress] = useState({});

  useEffect(() => {
    autorização(history);
    getProfile().then((response) => setProfile(response));
    pegaEndereço().then((res) => setAddress(res));
  }, []);

  return (
    <ThemeProvider theme={MyTheme}>
      <ProfileContainer>
        <Header title={"Meu perfil"} />
  
        <UpperContainer>
          <NameText>{profile.name}</NameText>
          <BotaoEdit onClick={() => history.push("/perfil/cadastro")}>
            <EditOutlined />
          </BotaoEdit>
        </UpperContainer>
        <LowerContainer>
          <BasicInfoText>{profile.email}</BasicInfoText>
          <BasicInfoText>{profile.cpf}</BasicInfoText>
        </LowerContainer>
        <AdressContainer>
          <Endereço>Endereço cadastrado</Endereço>
          <AdressLowerContainer>
            {address.street === undefined ? (
              <p>...</p>
            ) : (
              <StreetText>
                {address.street} nº{address.number}, {address.neighbourhood}
              </StreetText>
            )}
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
    </ThemeProvider>
  );
}

export default Perfil;
