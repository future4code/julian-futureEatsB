import React, { useState, useEffect } from "react";
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header/index';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router";
import styled from 'styled-components';
import "./Carrinho.css";
import CartCard from '../../Components/CartCard/index';
import Button from '../../Components/Button/index'



const Carrinho = (props) => {
  const [formaPagamento, setFormaPagamento] = useState('');
  const [botaoAtivado, setBotaoAtivado] = useState('')
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

  useEffect(() => {
    const token = window.localStorage('token')
    if (token === null) {
      history.push("/Login")
    }
  })

  useEffect(() => {    
   if (formaPagamento !== '' && cart.length !== 0) {
     setBotaoAtivado(true)
   } else if (formaPagamento === '' || cart.length === 0) {
     setBotaoAtivado(false)
   }
  }, [formaPagamento, cart.length]);

  const handleChange = (event) => {
    setFormaPagamento(event.target.value);
  }
  const confirmaPedido = () =>{
    console.log('Funcionou Botão')
  }

  let secaoMostrada 
  if (cart.length === 0){
    secaoMostrada = <p id='carrinho-vazio'>Carrinho Vazio</p>
  }else{
    const produtosNatela = cart[0].restaurant.products.map((produto) =>{
      return <CartCard quantidade={1} foto={produto.photoUrl} nome={produto.name} descricao={produto.description} preco={produto.price.toFixed(2).replace('.', ',')}/> 
    })
    secaoMostrada = <section>
      <section id='dados-restaurante-cart'>
        <p>{cart[0].restaurant.name}</p>
        <p>{cart[0].restaurant.address}</p>
        <p>{cart[0].restaurant.deliveryTime} min</p>
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
          <p>Frete R$ 0,00</p>
          <p>SUBTOTAL</p>
          <p>R$ 0,00</p>
        </section>

        <section id='pagamento'>
          <p>Forma de Pagamento</p>
          <hr />
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={formaPagamento} onChange={handleChange}>
              <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
              <FormControlLabel value="cartao" control={<Radio />} label="Cartão de Crédito" />
            </RadioGroup>
          </FormControl>
        </section>

        <Button active={botaoAtivado} onClick={confirmaPedido} title={'Confirmar'}/>
        <br />
        <br />
        <br />

        <Footer page={"carrinho"} />
    </div>
  );
};

export default Carrinho;