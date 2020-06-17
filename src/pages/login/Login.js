import React from 'react'
import { Container, Imagem, ContainerInput, Paragrafo, Input, Paragrafo2, Senha } from './styles'
import Button from '../../Components/Button';
import logo from '../../img/logo-invertido.png'


const Login = () => {
    return (
  
    <Container>
        <Imagem src={logo} />

        <Paragrafo>Entrar</Paragrafo>

        <ContainerInput>
        <Input label="email" variant="outlined"/>
       {/* <Input label="senha" variant="outlined"/> */}
       <Senha/>

        </ContainerInput>

        <Button title={"Entrar"} active={true} />

        <Paragrafo2>Nao possui cadastro? Clique aqui</Paragrafo2>

    </Container>
     
    )
}

export default Login 
