import axios from "axios";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  return axios.get(baseURL).then((response) => {
    return response.data;
  });
};

export default { getAll };
