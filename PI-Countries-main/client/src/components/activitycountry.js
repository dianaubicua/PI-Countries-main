import React from "react";
import './activitycountry.css';
import Navbar from "./navbar";

export default function CreateActivity() {
    return(
        <div className="fondo">
            <Navbar />
            <h1 className="addTourist">Add Tourist Activity</h1>
            <form>
                <div>
                    <label className="nameAct">Name of the activity: </label>
                    <input type="text" name='name' />
                </div>
                <div>
                    <label className="nameAct">Difficulty:</label>
                    <label>
                        <input className="numeros" name="difficulty" type="radio" value="1" />1
                    </label>
                    <label>
                        <input className="numeros" name="difficulty" type="radio" value="2" />2
                    </label>
                    <label>
                        <input className="numeros" name="difficulty" type="radio" value="3" />3
                    </label>
                    <label>
                        <input className="numeros" name="difficulty" type="radio" value="4" />4
                    </label>
                    <label>
                        <input  className="numeros" name="difficulty" type="radio" value="5" />5
                    </label>
                </div>
                <div>
                    <label className="nameAct">Duration:</label>
                    <input type="text" name='duration'></input>
                </div>
                <div>
                <label className="nameAct">Season: </label>
                    <label>
                        <input className="numeros" name="season" type="radio" value="1" />Spring
                    </label>
                    <label>
                        <input className="numeros" name="season" type="radio" value="2" />Summer
                    </label>
                    <label>
                        <input className="numeros" name="season" type="radio" value="3" />Autumn
                    </label>
                    <label>
                        <input className="numeros" name="season" type="radio" value="4" />Winter
                    </label>
                </div>
            </form>
        </div>
    )
}