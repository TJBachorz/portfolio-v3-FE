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
    
    
    return (
        <div>
            <Animation show={animShow} animate timeout={3000}>
                {anim => (
                    <Frame
                        show={animShow}
                        animate={true}
                        appear
                        level={3}
                        corners={6}
                        layer='primary'
                    >
                        <div animate className="main-container">
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
