import axios from 'axios'

// crear actions y exportarlas cada una individual 
// crearlas con try-catch

export const getCountries = ()=> {
   
    try {
        const endpoint = ("http://localhost:3001/countries")
        return async (dispatch)=>{
            const {data}= await axios(endpoint)
            return dispatch({
                type:"GET_COUNTRIES",
                payload: data
            })
        }
        
    } catch (error) {

        console.log(error)
    }
   
}


export const getCountriesByName = ()=> {
    try {
        const endpoint = (`http://localhost:3001/countries/name?name=${name}`)
        return async (dispatch)=>{
            const {data}= await axios.get(endpoint)
            
            return dispatch({
                type:"GET_BY_NAME",
                payload: data
            })
        }
    } catch (error) {
        console.log(error) 
    }
}