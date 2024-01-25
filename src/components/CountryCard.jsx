import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, capital, region, population, flags }) => {

  
  

    return (
      <div className='card rounded-md overflow-auto shadow-lg dark:bg-[#2B3844] dark:text-[#FFFFFF]'>
        <Link to={`${name.common}`} className="w-full">
          <img
            src={flags.svg}
            alt=""
            className="flag h-[150px] w-full object-contain"
          />
        </Link>
        <div className="card-body grid gap-2 p-6 pb-8">
          <h5 className="card-title font-semibold">{name.common}</h5>
          <p className="card-text">Capital: {capital?.[0]}</p>
          <p className="card-text">Region: {region}</p>
          <p className="card-text">Population: {population.toLocaleString()}</p>
        </div>
      </div>
    );
  
}

export default CountryCard
