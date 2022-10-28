import logo from './logo.svg';
import './App.css';
import Card from './Cards/Card.js';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Card Suit="Diamond" Value="K"></Card>
        </header>
      </div>
    </>
  );
}

export default App;
