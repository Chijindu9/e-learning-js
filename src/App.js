import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn with us at Edenites, <code>src/App.js</code>, acquire and grow in knowledge.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Edenites Academy
        </a>
      </header>
    </div>
  );
}

export default App;
