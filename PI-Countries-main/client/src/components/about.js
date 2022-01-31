import React from "react";
import "./about.css";
import Navbar from "./navbar";

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <h1>About "Adventures in Countries"</h1>
            <p>Individual Project created at Henry's Bootcamp.</p>
            <p>This project was created to showcase the knowledge acquired in the course and to show how to use the technologies learned:
                React, Redux, JavaScript, Vanilla CSS, NodeJS, Express, PostgreSQL and Sequelize.
            </p>
            <p>It gets info from all countries from the RestCountries API and stores it into my own database in order to be able to add tourist activities to each country.</p>
        </div>
    )
}

export default About;