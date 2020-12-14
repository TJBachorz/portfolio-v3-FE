import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import { ThemeProvider, createTheme, withStyles, Arwes, Puffs, Header, Frame } from 'arwes';
import BioPage from './components/BioPage';
import TestHeader2 from './components/TestHeader2';

function App() {

  const [selectedPage, setSelectedPage] = useState("bio")

  const showPage = {
    "bio": <BioPage />,
    "projects": <TestHeader2/>,
    "contacts": null
  }

  const baseStyles = {
    width: '5%',
    height: '20px',
    borderWidth: '1px',
    borderStyle: 'solid',
  }

  const styles = {
    entering: {
      width: '5%',
      height: '20px',
    },
    entered: {
      width: '80%',
      height: '500px',
    } 
  }
  return (
    <ThemeProvider theme={createTheme()}>
      <Puffs>
        <div className="puffs">
          <Arwes className="arwes" animate show>
            {anim => (
              <>
                <main>
                  <div className="header-container">
                    <Header className="header" animate animTime={1000}>
                      <h1>Subject File:</h1>
                    </Header>
                  </div>
                  <Frame
                    show={true}
                    animate={true}
                    level={3}
                    corners={4}
                    animTime={1000}
                    layer='primary'
                  >
                    <div animate  className="main-container">
                      <Navbar 
                        animate
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <div className="info-and-image">
                        {showPage[selectedPage]}
                      </div>
                    </div>
                  </Frame>
                </main>

              </>
            )}
          </Arwes>
        </div>
      </Puffs>
    </ThemeProvider>
  );
}

export default App;
