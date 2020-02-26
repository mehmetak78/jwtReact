import React, {Fragment} from 'react';

import './App.css';

import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    return (
        <AuthState>
            <AlertState>
                <Router>
                    <Fragment>
                        <Navbar/>
                        <div className="container">
                            <Alerts/>
                            <Switch>
                                <PrivateRoute exact path='/' component={Home} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/register' component={Register} />
                                <Route exact path='/login' component={Login} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </AlertState>
        </AuthState>
    );
};

export default App;
