import React, { useState, useEffect } from 'react';

import BioPage from './BioPage';
import Projects from './Projects';
import Contact from './Contact';

import { onLoadEffects } from './Utilities';

import { useAudio } from './AudioContext';

import { Frame, Animation } from 'arwes';

export default function MainContainer({ selectedPage }) {

    const [ animShow, setAnimShow ] = useState(false)

    const isMuted = useAudio()

    useEffect(() => {
        return !animShow ? 
            setTimeout(() => {
                setAnimShow(!animShow)
            }, 100) 
            : null
    }, [animShow])

    const showPage = {
        "bio": <BioPage/>,
        "projects": <Projects/>,
        "contact": <Contact/>
    }

    let baseStyle = {
        width: '0vw',
        transition: 'all 350ms ease-in-out',
        height: '35px',
        position: 'relative',
        opacity: '0'
    }

    const pageStyle = (anim) => {
        const style = {
            entering: {
                width: "80vw",
                opacity: '0'
            },
            entered: {
                width: "80vw",
                height:'75vh',
                opacity: '1',
                overflow: 'auto',
            }
        }
        return {...style[anim.status]}
    }
    
    return (
        <div>
            <Animation show={animShow} animate timeout={1000}>
                {anim => (
                    <Frame
                        className="main-frame"
                        show={animShow}
                        animate
                        level={3}
                        corners={6}
                        layer='primary'
                    >
                        <div className="main-container" style={{...baseStyle, ...pageStyle(anim)}}>
                            {showPage[selectedPage]}
                        </div>
                    </Frame>
                )}
            </Animation>
        </div>
    )
}
