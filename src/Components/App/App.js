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
            moods: []
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            users: STORE.users,
            moods: STORE.moods
        })
    }

    render(){
        const contextValue = {
            loggedInUser: this.state.loggedInUser,
            users: this.state.users,
            moods: this.state.moods
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
