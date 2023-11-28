
import './SearchBar.css'

const SearchBar = ({handelChange, handleSubmit})=>{

    return (
        <div className='search-box'>
        <form onChange={(event)=>handelChange(event)}>
        <input type='search'/>
        <button  type='submit' onClick={handleSubmit}>Buscar</button>
        </form>
        </div>
    )

} 

export default SearchBar