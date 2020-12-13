import './App.css';
import { ThemeProvider, createTheme, withStyles, Arwes, Puffs } from 'arwes';

function App() {

  const myTheme = {
    color: {

    }
  }
  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <Arwes>
        <Puffs>
          <div className="puffs" style={{ width: '100%', height: '100vh' }}>
            <div className="main-container">
              <h1>Thomas Bachorz: Full-Stack Software Developer</h1>
            </div>
          </div>
        </Puffs>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
