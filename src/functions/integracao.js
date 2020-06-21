import axios from "axios";

let baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

let token = window.localStorage.getItem("token");

const buscaRestaurantes = (restaurantes) => ({
  type: "PEGA_RESTAURANTES",
  restaurants: restaurantes,
});

const buscaProdutos = (produtos) => ({
  type: "PEGA_PRODUTOS",
  products: produtos,
});

const buscaEndereco = (endereco) => ({
  type: "PEGA_ENDERECO",
  endereco: endereco,
});

export const pegaRestaurantes = async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants`, {
      headers: {
        auth: token,
      },
    });
    dispatch(buscaRestaurantes(response.data.restaurants));
  } catch (err) {
    console.log(err);
  }
};

export const pegaProdutos = async (id, dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants/${id}`, {
      headers: {
        auth: token,
      },
    });
    dispatch(buscaProdutos(response.data.restaurant));
  } catch (err) {
    console.log(err);
  }
};

export const pegaEndereço = async () => {
  const response = await axios.get(`${baseUrl}/profile/address`, {
    headers: {
      auth: token,
    },
  });
  return response.data.address;
};

export const getProfile = async () => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/profile`, {
    headers: {
      auth: token,
    },
  });

  return response.data.user;
};

export const upDateProfile = (form) => {
  const token = window.localStorage.getItem("token");

  const body = form;

  axios
    .put(`${baseUrl}/profile`, body, {
      headers: { "Content-Type": "application/json", auth: token },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));
};

export const upDateAddress = (form) => {
  const token = window.localStorage.getItem("token");

  const body = form;
  axios
    .put(`${baseUrl}/address`, body, {
      headers: { auth: token },
    })
    .then((res) => window.localStorage.setItem("token", res.data.token));

  window.alert("Cadastro atualizado com sucesso");
};

export const login = (body, history) => {
  axios
    .post(
      "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/login",
      body
    )
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      history.replace("/home");
    });
};

export const registro = (body, history) => {
  axios
    .post(
      "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/signup",
      body
    )
    .then((response) => {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      history.push("/cadastro-endereco");
    })
    .catch((error) => {
      console.log(error.response);
      alert("erro dados invalidos");
    });
};
