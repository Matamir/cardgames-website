export enum CardValue {
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Jack = '11',
    Queen = '12',
    King = '13',
    Ace = '14',
    Joker = '15',
}

export const CardData = {
    Two: { Value: 2, Display: "2" },
    Three: { Value: 3, Display: '3' },
    Four: { Value: 4, Display: '4' },
    Five: { Value: 5, Display: '5' },
    Six: { Value: 6, Display: '6' },
    Seven: { Value: 7, Display: '7' },
    Eight: { Value: 8, Display: '8' },
    Nine: { Value: 9, Display: '9' },
    Ten: { Value: 10, Display: '10' },
    Jack: { Value: 11, Display: 'J' },
    Queen: { Value: 12, Display: 'Q' },
    King: { Value: 13, Display: 'K' },
    Ace: { Value: 14, Display: 'A' },
    Joker: { Value: 15, Display: 'Joker' },
}

export const CardSuit = {
    Diamond: { Suit: 'Diamond', Color: "Red" },
    Club: { Suit: 'Club', Color: "Black" },
    Heart: { Suit: 'Heart', Color: "Red" },
    Spade: { Suit: 'Spade', Color: "Black" },
}