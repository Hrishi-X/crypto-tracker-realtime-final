/* eslint-disable no-unreachable */
import React, { useState } from "react";
import "./styles.css";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import GridPage from "../Grid/Grid";
import List from "../List/List";
import { motion } from "framer-motion";

const listvariant = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
  hidden: {
    opacity: 0,
    x: -200,
  },
};
const gridvariant = {
  visible: (i) => ({
    opacity: 1,

    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
  hidden: {
    opacity: 0,
    y: 200,
  },
};

export default function TabsComponent({ coin }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 300,
    fontFamily: "Exo 2",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="List" sx={style} />
        </TabList>

        <TabPanel value="Grid">
          <div className="grid-flex">
            {coin.map((coin, i) => {
              return (
                <>
                  <motion.div
                    variants={gridvariant}
                    animate="visible"
                    initial="hidden"
                    key={i}
                    custom={i}
                    // viewport={{ once: true }}
                  >
                    <GridPage coin={coin} key={i} />
                  </motion.div>
                </>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          {" "}
          <div>
            <table className="list-table">
              {coin.map((coin, i) => {
                return (
                  <>
                    <motion.div
                      className="list-motion"
                      variants={listvariant}
                      whileInView="visible"
                      initial="hidden"
                      key={i}
                      custom={i}
                      viewport={{ once: true }}
                    >
                      {" "}
                      <List key={i} coin={coin}></List>
                    </motion.div>
                  </>
                );
              })}
            </table>
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
