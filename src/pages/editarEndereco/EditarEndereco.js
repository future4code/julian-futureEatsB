import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import { Text } from "./styles";
import { useForm, autorização } from "../../functions";
import "./EditarEndereco.css";
import { useHistory } from "react-router-dom";
import { pegaEndereço, upDateAddress } from "../../functions/integracao";

const EditarCadastro = () => {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {
    autorização(history);

    pegaEndereço().then((res) => {
      form.logradouro = res.street;
      form.numero = res.number;
      form.complemento = res.complement;
      form.bairro = res.neighbourhood;
      form.cidade = res.city;
      form.estado = res.state;
    });
  }, []);

  const handleInput = (event) => {
    onChange(event.target.name, event.target.value);
  };

  const onClickBotao = (event, form) => {
    event.preventDefault();
    alert("Dados atualizados");

    upDateAddress(form);

    resetForm();
  };

  return (
    <div className={"telatoda"}>
      <Header title={"Editar"} back />

      <form onSubmit={onClickBotao}>
        <Text
          label={"Logradouro"}
          value={form.logradouro}
          name={"logradouro"}
          onChange={handleInput}
          variant={"outlined"}
          required
        />
        <Text
          label={"Número"}
          value={form.numero}
          name={"numero"}
          onChange={handleInput}
          variant={"outlined"}
          required
        />
        <Text
          label={"Complemento"}
          value={form.complemento}
          name={"complemento"}
          onChange={handleInput}
          variant={"outlined"}
        />
        <Text
          label={"Bairro"}
          value={form.bairro}
          name={"bairro"}
          onChange={handleInput}
          variant={"outlined"}
          required
        />
        <Text
          label={"Cidade"}
          value={form.cidade}
          name={"cidade"}
          onChange={handleInput}
          variant={"outlined"}
          required
        />
        <Text
          label={"Estado"}
          value={form.estado}
          name={"estado"}
          onChange={handleInput}
          variant={"outlined"}
          required
        />
        <Button
          id={"submit-button"}
          type={"submit"}
          title={"Salvar"}
          active={true}
        />
      </form>
    </div>
  );
};

export default EditarCadastro;
