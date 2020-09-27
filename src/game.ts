//ゲームの準備
import {CardPair} from './main'
import {Card} from './cards'
import * as deck from './deck';

//ゲームの準備
export function gamePreparation():CardPair{ 
    //表向きのカードと裏向きのカードを用意
    let faceupCard:Card = null;
    let facedownCard:Card = null;
    //表向きのカードをセット
    faceupCard = deck.dealCard();
    //裏向きのカードをセット
    facedownCard = deck.dealCard();
    //2枚のカードを1ペアとする
    const cardPair: CardPair = {"faceup": faceupCard["num"], "facedown": facedownCard["num"]};
    return cardPair;
}

//裏向きのカードが表のカードより強いor弱いを判定する
export function getCardJudgment(cardPair:CardPair) {
    const faceupNum:number = cardPair["faceup"];
    const facedownNum:number = cardPair["facedown"];
    console.log("faceup:"+faceupNum);
    console.log("facedown:"+facedownNum);
    //現段階では自動で勝敗を決めるため、「勝ちor負け」を予想する
    if(faceupNum > facedownNum) {
        console.log("you lose");
    }else if(faceupNum < facedownNum){
        console.log("you win");
    }else{
        console.log("draw");
    }
}