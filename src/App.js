import React from "react";
import {Switch, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './pages/login/Login'
import Cart from './pages/cart/Carrinho'
import Home from './pages/home/Home'
import Perfil from './pages/perfil/Perfil'
import Registro from './pages/registro/Registro'


const App = () => {  

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/registro">
            <Registro />
          </Route>
          <Route exact path="/perfil">
            <Perfil />
          </Route>
          <Route exact path="/carrinho">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

export default App;