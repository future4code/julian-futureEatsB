import axios from "axios";

let baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";
let token = window.localStorage.getItem("token")

export const getProducts = async (restaurantID) => {
  const response = await axios.get(`${baseUrl}/restaurants/${restaurantID}`, {
    headers: {
      auth: token,
    },
  });
  return response.data.restaurant.products;
};

export const getRestaurant = async (restID) => {
  const response = await axios.get(`${baseUrl}/restaurants/${restID}`, {
    headers: {
      auth: token,
    },
  });

  return response.data;
};

export const getRestaurants = async () => {
  const response = await axios.get(`${baseUrl}/restaurants`, {
    headers: { auth: token },
  });
  return response;
};

export const pegaEndereço = async () => {
  const response = await axios.get(`${baseUrl}/profile/address`, {
    headers: {
      auth: token,
    },
  });

  return response.data.address;
};
