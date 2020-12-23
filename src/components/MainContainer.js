import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import BioPage from './BioPage';
import Projects from './Projects';
import Contact from './Contact';
// import { overflow } from './Utilities';

import { Frame, Animation } from 'arwes';

export default function MainContainer() {

    const [selectedPage, setSelectedPage] = useState("bio")
    const [ mainAnimShow, setMainAnimShow ] = useState(false)

    useEffect(() => {
        setMainAnimShow(!mainAnimShow)
        return () => setMainAnimShow(!mainAnimShow)
    }, [])

    const showPage = {
        "bio": <BioPage/>,
        "projects": <Projects/>,
        "contact": <Contact/>
    }

    let baseStyle = {
        width: '0vw',
        transition: 'all 400ms ease-out',
        height: '5vh',
        position: 'relative',
        overflow: 'auto'
    }

    const pageStyle = (anim) => {
        if (selectedPage === "bio"){
            const style = {
                entering: {
                    width: "80vw",
                },
                entered: {
                    width: "80vw",
                    height:'75vh',
                }
            }
            return {...style[anim.status]}
        }
        if (selectedPage === "projects"){
            const style = {
                entering: {
                    width: "80vw"
                },
                entered: {
                    width: "80vw",
                    height: "80vh",
                }
            }
            return {...style[anim.status]}
        }
        if (selectedPage === "contact"){
            const style = {
                entering: {
                    width: "80vw"
                },
                entered: {
                    width: "80vw",
                    height: "75vh",
                }
            }
            return {...style[anim.status]}
        }
    }
    
    return (
        <div>
            <Animation show={mainAnimShow} animate timeout={1000}>
                {anim => (
                    <Frame
                        className="frame"
                        show={mainAnimShow}
                        animate={true}
                        appear
                        level={3}
                        corners={6}
                        layer='primary'
                    >
                        <div animate className="main-container" style={{...baseStyle, ...pageStyle(anim)}}>
                            <Navbar 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <div className="info-and-image">
                                {showPage[selectedPage]}
                            </div>
                        </div>
                    </Frame>
                )}
            </Animation>
        </div>
    )
}
