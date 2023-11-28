
import './SearchBar.css'

const SearchBar = ({handleChange, handleSubmit})=>{

    
    return (
        <div className='search-box'>
        <form onChange={(event)=>handleChange(event)}>
        <input type='search'/>
        <button  type='submit' onClick={handleSubmit}>Buscar</button>
        </form>
        </div>
    )

} 

export default SearchBar