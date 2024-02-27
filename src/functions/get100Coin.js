import axios from "axios";

export const get100Coin = () => {
  const myCoins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((res) => {
      return res.data;
    })
    .catch((errro) => {
      console.log(errro);
    });
  return myCoins;
};
