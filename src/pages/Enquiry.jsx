
import React, { useEffect, useState } from "react";
import "./enquiry.css";
import ComboWithSearch from "../components/ComboWithSearch";
import axios from "axios";

const Enquiry = () => {
  const [countrydata, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/countries")
      .then((data) => setCountryData(data.data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (countrydata) {
      const sortedCountries = [...countrydata].sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setCountryData(sortedCountries);
    }
  }, []);

  function selectedoption(V) {
    if (V.id == "passport") {
      setPassportCountry(V.value);
    } else if (V.id == "journey") {
      setJourneyTo(V.value);
    }
  }

  return (
    <>
      <div className="enquiry-container">
        <div className="enquiry-header">
          <h3>Inbound Travel Accidence Insurance</h3>

          <div className="enquiry-body">
            <div className="enquiry-body-inner">
              <div className="category">
                <label htmlFor="passportNumber" className="category-txt">
                  Passport Number <span className="star">*</span>
                </label>
                <input
                  type="text"
                  placeholder=". . ."
                  className="category-input"
                />
              </div>
              <div className="category">
                <label htmlFor="passportNumber" className="category-txt">
                  Passport Issued Country <span className="star">*</span>
                </label>
                <ComboWithSearch
                  data={countrydata}
                  option={selectedoption}
                  selection="passport"
                />
              </div>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;