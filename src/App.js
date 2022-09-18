import logo from './logo.svg';
import './App.css';
import Card from './Cards/Card.js';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Card Suit="Diamond" Value="K"></Card>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
