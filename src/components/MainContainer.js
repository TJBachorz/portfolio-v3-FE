import React, { useState } from 'react';

import Navbar from './Navbar';
import BioPage from './BioPage';
import Projects from './Projects';
import Contact from './Contact';

import { Frame } from 'arwes';


export default function MainContainer() {

    const [selectedPage, setSelectedPage] = useState("bio")

    const showPage = {
        "bio": <BioPage/>,
        "projects": <Projects/>,
        "contact": <Contact/>
    }

    return (
        <div>
            <Frame
                show
                animate
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
        </div>
    )
}
