import React from 'react';
import CountryShow from './CountryShow';

function CountryList({ countries }) {
    // Check if 'countries' is undefined or not an array
    if (!countries || !Array.isArray(countries)) {
        return <div>No countries to display</div>;
    }

    const renderedCountries = countries.map((country, index) => (
        <CountryShow key={index} country={country} />
    ));

    return <div>{renderedCountries}</div>;
}

export default CountryList;
