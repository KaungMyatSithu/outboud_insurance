import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
];

const ComboWithSearch = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected Option:", selectedOption);
  };

  const comboSearch = {
    control: (provided) => ({
      ...provided,
      width: selectedOption ? "300px" : "300px", // Adjust width based on selected option
      minHeight: "36px", // Adjust height
    }),
  };

  const customFilter = (option, searchText) => {
    if (!searchText) return true;
    return option.label.toLowerCase().startsWith(searchText.toLowerCase());
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Search..."
      filterOption={customFilter}
      styles={comboSearch}
    />
  );
};

export default ComboWithSearch;
