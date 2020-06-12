import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';
import { getIcon } from '../../Helper';
import './Journal.css';


export default class Journal extends Component {
    render() {
        return (
            <div className="journal">
                <div className="journal__topBar">
                    { getIcon("info")}
                    <div className="journal_tipOfTheDay">
                        <p>
                            <span className="journal_tipOfTheDay__intro bold-font">tip of the day: </span>
                            Eating consistently throughout the day helps stabilize blood sugars keeping you feeling energized. 
                        </p>
                    </div>
                </div>
                <Calendar/>
            </div>
        )
    }
}