import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router";
import "./Carrinho.css";
import CartCard from "../../Components/CartCard/index";
import Button from "../../Components/Button/index";
import CartContext from "../../functions/CartContext";
import { autorização } from "../../functions";

const Carrinho = (props) => {
  const history = useHistory();
  const [formaPagamento, setFormaPagamento] = useState("");
  const [botaoAtivado, setBotaoAtivado] = useState("");
  const cartContexto = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [valorFrete, setValorFrete] = useState(0);
  const [totalProdutos, setTotalProdutos] = useState(0);

  useEffect(() => {
    autorização(history);
  }, []);

   useEffect(() => {
    defineValores();
   }, [cartContexto.cart]);

  useEffect(() => {
    if (formaPagamento !== "" && cartContexto.cart.length !== 0) {
      setBotaoAtivado(true);
    } else {
      setBotaoAtivado(false);
    }
  }, [formaPagamento, cartContexto.cart.length]);

  const handleChange = (event) => {
    setFormaPagamento(event.target.value);
  };

  const confirmaPedido = () => {
    console.log("Funcionou Botão");
  };

  const defineValores = () =>{
    if (cartContexto.cart.length !== 0){
      setValorFrete(cartContexto.cart[0].restaurant.shipping)
      
      const valores = cartContexto.cart[0].restaurant.products.map((produto) => {
        return produto.price
      })

      let total = 0.00;
      for (let i = 0; i < valores.length; i++) {
        total += valores[i];
        setTotalProdutos(total)
      }
    } 
  }

  let totalCarrinho = valorFrete + totalProdutos

  let secaoMostrada;
  if (cartContexto.cart.length === 0) {
    secaoMostrada = <p id="carrinho-vazio">Carrinho Vazio</p>;
  } else {
    const produtosNatela = cartContexto.cart[0].restaurant.products.map(
      (produto) => {
        return (
          <CartCard
            quantidade={1}
            foto={produto.photoUrl}
            nome={produto.name}
            descricao={produto.description}
            preco={produto.price.toFixed(2).replace(".", ",")}
          />
        );
      }
    );

    secaoMostrada = (
      <section>
        <section id="dados-restaurante-cart">
          <p>{cartContexto.cart[0].restaurant.name}</p>
          <p>{cartContexto.cart[0].restaurant.address}</p>
          <p>{cartContexto.cart[0].restaurant.deliveryTime} min</p>
        </section>
        {produtosNatela}
      </section>
    );
  }

  return (
    <div className="telatoda">
      <Header title={"Meu Carrinho"} />
      <section id="endereco">
        <p>Endereço de Entrega</p>
        <p>
          {cartContexto.endereco[0].street}, {cartContexto.endereco[0].number}
        </p>
      </section>

      <section id="lista-carrinho">{secaoMostrada}</section>

      <section id="frete">
        <p>{valorFrete === 0 ? "Frete Grátis" : `Frete R$${valorFrete}`}</p>
        <p>SUBTOTAL</p>
        <p>R${totalCarrinho}</p>
      </section>

      <section id="pagamento">
        <p>Forma de Pagamento</p>
        <hr />
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={formaPagamento}
            onChange={handleChange}
          >
            <FormControlLabel
              value="dinheiro"
              control={<Radio />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="cartao"
              control={<Radio />}
              label="Cartão de Crédito"
            />
          </RadioGroup>
        </FormControl>
      </section>

      <Button
        active={botaoAtivado}
        onClick={confirmaPedido}
        title={"Confirmar"}
      />
      <br />
      <br />
      <br />

      <Footer page={"carrinho"} />
    </div>
  );
};

export default Carrinho;
