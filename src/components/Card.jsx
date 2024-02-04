import React, {useEffect} from 'react'
import { useAppContext } from "../useAppContext";
import { RxReload } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Card = () => {
    const {isLoading, countries} = useAppContext()

   



  return (
    <div className='grid pb-20 mt-10 gap-10 px-10 mobile:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 '>
      {/* {isLoading ? (
       <div className=' dark:text-white flex justify-center pb-2  w-full '>
        <button type="button" className=" dark:bg-[#2B3844] shadow-lg flex items-center rounded-md gap-3 py-2 px-2" disabled>
        <RxReload className='dark:text-white animate-spin' /> 
        <h1 className=' '>Loading</h1>
        </button>
      </div>
      ) : null}
      
      {/* filtering country by search request */}  

      { countries? countries.map((country, index) => (
      <Link key={index}  to={`/${country.name.common}`}>
      <div onClick={() => console.log(country.name)} className='top mobile:w-[100%] mobile:m-auto rounded-lg bg-white dark:bg-[#2B3844] dark:text-[#fff] h-[350px] font-Nunito shadow-lg '>
          <div>
            <img src={country.flags.png} alt={country.name.common} className=' w-[100%] h-[180px] rounded-t-lg ' />
          </div>
          <div className=' my-3 px-5 w-full'>
            <h1 className=' text-[16px] w-full font-extrabold text-wrap'>{country.name.common}</h1>
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
        </div></Link>
      )) : countries.map((country, index) => (
        <Link  key={index} to={`/infopage/${country.name.common}`}>
        <div  className='top mobile:w-[100%] mobile:m-auto rounded-lg bg-white dark:bg-[#2B3844] dark:text-[#fff] h-[360px] font-Nunito shadow-lg '>
          <div>
            <img src={country.flags.png} alt={country.name.common} className=' w-[100%] h-[180px] rounded-t-lg ' />
          </div>
          <div className=" my-3 px-5 w-full">
            <h1 className=' text-[16px] font-extrabold w-full text-wrap'>{country.name.common}</h1>
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
        </div></Link>
      ))}
    </div>
  )
}

export default Card
