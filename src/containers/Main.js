import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className="main-components">
            <Switch>
                <Route exact path='/' render={props =>
                    <React.Fragment>
                        <Header />
                        <About />
                        <Portfolio />
                        <Footer />
                    </React.Fragment>
                } />
            </Switch>
        </div>
    )
}

export default Main;