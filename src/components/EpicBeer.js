import React, { useState, useEffect } from 'react';

import { epicBeerTech, renderTechImages } from './Utilities';

import { Words, Frame } from 'arwes';

export default function EpicBeer() {

    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimShow(!animShow)
        }, 100)
    }, [])

    return (
        <>
            <div className="total-project-container">
                <div className="project-info">
                    <h2><Words animate>Epic Beer Run</Words></h2>
                    <div className="project-link-container">
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/Epic-Beer-Run-FE"><Words animate>Frontend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/Epic-Beer-Run-BE"><Words animate>Backend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://www.loom.com/share/b6fc55760ca9464a8a4d99d714bfb18e"><Words animate>Demo</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://epic-beer-run.web.app/"><Words animate>Hosted</Words></a></p>
                    </div>
                    <ul>
                        <li><Words animate>Formulated a clean, fun, interactive map, utilizing TOPOJSON, react-simple-maps and react-tool-tips.</Words></li>
                        <li><Words animate>Introduced accessible React Drag-and-Drop UI for instant point-to-point updates.</Words></li>
                        <li><Words animate>Refined and serialized data pulled from BreweryDB API with Ruby on Rails using rest-client gem.</Words></li>
                    </ul>
                </div>
                <div className="project-image-container">
                    <Frame
                        show={animShow}
                        animate
                        level={3}
                        corners={2}
                        layer='secondary'
                    >
                        <div className="fuzzy-background">
                            <img className="primary-img" src="https://media.giphy.com/media/xdlQcTOqbTpq53xy8c/giphy.gif" alt="project gif"/>
                        </div>
                    </Frame>
                </div>
            </div>
            <div className="techs">
                <h6 className="tech-label"><Words animate>Tech used:</Words></h6>
                <Frame
                    show={animShow}
                    animate
                    level={3}
                    corners={1}
                    layer='secondary'
                >
                    <div className="fuzzy-background">
                        {renderTechImages(epicBeerTech)}
                    </div>
                </Frame>
            </div>
        </>
    )
}
