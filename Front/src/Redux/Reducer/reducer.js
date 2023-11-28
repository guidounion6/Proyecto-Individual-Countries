//import action types
//definir initialState 
const initialState = {
    //llenar con los estados iniciales que necesite
    allCountries: [],
    countriesCopy: [],
    allActivities: []
}

const reducer = ( state = initialState, action) => {

   switch(action.type){
    case "GET_COUNTRIES":
      return {
        ...state, 
        allCountries: action.payload,
        countriesCopy: action.payload
      }
      case "GET_BY_NAME":
      return {
        ...state, 
        allCountries: action.payload
      }
    default: 
     return state
   }

   

}

export default reducer 