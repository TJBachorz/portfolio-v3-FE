import React, { useState, useEffect } from 'react';

import { onLoadEffects, playAudio } from './Utilities';

import { useAudio } from './AudioContext';

import { Animation, Frame } from 'arwes';

export default function Navbar({ selectedPage, setSelectedPage }) {

    const [ animShow, setAnimShow ] = useState(false)

    const clickAudio = document.querySelector(".click-audio")
    const isMuted = useAudio()
    
    useEffect(() => {
        const informationAudio = document.querySelector(".information-audio")
        onLoadEffects(animShow, setAnimShow, informationAudio, isMuted, 100)
    }, [animShow])

    const makeTargetPage = (event) => {
        const page = event.currentTarget.className.split(" ")[0];
        playAudio(clickAudio, isMuted)
        setSelectedPage(page)
    }
    
    const checkIfActive = (pageName) => {
        return pageName === selectedPage ? 
            { backgroundColor: '#27dafd', color: '#010506'} 
            : null
    }

    const baseStyle = {
        width:'2vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        border: '1px solid',
        transition: 'all 250ms ease-in-out',
        opacity: '0',
        color: 'transparent'
    }

    const pageStyle = {
        entering: {
            display: 'flex',
            transition: 'all 250ms ease-in-out',
            opacity: '0.1',
            color: "transparent"

        },
        entered: {
            width: '80vw',
            display: 'flex',
            transition: 'all 250ms ease-in-out',
            opacity: '1',
            color: "#27dafd"
        }
    }

    return (
        <>
            <Animation show={animShow} animate timeout={700}>
                {anim => (
                    <Frame
                        className="frame"
                        show={animShow}
                        animate
                        level={3}
                        corners={4}
                        layer='primary'
                    >
                        <div className="nav-bar" style={{...baseStyle, ...pageStyle[anim.status]}}>
                            <h5 className="bio nav-item" style={checkIfActive("bio")} onClick={makeTargetPage}>Bio</h5>
                            <h5 className="projects nav-item" style={checkIfActive("projects")} onClick={makeTargetPage}>Projects</h5>
                            <h5 className="contact nav-item" style={checkIfActive("contact")} onClick={makeTargetPage}>Contact</h5>
                        </div>
                    </Frame>
                )}
            </Animation>
        </>
    )
}
