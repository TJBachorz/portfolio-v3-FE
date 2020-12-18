import React, { useState } from 'react';

import ABCdl from './ABCdl';
import EpicBeer from './EpicBeer';
import Looksy from './Looksy';

import { Words } from 'arwes';

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState("ABC")

    const makeTargetProject = (event) => {
        // console.log(event.currentTarget.parentNode)
        const project = event.currentTarget.className.split(" ")[0];
        setSelectedProject(project)
    }

    const invertColor = (projectName) => {
        if (projectName === selectedProject) {
            return {
                backgroundColor: '#27dafd',
                color: '#010506'
            }
        }
    }

    const showProjects = {
        "ABC": <ABCdl/>,
        "epic-beer": <EpicBeer/>,
        "looksy": <Looksy/>,
    }

    return (
        <div className="projects-tab-container">
            <div className="projects-nav">
                <div className="ABC project-tab" style={invertColor("ABC")}>
                    <h4 className="ABC project-item" onClick={makeTargetProject}><Words animate>ABC Data Logger</Words></h4>
                </div>
                <div className="epic-beer project-tab" style={invertColor("epic-beer")}>
                    <h4 className="epic-beer project-item" onClick={makeTargetProject}><Words animate>Epic Beer Run</Words></h4>
                </div>
                <div className="looksy project-tab" style={invertColor("looksy")}>
                    <h4 className="looksy project-item" onClick={makeTargetProject}><Words animate>Looksy</Words></h4>
                </div>
            </div>
            {showProjects[selectedProject]}
        </div>
    )
}
