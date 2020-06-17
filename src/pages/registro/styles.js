import styled from 'styled-components'
import { TextField } from '@material-ui/core'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vw;
    margin-left: auto;
    margin-right: auto;
`

export const Imagem = styled.img`
    width: 28.8vw;
    margin: 3.75vh auto 4.375vh auto;
    width: 104px;
    height: 58px;
    

`
export const Paragrafo = styled.p`
    display: flex;
    justify-content:center;
    margin-bottom: 2.00vh;
    font-size: 1em;
    padding: 1.88vh;
`

export const ContainerInput = styled.div`
    display: grid;
    justify-items: center;
    grid-auto-columns: 1fr;
    grid-gap: 2.50vh;

`

export const Input = styled(TextField)`
   width: 91.11vw;
   height: 8.75vh;

`
export const Botao = styled.button`
    display: flex;
    justify-content: center;
    margin-top: 0px;
    margin-left: 4.44vw;
    margin-right: 4.44vw;
    margin-bottom: 4.06vh;
    width: 91.11vw;
    height: 6.56vh;
    background-color: #5cb646;
    border: 0px;
    text-align: center;
    font-size: 1em;
    padding: 12px;

`

