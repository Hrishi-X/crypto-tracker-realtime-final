import axios from "axios";

export const getCoinData = (id) => {
  const coinData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((errro) => console.log(errro));
  return coinData;
};
