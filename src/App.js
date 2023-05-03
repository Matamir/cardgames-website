import logo from './logo.svg';
import './App.css';
import Card from './Cards/Card';
import { CardValue, CardDisplay, CardColor, CardSuit } from "./Cards/enums.ts"
import { DEBUGGER } from './Debugging';



function App() {
  let cards =
    <>
      {Object.values(CardDisplay).map((val) => (
        <>
          {Object.values(CardSuit).map((suit) => (
            <>
              <Card
                Suit={CardSuit[suit]}
                Value={CardDisplay[val]}></Card>
              <br></br>
            </>
          ))}
        </>
      ))}
    </>

  return (
    <>
      <div className="App">
        <header className="App-header">
          {cards}
          <Card Suit={CardSuit.Spade} Value={CardDisplay.King}></Card>
          <br></br>
          <Card Suit={CardSuit.Diamond} Value={CardDisplay.Queen}></Card>
          <br></br>
          <Card Suit={CardSuit.Club} Value={CardDisplay.Jack}></Card>
          <br></br>
          <Card Suit={CardSuit.Heart} Value={CardDisplay.Ace}></Card>
        </header>
      </div>
    </>
  );
}

export default App;
