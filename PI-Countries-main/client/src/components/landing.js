import React from 'react';
import './landing.css';
import Plecainicio from './plecainicio';
import { GiBinoculars } from 'react-icons/gi';

const Landing = () => {
    return(
        <div className='landing'>
            <Plecainicio />
            <a href='/home'>
                <button className="btn-primary" >
                    Start <GiBinoculars/>
                </button>
            </a>
        </div>
    )
}

export default Landing;