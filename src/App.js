import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Carrinho";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Registro from "./pages/registro/Registro";
import Restaurante from "./pages/restaurante";
import Busca from "./pages/busca/Busca";
import PlaceholderCarrinho from "./pages/placeholderCarrinho";

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route urlBase={urlBase} exact path="/">
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
        <Route urlBase={urlBase} exact path="/placeholder">
          <PlaceholderCarrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
