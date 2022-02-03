const initalState = { 
    countries: [],
    allCountries: [],
    continents: [],
    detail: [],
    toruisms: [],
    filter: {
        continent: 'All',
        toruism: 'All',
        name: 'All',
        population: 'All'
    }
}


function filterByPopulation (countries, payload) {
    let score = countries
            const orderScore = payload === "ASC" ?
             score.sort(function(a, b){
                if (a.population > b.population) {
                    return -1
                   }
                if (b.population > a.population) {
                     return 1
                    }
                    return 0
        
            }) :
             score.sort(function(a, b){
                if (a.population > b.population) {
                    return 1
                   }
                if (b.population > a.population) {
                     return -1
                    }
                    return 0
            })
            return score
}





function rootReducer(state = initalState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case 'GET_NAME_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
        case 'GET_TORUISMS':
            return {
                ...state,
                toruisms: action.payload

            }
        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'asc' ?
                state.countries.sort(function(a,b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                     return 0;
                    }) :
                state.countries.sort (function(a,b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    })
            return {
                ...state,
                countries: sortedArr
            }

            case "ORDER_BY_POPULATION":
                let score = filterByPopulation(state.countries, action.payload)
                  return {
                      ...state,
                      countries: score,
                      filter: {
                          ...state.filter,
                          population: action.payload
                      }
                    //   countries: action.payload === 'all' ? state.allCountries : orderScore,
                  }
        

        case 'FILTER_COUNTRIES_BY_CONTINENT':
            const allCountries = state.allCountries;
            const filteredCountries = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continents === action.payload);
            return {
                ...state,
                countries: filteredCountries
            }
        
        case 'POST_ACTIVITY'://hay que tenerlo en el reducer
            return {
                ...state,
            } 
        case 'FILTER_BY_ACTIVITIES':
            return {
                ...state,
                toruisms: action.payload
            }
            
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case "GET_CLEAN":
                return {
                    ...state,
                    detail: []
                }
        default:
            return state
    }
}

export default rootReducer;