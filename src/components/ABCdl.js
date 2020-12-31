import React, { useState, useEffect } from 'react';

import { ABCTech, renderTechImages } from './Utilities';

import { Words, Frame } from 'arwes';

export default function ABCdl() {

    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setTimeout(() => setAnimShow(!animShow), 100)
    }, [])

    return (
        <>
            <div className="total-project-container">
                <div className="project-info">
                    <h2><Words animate >ABC Data Logger</Words></h2>
                    <div className="project-link-container">
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/ABC-Data-Logger-FE"><Words animate>Frontend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/ABC_Data_Logger_BE"><Words animate>Backend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://www.loom.com/share/ceb43bedf201465f8bec3eee151d2bbd"><Words animate>Demo</Words></a></p>
                    </div>
                    <div className="project-list-container">
                        <div className="list-item-container">
                            <Words className="list-item" animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" animate>Harnessed React Native Navigation library to create an intuitive UI and engaging user experience.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" animate>Implemented Python/Django backend to persist JWT-authenticated user data and make speedy HTTP requests.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" animate>Engineered the application to function on both iOS and Android devices in preparation of iOS and Google Play Store releases.</Words>
                        </div>
                    </div>
                </div>
                <div className="project-image-container">
                    <Frame
                        className="frame"
                        show={animShow}
                        animate
                        level={3}
                        corners={2}
                        layer='secondary'
                    >
                        <div className="fuzzy-background">
                            <img className="primary-img" src="https://media1.giphy.com/media/5Imt9DlRz1vnJTM8P0/giphy.gif" alt="project gif"/>
                        </div>
                    </Frame>
                </div>
            </div>
            <div className="width100">
                <div className="techs">
                    <h6 className="tech-label"><Words animate>Tech used:</Words></h6>
                    <Frame
                        className="frame"
                        show={animShow}
                        animate
                        level={3}
                        corners={1}
                        layer='secondary'
                    >
                        <div className="fuzzy-background">
                            {renderTechImages(ABCTech)}
                        </div>
                    </Frame>
                </div>
            </div>
        </>
    )
}
