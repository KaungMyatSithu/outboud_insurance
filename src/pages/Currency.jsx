import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TableMmk from "../components/TableMmk";
import "./currency.css";

const Currency = () => {
  const location = useLocation()
  const [,first,second]= location.pathname.split("/")
  return (
    <div className="container">
      <div className="topic">
        <h2>ပြည်ပခရီးသွားအာမခံပေါ်လစီ</h2>
        <h3>ရည်ရွယ်ချက်</h3>
        <p>
          ပြည်ပသို့ ပညာသင်သွားရောက်မည့်သူများ၊ Business trip
          သွားရောက်မည့်သူများ၊ အလုပ်သွားရောက်လုပ်ကိုင်မည့်သူများနှင့်
          အကြောင်းအမျိုးမျိုးကြောင့် ပြည်ပသို့ သွားရောက်မည့်သူများအတွက်
          ပြည်ပတွင် ရောက်ရှိနေထိုင်စဥ် Covid-19 ရောဂါ ကူးစက်ခံရခြင်းနှင့်
          မတော်တဆထိခိုက်မှုများအတွက် ဆေးဝါးကုသစရိတ်ရရှိစေရန်။
        </p>
      </div>
      <div className="about">
        <div className="about_col">
          <p className="about_title">အာမခံထားရှိနိုင်သည့် အသက်အရွယ်</p>
          <p className="about_description">အသက် (၁) နှစ်မှ စတင်၍ ဝယ်ယူနိုင်ပါသည်။</p>
        </div>
        <div className="about_col">
          <p className="about_title">အာမခံသက်တမ်း</p>
          <p className="about_description">အနည်းဆုံး(၅)ရက်မှ အများဆုံးရက်ပေါင်း (၁၈၀)အထိ ထားရှိနိုင်ပါသည်။</p>
        </div>
        <div className="about_col">
          <p className="about_title">အာမခံထားရှိရန် လိုအပ်ချက်များ</p>
          <p className="about_description">	အဆိုလွှာ</p>
        </div>
      </div>
      <div className="premium">
        <h2>ပရီမီယံနှုန်းထားဇယား (Premium Rates)</h2>
        
      </div>
      <TableMmk props={"30,000,000"}/>
    </div>
  );
};

export default Currency;
