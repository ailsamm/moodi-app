import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../Calendar/Calendar';
import './Overview.css';


export default class Overview extends Component {
    render() {
        return (
            <div className="overview">
                <div className="overview__topBar">
                    <NavLink to="/add" className="button">
                        <FontAwesomeIcon icon={faPlusCircle}/> new
                    </NavLink>
                    <div className="overview_tipOfTheDay">
                        <p>
                            <span className="overview_tipOfTheDay__intro bold-font">tip of the day: </span>
                            Eating consistently throughout the day helps stabilize blood sugars keeping you feeling energized. </p>
                    </div>
                </div>
                <Calendar/>
            </div>
        )
    }
}