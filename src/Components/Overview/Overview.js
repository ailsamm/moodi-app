import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../Calendar/Calendar';
import './Overview.css';


export default class Overview extends Component {
    render() {
        return (
            <div>
                <Calendar/>
            </div>
        )
    }
}