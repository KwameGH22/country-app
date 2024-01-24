import React from 'react';
import { useContext } from 'react';
import { RxReload } from 'react-icons/rx';
import { useAppContext } from '../context/AppContextProvider';
import { useLoaderData } from 'react-router-dom';



const Countries = () => {
   const context = useAppContext()
   data = useLoaderData()



  return (
    <div className='grid pb-20 mt-10 gap-10 px-10 mobile:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 '>
      {isLoading ? (
       <div className=' dark:text-white flex justify-center pb-2  w-full '>
        <button type="button" className=" dark:bg-[#2B3844] shadow-lg flex items-center rounded-md gap-3 py-2 px-2" disabled>
        <RxReload className='dark:text-white animate-spin' /> 
        <h1 className=' '>Loading</h1>
        </button>
      </div>
      ) : null}
      {error ? <div>{error}</div> : null}
      
      {/* filtering country by search request */}

     { context.countries?.map((country) => (
        <div key={country.alpha3Code} className='top mobile:w-[230px] mobile:m-auto rounded-lg bg-white dark:bg-[#2B3844] dark:text-[#fff] h-[300px] font-Nunito shadow-lg '>
          <div>
            <img src={country.flags.png} alt={country.name.common} className=' w-[100%] h-[120px] rounded-t-lg ' />
          </div>
          <div className=' my-4 pl-5'>
            <h1 className=' text-[14px] w-full font-extrabold'>{country.name.common}</h1>
          </div>
          <div className=' flex flex-col gap-2 pl-5 text-[14px]'>
            <div className='flex gap-2'>
              <p className=' font-semibold'>Population:</p>
              <span>{country.population}</span>
            </div>
            <div className='flex gap-2'>
              <p className=' font-semibold'>Region:</p>
              <span>{country.region}</span>
            </div>
            <div className='flex gap-2 mb-5 '>
              <p className=' font-semibold'>Capital:</p> <span className=' w-full text-wrap'>{country.capital}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Countries
