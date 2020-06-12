import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonGroup } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import MoodiContext from '../../MoodiContext';
import './Header.css';

export default class Header extends Component {

    static contextType = MoodiContext;

    getFeatures(){
        if (this.context.loggedInUser) {
            const user = this.context.users.find(user => user.id === this.context.loggedInUser) || {};
            return (
                <div className="header__buttons">
                    <Avatar alt={user.first_name} src={user.image} />
                </div>
            )
        }
        return (
            <ButtonGroup className="header__buttons" variant="text" orientation="vertical" aria-label="outlined secondary button group">
                    <NavLink to="/signup" className="button header__signUpButton">sign up</NavLink>
                    <NavLink to="/login" className="button header__logInButton">log in</NavLink>
            </ButtonGroup>
        )
    }

    render() {
        return (
            <div className="header">
                <NavLink to="/" className="header__navLink">
                    <h1 className="header__moodi">moodi</h1>
                </NavLink>
                {this.getFeatures()}                
            </div>
        )
    }
}