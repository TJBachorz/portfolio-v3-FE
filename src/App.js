import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import { ThemeProvider, createTheme, withStyles, Arwes, Puffs, Header, Frame } from 'arwes';
import BioPage from './components/BioPage';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {

  const [selectedPage, setSelectedPage] = useState("bio")

  const showPage = {
    "bio": <BioPage />,
    "projects": <Projects/>,
    "contacts": <Contacts/>
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
                      <h4>subject_file:</h4>
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
