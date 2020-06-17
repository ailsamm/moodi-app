import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Bounce from 'react-reveal';
import './LandingPage.css';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="landingPage centered background">
                    <p className="landingPage__meet">welcome to</p>
                    <Bounce>
                        <h1 className="landingPage__title">moodi</h1>
                    </Bounce>
                    <p className="landingPage__description">your best friend in mood tracking</p>
                    <NavLink to="/signup" className="button landingPage__learnMorebutton">sign up</NavLink>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            </div>
        );
    }
}