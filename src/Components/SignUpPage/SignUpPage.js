import React, { Component } from 'react';
import MoodiContext from '../../MoodiContext';
import { validateEmail, notNull, validatePassword, validateRepeatPassword } from '../../ValidationHelper';
import ValidationError from '../ValidationError/ValidationError';
import './SignUpPage.css';

export default class SignUpPage extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state = {
            firstName: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            lastName: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            email: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            password: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            repeatPassword: {
                touched: false,
                validationMessage: "",
                isValid: false,
                value: ""
            },
            failedSignUpError: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // checks that all fields have passed validation measures
        /* const formIsValid = this.state.firstName.isValid &&
            this.state.lastName.isValid &&
            this.state.email.isValid &&
            this.state.jobTitle.isValid &&
            this.state.password.isValid &&
            this.state.repeatPassword.isValid;

        if (formIsValid) {
            const id = createRandomId();
            // two user objects required since each is being sent to a separate DB table
            const newUserLogIn = {
                user_id: id,
                email_address: this.state.email.value.toLowerCase(),
                password: this.state.password.value,
            };
            const newUserInfo = {
                id,
                first_name: this.titleCase(this.state.firstName.value),
                last_name: this.titleCase(this.state.lastName.value),
                job_title: this.state.jobTitle.value,
                team_id: 1
            };
            this.context.onSignUpUser(newUserLogIn, newUserInfo);
            this.props.history.push("/dashboard);
        }
        // ensures that the user has passed all validation measures
        else {
            this.setState({
                ...this.state,
                failedSignUpError: "Please fix the errors in red before proceeding."
            });
        } */
    }

    titleCase(s) {
        let updatedS = s.toLowerCase();
        updatedS = s.charAt(0).toUpperCase() + s.slice(1);
        return updatedS;
    }

    updateFirstName(value) {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            firstName: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        });
    }

    updateLastName(value) {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            lastName: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        });
    }

    updateEmail(value) {
        const validation = validateEmail(value);
        this.setState({
            ...this.state,
            email: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        });
    }

    updatePassword(value) {
        const validation = validatePassword(value);
        this.setState({
            ...this.state,
            password: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        });
    }

    updateRepeatPassword(value) {
        const validation = validateRepeatPassword(value, this.state.password.value);
        this.setState({
            ...this.state,
            repeatPassword: {
                touched: true,
                validationMessage: validation,
                isValid: !validation,
                value
            }
        });
    }

    getSignUpForm() {
        return (
            <div className="signUp centered">
                <form className="signUp__form centeredForm">
                    <label htmlFor="signUp__firstName">first name:</label>
                    <input name="signUp__firstName" 
                        onChange={e => this.updateFirstName(e.target.value)}
                        placeholder="Ada" 
                        id="signUp__firstName" 
                        type="text">
                    </input>
                    {this.state.firstName.touched && <ValidationError message={this.state.firstName.validationMessage}/>}
                    <label htmlFor="signUp__lastName">last name:</label>
                    <input name="signUp__lastName" 
                        onChange={e => this.updateLastName(e.target.value)}
                        id="signUp__lastName" 
                        placeholder="Lovelace" 
                        type="text">
                    </input>
                    {this.state.lastName.touched && <ValidationError message={this.state.lastName.validationMessage}/>}
                    <label htmlFor="signUp__email">email address:</label>
                    <input name="signUp__email" 
                        onChange={e => this.updateEmail(e.target.value)}
                        id="signUp__email" 
                        placeholder="ada.lovelace@gmail.com" 
                        type="text">
                    </input>
                    {this.state.email.touched && <ValidationError message={this.state.email.validationMessage}/>}
                    <label htmlFor="signUp__password">password:</label>
                    <input name="signUp__password" 
                        onChange={e => this.updatePassword(e.target.value)}
                        id="signUp__password" 
                        placeholder="************" 
                        type="password">
                    </input>
                    {this.state.password.touched && <ValidationError message={this.state.password.validationMessage}/>}
                    <label htmlFor="signUp__passwordRepeat">repeat password:</label>
                    <input name="signUp__passwordRepeat" 
                        onChange={e => this.updateRepeatPassword(e.target.value)}
                        id="signUp__passwordRepeat" 
                        placeholder="************" 
                        type="password">
                    </input>
                    {this.state.repeatPassword.touched && <ValidationError message={this.state.repeatPassword.validationMessage}/>}
                    {this.state.failedSignUpError && <ValidationError message={this.state.failedSignUpError}/>}
                    <button type="submit" onClick={this.handleSubmit} className="button signUp__submitButton">sign up</button>
                </form>
            </div>
        );
    }

    render(){
        return (
            <div>
                {this.getSignUpForm()}
            </div>
        );
    }
}