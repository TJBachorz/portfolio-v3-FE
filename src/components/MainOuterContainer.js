import React, { useState } from 'react';

import MainContainer from './MainContainer';
import Navbar from './Navbar';
import SoundToggle from './SoundToggle';

export default function MainOuterContainer({ isMuted, setIsMuted }) {

    const [selectedPage, setSelectedPage] = useState("bio")

    return (
        <> 
            <SoundToggle/>
            <Navbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="divider"></div>
            <MainContainer selectedPage={selectedPage}/>
        </>
    )
}
