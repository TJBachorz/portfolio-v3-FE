import React, { useState, useEffect } from 'react';

import { epicBeerTech, renderTechImages, onLoadEffects } from './Utilities';

import { useAudio } from './AudioContext';

import { Words, Frame } from 'arwes';

export default function EpicBeer() {

    const isMuted = useAudio()
    
    const [ animShow, setAnimShow ] = useState(false)
    
    const typingAudio = document.querySelector(".typing-audio")

    useEffect(() => {
        onLoadEffects(animShow, setAnimShow, typingAudio, isMuted, 100)
    }, [animShow, typingAudio])

    return (
        <>
            <div className="epic-beer total-project-container">
                <div className="epic-beer-info project-info">
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
                    <div className="project-list-container">
                        <div className="list-item-container">
                            <Words className="list-item" animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" animate>Formulated a clean, fun, interactive map, utilizing TOPOJSON, react-simple-maps and react-tool-tips.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" animate>Introduced accessible React Drag-and-Drop UI for instant point-to-point updates.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" animate>Refined and serialized data pulled from BreweryDB API with Ruby on Rails using rest-client gem.</Words>
                        </div>
                    </div>
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
                            <img className="primary-img" src="https://media.giphy.com/media/xdlQcTOqbTpq53xy8c/giphy.gif" alt="epic-beer"/>
                        </div>
                    </Frame>
                </div>
            </div>
            <div className="width100">
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
            </div>
        </>
    )
}
