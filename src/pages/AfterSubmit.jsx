import React, { useEffect, useState } from "react";
import "./aftersubmit.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AfterSubmit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [res, setRes] = useState();
  const [items, setItem] = useState({});
  const [returndata, setReturnData] = useState({});
  useEffect(() => {
    if (location?.state) {
      setItem(location.state);
    }
  }, [location]);

  function posting() {
    let { payment, ...item } = items;

    axios
      .post("http://localhost:8080/api/v1/outboundProposal", item)
      .then((res) => {
        setRes(res.status);
        setReturnData(res.data.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (res === 201) {
      navigate("/success", {
        state: {
          returndata,
          payment: items.payment,
          currency: items.rate + 120 + " " + items.currency,
        },
      });
    }
  }, [res]);

  return (
    <div className="confirm_container">
      <div className="confirm_form">
        <div className="inline_form">
          <h2>Please Check Payment and Insured Person Information</h2>
          {/* payment */}
          <div className="payment">
            <p className="titles"> Payment Information</p>
            <div className="infomration_bloc">
              <div className="information_card">
                <p className="information_name"> Payment Channel</p>
                <p className="information_detail"> {items.payment} </p>
              </div>
              <div className="information_card">
                <p className="information_name">Premium Amount</p>
                <p className="information_detail">
                  {" "}
                  {items.rate} {items.currency}
                </p>
              </div>
              <div className="information_card">
                <p className="information_name">Service Charge ( Visa )</p>
                <p className="information_detail"> 120 {items.currency} </p>
              </div>
              <div className="information_card">
                <p className="information_name">
                  Total Amount (Including Service Charges)
                </p>
                <p className="information_detail">
                  {" "}
                  {items.rate + 120} {items.currency}{" "}
                </p>
              </div>
              <div className="information_card">
                <p className="information_name">
                  Net Amount (Including Service Charges)
                </p>
                <p className="information_detail">
                  {" "}
                  {items.rate + 120} {items.currency}
                </p>
              </div>
            </div>
          </div>
          {/* passport */}
          <div className="passport">
            <p className="titles"> Insured Person's Passport Information</p>
            <div className="infomration_bloc">
              <div className="information_card information_card--normal">
                <p className="information_name">
                  {" "}
                  Passport Number
                  <br /> နိုင်ငံကူးလက်မှတ်အမှတ်
                </p>
                <p className="information_detail"> {items.passportNumber}</p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Passport Issued Date
                  <br /> နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နေ့
                </p>
                <p className="information_detail">
                  {items.passportIssuedDate && items.passportIssuedDate}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Passport Issued Country <br />
                  နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နိုင်ငံ
                </p>
                <p className="information_detail">
                  {items.passportIssueCountry}
                </p>
              </div>
            </div>
          </div>
          {/* person */}
          <div className="person">
            <p className="titles">Insured Person Information</p>
            <div className="infomration_bloc">
              <div className="information_card information_card--normal">
                <p className="information_name">Insured For</p>
                <p className="information_detail">
                  {" "}
                  {items.isChild
                    ? "Buy For This Passport Holder's Child"
                    : "Buy For This Passport Holder"}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Name (as per passport) <br />
                  အမည်(နိုင်ငံကူးလက်မှတ်ပါအမည်)
                </p>
                <p className="information_detail"> {items.insuredName}</p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Date of Birth (as per passport) <br />
                  မွေးသက္ကရာဇ်(နိုင်ငံကူးလက်မှတ်ပါမွေးသက္ကရာဇ်)
                </p>
                <p className="information_detail">
                  {" "}
                  {items.insuredDOB && items.insuredDOB}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Gender (as per passport) <br />
                  ကျား/မ(နိုင်ငံကူးလက်မှတ်ပါ)
                </p>
                <p className="information_detail">{items.insuredGender}</p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Estimate Departure Date
                  <br /> ထွက်ခွာမည့်နေ့(ခန့်မှန်းခြေ)
                </p>
                <p className="information_detail">
                  {items.estimateDepartureDate && items.estimateDepartureDate}{" "}
                </p>
              </div>
              {items.childName && (
                <div className="information_card information_card--normal">
                  <p className="information_name">
                    Child Name
                    <br />
                    ကလေးအမည်
                  </p>
                  <p className="information_detail">{items.childName}</p>
                </div>
              )}
              {items.childDOB && (
                <div className="information_card information_card--normal">
                  <p className="information_name">
                    Date of Birth (Child)
                    <br />
                    မွေးသက္ကရာဇ်
                  </p>
                  <p className="information_detail">{items.childDOB}</p>
                </div>
              )}
              {items.childGender && (
                <div className="information_card information_card--normal">
                  <p className="information_name">
                    Gender (Child)
                    <br />
                    ကျား/မ
                  </p>
                  <p className="information_detail">{items.childGender}</p>
                </div>
              )}
              {items.guardianceName && (
                <div className="information_card information_card--normal">
                  <p className="information_name">
                    Guardiance Name (Child)
                    <br />
                    အုပ်ထိန်းသူအမည်
                  </p>
                  <p className="information_detail">{items.guardianceName}</p>
                </div>
              )}
              {items.childRelationship && (
                <div className="information_card information_card--normal">
                  <p className="information_name">
                    Relationship (Child)
                    <br />
                    တော်စပ်ပုံ
                  </p>
                  <p className="information_detail">
                    {items.childRelationship}
                  </p>
                </div>
              )}

              <div className="information_card information_card--normal">
                <p className="information_name">
                  Journey From
                  <br /> ထွက်ခွာမည့်နိုင်ငံ
                </p>
                <p className="information_detail">{items.journeyFrom}</p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Journey To <br />
                  ဆိုက်ရောက်မည့်နိုင်ငံ
                </p>
                <p className="information_detail"> {items.journeyTo} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Coverage Plan
                  <br /> အာမခံသက်တမ်း
                </p>
                <p className="information_detail"> {items.coveragePlan}</p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Packages <br />
                  ပက်ကေ့ချ်
                </p>
                <p className="information_detail">{items.packages} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Policy Start Date
                  <br /> ပေါ်လစီစတင်မည့်နေ့
                </p>
                <p className="information_detail">
                  {" "}
                  {items.policyStartDate && items.policyStartDate}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Contact Phone Number <br />
                  ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်
                </p>
                <p className="information_detail">
                  {items.insuredPhoneNumber}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Foreign Contact Number <br />
                  ဆက်သွယ်ရမည့်နိုင်ငံခြားဖုန်းနံပါတ်
                </p>
                <p className="information_detail">
                  {" "}
                  {items.foreignContactNumber}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Father's Name
                  <br /> ဖခင်အမည်
                </p>
                <p className="information_detail"> {items.fatherName} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Race <br />
                  လူမျိုး
                </p>
                <p className="information_detail"> {items.race} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Occupation
                  <br /> အလုပ်အကိုင်
                </p>
                <p className="information_detail"> {items.occupation} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Marital Status <br />
                  အိမ်ထောင်ရှိ/မရှိ
                </p>
                <p className="information_detail"> {items.maritalStatus} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Insured's Email Address
                  <br /> အီးမေးလ်လိပ်စာ
                </p>
                <p className="information_detail"> {items.insuredEmail} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Address Abroad <br />
                  ဆိုက်ရောက်မည့်နိုင်ငံနေရပ်လိပ်စာ
                </p>
                <p className="information_detail">
                  {" "}
                  {items.insuredAddressAboard}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Destination Country <br />
                  ဆိုက်ရောက်မည့်နိုင်ငံ
                </p>
                <p className="information_detail"> {items.journeyTo} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Address in Myanmar
                  <br /> မြန်မာနိုင်ငံရှိနေရပ်လိပ်စာ
                </p>
                <p className="information_detail"> {items.insuredAddress} </p>
              </div>
            </div>
          </div>
          {/* beneficiary */}
          <div className="payment">
            <p className="titles">
              Beneficiary Information / အကျိုးခံစားခွင့်ရှိသူနှင့် သက်ဆိုင်သော
              အချက်အလက်
            </p>
            <div className="infomration_bloc">
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Name <br />
                  အမည်
                </p>
                <p className="information_detail"> {items.beneficiaryName} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Date of Birth
                  <br /> မွေးသက္ကရာဇ်
                </p>
                <p className="information_detail">
                  {" "}
                  {items.beneficiaryDOB && items.beneficiaryDOB}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Relationship <br />
                  တော်စပ်ပုံ
                </p>
                <p className="information_detail">
                  {" "}
                  {items.beneficiaryRelationship}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  National Identification Number
                  <br /> နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်
                </p>
                <p className="information_detail"> {items.beneficiaryNRC} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Contact Phone Number <br />
                  ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်
                </p>
                <p className="information_detail">
                  {" "}
                  {items.beneficiaryPhoneNumber}{" "}
                </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Email
                  <br /> အီးမေးလ်လိပ်စာ
                </p>
                <p className="information_detail"> {items.beneficiaryEmail} </p>
              </div>
              <div className="information_card information_card--normal">
                <p className="information_name">
                  Address
                  <br /> နေရပ်လိပ်စာ
                </p>
                <p className="information_detail"> {items.insuredAddress} </p>
              </div>
            </div>
          </div>
          {/* button */}
          <button className="confirm_btn" onClick={posting}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterSubmit;
