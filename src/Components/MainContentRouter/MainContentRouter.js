import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ErrorPage from '../ErrorPage/ErrorPage';
import './MainContentRouter.css'
export default class MainContentRouter extends Component {

    // logic to handle routing of the main content web page area
    render(){
        return (
            <main className="mainContent">
                <Switch>
                    <Route 
                        exact 
                        key='/'
                        path='/' 
                        component={LandingPage}
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