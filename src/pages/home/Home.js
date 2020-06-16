import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import "./Home.css";
import { createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import CardRestaurant from '../../Components/FeedCard/index';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '../../img/procurar.svg';


const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#5cb646",
      contrastText: "#000000",
      light: "rgba(92, 182, 70, 0.5)",
    }
  }
})


const Home = (props) => {
  let history = useHistory();
  const [tiposRestaurantes, setTiposRestaurantes] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('Burger');
  const [restaurantes, setRestaurantes] = useState([
    {
      "id": "51",
      "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
      "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
      "logoUrl": "https://paginaamarela.com.br/storage/categorias/lanchonetes-20200327190257-paginaamarela.jpg",
      "deliveryTime": 45,
      "category": "Burger",
      "name": "CowboyBurger",
      "shipping": 13,
    },
    {
      "id": "1",
      "name": "Habibs",
      "shipping": 6,
      "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
      "address": "Rua das Margaridas, 110 - Jardim das Flores",
      "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
      "deliveryTime": 60,
      "category": "Árabe"
    },
    {
      "id": "10",
      "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
      "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
      "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
      "deliveryTime": 50,
      "category": "Asiática",
      "name": "Tadashii",
      "shipping": 13
    },
    {
      "id": "2",
      "category": "Hamburguer",
      "name": "McDonalds",
      "shipping": 19,
      "description": "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
      "address": "Avenida dos Papagaios, 1350 - Sta. Efigênia",
      "logoUrl": "http://soter.ninja/futureFoods/logos/mcdonalds.png",
      "deliveryTime": 15
    },
    {
      "id": "3",
      "name": "Cantina Mamma Perrotta",
      "shipping": 2,
      "description": "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
      "address": "Rua Barão do Rio Branco, 98 - Centro",
      "logoUrl": "http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg",
      "deliveryTime": 20,
      "category": "Italiana"
    },
    {
      "id": "4",
      "description": "Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!",
      "address": "Travessa Junqueira de Melo, 315 - Marginal",
      "logoUrl": "http://soter.ninja/futureFoods/logos/baciodilatte.png",
      "deliveryTime": 45,
      "category": "Sorvetes",
      "name": "Sorveteria Bacio di Latte",
      "shipping": 10
    },
    {
      "id": "5",
      "category": "Carnes",
      "name": "Outback Steakhouse",
      "shipping": 18,
      "description": "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
      "address": "Alameda dos Marsupiais, 505 - Humaitá",
      "logoUrl": "http://soter.ninja/futureFoods/logos/outback.png",
      "deliveryTime": 20
    },
    {
      "id": "6",
      "name": "Sotero Cozinha Original",
      "shipping": 4,
      "description": "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
      "address": "Rua Dorival Caymmi, 149 - Alto dos Ibirás",
      "logoUrl": "http://soter.ninja/futureFoods/logos/sotero.jpg",
      "deliveryTime": 40,
      "category": "Baiana"
    },
    {
      "id": "7",
      "description": "O bar tem um cardápio recheado de petiscos que acompanham o chope para o bate-papo num ambiente agradável.Amigos e amigas, temos o prazer de convidar vocês para conhecer nosso espaço!",
      "address": "Avenida das Andorinhas, 333 - Sta. Efigênia",
      "logoUrl": "http://soter.ninja/futureFoods/logos/botecodeportal.jpg",
      "deliveryTime": 20,
      "category": "Petiscos",
      "name": "Boteco de Portal",
      "shipping": 18
    },
    {
      "id": "8",
      "name": "Chun-Li",
      "shipping": 17,
      "description": "Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.",
      "address": "Rua Visconde de Mauá, 990 - Centro",
      "logoUrl": "http://soter.ninja/futureFoods/logos/chun-li.jpg",
      "deliveryTime": 30,
      "category": "Asiática"
    },
    {
      "id": "9",
      "category": "Mexicana",
      "name": "Mexicaníssimo",
      "shipping": 3,
      "description": "Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos.",
      "address": "Largo dos Jaguarés, 12 - Nova Bragança",
      "logoUrl": "http://soter.ninja/futureFoods/logos/mexicanissimo.png",
      "deliveryTime": 20
    }
  ])

  const goToBuscar = () =>{
    history.push('/busca')
  }

  const restaurantesNaTela = restaurantes.filter((restaurante) => {
      return restaurante.category === tipoSelecionado;
    }).map((restaurante) =>{
      return <CardRestaurant nome={restaurante.name} demora={restaurante.deliveryTime} frete={restaurante.shipping}/>
    })

  const listaTipos = restaurantes.map((restaurante)=>{
    return 
  })

  return (
    <ThemeProvider theme={MyTheme} className='telatoda'>
      <section>
        <p>Cabeçalho</p>
      </section>  
      
      <section id = "container-procurar" onClick={goToBuscar}> {/* Nota: Fiz em div mesmo porque ele não procura, pelo que entendi no Zeplin, quando clica vai direto para a página de busca. O input então fica na página de busca */ }
          <img src={SearchIcon} alt="iconeProcurar" id="icone-procurar"/>
          <p id='placeholder-buscar'>Restaurante</p>
      </section>  
      
      <section>
        {listaTipos}
      </section>
      <section id="lista-restaurantes">
        {restaurantesNaTela}
      </section>  
     
    </ThemeProvider>
  );
};

export default Home;