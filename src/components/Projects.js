import React, { useState, useEffect } from 'react';

import ABCdl from './ABCdl';
import EpicBeer from './EpicBeer';
import Looksy from './Looksy';

import { Words, Animation } from 'arwes';

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

    // const mainContainer = document.querySelector(".main-container")
    // const projectNav = document.querySelector(".projects-nav")
    // on projects nav
    // const setFixedWidth = () => {
    //     return { width: mainContainer.offsetWidth}
    // }

    return (
        <Animation show={animShow} animate timeout={10000}>
            {anim => (
                <div className="projects-tab-container">
                    <div className="projects-nav">
                        <div className="ABC project-tab" style={{ transition: 'all 250ms ease-out', ...invertColor("ABC")}}>
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
            )}
        </Animation>
    )
}
