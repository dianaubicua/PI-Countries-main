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

  export function getActivities (){
    return function (dispatch){
        axios.get("http://localhost:3001/createdactivities")
        .then ((response) => {
            console.log(response.data)
            return dispatch ({
                type: "GET_ACTIVITIES",
                payload: response.data,
            })
        })
    }
}


  /* export function getActivities(){ //este get trae las actividades creadas 
    return async function(dispatch) {
      var info = await axios.get('http://localhost:3001/createdactivities', {

      });
      return dispatch({
        type: 'GET_ACTIVITIES',
        payload: info.data
      })
    }
  } */

export function createActivity(payload) { //este post crea las actividades
  console.log(payload)
  return async function () {
    var data = await axios.post("http://localhost:3001/activities", payload);
    return data
}
}

export function activities (payload) {
  return async function (dispatch) {
    var names = await axios.get("http://localhost:3001/activityname");
    return dispatch({
      type: 'ACTIVITIES',
      payload: names.data
    })
}
}

export function filterAct (payload) {
console.log(payload) //este console.log es para ver que trae el payload
    return ({
      type: 'FILTER_ACT',
      payload
    })
}



  export function orderByName (payload) {
    return {
      type: 'ORDER_BY_NAME',
      payload
    }
  }

  export function filterCountriesByContinent(payload) {
    return {
      type: 'FILTER_COUNTRIES_BY_CONTINENT',
      payload
    }
  }

  export function orderByPopulation (payload) {
    return {
      type: 'ORDER_BY_POPULATION',
      payload
    }
  }

 
export function getClean () {
  return {
    type: "GET_CLEAN",
  }
}

  export function getDetail (id) {
    return function (dispatch) {
        axios.get("http://localhost:3001/countries/" + id)
        .then(response => {
            console.log(response.data)
            return dispatch({
                type: "GET_DETAIL",
                 payload: response.data
            })
        })
        .catch((error) => {
            console.error(error)
        })
    }
}


