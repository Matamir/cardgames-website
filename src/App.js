import logo from './logo.svg';
import './App.css';
import Card from './Cards/Card';
import { CardData, CardSuit } from './Cards/enums.ts';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Card Suit={CardSuit.Spade} Value={CardData.King}></Card>
          <br></br>
          <Card Suit={CardSuit.Diamond} Value={CardData.Queen}></Card>
          <br></br>
          <Card Suit={CardSuit.Club} Value={CardData.Jack}></Card>
          <br></br>
          <Card Suit={CardSuit.Heart} Value={CardData.Ace}></Card>
        </header>
      </div>
    </>
  );
}

export default App;
