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

const deck:Deck[] = [new Deck];
const cards = deck[0]["cards"];

//ゲームの準備
export function gamePreparation():{}{ 
    //表向きのカードと裏向きのカードを用意
    let faceupCard:any = null;
    let facedownCard:any = null;
    //表向きのカードをセット
    faceupCard = dealCard();
    //裏向きのカードをセット
    facedownCard = dealCard();
    //2枚のカードを1ペアとする
    const cardPair: {"faceup":number, "facedown":number} = {"faceup": faceupCard["num"], "facedown": facedownCard["num"]};
    return cardPair;
}

//デッキをシャッフルする
function deckShuffle() {
    for(var i = cards.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = cards[i];
        cards[i] = cards[r];
        cards[r] = tmp;
    }
}

//カードを1枚取り出す
function dealCard():{} {
    deckShuffle();
    const card = cards[0];
    cards.splice(0, 1);
    return card;
}