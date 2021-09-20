import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from '../Navbar/Navbar';
import { Home } from './Home';
import { contactUs } from './ContactUs';
import { Catalog } from './Catalog';
import { Login } from './Login';

export const ViewClient = (access) => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/ContactUs" exact component={contactUs} />
                    <Route path="/Catalog" exact component={Catalog} />
                    <Route path="/Login"  render={(props) => (  <Login {...props} authed={access} />)} />
                </Switch>
            </Router>
        </div>
    )
}