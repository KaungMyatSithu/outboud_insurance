import React, { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";

const ComboWithSearch = ({ data, option , selection}) => {
  const [selectedOption , setSelectedOption] = useState("")
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setSelectedOption(e)
    option({value:e.value, id:e.id})
  };

  const comboSearch = {
    control: (provided, state) => ({
      ...provided,
      width: "85%", // Adjust width based on selected option
      minHeight: "36px", // Adjust height
    }),
    menu: (provided) => ({
      ...provided,
      padding: "0 5px", // Remove padding
      margin: 0, // Remove margin
      borderRadius: 0
      
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid black",
      backgroundColor: state.isSelected ? "skyblue" : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "skyblue" : "#eee", // Change background color on hover
      },
      "&:last-child":{
        borderBottom:"none"
      }
    }),
    

  };

  const customFilter = (option, searchText) => {
    if (!searchText) return true;
    return option.label.toLowerCase().startsWith(searchText.toLowerCase());
  };
  useEffect(() => {
    if (data && data.length > 0) {
      setOptions(
        data.map((item) => ({
          value: item.countryName,
          label: item.countryName,
          id: selection
        }))
      );
    }
  }, [data]);
  return (
    <Select
      value={selectedOption}
      onChange={(e)=> handleChange(e)}
      options={options}
      isSearchable
      placeholder="Search..."
      filterOption={customFilter}
      styles={comboSearch}
    />
  );
};

export default ComboWithSearch;
