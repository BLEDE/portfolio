import React, { Component } from "react";

export default class Project extends Component {
    render() {
        const {
            title,
            screenshot,
            deploy,
            details,
            stack
        } = this.props.data;
        return (
            <article className="project">
                <a href={deploy} target="_blank">
                    <img src={screenshot} alt={title} className={"projImg"} />
                </a>
                <h4 className="projTitle">{title}</h4>
                <p className="projDesc">{details}</p>
                <p className="projStack">
                    Tech stack: <span>{stack}</span>
                </p>
            </article>
        )
    }
}