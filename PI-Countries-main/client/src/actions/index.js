import axios from 'axios';  

export function getCountries() { //conexión con el backend 
    return async function(dispatch) {
      var json = await axios.get('http://localhost:3001/countries', { //aquí tenemos la conexión con la bd
      
  
      });
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: json.data
    })
  }
  }

  export function filterCountriesByContinent(payload) {
    return {
      type: 'FILTER_COUNTRIES_BY_CONTINENT',
      payload
    }
  }

  export function filterActivities(payload) {
    return {
      type: 'FILTER_BY_ACTIVITIES',
      payload
    }
  }

  export const GET_COUNTRIES = 'GET_COUNTRIES';
  export const FILTER_COUNTRIES_BY_CONTINENT = 'FILTER_COUNTRIES_BY_CONTINENT';
  export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';