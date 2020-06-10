import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../Calendar/Calendar';
import './Overview.css';


export default class Overview extends Component {
    render() {
        const month = moment().format("MMMM");
        return (
            <div>
                <h1>{month}</h1>
                <Calendar/>
            </div>
        )
    }
}