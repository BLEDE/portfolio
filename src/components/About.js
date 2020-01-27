import React, { Component } from 'react';
import Headshot from '../images/grad.jpg';
import { about } from "../content/about";

export default class About extends Component {
    render() {
        const description = about.map((point, index) => {
            return (
                <p key={`about ${index}`}>
                    {point} <br />
                    <br />
                </p>
            );
        });
        return (
            <div className="about-wrapper">
                <div className="about-content">
                    <article className="about-article">
                        <h2>About Me</h2>
                        <img
                            className="about-img"
                            src={Headshot}
                            alt="brian lederman"
                        />
                        <div className="link-icons">
                            <a href="https://www.linkedin.com/in/brian-lederman/"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="https://github.com/BLEDE"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fa fa-github" />
                            </a>
                        </div>
                    </article>
                    <article className="description">
                        <div>
                            {description}
                            <a
                                href="https://drive.google.com/file/d/1avG7ZTctvWRV3w0oBd0dB4z4QHJIQlIe/view?usp=sharing"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="resume-link"
                            >
                                resume
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}