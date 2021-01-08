import React from 'react';

import './App.css';

import MainOuterContainer from './components/MainOuterContainer';

import AudioProvider from './components/AudioContext';

import { ThemeProvider, createTheme, Arwes, Puffs, Header, Words } from 'arwes';

import typingMP3 from './assets/typing.mp3';
import errorMP3 from './assets/error.mp3';
import deployMP3 from './assets/deploy.mp3';

function App() {

  return (
    <AudioProvider>
      <ThemeProvider theme={createTheme()}>
        <Puffs>
          <div className="puffs">
            <Arwes className="arwes">
                <main>
                  <audio className="typing-audio">
                    <source src={typingMP3}></source>
                  </audio>
                  <audio className="error-audio">
                    <source src={errorMP3}></source>
                  </audio>
                  <audio className="deploy-audio">
                    <source src={deployMP3}></source>
                  </audio>
                  <Header className="header" animate>
                    <h4><Words className="header-text" animate>subject_file:&nbsp; THOMAS_BACHORZ</Words></h4>
                  </Header>
                  <MainOuterContainer/>
                </main>
            </Arwes>
          </div>
        </Puffs>
      </ThemeProvider>
    </AudioProvider>
  );
}

export default App;