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
            loggedInUser: null,
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

    addMoodLog = (newLog) => {
        const moodLogs = [...this.state.moodLogs, newLog]
        this.setState({ moodLogs })
    }

    deleteMoodLog = (logId) => {
        const moodLogs = this.state.moodLogs.filter(moodLog => moodLog.id !== logId);
        this.setState({ moodLogs})
    }

    render(){
        const contextValue = {
            loggedInUser: this.state.loggedInUser,
            users: this.state.users,
            moodLogs: this.state.moodLogs,
            onAddMoodLog: this.addMoodLog,
            onDeleteMoodLog: this.deleteMoodLog
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
