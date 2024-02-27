import axios from "axios";

export const getCoinPrices = (id, days) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`
    )
    .then((res) => {
      // console.log(res.data.prices);
      return res.data.prices;
    })
    .catch((error) => console.log(error));
  return prices;
};
