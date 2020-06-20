import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import { Text } from './styles';
import axios from 'axios';
import './EditarCadastro.css';

const EditarCadastro = () => {
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ cpf, setCpf ] = useState("");

    let history = useHistory();

    const onChangeNome = (event) => {
        setNome(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeCpf = (event) => {
        setCpf(event.target.value);
    }

    useEffect(() => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/profile", {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((response) => {
                setNome(response.data.user.name);
                setEmail(response.data.user.email);
                setCpf(response.data.user.cpf);
            })
            .catch(error => {
                alert("Erro na obtenção dos dados");
            })
    }, [])

    const onClickBotao = (event) => {
        event.preventDefault();
        const body = {
            name: nome,
            email,
            cpf
        }

        axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/profile", body, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then( () => {
                history.goBack();
            })
            .catch(error => {
                alert("Erro na atualização dos dados");
            })
    }

    const cpfPattern = {
        pattern: "[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
    }

    return (
        <div className={"telatoda"}>
            <Header title={"Editar"} back />
            <form onSubmit={onClickBotao}>
                <Text
                    label={"Nome"}
                    value={nome}
                    name={"nome"}
                    onChange={onChangeNome}
                    variant={"outlined"}
                    required
                />
                <Text
                    label={"Email"}
                    value={email}
                    type={"email"}
                    name={"email"}
                    onChange={onChangeEmail}
                    variant={"outlined"}
                    required
                />
                <Text
                    label={"CPF"}
                    value={cpf}
                    name={"cpf"}
                    onChange={onChangeCpf}
                    inputProps={cpfPattern}
                    variant={"outlined"}
                    required
                />
                <Button id={"submit-button"} type={"submit"} title={"Salvar"} active={true} />
            </form>
        </div>
    )
}

export default EditarCadastro;