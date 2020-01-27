import React, {Component} from 'react';

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            offset: 0
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset / 2
        });
    };
    render() {
        return (
            <header
                className="header-bg"
                style={{ backgroundPositionY: this.state.offset }}
            >
                <section
                    className='header-info'
                    style={{ bottom: this.state.offset }}
                >
                    <h1>Brian Lederman</h1>
                    <h3>Front End Developer</h3>
                </section>
            </header >
        );
    }
}