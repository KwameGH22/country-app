import React from 'react';
import { useAppContext } from '../context/AppContextProvider';


const SearchAndFilter = () => {
  const context = useAppContext()

  return (
    <div className="search-and-filter flex flex-col gap-8 py-8  xl:flex-row justify-between">
        <div className='search rounded-[4px] xl:w-[50%] flex  overflow-auto  relative justify-between w-[90%] m-auto'>
            <input
                type="text"
                name="search"
                placeholder="Search for a country"
                onChange={context.handleQuery}
                className='outline-none bg-[#fff] dark:bg-[#2B3844] font-semibold shadow-lg w-[400px]'
            />
            <select
                name="filter"
                id="continents"
                onChange={context.handleQuery}
                className='px-4 py-3 rounded-[4px] outline-none shadow-lg  dark:bg-[#2B3844] dark:text-[#fff] xl:w-[20%] w-[200px]'
                >
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
        </select>
        
        </div>
        
    </div>
  )
}

export default SearchAndFilter
