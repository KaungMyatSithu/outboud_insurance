import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

const TableMmk = ({props}) => {
  const navigate = useNavigate()
  const [data, setData] = useState([
    {
      id: 1,
      days: 5,
      young: "21,000",
      middle: "36,000",
      old: "48,000",
      elder: "60,000",
    },
  ]);
  return (
    <div className="table">
        <h3 className="table_topic"> ( MMK {props} )</h3>
      <div className="table_header">
        <div className="days_header centering">
          <p>Up To</p>
        </div>
        <div className="ages">
          <div className="ages_header centering">
            <p>Total Premium (MMK)</p>
          </div>
          <div className="ages_interval">
            <div className="interval centering">
              <p>1 – 50</p>
            </div>
            <div className="interval centering">
              <p>51 – 60</p>
            </div>
            <div className="interval centering">
              <p>61 – 75</p>
            </div>
            <div className="interval centering last">
              <p>75 above</p>
            </div>
          </div>
        </div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="premium_list">
          <div className="days centering"><p>{item.days}</p></div>
          <div className="days centering"><p>Days</p></div>
          <div className="ages_interval">
            <div className="interval interval--data centering"><p>{item.young}</p></div>
            <div className="interval interval--data centering"><p>{item.middle}</p></div>
            <div className="interval interval--data centering"><p>{item.old}</p></div>
            <div className="interval interval--data centering last"><p>{item.elder}</p></div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default TableMmk;
