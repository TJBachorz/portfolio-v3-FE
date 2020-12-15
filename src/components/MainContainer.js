import React, { useState } from 'react';

import Navbar from './Navbar';
import BioPage from './BioPage';
import Projects from './Projects';
import Contacts from './Contacts';

import { ThemeProvider, createTheme, withStyles, Arwes, Puffs, Header, Frame } from 'arwes';


export default function MainContainer() {

    const [selectedPage, setSelectedPage] = useState("bio")

    const showPage = {
        "bio": <BioPage/>,
        "projects": <Projects/>,
        "contacts": <Contacts/>
    }

    return (
        <div>
            <Frame
                show={true}
                animate={true}
                level={3}
                corners={4}
                animTime={1000}
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
