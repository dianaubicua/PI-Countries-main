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

  export function getNameCountries (name) {
    return async function(dispatch) {
      try {
        var json = await axios.get('http://localhost:3001/countries/name?queryName='+name);
        return dispatch({
          type: 'GET_NAME_COUNTRIES',
          payload: json.data
        })
      } catch (error) {
        console.log(error);
     } 
    }
  }

  export function getActivities(){ //este get trae las actividades creadas 
    return async function(dispatch) {
      var info = await axios.get('http://localhost:3001/createdactivities', {

      });
      return dispatch({
        type: 'GET_ACTIVITIES',
        payload: info.data
      })
    }
  }

export function postActivities(payload) { //este post crea las actividades
  return async function(dispatch) {
    const response = await axios.post('http://localhost:3001/activities', payload);
    console.log (response);
    return response;
}
}

  export function orderByName (payload) {
    return {
      type: 'ORDER_BY_NAME',
      payload
    }
  }

  export function orderByPopulation (payload) {
    return {
      type: 'ORDER_BY_POPULATION',
      payload
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
  export const ORDER_BY_NAME = 'ORDER_BY_NAME';
  export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
  export const GET_NAME_COUNTRIES = 'GET_NAME_COUNTRIES';