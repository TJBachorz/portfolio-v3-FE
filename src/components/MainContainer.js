import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import BioPage from './BioPage';
import Projects from './Projects';
import Contact from './Contact';

import { Frame, Animation } from 'arwes';

export default function MainContainer() {

    const [selectedPage, setSelectedPage] = useState("bio")
    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setAnimShow(!animShow)
        return () => setAnimShow(!animShow)
    }, [])

    const showPage = {
        "bio": <BioPage/>,
        "projects": <Projects/>,
        "contact": <Contact/>
    }

    const pageStyle = (anim) => {
        if (selectedPage === "bio"){
            const style = {
                entering: {
                    width: "80vw"
                },
                entered: {
                    width: "80vw",
                    height: "75vh"
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
                    height: "75vh"
                }
            }
            return {...style[anim.status]}
        }
    }
    
    const style = {
        entering: {
            width: "80vw"
        },
        entered: {
            width: "80vw",
            height: "75vh"
        }
    }
    // "fit-content"
    // "max-content"
    // "min-content"
    // "100%"
    
    return (
        <div>
            <Animation show={animShow} animate timeout={1000}>
                {anim => (
                    <Frame
                        show={animShow}
                        animate={true}
                        appear
                        level={3}
                        corners={6}
                        layer='primary'
                    >
                        <div animate className="main-container" style={pageStyle(anim)}>
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
