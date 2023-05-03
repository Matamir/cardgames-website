import { CardValue, CardDisplay, CardColor, CardSuit } from "./enums"

class CardObj {
    private value: CardValue;
    private display: CardDisplay;
    private color: CardColor;
    private suit: CardSuit;

    CardObj(val, disp, col, suit) {
        this.value = val;
        this.display = disp;
        this.color = col;
        this.suit = suit;
    }

    public getValue(): CardValue {
        return this.value;
    }

    public getDisplay(): CardDisplay {
        return this.display;
    }


    public getColor(): CardColor {
        return this.color;
    }

    public getSuit(): CardSuit {
        return this.suit;
    }

}