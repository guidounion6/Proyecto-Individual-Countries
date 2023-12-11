
//definir initialState 
const initialState = {
    //llenar con los estados iniciales que necesite
    allCountries: [],
    countriesCopy: [],
    allActivities: [],
    pais:[],
    orderBy: false

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
        countriesCopy: action.payload
      }
      
      case "GET_BY_ID":
        return {
        ...state, 
        pais: action.payload,
      }

      case "SORT":

      if ( action.payload === "PA" || action.payload === "PD") {
        state = {
          ...state,
          orderBy: true
        }} else
        state = {
        ...state,
        orderBy: false
      }
       const orderCopy = [...state.countriesCopy]
        if ( state.orderBy === false){
          if (action.payload === "AA") {
            orderCopy.sort(
                (a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1
                }
            )
        } else if (action.payload === "AD") {
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
        }}
        if ( state.orderBy === true ) {
          if (action.payload === "PA") {
            orderCopy.sort(
                (a, b) => {
                    if (a.population > b.population) return 1;
                    else return -1
                }
            )
        } else if (action.payload === "PD") {
            orderCopy.sort(
                (a, b) => {
                    if (a.population < b.population) return 1;
                    else return -1
                }
            )
      }
        return {
            ...state,
            countriesCopy: orderCopy
        }
      }

        case "FILTER": 
          if ( action.payload === "Todos") {
            return {
              ...state,
              countriesCopy: state.allCountries
            }
          }
          const continentsOnly = state.allCountries.filter((country) => country.continents === action.payload);
            return {
              ...state,
              countriesCopy: continentsOnly
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

          case "FIND":
           const paises = [];
             if ( action.payload === "ALL") {
               return {
                 ...state,
                  countriesCopy: state.allCountries
                 }
              }
              let todosPaises = [...state.allCountries]
              state.allActivities.forEach(actividad => {
                if (actividad.name === action.payload) {
                   actividad.Countries.forEach(pais => {
                     paises.push(pais.name);
                   });
                }
               });
               const paisesFiltrados = todosPaises.filter(obj => paises.includes(obj.name))
               return {
                ...state,
                countriesCopy: paisesFiltrados
               }
    default: 
     return {
      ...state
    }

  }

}

export default reducer 