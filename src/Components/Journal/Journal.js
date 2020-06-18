import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';
import { getWellnessTip } from '../../Helpers/wellnessTips';
import { getIcon } from '../../Helpers/moodColorHelper';
import './Journal.css';


export default class Journal extends Component {
    render() {
        return (
            <div className="journal">
                <div className="journal__topBar">
                    {getIcon("info")}
                    <div className="journal_wellnessTip">
                        <p>
                            <span className="journal_wellnessTip__intro bold-font">wellness tip: </span>
                            {getWellnessTip()} 
                        </p>
                    </div>
                </div>
                <Calendar/>
            </div>
        )
    }
}