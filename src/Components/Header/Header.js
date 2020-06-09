import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/" className="header__navLink">
                    <h1 className="header__moodi">moodi</h1>
                </NavLink>
            </div>
        )
    }
}