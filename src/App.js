import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Carrinho";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Registro from "./pages/registro/Registro";
import Restaurante from "./pages/restaurante";
import Inicial from "./pages/PaginaInicial/PaginaInicial";

import Busca from "./pages/busca/Busca";

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route urlBase={urlBase} exact path="/">
          <Inicial />
        </Route>
        <Route urlBase={urlBase} exact path="/Login">
          <Login />
        </Route>
        <Route urlBase={urlBase} exact path="/home">
          <Home />
        </Route>
        <Route urlBase={urlBase} exact path="/registro">
          <Registro />
        </Route>
        <Route urlBase={urlBase} exact path="/perfil">
          <Perfil />
        </Route>
        <Route urlBase={urlBase} exact path="/carrinho">
          <Cart />
        </Route>
        <Route urlBase={urlBase} exact path="/restaurante">
          <Restaurante />
        </Route>
        <Route urlBase={urlBase} exact path="/busca">
          <Busca />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
