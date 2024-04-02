import React from "react";
function CountryShow({country}){

    return <div className="font-semibold text-center container mx-auto mt-10 bg-gray-100 py-6 px-8 rounded-lg shadow-lg">
    <p className="text-lg mb-2">Name: {country.name.common}</p>
    <p className="text-lg mb-2">Capital: {country.capital[0]}</p>
    <p className="text-lg mb-2">Population: {country.population}</p>
    <p className="text-lg mb-2">Region: {country.region}</p>
    
  </div>

}

export default CountryShow;