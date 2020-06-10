import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContentRouter from '../MainContentRouter/MainContentRouter';
import MoodiContext from '../../MoodiContext';
import STORE from '../../STORE';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: 1,
            users: [],
            moodLogs: []
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            users: STORE.users,
            moodLogs: STORE.mood_logs
        })
    }

    addMoodLog = () => {
        console.log("saying hi in mood log!");
    }

    render(){
        const contextValue = {
            loggedInUser: this.state.loggedInUser,
            users: this.state.users,
            moodLogs: this.state.moodLogs,
            onAddMoodLog: this.addMoodLog
        }

        return (
            <MoodiContext.Provider value={contextValue}>
                <div className="App">
                    <Header/>
                    <MainContentRouter/>
                </div>
            </MoodiContext.Provider>
        );
    }
}
