import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>
                        Brian Lederman Portfolio
                    </Link>
                        <ul className="navbar navbar-nav navbar-right">
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;