import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContentRouter from '../MainContentRouter/MainContentRouter';
import MoodiContext from '../../MoodiContext';
import { fetchData, deleteMoodLogInDb } from '../../requestHandler';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: 2,
            users: [],
            moodLogs: []
        }
    }

    componentDidMount() {
        fetchData()
            .then(([users, moodLogs]) => {
                this.setState({
                    users,
                    moodLogs
                })
            })  
            .catch(e => console.log(e));
    }

    addMoodLog = (newLog) => {
        const moodLogs = [...this.state.moodLogs, newLog]
        this.setState({ moodLogs })
    }

    deleteMoodLog = (logId) => {
        deleteMoodLogInDb(logId);
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
