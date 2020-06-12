import React, { Component } from 'react';
import MoodiContext from '../../MoodiContext';
import { NavLink } from 'react-router-dom';
import { getIcon } from '../../Helper';
import './HeaderButtons.css';

export default class HeaderButtons extends Component {

    static contextType = MoodiContext;

    getButtons = () => {
        if (this.context.loggedInUser) {
            return [
                {name: "dashboard", icon: "dash", to: "/dashboard"},
                {name: "journal", icon: "calendar", to: "/journal"},
                {name: "new log", icon: "pencil", to: "/add"}
            ]
        }
        else {
            return [
                {name: "sign up", icon: "pencil", to: "/signup"},
                {name: "log in", icon: "user", to: "/login"}
            ]
        }
    }

    render() {
        const buttons = this.getButtons();
        return (
            <div className="headerButtons">
                {buttons.map(button => {
                    return (
                        <NavLink to={button.to} 
                            id={button.name}
                            onClick={this.handleSelectButton}
                            key={button.name}>
                                {getIcon(button.icon)}
                                {button.name}
                        </NavLink>
                    )
                })}
            </div>
        )
    }
}