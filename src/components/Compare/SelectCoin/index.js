import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.css";
import { useEffect, useState } from "react";
import { get100Coin } from "../../../functions/get100Coin";

export default function SelectCoin({ crypto1, crypto2, handleCoinChange }) {
  const [allcoins, setallcoins] = useState([]);
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coin();
    setallcoins(myCoins);
  }

  return (
    <div className="coin-flex">
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(e) => handleCoinChange(e, false)}
      >
        {allcoins.map((item, i) => (
          <MenuItem key={i} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allcoins.map((item, i) => (
          <MenuItem key={i} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
