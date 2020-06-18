export const initialState = {
  endereco: [
    {
      complement: "71",
      state: "SP",
      street: "R. Afonso Braz",
      neighbourhood: "Vila N. Conceição",
      number: "177",
      city: "São Paulo",
    }
  ], 
  cart: [
    {
      "restaurant": {
        "products": [{
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
  ],
  products: [
    {
      id: "3vcYYSOEf8dKeTPd7vHe",
      category: "Pastel",
      description: "Pastel autêntico, feito na hora!",
      price: 3,
      photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
      name: "Pastel",
    },
    {
      id: "5omTFSOBYiTqeiDwhiBx",
      price: 1,
      photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
      name: "Bibsfiha queijo",
      category: "Salgado",
      description: "Esfiha deliciosa, receita secreta do Habibs.",
    },
  ],
  restaurants:[
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
      "name": "McDonalds",
      "shipping": 19,
      "description": "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
      "address": "Avenida dos Papagaios, 1350 - Sta. Efigênia",
      "logoUrl": "http://soter.ninja/futureFoods/logos/mcdonalds.png",
      "deliveryTime": 15,
      "category": "Hamburguer"
    },
    {
      "id": "3",
      "description": "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
      "address": "Rua Barão do Rio Branco, 98 - Centro",
      "logoUrl": "http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg",
      "deliveryTime": 20,
      "category": "Italiana",
      "name": "Cantina Mamma Perrotta",
      "shipping": 2
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
      "name": "Outback Steakhouse",
      "shipping": 18,
      "description": "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
      "address": "Alameda dos Marsupiais, 505 - Humaitá",
      "logoUrl": "http://soter.ninja/futureFoods/logos/outback.png",
      "deliveryTime": 20,
      "category": "Carnes"
    },
    {
      "id": "6",
      "description": "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
      "address": "Rua Dorival Caymmi, 149 - Alto dos Ibirás",
      "logoUrl": "http://soter.ninja/futureFoods/logos/sotero.jpg",
      "deliveryTime": 40,
      "category": "Baiana",
      "name": "Sotero Cozinha Original",
      "shipping": 4
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
      "description": "Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos.",
      "address": "Largo dos Jaguarés, 12 - Nova Bragança",
      "logoUrl": "http://soter.ninja/futureFoods/logos/mexicanissimo.png",
      "deliveryTime": 20,
      "category": "Mexicana",
      "name": "Mexicaníssimo",
      "shipping": 3
    }
  ],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const newProduct = action.product;

      const productIndex = state.cart.findIndex((product) => {
        return product.id === newProduct.id;
      });

      let newCart;
      if (productIndex === -1) {
        newCart = [...state.cart, { ...newProduct, quantity: 1 }];
      } else {
        newCart = state.cart.map((product, index) => {
          if (index === productIndex) {
            return { ...product, quantity: product.quantity + 1 };
          }
        });
      }
      return { products: state.products.push(newCart) };
    case "REMOVE":
      return { products: state.products.filter() };

    default:
      return state;
  }
}
