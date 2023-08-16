import "./search.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="search">
        <div className="input-wrapper">
            <input placeholder="Type to search..."/> 
            <div className="logo">
                <button><FaSearch id="search-icon" /></button>
            </div>  
        </div>
        </div>
    );
}

export default Search;