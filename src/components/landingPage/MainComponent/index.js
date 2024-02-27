import React from "react";
import "./styles.css";
import Button from "../../common/Button";

import phone2 from "../../../assets/etherum.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const imageVarient = {
  hidden: {
    y: -8,
  },
  visible: {
    y: 10,

    transition: {
      duration: 2,
      type: "smooth",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="track-crypto-heading"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="real-time-heading"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
          className="info-text"
        >
          Track cypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <div className="btn-flex">
          <Link to={"/dashboard"}>
            <Button text={"Dashboard"} />
          </Link>

          <Button text={"Share"} outlined={true} />
        </div>
      </div>
      <div className="Right-container">
        <motion.img
          variants={imageVarient}
          initial="hidden"
          animate="visible"
          className="image"
          src={phone2}
          alt="png"
        ></motion.img>
      </div>
    </div>
  );
};

export default MainComponent;
