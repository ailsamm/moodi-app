import React, { Component } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import MoodiContext from '../../MoodiContext';
import { validateEmail, notNull } from '../../Helpers/validationHelper';
import './LogInPage.css';

export default class LogInPage extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state = {
            email: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: "",
            },
            password: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: "",
            },
            failedLogInError: null
        }
    }

    handleLogInAttempt = (e) => {
        e.preventDefault();
        const context = this.context;
        const formIsValid = this.state.email.isValid &&
            this.state.password.isValid;

        if (formIsValid) {
            const user = context.users.find(user => user.email === this.state.email.value);
            if (user) {
                if (user.password === this.state.password.value){
                    context.onLogIn(user.id);
                    this.props.history.push("/dashboard");
                    return;
                }
                // if password doesn't match email
                else {
                    this.setState({
                        ...this.state,
                        failedLogInError: "Password does not match the supplied email address."
                    })
                }
            }
            // if email address is not in database
            else {
                this.setState({
                    ...this.state,
                    failedLogInError: "No account found for the supplied email address."
                })
            }
        }
        // if the user has outstanding validation corrections to make
        else {
            this.setState({
                ...this.state,
                failedLogInError: "Please fix the errors in red before proceeding."
            })
        }
    }

    // updates email address state on field change
    updateEmail = (value) => {
        const validation = validateEmail(value);
        this.setState({
            ...this.state,
            email: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    // updates password state on field change
    updatePassword = (value) => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            password: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    render(){
        return (
            <div className="logIn">
                <form className="logIn__form centeredForm" onSubmit={this.handleLogInAttempt}>
                    <label htmlFor="logIn__email">email address:</label>
                    <input name="logIn__email" 
                        id="logIn__email" 
                        placeholder="ada.lovelace@gmail.com" 
                        onChange={e => this.updateEmail(e.target.value.toLowerCase())}
                        type="text">
                    </input>
                    {this.state.email.touched && <ValidationError message={this.state.email.validationMessage}/>}
                    <label htmlFor="logIn__password">password:</label>
                    <input name="logIn__password" 
                        id="logIn__password" 
                        placeholder="************" 
                        onChange={e => this.updatePassword(e.target.value)}
                        type="password">
                    </input>
                    {this.state.password.touched && <ValidationError message={this.state.password.validationMessage}/>}
                    {this.state.failedLogInError && <ValidationError message={this.state.failedLogInError}/>}
                    <button type="submit" className="button logIn__submitButton">sign in</button>
                </form>
            </div>
        );
    }
}