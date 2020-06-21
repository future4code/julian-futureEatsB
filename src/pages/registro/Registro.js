import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Imagem,
  Paragrafo,
  ContainerInput,
  Input,
  Botao,
} from "./styles";
import Header from "../../Components/Header/index";
import logo from "../../img/logo-invertido.png";
import Password from "../../Components/InputPassword";
import { useHistory } from "react-router";
import { registro } from "../../functions/integracao";

const Registro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const history = useHistory();

  const inputNome = (event) => {
    setNome(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputCpf = (event) => {
    setCpf(event.target.value);
  };

  const inputSenha = (event) => {
    setSenha(event.target.value);
  };

  const inputConfirma = (event) => {
    setConfirmar(event.target.value);
  };

  const enviarFormulario = () => {
    const body = {
      name: nome,
      email: email,
      cpf: cpf,
      password: senha,
    };

    registro(body, history);
  };

  return (
    <>
      <Header back />
      <Container>
        <Imagem src={logo} />
        <Paragrafo>Cadastrar</Paragrafo>

        <ContainerInput>
          <Input
            onChange={inputNome}
            label="Nome e sobrenome"
            variant="outlined"
            value={nome}
            name="name"
          />
          <Input
            onChange={inputEmail}
            label="Email"
            variant="outlined"
            value={email}
            name="email"
          />
          <Input
            onChange={inputCpf}
            label="CPF"
            variant="outlined"
            value={cpf}
            name="cpf"
          />
          <Password
            onChange={inputSenha}
            label="senha"
            value={senha}
            name="password"
          />
          <Password
            onChange={inputConfirma}
            label="confirmar"
            variant="outlined"
            value={confirmar}
            name="confirmar"
          />

          <Botao onClick={enviarFormulario}>Criar</Botao>
        </ContainerInput>
      </Container>{" "}
    </>
  );
};

export default Registro;
