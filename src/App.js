import { useState } from "react";
import searchCountry from "./api";
import SearchBar from './SearchCountry';
import CountryList from "./CountryList";


function App(){
    const [countries, setCountries]= useState([]);
    const handleClick=async(term)=>{
        const result = await searchCountry(term);
        setCountries(result);
    };
    return <div>
               <SearchBar onSubmit={handleClick}/>
            <CountryList countries={countries}/>
        </div>
    
    

}






export default App;