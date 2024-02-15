import React from "react";

export const Enquiry = () => {
  return (
    <>
      <div>
        <div className="items-center w-[90%] mx-auto">
          <h3 className="text-[#074DA1] font-bold mb-5 text-[24px] uppercase size-full mt-[50px] text-center">
            Outbound Travel Accident Insurance
          </h3>
          <div className="bg-white px-12 py-16 shadow-lg mb-10">
            <div className="flex">
              <div className="w-[50%]">
                <p className="text-[#074DA1] font-bold mb-5">Passport Number</p>
                <input
                  tySe="text"
                  placeholder=". . ."
                  className=" border border-gray-400 rounded-md px-[10px] py-[5px] w-[95%]"
                />
              </div>
              <div className="w-[48%]">
                <p className="text-[#074DA1] font-bold mb-5">
                  Passport Issued Country
                </p>
                <select className=" border border-gray-400 rounded-md px-[10px] py-[5px] w-[100%]">
                  <option value="">SELECT ONE</option>
                  <option value="">SELECT TWO</option>
                  <option value="">SELECT THREE</option>
                  <option value="">SELECT FOUR</option>
                  <option value="">SELECT FIVE</option>
                  <option value="">SELECT SIX</option>
                  <option value="">SELECT SEVEN</option>
                </select>
              </div>
            </div>
            <button className="bg-[#074DA1] text-white px-[35px] py-[5px] rounded-md mt-5 hover:bg-white hover:text-[#074DA1] hover:border hover:border-[#074DA1] duration-500 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
