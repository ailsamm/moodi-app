import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faAngry, faLaughBeam, faTv, faCalendarAlt, faBalanceScale, faSun, faHandSparkles, faHeart, faGrimace, faPeopleArrows, faBath, faSmile, faTired, faRunning, faMusic, faUsers, faUtensils, faGrinSquintTears, faBook, faLeaf, faTint } from '@fortawesome/free-solid-svg-icons';
import { TextField, Slider } from '@material-ui/core';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import MoodiContext from '../../MoodiContext';
import moment from 'moment';
import './AddMoodLog.css';

export default class AddMoodLog extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state = {
            notes: "",
            sleepHours: 8,
            focused: false,
            date: moment(),
            selectedMood: null,
            activities: {
                exercise: false,
                family: false,
                friends: false,
                eat: false,
                date: false,
                water: false,
                outdoors: false,
                read: false,
                clean: false,
                movies: false,
                laugh: false,
                music: false,
                bath: false,
                sun: false,
                relax: false
            }
        }
    }

    updateNotes = (notes) => {
        this.setState({notes})
    }

    updateSleepHours = (e, sleepHours) => {
        this.setState({ sleepHours })
    }

    updateSelectedMood = (mood) => {
        // control toggling of mood options
        const selectedMood = this.state.selectedMood === mood ? null : mood;
        this.setState({ selectedMood })
    }

    updateActivities = (e) => {
        this.setState({
            activities: {
                ...this.state.activities,
                [`${e}`]: !this.state.activities[e]
            }
        })
    }

    submitLog = (e) => {
        e.preventDefault();

        if (this.state.selectedMood){
            const activities = Object.entries(this.state.activities).reduce((acc, [key, value]) => {
                if (value) return [...acc, key];
                return acc;
            }, []);

            const newLog = {
                id: 99, // TO DO: make dynamic
                user_id: this.context.loggedInUser,
                mood: this.state.selectedMood,
                start: this.state.date.toDate(),
                end: this.state.date.toDate(),
                title: "\xA0",
                notes: this.state.notes,
                activities
            }

            this.context.onAddMoodLog(newLog);
            this.props.history.push("/overview");
        }
        else {
            console.log("please select a mood");
        }
    }

    renderActivities() {
        const activityProps = [
            {name: "Exercising", valueName:"exercise", icon: faRunning},
            {name: "Family", valueName:"family", icon: faUsers},
            {name: "Friends", valueName:"friends", icon: faPeopleArrows},
            {name: "Healthy eating", valueName:"eat", icon: faUtensils},
            {name: "Date", valueName:"date", icon: faHeart},
            {name: "Drink water", valueName:"water", icon: faTint},
            {name: "Outdoors", valueName:"outdoors", icon: faLeaf},
            {name: "Reading", valueName:"read", icon: faBook},
            {name: "Cleaning", valueName:"clean", icon: faHandSparkles},
            {name: "TV / Movies", valueName:"movies", icon: faTv},
            {name: "Laughing", valueName:"laugh", icon: faGrinSquintTears},
            {name: "Music", valueName:"music", icon: faMusic},
            {name: "Bath", valueName:"bath", icon: faBath},
            {name: "Sun", valueName:"sun", icon: faSun},
            {name: "Relaxing", valueName:"relax", icon: faBalanceScale}
        ];

        return (
            <div className="addMoodLog__activityContainer">
                {activityProps.map(activity => {
                    let className = this.state.activities[`${activity.valueName}`] ? `activity${activity.name} selectedActivity`: `activity${activity.name}`;
                    return (
                        <button onClick={e => this.updateActivities(e.target.value)} 
                            key={activity.name.toLowerCase()}
                            type="button"
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
                            type="button"
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
            <form className="addMoodLog" onSubmit={e => this.submitLog(e)} >
                <div className="addMoodLog__section">
                    <h2>How are you feeling?</h2>
                    {this.renderButtons()}
                </div>
                <div className="addMoodLog__section">
                    <h2>What have you done today?</h2>
                    {this.renderActivities()}
                </div>
                <div className="addMoodLog__section addMoodLog__section__details">
                    <div>
                        <h3>Add some notes here:</h3>
                        <TextField
                            id="filled-multiline-static"
                            label="Dear diary..."
                            multiline
                            rows={4}
                            variant="filled"
                            onChange={e => this.updateNotes(e.target.value)}
                        />
                    </div>
                    <div className="addMoodLog__sleepDateContainer">
                        <div className="addMoodLog__sleepHoursContainer">
                            <h3>Hours of sleep:</h3>
                            <Slider
                                defaultValue={8}
                                getAriaValueText={this.value}
                                onChange={this.updateSleepHours}
                                aria-labelledby="sleep hours"
                                step={1}
                                marks
                                min={0}
                                max={14}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <div className="addMoodLog__datePickerContainer">
                            <FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;&nbsp;
                            <SingleDatePicker
                                date={moment()} 
                                onDateChange={date => this.setState({ date })}
                                focused={this.state.focused}
                                onFocusChange={({ focused }) => this.setState({ focused })}
                                id="addMoodLog__datePicker"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="button addMoodLog__saveButton">save</button>
            </form>
        )
    }
}