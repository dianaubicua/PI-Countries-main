import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, getClean } from "../actions/index";
import Navbar from "./navbar";


export default function Detail (props) {
    console.log(props)
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getClean());
      }, [id])

const myCountry = useSelector((state) => state.detail);

return (

<div className="fondod">
    <Navbar />
<div>

{  myCountry.map(el => {
    return (
        <div>
           {/* <img src= {el?.flags} witdh="200px" height="200px" /> */}
           <h1> Name: {el?.name} </h1>
           <h2> ID: {el?.id} </h2>
           <h4> Continents: {el?.continents} </h4>
           <h4> Capital: {el?.capital} </h4>
           <h4> Subregion: {el?.subregion} </h4>
           <h4> Area:  {el?.area} km2 </h4>
           <h4> Population: {el?.population} </h4>
           <h4> Tourist activities: {el?.activities? el.activities.map((act) => {
    
    return (
        
        <div>
        <h4> Name: {act.name? act.name : "No activities added yet"} </h4>
        <h4> Difficulty: {act.difficulty? act.difficulty : "No activities added yet"} </h4>
        <h4> Duration: {act.duration? act.duration : "No activities added yet"} </h4>
        <h4> Season: {act.season? act.season : "No activities added yet"} </h4>
        </div>
        
     ) }) :( <p> No activities added yet </p>) } </h4> 
           
        </div>

    )
})})
</div>
</div>
)}