import { DEBUGGING } from "../Debugging";
import "./Card.css";
export function Card({ Value, Suit }) {

    let LocValue = Value;
    let LocSuit = Suit;

    // Sanatize inputs
    if ((LocSuit !== "Spade") && (LocSuit !== "Club") && (LocSuit !== "Diamond") && (LocSuit !== "Red")) {
        if (DEBUGGING) {
            console.log("Invalid Suit")
        }
        return
    }

    let Color = (LocSuit === "Spade" || LocSuit === "Club") ? "Black" : "Red";

    let Spade =
        <div className="spade">
            <span className="spade1" />
            <span className="spade2" />
            <span className="spade3" />
        </div>

    let Heart =
        <div className="heart">
            <span className="heart1" />
            <span className="heart2" />
        </div>

    return <>{Heart}{Spade}<h1>   {LocValue}.{LocSuit}.{Color}</h1 ></>

} export default Card;