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