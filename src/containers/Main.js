import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import About from '../components/About';

const Main = () => {
    return (
        <div className="main-components">
            <Switch>
                <Route exact path='/' render={props =>
                    <React.Fragment>
                        <Header />
                        <About />
                    </React.Fragment>
                } />
            </Switch>
        </div>
    )
}

export default Main;