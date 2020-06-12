import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import MoodiContext from '../../MoodiContext';
import moment from 'moment';
import MoodModal from './MoodModal';
import { getMoodColor, getIcon } from '../../Helper';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css';

const localizer = momentLocalizer(moment);

export default class CalendarComp extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state = {
            moods: [],
            isModalOpen: false,
            selectedLog: {
                start: moment(),
                end: moment(),
                mood: "angry",
                activities: [],
                title: "\xA0",
                id: 100,
                user_id: 1,
                sleepHours: 0,
                notes: ""
            }
        }
    }

    handleClick = (e) => {
        this.setState({
            selectedLog: e,
            isModalOpen: true
        })
    }

    getEvents(){
        const moodLogs = this.context.moodLogs || [];
        const userMoodLogs = moodLogs.filter(mood => mood.user_id === this.context.loggedInUser);
        userMoodLogs.forEach(log => log.title = getIcon(log.mood));
        return userMoodLogs;
    }

    eventPropGenerator(event){
        let newStyle = {
            color: 'black',
            borderRadius: "10px",
            border: "none",
            backgroundColor: getMoodColor(event.mood)
        };
    
        return {
            className: "",
            style: newStyle,
            id: event.id
        }
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    getMood(){
        return {
            start: moment(),
            end: moment(),
            mood: "angry",
            activities: ['sun', 'eat', 'family', 'outdoors', 'date'],
            title: "\xA0",
            id: 100,
            user_id: 1,
            sleepHours: 8,
            notes: "Today I went over to hang out with some friends. I wasn't feeling great in the morning, but after socialising a bit, I felt a lot better."
        }
    }
  
    render() {
        return (
            <MoodiContext.Consumer>
                {context => (
                    <div className="calendar">
                        <Calendar
                            popup={true}
                            onSelectEvent={e => this.handleClick(e)}
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="month"
                            views={['month']}
                            events={this.getEvents()}
                            style={{ height: "100vh" }}
                            eventPropGetter={event => this.eventPropGenerator(event)}
                        />
                        <MoodModal open={this.state.isModalOpen} moodLog={this.state.selectedLog} handleClose={this.handleCloseModal}/>
                    </div>)}
            </MoodiContext.Consumer>
        );
    }
  }