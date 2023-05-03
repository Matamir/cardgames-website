import { DEBUGGER } from "../Debugging";
import { CardValue, CardDisplay, CardColor, CardSuit } from "./enums.ts"
import "./Card.css";

export function Card({ Value, Suit }) {

    let LocValue = Value;
    let LocSuit = Suit;

    ////////////////////////////////////////////////////////////////////////

    DEBUGGER(CardValue.valueOf(LocValue))

    // // Sanatize inputs
    // if (String(LocValue) !== LocValue) {
    //     DEBUGGER("Card Value:" + LocValue + "Not A String")
    //     return
    // }

    // if (String(LocSuit) !== LocSuit) {
    //     DEBUGGER("Card Suit:" + LocSuit + "Not A String")
    //     return
    // }

    // if ((LocSuit !== "Spade") && (LocSuit !== "Club") && (LocSuit !== "Diamond") && (LocSuit !== "Heart")) {
    //     DEBUGGER("Invalid Suit" + LocSuit)
    //     return
    // }

    // if ((LocValue != 1)) { }

    ////////////////////////////////////////////////////////////////////////



    let Color = CardColor.LocSuit;
    //let Color = (LocSuit === "Spade" || LocSuit === "Club") ? "Black" : "Red";

    let Spade =
        <div className="spade">
            <span className="spade1" />
            <span className="spade2" />
            <span className="spade3" />
        </div>

    let Club =
        <div className="club">
            <span className="club1" />
            <span className="club2" />
            <span className="club3" />
            <span className="club4" />
        </div>

    let Heart =
        <div className="heart">
            <span className="heart1" />
            <span className="heart2" />
        </div>

    let Diamond =
        <div className="diamond">
            <span className="diamond1" />
            <span className="diamond2" />
        </div>

    let SuitDisplay;

    switch (LocSuit) {
        case "Spade":
            SuitDisplay = Spade;
            break;
        case "Heart":
            SuitDisplay = Heart;
            break;
        case "Club":
            SuitDisplay = Club;
            break;
        case "Diamond":
            SuitDisplay = Diamond;
            break;
        default:

    }

    return (
        <div className="card"
            onClick={() => DEBUGGER(CardSuit[LocSuit] + CardDisplay[LocValue])}>
            {SuitDisplay}
            <h1>{LocValue}</h1>
        </div>
    )

} export default Card;