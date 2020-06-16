import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import "./Home.css";
import { createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import CardProduto from '../../Components/FeedCard/index';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';

const IconeProcurar = withStyles({
  root: {
    width: '17.5px',
    height: '17.5px',
    color: '#b8b8b8',
  },
})(SearchIcon);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '328px',
    height: '56px',
    borderRadius: '2px',
    border: 'solid 1px #b8b8b8',
  },
}));

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
  const classes = useStyles();


  return (
    <ThemeProvider theme={MyTheme} className='telatoda'>
      <div>
        <p>Cabeçalho</p>
      </div>
        <div>
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Restaurante"
            startAdornment={<IconeProcurar color="disabled"/>}
            className={clsx(classes.margin, classes.textField)}
          />
        </div>

     
    </ThemeProvider>
  );
};

export default Home;