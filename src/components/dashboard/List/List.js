import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <td className="td-image">
          <img src={coin.image} alt="img" className="logo" />
        </td>
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <td className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className=" icon-chip icon-red-chip td-icon">
              <TrendingDownRoundedIcon />
            </td>
          </td>
        )}
        <td>
          <Tooltip title="Current Price">
            <h3
              className="coin-price  td-centre-align"
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ₹{coin.current_price.toLocaleString()}
            </h3>
          </Tooltip>
        </td>
        <Tooltip title="market-cap">
          <td>
            <p className="market-cap td-right-align">
              ₹{coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="market volume ">
          <td>
            <p className="total-volume td-right-align td-total-volume1">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
};

export default List;
