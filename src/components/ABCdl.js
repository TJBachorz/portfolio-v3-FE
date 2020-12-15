import React from 'react';

import { Words, Frame } from 'arwes';

export default function ABCdl() {
    return (
        <div className="total-project-container">
            <div className="project-info">
                <h2><Words animate>ABC Data Logger</Words></h2>
                <div className="project-link-container">
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/ABC-Data-Logger-FE"><Words animate>Frontend</Words></a></p>
                    <p className="separator"><Words animate>|</Words></p>
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/ABC_Data_Logger_BE"><Words animate>Backend</Words></a></p>
                    <p className="separator"><Words animate>|</Words></p>
                    <p className="project-links"><a rel="noreferrer" target="_blank" href="https://www.loom.com/share/ceb43bedf201465f8bec3eee151d2bbd"><Words animate>Demo</Words></a></p>
                </div>
                <ul>
                    <li><Words animate>Harnessed React Native Navigation library to create an intuitive UI and engaging user experience.</Words></li>
                    <li><Words animate>Implemented Python/Django backend to persist JWT-authenticated user data and make speedy HTTP requests.</Words></li>
                    <li><Words animate>Engineered the application to function on both iOS and Android devices in preparation of iOS and Google Play Store releases.</Words></li>
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
