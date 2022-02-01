import React from "react";
import "./activitycountry.css";
import Navbar from "./navbar";
//import { Link } from "react-router-dom";
import { useState} from "react"; //useDispatch permite acceder a cualquier store pero esta vez para actualizar algo
import { useSelector, useDispatch } from "react-redux"; 
//import { getCountries } from "../actions/index";
import { useHistory } from "use-history";

export default function ActivityCountry() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState([]); //useState es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente
    const [input, setInput] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countries
    });


    function handleSelect(e) {
        setInput({
            ...input,
            //concatenar lo que viene del array 
            countries: [...input.countries, e.target.value]
        });
    }

    function handleCheck(e) {
        if(e.target.checked) {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    }

    function handleChange(e) {
        setInput({ //agregamos el e.target.value (lo que vamos modificando) al input actual 
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="activitycountry">
            <Navbar />
            <h1 className="addTourist">Add Tourist Activity</h1>
            <div>
                <form>
                    <div>
                        <label>Name of the activity: </label>
                        <input type="text" value={input.name} name='name' />
                    </div>
                    <div>
                        <label>Dificulty: </label>
                        <label>
                            <input type="radio" name="dificulty" value="1" onChange={(e) => handleCheck(e)} /> 1
                        </label>
                        <label>
                            <input type="radio" name="dificulty" value="2" onChange={(e) => handleCheck(e)} /> 2
                        </label>
                        <label>
                            <input type="radio" name="dificulty" value="3" onChange={(e) => handleCheck(e)} /> 3
                        </label>
                        <label>
                            <input type="radio" name="dificulty" value="4" onChange={(e) => handleCheck(e)} /> 4
                        </label>
                        <label>
                            <input type="radio" name="dificulty" value="5" onChange={(e) => handleCheck(e)} /> 5
                        </label>
                    </div>
                    <div>
                        <label>Duration: </label>
                        <input type="text" value={input.duration} name='duration' onChange={handleChange}></input>
                        {errors.duration && <p>{errors.duration}</p>}
                    </div>
                    <div>
                        <label>Season: </label>
                        <label>
                            <input type="radio" value='Spring' name='season' onChange={(e) => handleCheck(e)}>Spring</input>
                        </label>
                        <label>
                            <input type="radio" value='Summer' name='season' onChange={(e) => handleCheck(e)}>Summer</input>
                        </label>
                        <label>
                            <input type="radio" value='Autumn' name='season' onChange={(e) => handleCheck(e)}>Autumn</input>
                        </label>
                        <label>
                            <input type="radio" value='Winter' name='season' onChange={(e) => handleCheck(e)}>Winter</input>
                        </label>
                        {errors.season && <p>{errors.season}</p>}
                    </div>
                    <div>
                        <label>Country where it takes place: </label>
                    </div>
                </form>
            </div>
            </div>
    )
}
