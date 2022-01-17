import React, { useState, useEffect } from 'react';

import { bioPageSkills, renderTechImages, onLoadEffects } from './Utilities';

import { Words, Frame } from 'arwes';

import selfPortrait from '../assets/tj-cropped.jpg';

import { useAudio } from './AudioContext';

export default function BioPage() {
    
    const [ animShow, setAnimShow ] = useState(false)
    
    const isMuted = useAudio()
    
    useEffect(() => {
        const deployAudio = document.querySelector(".deploy-audio")
        onLoadEffects(animShow, setAnimShow, deployAudio, isMuted, 100)
    }, [animShow, isMuted])

    return (
        <>
            <section className="bio-page-container">
                <div className="bio-info">
                    <div className="data-block-container">
                        <div className="my-name data-block">
                            <p className="bio-data"><Words show={animShow} animate>subject_name:</Words></p> 
                            <p className="answer"><Words show={animShow} animate>Thomas Bachorz</Words></p>
                        </div>
                        <div className="nickname data-block">
                            <p className="bio-data"><Words show={animShow} animate>nickname:</Words></p>
                            <p className="answer"><Words show={animShow} animate>TJ</Words></p>
                        </div>
                        <div className="occupation data-block">
                            <p className="bio-data"><Words show={animShow} animate>occupation:</Words></p>
                            <p className="answer"><Words show={animShow} animate>Full-Stack Software Developer</Words></p>
                        </div>
                    </div>
                    <div className="list-container">
                        <div className="list-item-container">
                            <Words className="list-item" show={animShow} animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" show={animShow} animate>Believes positivity and communication lead to the best outcomes.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" show={animShow} animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" show={animShow} animate>Loves clean code, automation, and navigating new frameworks.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" show={animShow} animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" show={animShow} animate>Brazilian jiu-jitsu practitioner.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" show={animShow} animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" show={animShow} animate>Former Professional Filmmaker and Brewer.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" show={animShow} animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" show={animShow} animate>Considered dangerously dependable and should be approached with extreme enthusiasm.</Words>
                        </div>
                    </div>   
                </div>
                <div className="bio-image-container">
                    <Frame
                        className="frame"
                        show={animShow}
                        animate
                        level={3}
                        corners={2}
                        layer='secondary'
                    >
                        <div className="fuzzy-background">
                            <img className="primary-img" src={selfPortrait} alt="project gif"/>
                        </div>
                    </Frame>
                </div>
                <div className="width100">
                    <div className="skills techs">
                        <h6 className="tech-label"><Words show={animShow} animate>Skills:</Words></h6>
                        <Frame
                            className="frame"
                            show={animShow}
                            animate
                            level={2}
                            corners={1}
                            layer='secondary'
                        >
                            <div className="fuzzy-background">
                                {renderTechImages(bioPageSkills)}
                            </div>
                        </Frame>
                    </div>
                </div>
            </section>
        </>
    )
}