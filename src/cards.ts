export class Card {
    num:number;
    suit: string;

    constructor(num: number, suit: string){
        this.num = num;
        this.suit = suit;
    }
}

//裏向きのカードが表のカードより強いor弱いを判定する(この関数ここでいいのか?)
export function getCardJudgment(cardPair:{}) {
    const faceupNum:number = cardPair["faceup"];
    const facedownNum:number = cardPair["facedown"];
    console.log("faceup:"+faceupNum);
    console.log("facedown:"+facedownNum);
    //(弱) Ａ＜２＜３＜４＜５＜６＜７＜８＜９＜１０＜Ｊ＜Ｑ＜Ｋ＜ジョーカー (強)
    //現段階では自動で勝敗を決めるため、「勝ちor負け」を予想する
    if(faceupNum > facedownNum) {
        console.log("you lose");
    }else if(faceupNum < facedownNum){
        console.log("you win");
    }else{
        console.log("draw");
    }
}