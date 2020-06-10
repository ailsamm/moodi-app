import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import MoodiContext from '../../MoodiContext';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css';

const localizer = momentLocalizer(moment);

export default class CalendarComp extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state = {
            events: [
              {
                start: moment().toDate(),
                end: moment().toDate(),
                title: "a"
              }
            ]
        }
    }

    getEvents(moods){
        const userMoods = moods.filter(mood => mood.user_id === this.context.loggedInUser);
        return userMoods;
    }

    eventPropGenerator(event){
        let newStyle = {
            color: 'black',
            borderRadius: "10px",
            border: "none"
        };
        switch(event.mood) {
            case "happy":
                newStyle.backgroundColor = "#e9d66bb2"; // yellow
                break;
    
            case "sad":
                newStyle.backgroundColor = "#82cbe1b2"; // blue
                break;
    
            case "anxious":
                newStyle.backgroundColor = "#eeb24cb2"; // orange
                break;
    
            case "calm":
                newStyle.backgroundColor = "#5fc4aebd"; // green
                break;
    
            case "angry":
                newStyle.backgroundColor = "#e17c7c9c"; // red
                break;

            default: 
                newStyle.backgroundColor = "gray";
        }
        
    
        return {
            className: "",
            style: newStyle
        }
    }
  
    render() {
      return (
          <MoodiContext.Consumer>
              {context => (
                <div className="calendar">
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        views={['month']}
                        events={this.getEvents(context.moods)}
                        style={{ height: "100vh" }}
                        eventPropGetter={event => this.eventPropGenerator(event)}
                    />
                </div>)}
        </MoodiContext.Consumer>
      );
    }
  }