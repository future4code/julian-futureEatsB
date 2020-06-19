import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import { useHistory } from "react-router";
import styled from "styled-components";
import "./Home.css";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import CardRestaurant from "../../Components/FeedCard/index";
import SearchIcon from "../../img/procurar.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { autorização } from "../../functions";
import CardContext from "../../functions/CardContext";

const Abas = withStyles({
  root: {
    boxShadow: "none",
    height: "100%",
    textTransform: "none",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.39px",
    textAlign: "center",
  },
})(Tabs);

const Aba = styled(Tab)`
  span {
    color: ${(props) => props.cor};
  }
`;

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#5cb646",
      contrastText: "#000000",
      light: "rgba(92, 182, 70, 0.5)",
    },
  },
});

const ContainerAbas = styled.div`
  width: 100vw;
  height: 42px;
  padding-left: 16px;
`;

const Home = (props) => {
  let history = useHistory();
  const [tipoSelecionado, setTipoSelecionado] = useState("todos");
  const homeContexto = useContext(CardContext);

  useEffect(() => {
    autorização(history);
  }, []);

  const goToBuscar = () => {
    history.push("/busca");
  };

  const handleChange = (event, value) => {
    tipoSelecionado === value
      ? setTipoSelecionado("todos")
      : setTipoSelecionado(value);
  };

  const restaurantesFiltrados = homeContexto.restaurantes
    .filter((restaurante) => {
      return restaurante.category === tipoSelecionado;
    })
    .map((restaurante) => {
      return (
        <CardRestaurant
          foto={restaurante.logoUrl}
          idRest={restaurante.id}
          nome={restaurante.name}
          demora={restaurante.deliveryTime}
          frete={restaurante.shipping.toFixed(2).replace(".", ",")}
        />
      );
    });

  const restaurantesTotais = homeContexto.restaurantes.map((restaurante) => {
    return (
      <CardRestaurant
        foto={restaurante.logoUrl}
        idRest={restaurante.id}
        nome={restaurante.name}
        demora={restaurante.deliveryTime}
        frete={restaurante.shipping.toFixed(2).replace(".", ",")}
      />
    );
  });

  const listaTipos = homeContexto.restaurantes
    .map((restaurante) => {
      return restaurante.category;
    })
    .filter(function (elem, index, self) {
      return index === self.indexOf(elem); /*Retira os duplicados */
    })
    .map((restaurant) => {
      return (
        <Aba
          cor={restaurant === tipoSelecionado ? "#5cb646" : "#000000"}
          label={restaurant}
          value={restaurant}
          key={restaurant}
        />
      );
    });

  return (
    <ThemeProvider theme={MyTheme}>
      <div id="tela-toda">
        <Header title={"FutureEats"} />
        <section id="container-procurar" onClick={goToBuscar}>
          {" "}
          {/* Nota: Fiz em div mesmo porque ele não procura, pelo que entendi no Zeplin, quando clica vai direto para a página de busca. O input então fica na página de busca */}
          <img src={SearchIcon} alt="iconeProcurar" id="icone-procurar" />
          <p id="placeholder-buscar">Restaurante</p>
        </section>

        <section>
          <ContainerAbas position="static">
            <Abas
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {listaTipos}
            </Abas>
          </ContainerAbas>
        </section>

        <section id="lista-restaurantes">
          {tipoSelecionado === "todos"
            ? restaurantesTotais
            : restaurantesFiltrados}
        </section>

        <Footer page={"home"} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
