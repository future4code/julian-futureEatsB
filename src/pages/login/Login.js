import React, { useEffect, useState } from "react";
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
import { login } from "../../functions/integracao";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [botaoAtivo, setBotaoAtivo] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (email !== "" && senha !== "") {
      setBotaoAtivo(true);
    } else {
      setBotaoAtivo(false);
    }
  }, [email, senha]);

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputSenha = (event) => {
    setSenha(event.target.value);
  };

  const enviarInputs = async () => {
    const body = {
      email: email,
      password: senha,
    };

    await login(body, history);
  };

  return (
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

      <Button
        active={botaoAtivo}
        title={"Entrar"}
        onClick={enviarInputs}
        type="submit"
      >
        Entrar
      </Button>
      <Paragrafo2>
        Nao possui cadastro?<Linki to="/registro">&nbsp; Clique aqui</Linki>
      </Paragrafo2>
    </Container>
  );
};

export default Login;
