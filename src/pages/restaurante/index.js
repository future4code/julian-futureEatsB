import React, { useEffect, useState, useContext } from "react";
import {
  RestauranteContainer,
  UpperRestaurantContainer,
  ResturanteImg,
  RestaurantTitle,
  RestaurantDetails,
  RestaurantDetailsFrete,
  DetailsMidContainer,
  SectionText,
  ContainerImg
} from "./styles";
import CartCard from "../../Components/CartCard";
import { useParams, useHistory } from "react-router-dom";
import { autorização } from "../../functions";
import CardContext from "../../functions/CardContext";
import { pegaProdutos } from '../../functions/integracao'

function Restaurante(props) {
  const pathParams = useParams();
  const history = useHistory();
  const restContexto = useContext(CardContext);
  const [quantidade, setQuantidade] = useState(0)

  useEffect(() => {
    autorização(history);
  }, []);

  useEffect(() => {
    pegaProdutos(pathParams.pageID, restContexto.dispatch)
  }, [])
  
  const adicionarCarrinho = (idProduct) => {
    console.log('adicionar', idProduct)
  }

  const removerCarrinho = (idProduct) => {
    console.log('remover', idProduct)
  }

  return (
    <RestauranteContainer>
      <UpperRestaurantContainer>
        <ContainerImg><ResturanteImg src={restContexto.produtos.logoUrl} alt='Logo Restaurante'/></ContainerImg>
        <RestaurantTitle>{restContexto.produtos.name}</RestaurantTitle>
      </UpperRestaurantContainer>
      <RestaurantDetails>{restContexto.produtos.category}</RestaurantDetails>
      <DetailsMidContainer>
        <RestaurantDetails>{restContexto.produtos.deliveryTime}mins</RestaurantDetails>
        <RestaurantDetailsFrete>
          Frete R$
          {restContexto.produtos.shipping === undefined ? "..." : restContexto.produtos.shipping.toFixed(2)}
        </RestaurantDetailsFrete>
      </DetailsMidContainer>
      <RestaurantDetails>{restContexto.produtos.address}</RestaurantDetails>
      <SectionText>Principais</SectionText>
      {restContexto.produtos.products === undefined ? (
        <p>...</p>
      ) : (
        restContexto.produtos.products
//          .filter((product) => product.category !== "Bebida")
          .map((produto) => {
            return <CartCard
              quantidade={quantidade === 0? '' : quantidade}
              foto={produto.photoUrl}
              nome={produto.name}
              descricao={produto.description}
              preco={produto.price.toFixed(2).replace(".", ",")}
              tituloBotao={quantidade === 0? 'adicionar' : 'remover'}
              onClick={() => {quantidade === 0 ? adicionarCarrinho(produto.id) : removerCarrinho(produto.id) }}
              borda={quantidade === 0 ? 'solid 2px #5cb646' : 'solid 2px #e02020'}
              />;
          })
      )}
      <SectionText>Acompanhamentos</SectionText>
      {restContexto.produtos.products === undefined ? (
        <p>...</p>
      ) : (
        restContexto.produtos.products
          .filter((product) => product.category === "Bebida")
          .map((acompanhamentos) => {
            return <CartCard main={acompanhamentos} />;
          })
      )}
    </RestauranteContainer>
  );
}

export default Restaurante;
