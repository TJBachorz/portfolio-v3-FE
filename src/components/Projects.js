import React, { useState } from 'react';

import ABCdl from './ABCdl';
import EpicBeer from './EpicBeer';
import Looksy from './Looksy';

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState("ABC")

    const makeTargetProject = (event) => {
        const project = event.currentTarget.className.split(" ")[0];
        setSelectedProject(project)
    }

    const checkIfActive = (projectName) => {
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
        <div className="projects-tab">
            <div className="projects-nav">
                <h4 className="ABC project-item" style={checkIfActive("ABC")} onClick={makeTargetProject}>ABC Data Logger</h4>
                <h4 className="epic-beer project-item" style={checkIfActive("epic-beer")} onClick={makeTargetProject}>Epic Beer Run</h4>
                <h4 className="looksy project-item" style={checkIfActive("looksy")} onClick={makeTargetProject}>Looksy</h4>
            </div>
            {showProjects[selectedProject]}
        </div>
    )
}
