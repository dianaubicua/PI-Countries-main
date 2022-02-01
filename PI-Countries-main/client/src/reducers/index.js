

const initalState = { 
    countries: [],
    allCountries: [],
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
        case 'ORDER_BY_NAME':
            let sortedArr = action.payload == 'asc' ?
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
        case 'ORDER_BY_POPULATION':
            let sortedArr2 = action.payload == 'ASC' ?
                state.countries.sort(function(a,b){
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                        return 0;
                    }) :
                state.countries.sort (function(a, b){
                    if (a.population > a.population){
                        return -1;
                    }
                    if (b.population > b.population){
                        return 1;
                    }
                })
                return {
                    ...state,
                    countries: sortedArr2
                }
                

        case 'FILTER_COUNTRIES_BY_CONTINENT':
            const allCountries = state.allCountries;
            const filteredCountries = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continents === action.payload);
            return {
                ...state,
                countries: filteredCountries
            }
        case 'FILTER_BY_ACTIVITIES':
            const allCountries2 = state.allCountries;
            const createTourism = action.payload === 'All' ? state.allCountries.filter(el => el.createdInDb) : state.allCountries.filter(el => !el.createdInDb);
            return {
                ...state,
                countries: action.payload === 'All' ? state.allCountries : createTourism
            }

        default:
            return state
    }
}

export default rootReducer;