import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import "./Home.css";
import { createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import CardProduto from '../../Components/FeedCard/index';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '../../img/procurar.svg';


const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#5cb646",
      contrastText: "#000000",
      light: "rgba(92, 182, 70, 0.5)",
    }
  }
})


const Home = (props) => {
  let history = useHistory();

  const goToBuscar = () =>{
    history.push('/busca')
  }

  return (
    <ThemeProvider theme={MyTheme} className='telatoda'>
      <div>
        <p>Cabeçalho</p>
      </div>
        < div id = "container-procurar" onClick={goToBuscar}> {/* Nota: Fiz em div mesmo porque ele não procura, pelo que entendi no Zeplin, quando clica vai direto para a página de busca. O input então fica na página de busca */ }
          <img src={SearchIcon} alt="iconeProcurar" id="icone-procurar"/>
          <p id='placeholder-buscar'>Restaurante</p>
        </div>

     
    </ThemeProvider>
  );
};

export default Home;