import { boolean, number } from "yargs";

export class Card {
    num:number;
    suit: string;

    constructor(num: number, suit: string){
        this.num = num;
        this.suit = suit;
    }
}