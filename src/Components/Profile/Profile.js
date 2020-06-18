import React, { Component } from 'react';
import MoodiContext from '../../MoodiContext';
import { NavLink } from 'react-router-dom';
import { getIcon } from '../../Helpers/moodColorHelper';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <MoodiContext.Consumer>
                {context => {
                    const user = context.users.find(user => user.id === context.loggedInUser) || {};
                    return (
                        <div className="profile">
                            <div className="profile__name">
                                <h1 className="profile__name__first">{user.first_name}</h1>
                                <h1 className="profile__name__last">{user.last_name}</h1>
                            </div>
                            <div className="profile__userInfo">
                                <h3><span className="profile__location">{getIcon("map")} </span>Stockholm, Sweden</h3>
                                <h3><span className="profile__key">name:</span> {user.first_name} {user.last_name}</h3>
                                <h3><span className="profile__key">email:</span>{user.email}</h3>
                                <h3><span className="profile__key">about:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel ipsum nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec laoreet nisi. Sed finibus leo ut tempor aliquam. Duis lacinia libero in lectus malesuada, vel venenatis nulla porta. Integer cursus euismod leo, sed bibendum odio feugiat vel. Nam a eros tristique, commodo odio nec, eleifend nisl. Duis volutpat tellus eu dictum dapibus. Donec id purus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas bibendum bibendum tristique.</h3>
                                <NavLink 
                                    to="/" 
                                    className="button profile__button" 
                                    onClick={context.onSignOut}>
                                        sign out
                                </NavLink>
                            </div>
                        </div>
                    )
                }}
            </MoodiContext.Consumer>
        )
    }
}
