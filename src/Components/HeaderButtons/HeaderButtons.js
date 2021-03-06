import React, { Component } from 'react';
import MoodiContext from '../../MoodiContext';
import { NavLink } from 'react-router-dom';
import { getIcon } from '../../Helpers/moodColorHelper';
import { Tooltip } from '@material-ui/core/';
import './HeaderButtons.css';

export default class HeaderButtons extends Component {

    static contextType = MoodiContext;

    getButtons = () => {
        if (this.context.loggedInUser != null) {
            return [
                {name: "dashboard", icon: "chart", to: "/dashboard"},
                {name: "journal", icon: "calendar", to: "/journal"},
                {name: "new log", icon: "pencil", to: "/add"},
                {name: "profile", icon: "user", to: "/profile"},
            ]
        }
        else {
            return [
                {name: "sign up", icon: "addUser", to: "/signup"},
                {name: "log in", icon: "signIn", to: "/login"}
            ]
        }
    }

    render() {
        const buttons = this.getButtons();
        return (
            <div className="headerButtons">
                {buttons.map(button => {
                    return (
                        <Tooltip 
                            className="headerButton__tooltip"
                            arrow 
                            interactive={true}
                            placement="bottom" 
                            key={button.name}
                            title={button.name}>
                            <NavLink to={button.to} 
                                id={button.name}
                                onClick={this.handleSelectButton}>
                                    <div className="headerButtons__button">
                                        {getIcon(button.icon)}
                                        <span className="headerButtons__buttonName">&nbsp;{button.name}</span>
                                    </div>
                            </NavLink>
                        </Tooltip>
                    )
                })}
            </div>
        )
    }
}