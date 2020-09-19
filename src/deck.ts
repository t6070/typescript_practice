import {Card} from './cards'
export class Deck {
    cards: Card[] = new Array;

    constructor() {
        //カードのマークを定義
        const suits:any = ["spade","clover","heart","diamond"];
        //1つのマークにつき13通りのカードを生成
        for(let i = 0; i < suits.length; i++){
            for (let num = 1; num < 14; num++) {
                this.cards.push(new Card(num, suits[i]));
            }
        }
    }
}

//デッキからランダムにカードを5枚配る
export function dealCards(){
    const deck:Deck[] = [new Deck];
    const cards = deck[0]["cards"];
    const playerCards:unknown[] = [];
    for(let i = 1; i < 6; i++){
        const randomNum:number = Math.floor(Math.random() * (53 - 0) + 0);
        playerCards.push(cards[randomNum]);
        cards.splice(randomNum, 1);
    }
    console.log(playerCards);
}