import React from 'react';

import { Words, Frame } from 'arwes';

export default function Looksy() {
    return (
        <div className="total-project-container">
            <div className="project-info">
                <h2><Words animate>Looksy</Words></h2>
                <div className="project-link-container">
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/looksy-frontend"><Words animate>Frontend</Words></a></p>
                    <p className="separator"><Words animate>|</Words></p>
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/looksy_backend"><Words animate>Backend</Words></a></p>
                    <p className="separator"><Words animate>|</Words></p>
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/looksy-file-uploader"><Words animate>Node/AWS Backend</Words></a></p>
                    <p className="separator"><Words animate>|</Words></p>
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=HPJ6KVPMPac"><Words animate>Demo</Words></a></p>
                </div>
                <ul>
                    <li><Words animate>Utilized Ruby on Rails back-end API to persist user and 3D modeling data using JWT auth.</Words></li>
                    <li><Words animate>Incorporated second database using Node with Express JS and AWS for URL returns on profile picture uploads.</Words></li>
                    <li><Words animate>Leveraged Google’s model-viewer augmented reality tech to render 3D models in natural environments.</Words></li>
                </ul>
            </div>
            <div className="project-image-container">
                <Frame
                    show={true}
                    animate={true}
                    level={3}
                    corners={2}
                    animTime={1000}
                    layer='primary'
                >
                    <img src="https://as2.ftcdn.net/jpg/02/60/78/83/500_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg"/>
                </Frame>
                <div className="techs">
                    <h6><Words animate>Tech used:</Words></h6>
                    <Frame
                        animate
                        level={3}
                        corners={1}
                        animTime={1000}
                        layer='primary'
                    >
                        <img className="tech-used" src=""/>
                    </Frame>
                </div>
            </div>
        </div>
    )
}
