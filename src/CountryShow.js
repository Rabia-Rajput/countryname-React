import React from "react";
function CountryShow({country}){

  function formatPopulation(number) {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + 'K';
    } else if (number < 1000000000) {
        return (number / 1000000).toFixed(1) + 'M'; 
    } else {
        return (number / 1000000000).toFixed(1) + 'B'; 
    }
}

const population = formatPopulation(country.population)

    return <div className="font-semibold text-center container mx-auto mt-10 bg-gray-100 py-6 px-8 rounded-lg shadow-lg">
    <p className="text-lg mb-2">Name: {country.name.common}</p>
    <p className="text-lg mb-2">Capital: {country.capital[0]}</p>
    <p className="text-lg mb-2">Population: {population}</p>
    <p className="text-lg mb-2">Region: {country.region}</p>
    
  </div>

}

export default CountryShow;