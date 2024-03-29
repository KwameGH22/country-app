import React from "react";
import { MdSearch } from "react-icons/md";
import { useAppContext } from "../useAppContext";

const SearchField = () => {
  const { handleQuery } = useAppContext();

  return (
    <div>
      <div className="flex tablet:w-[95%] mobile:w-full rounded-md shadow-lg gap-2 bg-[#fff] py-4 px-5 dark:bg-[#2B3844] dark:text-[#fff] text-[18px] items-center">
        <span>
          <MdSearch className="w-7 h-7 dark:text-[#fff]" />
        </span>

        <input
          type="search"
          name="search"
          id="countries"
          placeholder="Search for a country"
          className="outline-none bg-[#fff] dark:bg-[#2B3844] font-semibold"
          onChange={handleQuery}
        />
      </div>
    </div>
  );
};

export default SearchField;
