import axios from 'axios'

// crear actions y exportarlas cada una individual 
// crearlas con try-catch

 export const getCountries = () => {

    try {
        const endpoint = ("http://localhost:3001/countries")
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: "GET_COUNTRIES",
                payload: data
            })
        }

    } catch (error) {

        console.log(error)
    }

}

 export const getActivities = ()=>{

    try {
        const endpoint = ("http://localhost:3001/activities")
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: "GET_ACTIVITIES",
                payload: data
            })
        }

    } catch (error) {

        console.log(error)
    }

}

 export const getCountriesByName = (name) => {

    try {
        const endpoint = (`http://localhost:3001/countries/name?name=${name}`)
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: "GET_BY_NAME",
                payload: data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

 export const getCountryById = (id) => {

    try {
        const endpoint = ('http://localhost:3001/countries/' + id)
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: "GET_BY_ID",
                payload: data
            })
        }

    } catch (error) {
        console.log(error)
    }
}


 export const createActivity = (input) => {
    
    try {
        const endpoint = ("http://localhost:3001/activities/")
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, input)
            return dispatch({
                
                type: "CREATE_ACTIVITY",
                payload: data
            })  
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const sortCountries = (sort) => {
    return {
        type: "SORT",
        payload: sort
    }
}

 export const orderCountries = (order) => {
    return {
        type: "ORDER",
        payload: order
    }

}

 export const filterCountries = (filter)=> {
    return {
        type: "FILTER",
        payload: filter, 
     }
}

export const findActivities = (find) => {
    return {
        type: "FIND",
        payload: find, 
     }
}


