import { DEBUGGER } from "../Debugging";
import { CardValue } from "./enums.ts";
import "./Card.css";
export function Card({ Value, Suit }) {

    let LocValue = Value;
    let LocSuit = Suit;

    ////////////////////////////////////////////////////////////////////////
    
    DEBUGGER(CardValue.valueOf(LocValue))

    // Sanatize inputs
    if (String(LocValue) !== LocValue) {
        DEBUGGER("Card Value:" + LocValue + "Not A String")
        return
    }

    if (String(LocSuit) !== LocSuit) {
        DEBUGGER("Card Suit:" + LocSuit + "Not A String")
        return
    }

    if ((LocSuit !== "Spade") && (LocSuit !== "Club") && (LocSuit !== "Diamond") && (LocSuit !== "Red")) {
        DEBUGGER("Invalid Suit" + LocSuit)
        return
    }

    if ((LocValue != 1)) {}

    ////////////////////////////////////////////////////////////////////////



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