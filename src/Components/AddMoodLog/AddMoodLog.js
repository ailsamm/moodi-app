import React, { Component } from 'react';
import { TextField, Slider } from '@material-ui/core';
import { SingleDatePicker } from 'react-dates';
import { getIcon } from '../../Helper';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import MoodiContext from '../../MoodiContext';
import moment from 'moment';
import config from '../../config';
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
                user_id: this.context.loggedInUser,
                mood: this.state.selectedMood,
                start_date: this.state.date.format("MM-DD-YYYY").toString(),
                end_date: this.state.date.format("MM-DD-YYYY").toString(),
                start: this.state.date.toDate(),
                end: this.state.date.toDate(),
                title: "\xA0",
                sleep_hours: this.state.sleepHours,
                notes: this.state.notes,
                activities: activities.join(",")
            }

            fetch(`${config.serverUrl}/mood-logs/`, {
                method: 'POST',
                body: JSON.stringify(newLog),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(moodLogRes => {
                if (!moodLogRes.ok) {
                    throw new Error('An error occurred while attempting to add new mood log');
                }
                return moodLogRes.json()
            })
            .then(moodLogJson => {
                newLog.id = moodLogJson.id
                this.context.onAddMoodLog(newLog);
                this.props.history.push("/journal");
            })
            .catch(e => console.log(e));   
        }
        else {
            console.log("please select a mood");
        }
    }

    renderActivities() {
        const activityProps = [
            {name: "Exercising", valueName:"exercise"},
            {name: "Family", valueName:"family"},
            {name: "Friends", valueName:"friends"},
            {name: "Healthy eating", valueName:"eat"},
            {name: "Date", valueName:"date"},
            {name: "Drink water", valueName:"water"},
            {name: "Outdoors", valueName:"outdoors"},
            {name: "Reading", valueName:"read"},
            {name: "Cleaning", valueName:"clean"},
            {name: "TV / Movies", valueName:"movies"},
            {name: "Laughing", valueName:"laugh"},
            {name: "Music", valueName:"music"},
            {name: "Bath", valueName:"bath"},
            {name: "Sun", valueName:"sun"},
            {name: "Relaxing", valueName:"relax"}
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
                                {getIcon(activity.valueName)}
                                <p>{activity.name.toLowerCase()}</p>
                        </button> 
                    )
                })}
            </div>
        )
    }

    renderButtons() {
        const moodNames = ["Happy", "Sad", "Angry", "Anxious", "Calm", "Tired"];

        return (
            <div className="addMoodLog__moodButtonContainer">
                {moodNames.map(mood => {
                    let className = mood.toLowerCase() === this.state.selectedMood ? `mood${mood} selectedMood`: `mood${mood}`;
                    return (
                        <button onClick={e => this.updateSelectedMood(e.target.value)} 
                            key={mood.toLowerCase()}
                            type="button"
                            className={`addMoodLog__moodButton ${className}`}
                            value={mood.toLowerCase()}>
                                {getIcon(mood.toLowerCase())}
                                <p className="bold-font">{mood.toLowerCase()}</p>
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
                            {getIcon("calendar")}&nbsp;&nbsp;
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