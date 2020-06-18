import React, { useEffect } from "react";
import { Container, Input, Paragrafo, ContainerInput, Botao } from "./styles";
import Header from "../../Components/Header/index";
import { useHistory } from "react-router-dom";
import { autorização } from "../../functions";

const Endereco = () => {
  const history = useHistory;
  useEffect(() => {
    autorização(history);
  }, []);

  return (
    <Container>
      <Header back />
      <Paragrafo>Meu endereço</Paragrafo>

      <ContainerInput>
        <Input label="logradouro" placeholder="Rua / Av." variant="outlined" />
        <Input label="numero" placeholder="numero" variant="outlined" />
        <Input
          label="complemento"
          placeholder="Apto. Bloco"
          variant="outlined"
        />
        <Input label="bairro" placeholder="Bairro" variant="outlined" />
        <Input label="cidade" placeholder="Cidade" variant="outlined" />
        <Input label="estado" placeholder="Estado" variant="outlined" />

        <Botao>Salvar</Botao>
      </ContainerInput>
    </Container>
  );
};

export default Endereco;
