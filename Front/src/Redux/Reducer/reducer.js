
//definir initialState 
const initialState = {
    //llenar con los estados iniciales que necesite
    allCountries: [],
    countriesCopy: [],
    allActivities: []
}

const reducer = ( state = initialState, action) => {

   switch(action.type)
   {
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
      
      case "GET_BY_ID":
        return {
        ...state, 
        countriesCopy: action.payload,
        
      }

      case "ORDER":
        
        let orderCopy = [...state.countriesCopy]
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
            countriesCopy: orderCopy
        }

        case "FILTER": 
          if ( action.payload === "ALL" ) {
            const copia = state.allCountries
              return {
                ...state,
                countriesCopy: copia
          }
        } 
          if ( action.payload !== "Todos" & action.payload !== "Activities" ) {
            if (action.payload === "Continents"){
              const copia = state.allCountries
                return {
                  ...state,
                  countriesCopy: copia
          }
        }
          const continentsOnly = state.allCountries.filter((country) => country.continents === action.payload);
          return {
            ...state,
            countriesCopy: continentsOnly
          }
         }
        
         if ( action.payload === "Activities" ) return {
          ...state,
          countriesCopy: state.allCountries
        }
        
        case "GET_ACTIVITIES":
          return {
            ...state, 
            allActivities: action.payload
          }
    
          case "CREATE_ACTIVITY":
            return {
              ...state,
              allActivities: [...state.allActivities, action.payload],
            }

    default: 
     return {
      ...state
    }

  }

}

export default reducer 