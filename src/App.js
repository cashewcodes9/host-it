import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please access our presentation using the link.
        </p>
        <p>
          Bitte nutzen Sie den Link zu unserer Präsentation.
        </p>
        <a
          className="App-link"
          href="./GAIA_rockstars_DE.pdf"
          target="_blank"
          rel="noopener noopener noreferrer"
        >
          Deutsche Präsentation
        </a>
        <br></br>
        <a
          className="App-link"
          href="./GAIA_rockstars_EN.pdf"
          target="_blank"
          rel="noopener noopener noreferrer"
        >
          English Presentation
        </a>
      </header>
    </div>
  );
}

export default App;
