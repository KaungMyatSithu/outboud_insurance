import React, { useEffect, useState } from "react";

const Select = ({ countrydata, backdata, userInput }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (countrydata) {
      setFilteredData(countrydata);
    }
  }, [countrydata]);

  function sendingData(name) {
    backdata(name);
  }

  useEffect(() => {
    if (userInput && countrydata.length > 0) {
      const filteredData = countrydata.filter((item) =>
        item.countryName.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(countrydata); // Reset to original data if input is empty
    }
  }, [userInput, countrydata]);

  return (
    <div className={`options ${filteredData.length == 0 && "options__border"}`}>
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="options_option"
          onClick={() => sendingData(item.countryName)}
        >
          {item.countryName}
        </div>
      ))}
    </div>
  );
};

export default Select;
