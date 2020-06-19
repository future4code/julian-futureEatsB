export const initialState = {
  mostraAlertAndamento: false, 
  enderecoUser: [
    {
        "city": "São Paulo",
        "complement": "71",
        "state": "SP",
        "street": "R. Afonso Braz",
        "neighbourhood": "Vila N. Conceição",
        "number": "177"
    }
  ], 
  cart: [{
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
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 52.7,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201802031948_20717381.jpg",
          "name": "Tempura udon"
        },
        {
          "id": "RW5889cojiwCiKP9Cgg6",
          "name": "Makimono de Tadashii - exclusivo",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 33.2,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/51fed2ca-70a6-4069-a203-65536c856035/201801251540_20719141.jpg"
        },
        {
          "id": "Wbx5rE17JBrN6JKl4rom",
          "category": "Bebida",
          "description": "Coca cola, Sprite ou Guaraná",
          "price": 8.9,
          "photoUrl": "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
          "name": "Refrigerante"
        },
        {
          "id": "ccTdZpsoCbxh90LFxsuH",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 42,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201801251514_20719052.jpg",
          "name": "Sushi shake"
        },
        {
          "id": "fQ16fZ8VSqqG2MjnFT7P",
          "name": "Cebiche",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 20.6,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201801251504_22825725.jpg"
        },
        {
          "id": "l2aGb6bp61caEFNJvIgA",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 59,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201801251435_20717398.jpg",
          "name": "Yakissakana de peixe branco"
        },
        {
          "id": "qCaXkPs59h7RLAQ24xGM",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 32,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201803012003_20717339.jpg",
          "name": "Ikafurai"
        },
        {
          "id": "wXuD6SEukP3Rrw9zGLU6",
          "name": "Urakami maguro",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 26,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201801260945_20719106.jpg"
        },
        {
          "id": "zgKDJFbJDi8YRm4nm9Nj",
          "name": "Sushi shiromi",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 22.8,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201801251512_20719050.jpg"
        }
      ],
      "id": "10",
      "name": "Tadashii",
      "shipping": 13,
      "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
      "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
      "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
      "deliveryTime": 50,
      "category": "Asiática"
    }}
  ],
  products: [],
  restaurants:[],
};

export const CardReducer = (state, action) => {
  switch (action.type) {
    case 'PEGA_RESTAURANTES':
      const listaDeRestaurantes = action.restaurants
      return { ...state, restaurants: listaDeRestaurantes };
    
    case 'PEGA_PRODUTOS':
      const listaDeProdutos = action.products
      return { ...state, products: listaDeProdutos };

    case 'PEGA_ENDERECO':
      const endereco = action.endereco
      return { ...state, enderecoUser: endereco };
    
    default:
      return state;
  }
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
