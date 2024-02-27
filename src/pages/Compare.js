import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/coin/SelectDays";

import List from "../components/dashboard/List/List";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { coinObject } from "../functions/convertObject";
import { setttingChartData } from "../functions/setChartData";

import Loader from "../components/common/Loader";
import GridPage from "../components/dashboard/Grid/Grid";

const ComparePage = () => {
  // const [crypto1, setcrypto1] = useState("bitcoin");
  // const [crypto2, setcrypto2] = useState("ethereum");
  // const [crypto1Data, setcrypto1Data] = useState([]);
  // const [crypto2Data, setcrypto2Data] = useState([]);

  // const [days, setdays] = useState(30);
  const [isloading, setisloading] = useState(false);

  // function handleDaysChange(e) {
  //   setdays(e.target.value);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log(crypto1Data);

  // const getData = async () => {
  //   setisloading(true);
  //   const data1 = await getCoinData(crypto1);

  //   if (data1) {
  //     coinObject(setcrypto1Data, data1);
  //     const data2 = await getCoinData(crypto2);

  //     if (data2) {
  //       coinObject(setcrypto2Data, data2);
  //       const prices1 = await getCoinPrices(crypto1, days);
  //       const prices2 = await getCoinPrices(crypto2, days);
  //     }
  //   }
  //   setisloading(false);
  // };

  // const handleCoinChange = async (e, isCoin2) => {
  //   setisloading(true);
  //   if (isCoin2) {
  //     const newsetcrypto2 = e.target.value;
  //     setcrypto2(newsetcrypto2);

  //     const data2 = await getCoinData(newsetcrypto2);

  //     coinObject(data2, setcrypto2Data);
  //   } else {
  //     const newsetcrypto1 = e.target.value;
  //     setcrypto1(newsetcrypto1);
  //     const data1 = await getCoinData(newsetcrypto1);

  //     coinObject(data1, setcrypto1Data);
  //   }
  //   const price1 = await getCoinPrices(crypto1, days);
  //   const price2 = await getCoinPrices(crypto2, days);
  // };

  return (
    <div>
      <Header />
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="">
            <img className="image-compare" src="work.png"></img>
          </div>
          {/* <GridPage coin={crypto1Data} /> */}
        </>
      )}
    </div>
  );
};

export default ComparePage;
