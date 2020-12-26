import React, { useState } from 'react';

import MainContainer from './MainContainer';
import Navbar from './Navbar';

import { Frame } from 'arwes';

export default function MainOuterContainer() {

    const [selectedPage, setSelectedPage] = useState("bio")

    return (
        <>
            <Frame
                className="frame"
                animate={true}
                level={3}
                corners={4}
                layer='primary'
            >
                <Navbar
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </Frame>
            <div className="divider"></div>
            <MainContainer
                selectedPage={selectedPage}
            />
        </>
    )
}
