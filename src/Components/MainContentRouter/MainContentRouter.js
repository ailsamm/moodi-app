import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddMoodLog from '../AddMoodLog/AddMoodLog';
import LandingPage from '../LandingPage/LandingPage';
import LogInPage from '../LogInPage/LogInPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import Journal from '../Journal/Journal';
import Dashboard from '../Dashboard/Dashboard';
//import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SignUpPage from '../SignUpPage/SignUpPage';
import './MainContentRouter.css'
export default class MainContentRouter extends Component {

    // logic to handle routing of the main content web page area
    render(){
        return (
            <main className="mainContent">
                <Switch>
                    <Route 
                        exact 
                        key='landing'
                        path='/' 
                        component={LandingPage}
                    />
                    <Route 
                        exact 
                        key='login'
                        path='/login' 
                        component={LogInPage}
                    />
                    <Route 
                        exact 
                        key='signup'
                        path='/signup' 
                        component={SignUpPage}
                    />
                    <Route 
                        exact 
                        key='journal'
                        path='/journal' 
                        component={Journal}
                    />
                    <Route 
                        exact 
                        key='dashboard'
                        path='/dashboard' 
                        component={Dashboard}
                    />
                    <Route 
                        exact 
                        key='addmood'
                        path='/add' 
                        component={AddMoodLog}
                    />
                    <Route 
                        exact 
                        key='unauthorized'
                        path='/unauthorized' 
                        render={() => <ErrorPage error={{code: "403", message:"Access forbidden"}}/>}
                    />
                    <Route
                        key="notFound"
                        render={() => <ErrorPage error={{code: "404", message:"Page not found"}}/>}
                    />
                </Switch>
            </main>
        );
    }
}