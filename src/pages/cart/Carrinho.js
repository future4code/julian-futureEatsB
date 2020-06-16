import React, { useState } from "react";
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header/index';
import { useHistory } from "react-router";
import styled from 'styled-components';
import "./Carrinho.css";



const Carrinho = (props) => {
    
  
  return (
    <div className='telatoda'>
        <Header title={"Meu Carrinho"} />
        <p>Oi, eu sou o Carrinho</p>
        <Footer page={"carrinho"} />
    </div>
  );
};

export default Carrinho;