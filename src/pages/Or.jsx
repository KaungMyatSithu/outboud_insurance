import { faCircleCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./or.css";
import Payment from "./Payment";

const Or = () => {
  const navigate = useNavigate()
  const [color ,setColor]= useState(null)
  const [color2 , setColor2] = useState(null)
  function changecolor(){
    setColor(i=>!i)
  }
  function changecolor2(){
    setColor2(i=>!i)
  }
  return (
    <div className="or_container">
      <div className="or_spacing">
        <h2>OUTBOUND TRAVEL ACCIDENT INSURANCE</h2>
        <div className="or_bloc">
          <button className={`or_btn ${color && "or_btn--hover"}`} onMouseEnter={changecolor} onMouseLeave={changecolor} onClick={()=>navigate('/form/mmk')}>
            <div className="orbtn_icon">
              <p className={`icon_center ${color && "icon_center--hover"}`}>MMK</p>
              <FontAwesomeIcon icon={faCircleCheck} className={`icon_check ${color && "icon_check--hover"}`} />
            </div>
            <p>မြန်မာကျပ်ငွေဖြင့် ပေးသွင်းရန်</p>
          </button>
          <button className={`or_btn ${color2 && "or_btn--hover"}`} onMouseEnter={changecolor2} onMouseLeave={changecolor2} onClick={()=>navigate('/form/usd')}>
            <div className="orbtn_icon">
              <FontAwesomeIcon icon={faDollarSign} className={`icon_center icon_center--fontawesome ${color2 && "icon_center--hover"}`} />
              <FontAwesomeIcon icon={faCircleCheck} className={`icon_check ${color2 && "icon_check--hover"}`} />
            </div>
            <p>USD ဖြင့် ပေးသွင်းရန်</p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Or;
