import React from 'react';

import MainContainer from './components/MainContainer';

import './App.css';

import { ThemeProvider, createTheme, withStyles, Arwes, Puffs, Header, Words } from 'arwes';


function App() {

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
              <>
                <main>
                  <div className="header-container">
                    <Header className="header" animate>
                      <h4><Words animate>subject_file:</Words></h4>
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
