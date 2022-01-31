import React from "react";
import './home.css';
import Navbar from "./navbar";
import SearchBox from "./search";
import { useEffect, useState } from "react"; //useDispatch permite acceder a cualquier store pero esta vez para actualizar algo
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, filterActivities} from "../actions/index";
import Minicard from "./minicard";
import Paginado from "./paginado";

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    const allTourism = useSelector((state) => state.activities);

    const [isLoading, setIsLoading] = useState(true);

    //Pagina actual
    const [currentPage, setCurrentPage] = useState(1);
    //Cantidad de elementos por pagina
    const [countriesPerPage, setCountriesPage] = useState(9);

    

    const indexOfLastCountry = currentPage * countriesPerPage; //9
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry); //0-9 el slice toma un arreglo y trae la porcion que yo pongo como arreglo

    const paginado = (pageNumber) => { //esta es la función que nos va a ayudar al renderizado
        setCurrentPage(pageNumber); //la constante setea la pagina 
    } //la funcion paginado es la que se ejecuta cuando se hace click en un numero de pagina
    
    useEffect(() => {
        dispatch(getCountries());
    },[dispatch]);//aquí se agregan las dependencias 


    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value));
    }

    function handleFilterActivities(e){
        dispatch(filterActivities(e.target.value));
    }

    return (
        <div className="home">
            <Navbar />
            <SearchBox />
        <div>
            <select>
                <option onChange={e => handleSort(e)} >Sort by Name</option>
                <option value='asc'>Ascending order</option>
                <option value='desc'>Descending order</option>
            </select>
            <select>
                <option>Sort by Population</option>
                <option value='ASC'>Ascending order</option>
                <option value='DESC'>Descending order</option>
            </select>
            <select onChange={e => handleFilterContinent(e)} >
                <option value='All'>Selection by Continent</option>
                <option value='Africa'>Africa</option>
                <option value='North America'>North America</option>
                <option value='South America'>South America</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
             <select onChange={event => handleFilterActivities(event)} >
                <option value='All'>Selection by Activities</option>
                { allTourism && allTourism.map(tourism => (
                     <option value={tourism.name}>{tourism.name}</option>
                    ))}
            </select>


    <Paginado 
            countriesPerPage = {countriesPerPage}
            allCountries={allCountries.length}
            paginado = {paginado} />
    <ul className="countriesPorPagina">
    {currentCountries?.map((c) => (
            (
                <Minicard continents={c.continents} name={c.name} flags={c.flags} />
            )    
        ))}     

    </ul>       
        </div>
        </div>
    );
}

export default Home;