import React, { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";

const ComboWithSearch = ({ data, option, selection }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setSelectedOption(e.value);
    option({ value: e.value, id: e.id });
  };

  const comboSearch = {
    control: (provided, state) => ({
      ...provided,
      width: "100%", // Adjust width based on selected option
    }),
    menu: (provided) => ({
      ...provided,
      width: "300px",
      padding: "0 5px", // Remove padding
      margin: 0, // Remove margin
      borderRadius: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid black",
      backgroundColor: state.isSelected ? "skyblue" : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "skyblue" : "#eee", // Change background color on hover
      },
      "&:last-child": {
        borderBottom: "none",
      },
    }),
  };

  const customFilter = (option, searchText) => {
    if (!searchText) return true;
    return option.label.toLowerCase().includes(searchText.toLowerCase());
  };
  useEffect(() => {
    if (
      data &&
      data.length > 0 &&
      (selection == "passport" ||
        selection == "journey" ||
        selection == "country")
    ) {
      setOptions(
        data.map((item) => ({
          value: item.countryName,
          label: item.countryName,
          id: selection,
        }))
      );
    } else if (
      data &&
      data.length > 0 &&
      (selection == "insuredPh" ||
        selection == "insuredforeignPh" ||
        selection == "benePh")
    ) {
      setOptions(
        data.map((item) => ({
          value: item.countryCode,
          label: `(${item.countryCode}) ${item.countryName}`,
          id: selection,
        }))
      );
    }
  }, [data]);
  return (
    <Select
      value={{ label: selectedOption ? selectedOption : "Search..." }}
      onChange={(e) => handleChange(e)}
      options={options}
      isSearchable
      filterOption={customFilter}
      styles={comboSearch}
    />
  );
};

export default ComboWithSearch;
