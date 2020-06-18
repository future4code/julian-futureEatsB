export const initialState = {
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
