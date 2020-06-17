
import React, {useState} from 'react'
import axios from 'axios'
import { Container, Imagem, ContainerInput, Paragrafo, Input, Botao, Paragrafo2, Senha } from './styles'
import Button from '../../Components/Button';
import logo from '../../img/logo-invertido.png'
import {Linki} from './styles'


const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const inputEmail = (event) => {
       setEmail(event.target.value)
    }

    const inputSenha = (event) => {
        setSenha(event.target.value)
    }


    const enviarInputs = () =>{
        

    const body = {
        "email": email,
        "password": senha
    }

       axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/login', body).then((response) => {
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        }).catch(error => {
        console.log(error.response)
    })

    }



    return (
  
    <Container>
        <Imagem src={logo} />

        <Paragrafo>Entrar</Paragrafo>

        <ContainerInput>
    
        <Input onChange={inputEmail} placeholder="email@email.com" type="text" value={email} required label="email" variant="outlined"/>
        <Senha onChange={inputSenha} value={senha}  />
        </ContainerInput>


        <Botao onClick={enviarInputs} type="submit">Entrar</Botao>
        <Paragrafo2>Nao possui cadastro?<Linki to="/registro">&nbsp; Clique aqui</Linki></Paragrafo2>
    </Container>
     
    )
}

export default Login 
