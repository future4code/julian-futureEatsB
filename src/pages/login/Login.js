import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import axios from "axios";
import {
  Container,
  Imagem,
  ContainerInput,
  Paragrafo,
  Input,
  Botao,
  Paragrafo2,
  Senha,
} from "./styles";
import Button from "../../Components/Button";
import logo from "../../img/logo-invertido.png";
import { Linki } from "./styles";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
    },
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [botaoAtivo, setBotaoAtivo] = useState(false)
  const history = useHistory();
  
  useEffect(() => {    
   if (email !== '' && senha !== 0) {
     setBotaoAtivo(true)
   } else{
     setBotaoAtivo(false)
   }
  }, [email, senha]);
  
  const goToHome = () =>{
    history.push('/home')
  }
  
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputSenha = (event) => {
    setSenha(event.target.value);
  };

  const enviarInputs = () => {
    const body = {
      email: email,
      password: senha,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/login",
        body
      )
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        goToHome()
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <Container>
        <Imagem src={logo} />
  
        <Paragrafo>Entrar</Paragrafo>
  
        <ContainerInput>
          <Input
            onChange={inputEmail}
            placeholder="email@email.com"
            type="text"
            value={email}
            required
            label="email"
            variant="outlined"
          />
          <Senha onChange={inputSenha} value={senha} />
        </ContainerInput>
  
        <Button active={botaoAtivo} title={'Entrar'} onClick={enviarInputs} type="submit">
          Entrar
        </Button>
        <Paragrafo2>
          Nao possui cadastro?<Linki to="/registro">&nbsp; Clique aqui</Linki>
        </Paragrafo2>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
