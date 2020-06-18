import axios from "axios";

export const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

export const getProducts = async (restaurantID) => {
  const response = await axios.get(`${baseUrl}/restaurants/${restaurantID}`, {
    headers: {
      auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVYSnBGMFNhWTB2ZFVMaGZpdHdUIiwibmFtZSI6IlJpY2siLCJlbWFpbCI6InJpY2tAc2FuY2hlcy5jb20iLCJjcGYiOiI4ODguODg4Ljg4OC04OCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgZG9zIGJvYnMsIDAsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTU5MjQwNDA1OX0.pfpNOxkrlezfhYKUYcZHR6M8zV637CjwDSAwrIbtT8k",
    },
  });
  return response.data.restaurant.products;
};

export const getRestaurant = async (restID) => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/restaurants/${restID}`, {
    headers: {
      auth: token,
    },
  });

  return response.data;
};

export const getRestaurants = () => {
  const token = window.localStorage.getItem("token");

  const response = axios.get(`${baseUrl}/restaurants`, {
    headers: { auth: token },
  });
  return response;
};
