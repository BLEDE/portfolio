import React, { Component } from "react";

import Project from "./Projects";
import { projects } from "../content/projects";

export default class Portfolio extends Component {
    myProjects = () =>
        projects.map((project, index) => {
            return (
                <Project
                    data={project}
                    key={project.title}
                />
            );
        });

    render() {
        return (
            <section>
                <h1 className="portfolio title">Portfolio</h1>
                <div className="projects-wrapper">{this.myProjects()}</div>
            </section>
        );
    }
}