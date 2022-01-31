import React from 'react';
import './search.css';
import { GiBinoculars } from 'react-icons/gi';

export default function SearchBox ({onSearch}){
  
  const handleOnSearch = () => 
    onSearch(document.getElementById("searchInput").value);
  
  return (
    <div className="searchBar">
      <input
        className="input"
        id="searchInput"
        type="text"
        placeholder="Type to search"
      />
      <button className="botoncito"
      onClick={handleOnSearch}>
        <GiBinoculars/>
      </button>
    </div>
  );
}

