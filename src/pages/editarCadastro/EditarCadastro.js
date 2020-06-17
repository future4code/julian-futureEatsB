import React, { useEffect } from 'react';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import { Text } from './styles';
import { useForm } from '../../functions';
import './EditarCadastro.css';

const EditarCadastro = () => {
    const { form, onChange, resetForm } = useForm({
        nome: "Bruna Oliveira",
        email: "bruna_o@gmail.com",
        cpf: "333.333.333-33"
    });

    useEffect(() => {
        onChange("nome", form.nome);
        onChange("email", form.email);
        onChange("cpf", form.cpf);
    }, [])

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
                <Text label={"Nome"} value={form.nome} name={"nome"} onChange={handleInput} variant={"outlined"} required />
                <Text label={"Email"} value={form.email} name={"email"} onChange={handleInput} variant={"outlined"} required />
                <Text label={"CPF"} value={form.cpf} name={"cpf"} onChange={handleInput} variant={"outlined"} required />
                <Button id={"submit-button"} type={"submit"} title={"Salvar"} active={true} />
            </form>
        </div>
    )
}

export default EditarCadastro;