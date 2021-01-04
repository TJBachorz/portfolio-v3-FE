import React, { useState, useEffect } from 'react';

import { bioPageSkills, renderTechImages } from './Utilities';

import { Words, Frame } from 'arwes';

import selfPortrait from '../assets/tj-cropped.jpg';

export default function BioPage() {

    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        return !animShow ? setTimeout(() => setAnimShow(!animShow), 100) : null
    }, [animShow])

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
                            <Words className="list-item" show={animShow} animate>Former Professional Filmmaker and Brewer.</Words>
                        </div>
                        <div className="list-item-container">
                            <Words className="list-item" show={animShow} animate>&gt;&gt;&nbsp;&nbsp;</Words>
                            <Words className="list-item" show={animShow} animate>Aims to transition to a career where the landscape is always evolving, and lifelong-learning is a must.</Words>
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