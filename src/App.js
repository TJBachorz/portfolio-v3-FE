import React from 'react';

import MainContainer from './components/MainContainer';

import './App.css';

import { ThemeProvider, createTheme, Arwes, Puffs, Header, Words } from 'arwes';


function App() {

  return (
    <ThemeProvider theme={createTheme()}>
      <Puffs>
        <div className="puffs">
          <Arwes className="arwes">
              <>
                <main>
                  <div className="header-container">
                    <Header className="header" animate>
                      <h4><Words animate>subject_file:  THOMAS_BACHORZ</Words></h4>
                    </Header>
                  </div>
                  <MainContainer/>
                </main>
              </>
          </Arwes>
        </div>
      </Puffs>
    </ThemeProvider>
  );
}

export default App;
