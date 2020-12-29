import React, {Logbox} from 'react';

import './App.css';

import MainOuterContainer from './components/MainOuterContainer';

import { ThemeProvider, createTheme, Arwes, Puffs, Header, Words } from 'arwes';

function App() {

  return (
    <ThemeProvider theme={createTheme()}>
      <Puffs>
        <div className="puffs">
          <Arwes className="arwes">
              <main>
                <Header className="header" animate>
                  <h4><Words animate>subject_file:  THOMAS_BACHORZ</Words></h4>
                </Header>
                <MainOuterContainer/>
              </main>
          </Arwes>
        </div>
      </Puffs>
    </ThemeProvider>
  );
}

export default App;