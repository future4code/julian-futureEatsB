import React, { useEffect } from 'react';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import { Text } from './styles';
import { useForm } from '../../functions';
import './EditarEndereco.css';

const EditarCadastro = () => {
    const { form, onChange, resetForm } = useForm({
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
    });

    const handleInput = (event) => {
        onChange(event.target.name, event.target.value);
    }

    const onClickBotao = (event) => {
        event.preventDefault();
        alert("Dados atualizados");
    }
    return (
        <div className={"telatoda"}>
            <Header title={"Editar"} back />
            <form onSubmit={onClickBotao}>
                <Text label={"Logradouro"} value={form.logradouro} name={"logradouro"} onChange={handleInput} variant={"outlined"} required />
                <Text label={"Número"} value={form.numero} name={"numero"} onChange={handleInput} variant={"outlined"} required />
                <Text label={"Complemento"} value={form.complemento} name={"complemento"} onChange={handleInput} variant={"outlined"} />
                <Text label={"Bairro"} value={form.bairro} name={"bairro"} onChange={handleInput} variant={"outlined"} required />
                <Text label={"Cidade"} value={form.cidade} name={"cidade"} onChange={handleInput} variant={"outlined"} required />
                <Text label={"Estado"} value={form.estado} name={"estado"} onChange={handleInput} variant={"outlined"} required />
                <Button id={"submit-button"} type={"submit"} title={"Salvar"} active={true} />
            </form>
        </div>
    )
}

export default EditarCadastro;