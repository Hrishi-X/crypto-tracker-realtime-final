import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/dashboard/Tabs";
import axios, { Axios } from "axios";

import Search from "../components/dashboard/Search";

import PaginationComponent from "../components/dashboard/pagination";
import Loader from "../components/common/Loader";
import { get100Coin } from "../functions/get100Coin";

const DashboardPage = () => {
  const [coin, setcoin] = useState([]);
  const [search, setsearch] = useState("");
  const [islaoding, setislaoding] = useState(true);

  const [paginatorcoin, setpaginatorcoin] = useState([]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setpaginatorcoin(coin.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setsearch(e.target.value);
  };

  var filteredCoines = coin.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coin();
    if (myCoins) {
      setcoin(myCoins);
      setpaginatorcoin(myCoins.slice(0, 10));
      setislaoding(false);
    }
  };

  return (
    <>
      <Header />
      {islaoding ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coin={search ? filteredCoines : paginatorcoin} />
          {!search && (
            <PaginationComponent page={page} handleChange={handleChange} />
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
