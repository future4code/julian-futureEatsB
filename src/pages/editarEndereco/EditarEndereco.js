import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import { Text } from "./styles";
import { useForm, autorização } from "../../functions";
import "./EditarEndereco.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { pegaEndereço, upDateAddress } from "../../functions/integracao";

const EditarCadastro = () => {
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
=======
  const [ logradouro, setLogradouro ] = useState("");
  const [ numero, setNumero ] = useState("");
  const [ complemento, setComplemento ] = useState("");
  const [ bairro, setBairro ] = useState("");
  const [ cidade, setCidade ] = useState("");
  const [ estado, setEstado ] = useState("");

  const history = useHistory();
  
  useEffect(() => {
    autorização(history);
    axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/profile/address", {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setLogradouro(response.data.address.street);
            setNumero(response.data.address.number);
            setComplemento(response.data.address.complement);
            setBairro(response.data.address.neighbourhood);
            setCidade(response.data.address.city);
            setEstado(response.data.address.state);
        })
        .catch(error => {
            alert("Erro na obtenção dos dados");
        })
  }, []);

  const onClickBotao = (event, form) => {
    event.preventDefault();
    alert("Dados atualizados");

    upDateAddress(form);

    resetForm();
  };

    const body = {
      street: logradouro,
      number: numero,
      complement: complemento,
      neighbourhood: bairro,
      city: cidade,
      state: estado    
    }
    }

  return (
    <div className={"telatoda"}>
      <Header title={"Editar"} back />

      <form onSubmit={onClickBotao}>
        <Text
          label={"Logradouro"}
          value={logradouro}
          name={"logradouro"}
          onChange={onChangeLogradouro}
          variant={"outlined"}
          required
        />
        <Text
          label={"Número"}
          value={numero}
          name={"numero"}
          onChange={onChangeNumero}
          min={1}
          variant={"outlined"}
          required
        />
        <Text
          label={"Complemento"}
          value={complemento}
          name={"complemento"}
          onChange={onChangeComplemento}
          variant={"outlined"}
        />
        <Text
          label={"Bairro"}
          value={bairro}
          name={"bairro"}
          onChange={onChangeBairro}
          variant={"outlined"}
          required
        />
        <Text
          label={"Cidade"}
          value={cidade}
          name={"cidade"}
          onChange={onChangeCidade}
          variant={"outlined"}
          required
        />
        <Text
          label={"Estado"}
          value={estado}
          name={"estado"}
          onChange={onChangeEstado}
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
