import React, { useState } from "react";
import "./styles.css";

const CoinInfo = ({ name, desc }) => {
  const [flag, setflag] = useState(false);
  const shortdesc =
    desc.slice(0, 300) +
    "<span style='color:var(--blue)'>   Read More...</span>";
  const moredesc =
    desc + "<span style='color:var(--blue)'>    Read Less...</span>";
  return (
    <div className="grey-wrapper">
      <h2 className="name">{name}</h2>
      {desc.length > 290 ? (
        <p
          className="desc"
          onClick={() => setflag(!flag)}
          dangerouslySetInnerHTML={{ __html: !flag ? shortdesc : moredesc }}
        ></p>
      ) : (
        <p className="desc" dangerouslySetInnerHTML={{ __html: desc }}></p>
      )}
    </div>
  );
};

export default CoinInfo;
