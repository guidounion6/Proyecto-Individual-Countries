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

      case "ORDER":
        let orderCopy = [...state.allCountries]
        if (action.payload === "A") {
            orderCopy.sort(
                (a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1
                }
            )
        } else if (action.payload === "D") {
            orderCopy.sort(
                (a, b) => {
                    if (a.name < b.name) return 1;
                    else return -1
                }
            )
        }

        return {
            ...state,
            allCountries: orderCopy
        }

        case "GET_BY_ID":
        return {
        ...state, 
        countriesCopy: action.payload,
        
      }
      case "CREATE_ACTIVITY":
        return {
          ...state,
          allActivities: [...state.allActivities, action.payload]
        }
      
    default: 
     return state
   }

   

}

export default reducer 