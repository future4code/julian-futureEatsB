import React from 'react'
import {Container, Input, Paragrafo, ContainerInput, Botao} from './styles'
import Header from '../../Components/Header/index'


const Endereco = () =>{
    return(
        <Container>
            <Header/>
            <Paragrafo>Meu endereço</Paragrafo>

            <ContainerInput>
            <Input label="logradouro" variant="outlined"/>
            <Input label="numero" variant="outlined"/>
            <Input label="complemento" variant="outlined"/>
            <Input label="bairro" variant="outlined"/>
            <Input label="cidade" variant="outlined"/>
            <Input label="estado" variant="outlined"/>

            <Botao>Salvar</Botao>

            </ContainerInput>





        </Container>


    )



}

export default Endereco 