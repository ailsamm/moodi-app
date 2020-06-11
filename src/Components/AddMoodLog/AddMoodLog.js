import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faAngry, faLaughBeam, faSun, faGrimace, faBath, faSmile, faTired, faRunning, faMusic, faUsers, faUtensils, faGrinSquintTears, faBook, faLeaf, faTint } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';
import './AddMoodLog.css';

export default class AddMoodLog extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: "",
            focused: false,
            date: null,
            selectedMood: null,
            activities: {
                exercise: false,
                socialize: false,
                eaten: false,
                water: false,
                outdoors: false,
                read: false,
                laugh: false,
                music: false,
                bath: false,
                sun: false
            }
        }
    }

    updateNotes = (notes) => {
        this.setState({notes})
    }

    updateSelectedMood = (e) => {
        this.setState({
            selectedMood: e
        })
    }

    updateActivities = (e) => {
        this.setState({
            activities: {
                ...this.state.activities,
                [`${e}`]: !this.state.activities[e]
            }
        })
    }

    submitLog = () => {
        console.log("hello");
    }

    renderActivities() {
        const activityProps = [
            {name: "Exercised", valueName:"exercise", icon: faRunning},
            {name: "Socialized", valueName:"socialize", icon: faUsers},
            {name: "Eaten", valueName:"eaten", icon: faUtensils},
            {name: "Drunk water", valueName:"water", icon: faTint},
            {name: "Been outdoors", valueName:"outdoors", icon: faLeaf},
            {name: "Read", valueName:"read", icon: faBook},
            {name: "Laughed", valueName:"laugh", icon: faGrinSquintTears},
            {name: "Listened to music", valueName:"music", icon: faMusic},
            {name: "Taken a bath", valueName:"bath", icon: faBath},
            {name: "Soaked in the sun", valueName:"sun", icon: faSun},
        ];

        return (
            <div className="addMoodLog__activityContainer">
                {activityProps.map(activity => {
                    let className = this.state.activities[`${activity.valueName}`] ? `activity${activity.name} selectedActivity`: `activity${activity.name}`;
                    return (
                        <button onClick={e => this.updateActivities(e.target.value)} 
                            key={activity.name.toLowerCase()}
                            className={`addMoodLog__activity ${className}`}
                            value={activity.valueName}>
                                <FontAwesomeIcon icon={activity.icon}/>
                                <p>{activity.name.toLowerCase()}</p>
                        </button> 
                    )
                })}
            </div>
        )
    }

    renderButtons() {
        const moodProps = [
            {name: "Happy", icon: faLaughBeam},
            {name: "Sad", icon: faSadTear},
            {name: "Angry", icon: faAngry},
            {name: "Anxious", icon: faGrimace},
            {name: "Calm", icon: faSmile},
            {name: "Tired", icon: faTired},
        ];

        return (
            <div className="addMoodLog__moodButtonContainer">
                {moodProps.map(mood => {
                    let className = mood.name.toLowerCase() === this.state.selectedMood ? `mood${mood.name} selectedMood`: `mood${mood.name}`;
                    return (
                        <button onClick={e => this.updateSelectedMood(e.target.value)} 
                            key={mood.name.toLowerCase()}
                            className={`addMoodLog__moodButton ${className}`}
                            value={mood.name.toLowerCase()}>
                                <FontAwesomeIcon icon={mood.icon}/>
                                <p>{mood.name.toLowerCase()}</p>
                        </button> 
                    )
                })}
            </div>            
        )
    }

    render() {
        return (
            <div className="addMoodLog">
                <h1>Log Mood</h1>
                <div className="addMoodLog__section">
                    <h2>How are you feeling?</h2>
                    {this.renderButtons()}
                </div>
                <div className="addMoodLog__section">
                    <h2>What have you done today?</h2>
                    {this.renderActivities()}
                </div>
                <div className="addMoodLog__section addMoodLog__section__details">
                    <TextField
                        id="filled-multiline-static"
                        label="Notes"
                        multiline
                        rows={4}
                        variant="filled"
                        onChange={e => this.updateNotes(e.target.value)}
                    />
                    <SingleDatePicker
                        date={null} 
                        onDateChange={date => this.setState({ date })}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        id="addMoodLog__datePicker"
                    />
                </div>
                <button type="button" onClick={this.submitLog()} className="button addMoodLog__saveButton">save</button>
            </div>
        )
    }
}