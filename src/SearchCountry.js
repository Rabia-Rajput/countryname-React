import { useState } from "react";


function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');
    const handleFormSumbit=(event)=>{
        event.preventDefault();

        onSubmit(term);

    };
    const handleChange=(event)=>{
        setTerm(event.target.value);
    };
    return(
        <div className="my-20 text-center ">
            <form onSubmit={handleFormSumbit}>
                <label className="text-slate-700 font-bold" >Enter Any Country Name:</label>
                <input  className="w-half border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 m-4 p-1" type="text" spellCheck={false} value={term} onChange={handleChange}/>
                <button className=" font-medium border-solid bg-cyan-400 px-4 py-2 rounded hover:bg-cyan-500  active:bg-cyan-200 focus:outline-none focus:ring focus:ring-cyan-300"  type="submit">Search</button>
            </form>
        </div>
        );
    

}
export default SearchBar;