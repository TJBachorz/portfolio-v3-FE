import React, { useState } from 'react';

import ABCdl from './ABCdl';
import EpicBeer from './EpicBeer';
import Looksy from './Looksy';

import { Words } from 'arwes';

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState("ABC")

    const makeTargetProject = (event) => {
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
        <div className="projects-tab">
            <div className="projects-nav">
                <h4 className="ABC project-item" style={invertColor("ABC")} onClick={makeTargetProject}><Words animate>ABC Data Logger</Words></h4>
                <h4 className="epic-beer project-item" style={invertColor("epic-beer")} onClick={makeTargetProject}><Words animate>Epic Beer Run</Words></h4>
                <h4 className="looksy project-item" style={invertColor("looksy")} onClick={makeTargetProject}><Words animate>Looksy</Words></h4>
            </div>
            {showProjects[selectedProject]}
        </div>
    )
}
