import React from "react";
import { useState, useEffect } from "react";
import { createActivity, getCountries } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import './activitycountry.css';
import Navbar from "./navbar";



function validate(input){
    let errors = {}

    if(!input.name){
        errors.name = "a name is required";
    } else {
        errors.name = ""
    }

    if(!input.difficulty) {
        errors.difficulty = "Difficulty level required";
    } else {
        errors.difficulty = ""
    }

    if(!input.duration){
        errors.duration = "A duration time is required";
    } else {
        errors.duration = ""
    }

    if(!input.season){
       errors.season = "Se requiere una estacion del año";
    } else {
        errors.season = ""
    }

    if(input.country.length===0){
        errors.country = "Se requiere minimo un pais";
    } else {
        errors.country = ""
    }

    return errors
}


export default function CreateActivity(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    useEffect(() => {
         setErrors(validate(input))
         }, [])

     const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
        
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
         setErrors(validate({
             ...input,
             [e.target.name] : e.target.value
         }));
         console.log(input)
         console.log(errors)
    }

    function handleSelect(e) {
        setInput({
            ...input,
            country: [...input.country,e.target.value]
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    }

    function handleDelete(el){
        setInput({
            ...input,
            country: input.country.filter(c => c !== el)
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(createActivity(input))
        alert("¡Actividad creada!")
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "", 
            country: "",
        })
    }

    return (
        <div className="fondo" >
            <Navbar />
            <h1 > ¡Crea una actividad turistica! </h1>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label >Name:</label>
                    <input
                    type= "text"
                    value= {input.name}
                    name= "name"
                    onChange={handleChange}
                    />
                     {errors.name && (
                        <p> {errors.name} </p>
                    )} 
                </div>

                <div>
                    <label >Difficulty:</label>
                    <input 
                    
                    type= "number"
                    min="0"
                    max="5"
                    value= {input.difficulty}
                    name= "difficulty"
                    onChange={handleChange}
                    />
                     {errors.difficulty && (
                        <p > {errors.difficulty} </p>
                    )} 
                </div>

                <div>
                    <label >Duration:</label>
                    <input
                    
                    type= "text"
                    value= {input.duration}
                    name= "duration"
                    onChange={handleChange}
                    />
                    {errors.duration && (
                        <p className="error"> {errors.duration} </p>
                    )} 
                </div>

                <div>
                    <label >Season:</label>
                    <input
                   
                    type= "text"
                    value= {input.season}
                    name= "season"
                    onChange={handleChange}
                    />
                     {errors.season && (
                        <p className="error"> {errors.season} </p>
                    )} 
                </div>

                <div>
                    <select  onChange={(e) => handleSelect(e)} name= "country">

                    {allCountries.map((e) => (
                        <option value={e.name}> {e.name} </option>
                    ) )}

                    </select>
                     {errors.country && (
                        <p className="error">{errors.country}</p>
                    )} 
                    <ul>{input.country.map(el => <li onClick={()=> handleDelete(el)}>{el}</li>)}</ul>
                </div>

                {  

                    !errors.name && !errors.difficulty && !errors.duration && !errors.season && !errors.country? 
                    <button type= 'Submit'> Crear actividad turistica </button>
                    : (<p> Todos los campos deben ser completados para poder crear la actividad turistica </p>)


                 }
            </form>
            {input.country.map(el =>
                <div>
                    <p>{el}</p>
                    <button onClick={()=> handleDelete(el)} >X</button>
                </div>)}
        </div>
    )
}