import React, { useState, useEffect } from 'react';

import ABCdl from './ABCdl';
import EpicBeer from './EpicBeer';
import Looksy from './Looksy';

import { playAudio } from './Utilities';

import { useAudio } from './AudioContext';

import { Words } from 'arwes';

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState("ABC")
    const [ animShow, setAnimShow ] = useState(false)

    const clickAudio = document.querySelector(".click-audio")
    const isMuted = useAudio()

    useEffect(() => {
        return !animShow ? setTimeout(() => setAnimShow(!animShow), 100) : null
    }, [animShow])

    const makeTargetProject = (event) => {
        const project = event.currentTarget.className.split(" ")[0];
        playAudio(clickAudio, isMuted)
        setSelectedProject(project)
    }

    const invertColor = (projectName) => {
        return projectName === selectedProject ?
            { backgroundColor: '#27dafd', color: '#010506' }
            : null
    }

    const showProjects = {
        "ABC": <ABCdl/>,
        "epic-beer": <EpicBeer/>,
        "looksy": <Looksy/>,
    }

    return (
        <>
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
        </>
    )
}
