

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