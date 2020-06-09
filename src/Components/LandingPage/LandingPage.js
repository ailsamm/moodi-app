import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="landingPage centeredContent">
                <p className="landingPage__meet">meet</p>
                <h1 className="landingPage__title">moodi</h1>
                <p className="landingPage__description">your best friend in mood tracking</p>
                <NavLink to="/signup" className="button landingPage__learnMorebutton">sign up</NavLink>
            </div>
        );
    }
}