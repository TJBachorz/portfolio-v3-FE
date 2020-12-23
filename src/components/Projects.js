import React, { useState, useEffect } from 'react';

import ABCdl from './ABCdl';
import EpicBeer from './EpicBeer';
import Looksy from './Looksy';

import { Words, Animation } from 'arwes';
import { overflow } from './Utilities';

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState("ABC")
    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setAnimShow(!animShow)
    }, [])

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
        <Animation >
            {anim => (
                <div className="projects-tab-container" style={overflow()}>
                    <div className="projects-nav">
                        <div className="ABC project-tab" style={invertColor("ABC")}>
                            <h5 className="ABC project-item" onClick={makeTargetProject}><Words animate>ABC Data Logger</Words></h5>
                        </div>
                        <div className="epic-beer project-tab" style={invertColor("epic-beer")}>
                            <h5 className="epic-beer project-item" onClick={makeTargetProject}><Words animate>Epic Beer Run</Words></h5>
                        </div>
                        <div className="looksy project-tab" style={invertColor("looksy")}>
                            <h5 className="looksy project-item" onClick={makeTargetProject}><Words animate>Looksy</Words></h5>
                        </div>
                    </div>
                    {showProjects[selectedProject]}
                </div>
            )}
        </Animation>
    )
}
