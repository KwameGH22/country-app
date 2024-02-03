import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useAppContext } from "../useAppContext";

const FilterField = () => {
  const { handleQuery } = useAppContext();

  return (
    <div>
      <div className="inline-flex relative px-4 mobile:mt-10 gap-4 items-center justify-between dark:bg-[#2B3844] rounded-md shadow-lg bg-white">
        <select
          className="outline-none  appearance-none py-4 px-3 dark:bg-[#2B3844] dark:text-[#fff]"
          name="filter"
          onChange={handleQuery}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <div className="pointer-events-none dark-text-white">
          <IoIosArrowDown className="dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default FilterField;
