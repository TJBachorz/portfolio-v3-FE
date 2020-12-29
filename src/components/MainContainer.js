import React, { useState, useEffect } from 'react';

import BioPage from './BioPage';
import Projects from './Projects';
import Contact from './Contact';

import { Frame, Animation } from 'arwes';

export default function MainContainer({ selectedPage }) {

    const [ mainAnimShow, setMainAnimShow ] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setMainAnimShow(!mainAnimShow)
        }, 50)
    }, [])

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
                opacity: '0.1'
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
            <Animation show={mainAnimShow} animate timeout={1000}>
                {anim => (
                    <Frame
                        className="frame"
                        show={mainAnimShow}
                        animate
                        level={3}
                        corners={6}
                        layer='primary'
                    >
                        <div className="main-container" style={{...baseStyle, ...pageStyle(anim)}}>
                            {/* <div className="info-and-image"> */}
                                {showPage[selectedPage]}
                            {/* </div> */}
                        </div>
                    </Frame>
                )}
            </Animation>
        </div>
    )
}
