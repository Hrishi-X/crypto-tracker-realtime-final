import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import { FlatTree } from "framer-motion";
import Loader from "../components/common/Loader";
import List from "../components/dashboard/List/List";
import { coinObject } from "../functions/convertObject";
import CoinInfo from "../components/coin/coinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/coin/LineChart";
import { convertDate } from "../functions/convertdate";
import SelectDays from "../components/coin/SelectDays";
import { setttingChartData } from "../functions/setChartData";

const CoinPage = () => {
  const { id } = useParams();

  // console.log(id);
  const [isloading, setisloading] = useState(true);
  const [coinData, setcoinData] = useState([]);

  const [chartData, setchartData] = useState({});
  const [days, setdays] = useState(7);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);

    if (data) {
      coinObject(setcoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        setttingChartData(setchartData, prices);
        setisloading(false);
      }
    }
  }
  const handleDaysChange = async (event) => {
    setisloading(true);
    setdays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value);
    if (prices.length > 0) {
      setttingChartData(setchartData, prices);

      setisloading(false);
    }
  };

  return (
    <div>
      <Header />
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div
            className="grey-wrapper"
            style={
              {
                // padding: "1rem , 1rem",
              }
            }
          >
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo name={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
