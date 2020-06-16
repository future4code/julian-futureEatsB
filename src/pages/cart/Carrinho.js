import React, { useState } from "react";
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header/index';
import { useHistory } from "react-router";
import styled from 'styled-components';
import "./Carrinho.css";
import CartCard from '../../Components/CartCard/index'



const Carrinho = (props) => {
  const [cart, setCart] = useState([
 {
    "restaurant": {
      "products": [
        {
            "id": "2wvQI3i8Zf2fMvkEq4Vo",
            "category": "Refeição",
            "description": "A melhor pedida é japonesa!",
            "price": 24.3,
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201808311212_sashi.png",
            "name": "Sashimi Shiromi"
        },
        {
            "id": "BmDOBMDVYDAomt7vQtuP",
            "name": "Tempura udon",
            "category": "Refeição",
            "description": "A melhor pedida é japonesa!",
            "price": 52.7,
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201802031948_20717381.jpg"
        },
      ],
        "id": "10",
        "name": "Tadashii",
        "shipping": 13,
        "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
        "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
        "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
        "deliveryTime": 50,
        "category": "Asiática"
    }
  }
]);

  const [endereco, setEndereco] = useState({
    "complement": "71",
    "state": "SP",
    "street": "R. Afonso Braz",
    "neighbourhood": "Vila N. Conceição",
    "number": "177",
    "city": "São Paulo"
  })

  

  let secaoMostrada 
  if (cart.length === 0){
    secaoMostrada = <p id='carrinho-vazio'>Carrinho Vazio</p>
  }else{
    const produtosNatela = cart[0].restaurant.products.map((produto) =>{
      return <CartCard foto={produto.photoUrl} nome={produto.name} descricao={produto.description} preco={produto.price.toFixed(2)}/> 
    })
    secaoMostrada = <section>
      <section>
        <p>Restaurante</p>
      </section>
      {produtosNatela} 
    </section>
  }

  return (
    <div className='telatoda'>
        <Header title={"Meu Carrinho"} />
        <section id='endereco'>
          <p>Endereço de Entrega</p>
          <p>{endereco.street}, {endereco.number}</p>
        </section>

        <section id='lista-carrinho'>
          {secaoMostrada}
        </section>

        <section id='frete'>
          <p>Frete</p>
        </section>

        <section id='pagamento'>
          <p>Formas de Pagamento</p>
        </section>

        <Footer page={"carrinho"} />
    </div>
  );
};

export default Carrinho;