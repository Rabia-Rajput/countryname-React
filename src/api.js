import axios from "axios";
const searchCountry= async(term)=>{
    const response = await axios.get(`https://restcountries.com/v3.1/name/${term}`);
    console.log(response.data);
    return response.data;
    
};



export default searchCountry;