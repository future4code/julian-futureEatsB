import React from "react";
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

const Registro = () => {
  return (
    <>
      <Header back />
      <Container>
        <Imagem src={logo} />
        <Paragrafo>Cadastrar</Paragrafo>
        <ContainerInput>
          <Input label="nome e sobrenome" variant="outlined" />
          <Input label="email" variant="outlined" />
          <Input label="cpf" variant="outlined" />
          <Password label="senha" />
          <Input label="confirmar" variant="outlined" />

          <Botao>Criar</Botao>
        </ContainerInput>
      </Container>{" "}
    </>
  );
};

export default Registro;
