
import './SearchBar.css'

const SearchBar = ({handleChange, handleSubmit})=>{

    
    return (
        <form
          onChange={(event) => handleChange(event)}
          className="search-box-form"
        >
          <input
            id="SearchBar"
            type="search"
          />
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </form>
    );
} 

export default SearchBar