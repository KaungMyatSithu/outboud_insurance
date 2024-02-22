import React, { useEffect, useRef, useState } from "react";
import "./form.css";
import Field from "./Field";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Agent from "../components/Agent";
import Associative from "../components/Associative";
import self from "../img/self.png";
import asso from "../img/agent.png";
import { useLocation, useNavigate } from "react-router-dom";

import personal from "../img/agent1.png";
import Email from "./Email";
import axios from "axios";

import ComboWithSearch from "../components/ComboWithSearch";
import Payment from "./Payment";

const Form = ({ closing }) => {
  const [userclick, setUserClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [, i, l] = location.pathname.split("/");
  const [showpayment, setShowPayment] = useState(null);
  const [temp, setTemp] = useState({});

  //just random bullshits
  const [option, setOption] = useState("self");
  const [passportDate, setPassportDate] = useState();
  const [birthDate, setBirthDate] = useState();
  const [departureDate, setDepartureDate] = useState();
  const [policyDate, setPolicyDate] = useState();
  const [benebirthDate, setBeneBirthDate] = useState();
  const [selectedvalue, setSelectedValue] = useState("self");
  const [alert, setAlert] = useState();
  const [isChild, setIsChild] = useState(false);
  const [childdate, setChildDate] = useState();
  const [agentdata, setAgentData] = useState({
    license: "",
    date: "",
    password: "",
    name: "",
  });
  const [countrydata, setCountryData] = useState([]);

  // collecting datas
  const [passportNum, setPassportNum] = useState("");
  const [passportCountry, setPassportCountry] = useState("");
  const [insuredName, setInsuredName] = useState("");
  const [gender, setGender] = useState("");
  const [journeyto, setJourneyTo] = useState("");
  const [coveragePlan, setCoveragePlan] = useState("");
  const [packages, setPackages] = useState("");
  const [insuredPh, setInsuredPh] = useState("");
  const [insuredPhNumber, setInsuredPhNumber] = useState("");
  const [foreignPh, setForeignPh] = useState("");
  const [foreignPhNumber, setForeignPhNumber] = useState("");
  const [father, setFather] = useState("");
  const [insuredrace, setInsuredRace] = useState("");
  const [occupation, setOccupation] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("SINGLE");
  const [email, setEmail] = useState("");
  const [mmaddress, setMmAddress] = useState("");
  const [foreignaddress, setForeignAddress] = useState("");
  const [beneficiaryname, setBeneficiaryName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [beneficiaryPh, setBeneficiaryPh] = useState("");
  const [beneficiaryPhNumber, setBeneficiaryPhNumber] = useState("");
  const [nationalNum, setNationalNum] = useState("");
  const [beneficiaryemail, setBeneficiaryEmail] = useState("");
  const [beneficiaryaddress, setBeneficiaryAddress] = useState("");
  const [childname, setChildName] = useState("");
  const [childgender, setChildGender] = useState("");
  const [childguardian, setChildGuardian] = useState("");
  const [childrelation, setChildrelation] = useState("");
  const [editagent, setEditAgent] = useState({});

  //functional
  useEffect(() => {
    if (selectedvalue == "personal") {
      setAlert(selectedvalue);
    }
    if (selectedvalue == "associative") {
      setAlert(selectedvalue);
    }
  }, [selectedvalue]);
  function item(value) {
    setAgentData({
      id: value.id,
      license: value.agentLicense,
      date: value.agentDOB,
      password: value.agentPassword,
      name: value.agentName,
    });
  }
  function selectingchild(e) {
    setOption(e.target.id);
    if (e.target.id == "child") {
      setIsChild(true);
    }
  }
  function submitHandler() {
    setUserClick(true);
    axios
      .get(
        `http://localhost:8080/api/v1/premiumRate?age=${formatDate(
          birthDate
        )}&days=${coveragePlan}&packages=${packages}&isChild=${isChild}`
      )
      .then((res) => {
        if (
          policyDate &&
          birthDate &&
          departureDate &&
          passportDate &&
          benebirthDate &&
          selectedvalue &&
          passportNum &&
          passportCountry &&
          insuredName &&
          gender &&
          journeyto &&
          coveragePlan &&
          packages &&
          insuredPh &&
          insuredPhNumber &&
          foreignaddress &&
          beneficiaryname &&
          relationship &&
          beneficiaryPhNumber &&
          beneficiaryPh &&
          !childname &&
          !childdate &&
          !childgender &&
          !childguardian &&
          !childrelation
        ) {
          setShowPayment(true);

          setTemp({
            passportNumber: passportNum,
            passportIssuedDate: formatDate(passportDate),
            passportIssueCountry: passportCountry,
            insuredName: insuredName,
            insuredDOB: formatDate(birthDate),
            insuredGender: gender,
            estimateDepartureDate: formatDate(departureDate),
            journeyFrom: "MYANMAR",
            journeyTo: journeyto,
            policyStartDate: formatDate(policyDate),
            coveragePlan: coveragePlan,
            packages: packages,
            insuredPhoneNumber: insuredPh + insuredPhNumber,
            foreignContactNumber: foreignPh + foreignPhNumber,
            fatherName: father,
            race: insuredrace,
            occupation: occupation,
            maritalStatus: maritalstatus,
            insuredEmail: email,
            insuredAddress: mmaddress,
            insuredAddressAboard: foreignaddress,
            beneficiaryName: beneficiaryname,
            beneficiaryDOB: formatDate(benebirthDate),
            beneficiaryRelationship: relationship,
            beneficiaryPhoneNumber: beneficiaryPh + beneficiaryPhNumber,
            beneficiaryNRC: nationalNum,
            beneficiaryEmail: beneficiaryemail,
            beneficiaryAddress: beneficiaryaddress,
            child: false,
            rate: res.data.data,
            agentID: agentdata.id ? agentdata.id : "",
            currency: l == "mmk" ? "MMK" : "USD",
          });
        } else if (
          policyDate &&
          birthDate &&
          departureDate &&
          passportDate &&
          benebirthDate &&
          selectedvalue &&
          passportNum &&
          passportCountry &&
          insuredName &&
          gender &&
          journeyto &&
          coveragePlan &&
          packages &&
          insuredPh &&
          insuredPhNumber &&
          foreignaddress &&
          beneficiaryname &&
          relationship &&
          beneficiaryPhNumber &&
          beneficiaryPh &&
          childname &&
          childdate &&
          childgender &&
          childguardian &&
          childrelation
        ) {
          setTemp({
            passportNumber: passportNum,
            passportIssuedDate: formatDate(passportDate),
            passportIssueCountry: passportCountry,
            insuredName: insuredName,
            insuredDOB: formatDate(birthDate),
            insuredGender: gender,
            estimateDepartureDate: formatDate(departureDate),
            journeyFrom: "MYANMAR",
            journeyTo: journeyto,
            policyStartDate: formatDate(policyDate),
            coveragePlan: coveragePlan,
            packages: packages,
            insuredPhoneNumber: insuredPh + insuredPhNumber,
            foreignContactNumber: foreignPh + foreignPhNumber,
            fatherName: father,
            race: insuredrace,
            occupation: occupation,
            maritalStatus: maritalstatus,
            insuredEmail: email,
            insuredAddress: mmaddress,
            insuredAddressAboard: foreignaddress,
            beneficiaryName: beneficiaryname,
            beneficiaryDOB: formatDate(benebirthDate),
            beneficiaryRelationship: relationship,
            beneficiaryPhoneNumber: beneficiaryPh + beneficiaryPhNumber,
            beneficiaryNRC: nationalNum,
            beneficiaryEmail: beneficiaryemail,
            beneficiaryAddress: beneficiaryaddress,
            childName: childname,
            childDOB: formatDate(childdate),
            childGender: childgender,
            guardianceName: childguardian,
            childRelationship: childrelation,
            child: true,
            agentID: agentdata.id ? agentdata.id : "",
            rate: res.data.data,
            currency: l == "mmk" ? "MMK" : "USD",
          });
          setShowPayment(true);
        }
      })
      .catch((err) => console.error(err));
  }
  function selectedoption(V) {
    if (V.id == "passport") {
      setPassportCountry(V.value);
    } else if (V.id == "journey") {
      setJourneyTo(V.value);
    } else if (V.id == "insuredPh") {
      setInsuredPh(V.value);
    } else if (V.id == "insuredforeignPh") {
      setForeignPh(V.value);
    } else if (V.id == "benePh") {
      setBeneficiaryPh(V.value);
    }
  }
  // fetching country data
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/countries")
      .then((data) => setCountryData(data.data.data))
      .catch((err) => console.error(err));
  }, []);

  //sorting country
  function closing(v) {
    setShowPayment(v);
  }
  useEffect(() => {
    if (countrydata) {
      const sortedCountries = [...countrydata].sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setCountryData(sortedCountries);
    }
  }, []);
  function editAgent() {
    setAlert(selectedvalue);
    setEditAgent({
      userclick: userclick,
      license: agentdata.license,
      date: agentdata.date,
      password: agentdata.password,
      name: agentdata.name,
    });
  }
  const formatDate = (date) => {
    if (!date) return ""; // Return empty string if date is null

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <div className="form">
      <div className="form_container">
        <h2 className="form_topic">
          Outbound Travel Accident Insurance {l == "mmk" ? "(MMK)" : "(USD)"}
        </h2>
        <div className="form_page">
          <div className="passport">
            <p className="titles">PASSPORT INFORMATION (In English)</p>
            <div className="bloc">
              <div className="card">
                <label htmlFor="passportNumber">
                  Passport Number <br />
                  နိုင်ငံကူးလက်မှတ်အမှတ် <span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  placeholder="ENTER YOUR PASSPORT NO."
                  onChange={(e) => setPassportNum(e.target.value)}
                />
                {userclick && !passportNum && <Field />}
              </div>
              <div className="card">
                <label>
                  Passport Issued Date
                  <br /> နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နေ့{" "}
                  <span className="red">*</span>
                </label>
                <DatePicker
                  className="card--grey"
                  placeholderText="DD-MM-YYYY"
                  selected={passportDate}
                  dateFormat="dd-MM-yyyy"
                  onChange={(date) => setPassportDate(date)}
                />
                {userclick && !passportDate && <Field />}
              </div>
              <div className="card">
                <label htmlFor="passportCountry">
                  Passport Issued Country
                  <br /> နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နိုင်ငံ{" "}
                  <span className="red">*</span>
                </label>
                <div className="countrywidth">
                  <ComboWithSearch
                    data={countrydata}
                    option={selectedoption}
                    selection="passport"
                  />
                </div>
                {userclick && !passportCountry && <Field />}
              </div>
            </div>
          </div>

          {/* insured infomation */}

          <div className="insured">
            <p className="titles">Insured Information (In English)</p>
            <div className="persontype">
              <div className="type">
                <input
                  type="radio"
                  id="self"
                  name="options"
                  checked={option == "self"}
                  onChange={(e) => selectingchild(e)}
                />
                <label htmlFor="self">
                  BUY FOR YOURSELF (THIS PASSPORT HOLDER)
                </label>
              </div>
              <div className="type--child">
                <input
                  type="radio"
                  id="child"
                  name="options"
                  checked={option == "child"}
                  onChange={(e) => selectingchild(e)}
                />
                <label htmlFor="child">
                  BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER
                  <br />
                  (CHILD IS NOT HOLDING A VALID PASSPORT)
                </label>
              </div>
            </div>
            <div className="bloc">
              <div className="card">
                <label htmlFor="name">
                  Name (as per passport) <br />
                  အမည်(နိုင်ငံကူးလက်မှတ်ပါအမည်) <span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER ENSURED NAME"
                  onChange={(e) => setInsuredName(e.target.value)}
                />
                {userclick && !insuredName && <Field />}
              </div>
              <div className="card">
                <label>
                  Date of Birth (as per passport)
                  <br /> မွေးသက္ကရာဇ်(နိုင်ငံကူးလက်မှတ်ပါမွေးသက္ကရာဇ်){" "}
                  <span className="red">*</span>
                </label>
                <DatePicker
                  className="card--grey"
                  placeholderText="DD-MM-YYYY"
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                />
                {userclick && !birthDate && <Field />}
              </div>
              <div className="card">
                <label>
                  Gender (as per passport) <br />
                  ကျား/မ(နိုင်ငံကူးလက်မှတ်ပါ) <span className="red">*</span>
                </label>
                <select
                  type="text"
                  onChange={(e) => setGender(e.target.value)}
                  className={`card_select ${gender && "card--selected"}`}
                >
                  <option value="">SELECT ONE</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
                {userclick && !gender && <Field />}
              </div>
              <div className="card">
                <label>
                  Estimate Departure Date
                  <br /> ထွက်ခွာမည့်နေ့(ခန့်မှန်းခြေ){" "}
                  <span className="red">*</span>
                </label>
                <DatePicker
                  className="card--grey"
                  placeholderText="DD-MM-YYYY"
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                />
                {userclick && !departureDate && <Field />}
              </div>
              <div className="card">
                <label htmlFor="passportNumber">
                  Journey From <br />
                  ထွက်ခွာမည့်နိုင်ငံ <span className="red">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={"MYANMAR"}
                  className="card_select card--selected"
                />
              </div>
              <div className="card">
                <label htmlFor="passportNumber">
                  Journey To
                  <br /> ဆိုက်ရောက်မည့်နိုင်ငံ <span className="red">*</span>
                </label>
                <div className="countrywidth">
                  <ComboWithSearch
                    data={countrydata}
                    option={selectedoption}
                    selection="journey"
                  />
                </div>

                {userclick && !journeyto && <Field />}
              </div>
              <div className="card">
                <label>
                  Policy Start Date <br />
                  ပေါ်လစီစတင်မည့်နေ့ <span className="red">*</span>
                </label>
                <DatePicker
                  className="card--grey"
                  placeholderText="DD-MM-YYYY"
                  selected={policyDate}
                  onChange={(date) => setPolicyDate(date)}
                />
                {userclick && !policyDate && <Field />}
              </div>
              <div className="card">
                <label>
                  Coverage Plan <br />
                  အာမခံသက်တမ်း <span className="red">*</span>
                </label>
                <select
                  className={`card_select ${coveragePlan && "card--selected"}`}
                  type="text"
                  onChange={(e) => setCoveragePlan(e.target.value)}
                >
                  <option value="">SELECT ONE</option>
                  <option value="5">5 Days</option>
                  <option value="10">10 Days</option>
                  <option value="15">15 Days</option>
                  <option value="30">30 Days</option>
                  <option value="60">60 Days</option>
                  <option value="90">90 Days</option>
                  <option value="120">120 Days</option>
                  <option value="150">150 Days</option>
                  <option value="180">180 Days</option>
                </select>
                {userclick && !coveragePlan && <Field />}
              </div>
              <div className="card">
                <label>
                  Packages <br />
                  ပက်ကေ့ချ် <span className="red">*</span>
                </label>
                <select
                  type="text"
                  onChange={(e) => setPackages(e.target.value)}
                  className={`card_select ${packages && "card--selected"}`}
                >
                  <option value="">SELECT ONE</option>
                  <option value={l == "mmk" ? "30000000" : "10000"}>
                    {l == "mmk" ? "30,000,000 MMK" : "USD 10,000"}
                  </option>
                  <option value={l == "mmk" ? "90000000" : "30000"}>
                    {l == "mmk" ? "90,000,000 MMK" : "USD 30,000"}
                  </option>
                  <option value={l == "mmk" ? "150000000" : "50000"}>
                    {l == "mmk" ? "150,000,000 MMK" : "USD 50,000"}
                  </option>
                </select>
                {userclick && !packages && <Field />}
              </div>
              <div className="card">
                <label htmlFor="phoneNumber">
                  Insured's Contact Phone Number <br />
                  ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် <span className="red">*</span>
                </label>
                <div className="phone_number">
                  <ComboWithSearch
                    data={countrydata}
                    option={selectedoption}
                    selection="insuredPh"
                  />

                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="ENTER YOUR PHONE NUMBER"
                    onChange={(e) => setInsuredPhNumber(e.target.value)}
                  />
                </div>
                {userclick && !insuredPhNumber && !insuredPh && <Field />}
                {userclick && isNaN(Number(insuredPhNumber)) && (
                  <div className="red">Please enter a valid number.</div>
                )}
              </div>
              <div className="card">
                <label htmlFor="foreigntNumber">
                  Foreign Contact Number
                  <br /> ဆက်သွယ်ရမည့်နိုင်ငံခြားဖုန်းနံပါတ်{" "}
                </label>
                <div className="phone_number">
                  <ComboWithSearch
                    data={countrydata}
                    option={selectedoption}
                    selection="insuredforeignPh"
                  />

                  <input
                    type="text"
                    name="foreignNumber"
                    placeholder="ENTER YOUR PHONE NUMBER"
                    onChange={(e) => setForeignPhNumber(e.target.value)}
                  />
                  {userclick && isNaN(Number(foreignPhNumber)) && (
                    <div className="red">Please enter a valid number.</div>
                  )}
                </div>
              </div>
              <div className="card">
                <label htmlFor="father">
                  Father's Name
                  <br /> ဖခင်အမည်{" "}
                </label>
                <input
                  type="text"
                  name="father"
                  placeholder="ENTER YOUR FATHER NAME"
                  onChange={(e) => setFather(e.target.value)}
                />
              </div>
              <div className="card">
                <label htmlFor="race">
                  Race
                  <br /> လူမျိုး
                </label>
                <input
                  type="text"
                  name="race"
                  placeholder="ENTER YOUR RACE"
                  onChange={(e) => setInsuredRace(e.target.value)}
                />
              </div>
              <div className="card">
                <label htmlFor="job">
                  Occupation
                  <br /> အလုပ်အကိုင်
                </label>
                <input
                  type="text"
                  name="job"
                  placeholder="ENTER YOUR OCCUPATION"
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
              <div className="card">
                <label htmlFor="maritalStatus">
                  Marital Status <br />
                  အိမ်ထောင်ရှိ/မရှိ
                </label>
                <div className="marital">
                  <div className="marital_status">
                    <input
                      type="radio"
                      name="maritalStatus"
                      checked={maritalstatus == "SINGLE"}
                      id="single"
                      value="SINGLE"
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    />
                    <label htmlFor="single">Single</label>
                  </div>
                  <div className="marital_status">
                    <input
                      type="radio"
                      name="maritalStatus"
                      checked={maritalstatus == "MARRIED"}
                      id="married"
                      value="MARRIED"
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    />
                    <label htmlFor="married">Married</label>
                  </div>
                </div>
              </div>
              <div className="card">
                <label htmlFor="email">
                  Insured's Email Address <br />
                  အီးမေးလ်လိပ်စာ
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="ENTER EMAIL ADDRESS"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {userclick && email && !email.endsWith("@gmail.com") && (
                  <Email />
                )}
              </div>
              <div className="card">
                <label htmlFor="mmAddress">
                  Address in Myanmar
                  <br /> မြန်မာနိုင်ငံရှိနေရပ်လိပ်စာ (Max: 250 Char)
                  <span className="red">*</span>
                </label>
                <textarea
                  name="mmAddress"
                  maxLength={300}
                  placeholder="..."
                  onChange={(e) => setMmAddress(e.target.value)}
                />
              </div>
              <div className="card">
                <label htmlFor="foreignAddress">
                  Address Abroad <br />
                  ဆိုက်ရောက်မည့်နိုင်ငံနေရပ်လိပ်စာ (Max: 250 Char)
                  <span className="red">*</span>
                </label>
                <textarea
                  name="foreignAddress"
                  maxLength={300}
                  placeholder="..."
                  onChange={(e) => setForeignAddress(e.target.value)}
                />
                {userclick && !foreignaddress && <Field />}
              </div>
            </div>
          </div>

          {/* child */}

          {option == "child" && (
            <div className="child">
              <p className="titles">
                Child Information (Child is not holding a valid passport)
              </p>
              <div className="bloc">
                <div className="card">
                  <label htmlFor="name">
                    Child Name
                    <br /> ကလေးအမည်
                    <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="ENTER NAME"
                    onChange={(e) => setChildName(e.target.value)}
                  />
                  {userclick && !childname && <Field />}
                </div>
                <div className="card">
                  <label htmlFor="passportNumber">
                    Date of Birth
                    <br /> မွေးသက္ကရာဇ်
                    <span className="red">*</span>
                  </label>
                  <DatePicker
                    className="card--grey"
                    placeholderText="DD-MM-YYYY"
                    selected={childdate}
                    onChange={(date) => setChildDate(date)}
                  />
                  {userclick && !childdate && <Field />}
                </div>
                <div className="card">
                  <label>
                    Gender <br />
                    ကျား/မ
                    <span className="red">*</span>
                  </label>

                  <select
                    onChange={(e) => setChildGender(e.target.value)}
                    className={`card_select ${childgender && "card--selected"}`}
                  >
                    <option value="">SELECT</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>

                  {userclick && !childgender && <Field />}
                </div>
                <div className="card">
                  <label htmlFor="identity">
                    Guardiance Name <br />
                    အုပ်ထိန်းသူအမည် <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    name="identity"
                    placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
                    onChange={(e) => setChildGuardian(e.target.value)}
                  />
                  {userclick && !childguardian && <Field />}
                </div>

                <div className="card">
                  <label htmlFor="relation">
                    Relationship <br />
                    တော်စပ်ပုံ
                    <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    name="relation"
                    placeholder="ENTER RELATIONSHIP"
                    onChange={(e) => setChildrelation(e.target.value)}
                  />
                  {userclick && !childrelation && <Field />}
                </div>
              </div>
            </div>
          )}

          {/* beneficiary */}

          <div className="beneficiary">
            <p className="titles">
              Beneficiary Information (In English) အကျိုးခံစားခွင့်ရှိသူနှင့်
              သက်ဆိုင်သော အချက်အလက်
            </p>
            <div className="bloc">
              <div className="card">
                <label htmlFor="name">
                  Name
                  <br /> အမည်
                  <span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER NAME"
                  onChange={(e) => setBeneficiaryName(e.target.value)}
                />
                {userclick && !beneficiaryname && <Field />}
              </div>
              <div className="card">
                <label htmlFor="passportNumber">
                  Date of Birth
                  <br /> မွေးသက္ကရာဇ်
                  <span className="red">*</span>
                </label>
                <DatePicker
                  className="card--grey"
                  placeholderText="DD-MM-YYYY"
                  selected={benebirthDate}
                  onChange={(date) => setBeneBirthDate(date)}
                />
                {userclick && !benebirthDate && <Field />}
              </div>
              <div className="card">
                <label htmlFor="relation">
                  Relationship <br />
                  တော်စပ်ပုံ
                  <span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="relation"
                  placeholder="ENTER RELATIONSHIP"
                  onChange={(e) => setRelationship(e.target.value)}
                />
                {userclick && !relationship && <Field />}
              </div>
              <div className="card">
                <label htmlFor="passportNumber">
                  Contact Phone Number <br />
                  ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်
                  <span className="red">*</span>
                </label>
                <div className="phone_number">
                  <ComboWithSearch
                    data={countrydata}
                    option={selectedoption}
                    selection="benePh"
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="ENTER YOUR PHONE NUMBER"
                    onChange={(e) => setBeneficiaryPhNumber(e.target.value)}
                  />
                  {userclick && isNaN(Number(beneficiaryPhNumber)) && (
                    <div className="red">Please enter a valid number.</div>
                  )}
                </div>
                {userclick && !beneficiaryPh && !beneficiaryPhNumber && (
                  <Field />
                )}
              </div>
              <div className="card">
                <label htmlFor="identity">
                  National Identificaiton Number
                  <br /> နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်
                </label>
                <input
                  type="text"
                  name="identity"
                  placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
                  onChange={(e) => setNationalNum(e.target.value)}
                />
              </div>
              <div className="card">
                <label htmlFor="email">
                  Email <br />
                  အီးမေးလ်လိပ်စာ
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER EMAIL"
                  onChange={(e) => setBeneficiaryEmail(e.target.value)}
                />
                {userclick &&
                  beneficiaryemail &&
                  !beneficiaryemail.endsWith("@gmail.com") && <Email />}
              </div>
              <div className="card">
                <label htmlFor="passportNumber">
                  Address <br />
                  နေရပ်လိပ်စာ(Max: 250 Char)
                </label>
                <textarea
                  name="foreignAddress"
                  maxLength={300}
                  placeholder="..."
                  onChange={(e) => setBeneficiaryAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Agent */}

          <div className="agents">
            <p className="titles">
              {" "}
              This section is only used for servicing agent of Myanma Insurance
            </p>
            <div className="agentType">
              <div className="agentType_content">
                <input
                  type="radio"
                  name="services"
                  id="self"
                  checked={selectedvalue === "self"}
                  onChange={(e) => setSelectedValue(e.target.id)}
                />
                <div
                  className={`agent_iconbar ${
                    selectedvalue == "self" && "agent_iconbar--selected"
                  }`}
                  onClick={() => setSelectedValue("self")}
                >
                  <div className="agent_img">
                    <img src={self} alt="self" />
                  </div>
                  <p>SELF-SERVICE</p>
                </div>
              </div>
              <div className="agentType_content">
                <input
                  type="radio"
                  name="services"
                  id="personal"
                  checked={selectedvalue === "personal"}
                  onChange={(e) => setSelectedValue(e.target.id)}
                />
                <div
                  className={`agent_iconbar ${
                    selectedvalue == "personal" && "agent_iconbar--selected"
                  }`}
                  onClick={() => setSelectedValue("personal")}
                >
                  <div className="agent_img">
                    <img src={personal} alt="personal" />
                  </div>
                  <p>AGENT VERIFICATION</p>
                </div>
              </div>
              <div className="agentType_content">
                <input
                  type="radio"
                  name="services"
                  id="associative"
                  checked={selectedvalue === "associative"}
                  onChange={(e) => setSelectedValue(e.target.id)}
                />
                <div
                  className={`agent_iconbar ${
                    selectedvalue == "associative" && "agent_iconbar--selected"
                  }`}
                  onClick={() => setSelectedValue("associative")}
                >
                  <div className="agent_img">
                    <img src={asso} alt="asso" />
                  </div>
                  <p> ASSOCIATION AGENT VERIFICATION</p>
                </div>
              </div>
            </div>

            {/* hidden */}

            {selectedvalue == "personal" && (
              <div className="personal_agent">
                <div className="personal_field">
                  <label htmlFor="license">
                    Agent License Number<span className="red">*</span>
                  </label>
                  <input
                    name="license"
                    type="text"
                    value={agentdata.license}
                    disabled
                    placeholder="AGENT LICENSE NUMBER"
                  />
                  {userclick && !agentdata.license && <Field />}
                </div>
                <div className="personal_field">
                  <label>
                    Agent Name
                    <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="AGENT NAME"
                    value={agentdata.name}
                  />
                  {userclick && !agentdata.name && <Field />}
                </div>
                <button className="agent_btn" onClick={editAgent}>
                  EDIT
                </button>
              </div>
            )}
            {alert == "personal" && (
              <Agent
                props={() => setAlert(false)}
                item={item}
                userclick={editagent}
              />
            )}
            {selectedvalue == "associative" && (
              <div className="personal_agent">
                <div className="personal_field">
                  <label htmlFor="license">
                    Agent License Number<span className="red">*</span>
                  </label>
                  <input
                    name="license"
                    type="text"
                    value={agentdata.license}
                    disabled
                    placeholder="AGENT LICENSE NUMBER"
                  />
                  {userclick && !agentdata.license && <Field />}
                </div>
                <div className="personal_field">
                  <label>
                    Name
                    <span className="red">*</span>
                  </label>
                  <input type="text" disabled value={agentdata.name} />
                  {userclick && !agentdata.name && <Field />}
                </div>
                <button className="agent_btn" onClick={editAgent}>
                  EDIT
                </button>
              </div>
            )}
            {alert == "associative" && (
              <Associative
                props={() => setAlert(false)}
                item={item}
                userclick={editagent}
              />
            )}
          </div>

          {/* submit */}

          <button className="form_btn" onClick={submitHandler}>
            SUBMIT AND CONTINUE
          </button>
          {/*  */}
          {showpayment && <Payment temp={temp} closing={closing} />}
        </div>
      </div>
    </div>
  );
};

export default Form;
