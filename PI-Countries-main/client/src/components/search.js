import React from 'react';
import './search.css';
import { GiBinoculars } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions/index';
import { useState } from "react"; 


export default function SearchBox ({onSearch}){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  
function handleInputChange(e){
  e.preventDefault();
  setName(e.target.value);
  console.log(name);
}

function handleSubmit(e){
  e.preventDefault();
  dispatch(getNameCountries(name));
}

  return (
    <div className="searchBar">
      <input
        type="text"
        className="input"
        placeholder="Type to search"
        onChange={(e) => handleInputChange(e)}
      />
      <button className="botoncito"
        onClick={(e) => handleSubmit(e)}
      type='submit'>
        <GiBinoculars/>
      </button>
    </div>
  );
}

